#!/usr/bin/env python3
"""
Downloads a shared Gemini conversation and converts it to Markdown.
Alternative implementation by Jules.
Dependencies: pip install requests beautifulsoup4 html2text
"""

import argparse
import pathlib
import requests
import bs4
import html2text
from typing import Optional

DEFAULT_URL = "https://gemini.google.com/share/1145c5b62104"
DEFAULT_OUTPUT_FILENAME = "gemini_chat_jules.md"
REQUEST_TIMEOUT_SECONDS = 30

def fetch_html(url: str) -> Optional[str]:
    """Fetches HTML content from a given URL."""
    headers = {"User-Agent": "Mozilla/5.0 (compatible; AIGenieBot/1.0)"}
    try:
        response = requests.get(url, headers=headers, timeout=REQUEST_TIMEOUT_SECONDS)
        response.raise_for_status()  # Raises an HTTPError for bad responses (4XX or 5XX)
        return response.text
    except requests.exceptions.RequestException as e:
        print(f"Error fetching URL {url}: {e}")
        return None

def extract_and_convert_to_markdown(html_content: str) -> str:
    """
    Extracts the main chat content from HTML and converts it to Markdown.
    Attempts to find the <main> tag or a similar relevant container.
    """
    soup = bs4.BeautifulSoup(html_content, "html.parser")

    # Try to find the main content area. Gemini's structure might change,
    # so we try a few common tags or attributes that might denote the main chat.
    # This part might need adjustment if Gemini's HTML structure changes significantly.
    main_content = soup.find("main")
    if not main_content:
        # Fallback: look for divs that might contain the chat log
        # This is a heuristic and might need refinement.
        # Example: soup.find("div", class_="chat-container") or similar
        # For now, we'll use the whole body if <main> isn't found,
        # after removing script/style.
        main_content = soup.body if soup.body else soup # Use body or full soup if body not found

    # Remove <script> and <style> tags from the selected content
    if main_content:
        for tag in main_content.find_all(["script", "style"]):
            tag.decompose()
    else: # Should not happen if soup.body or soup was used as fallback
        return "Error: Could not find main content or body in HTML."


    # Convert the selected HTML to Markdown
    converter = html2text.HTML2Text()
    converter.ignore_links = False
    converter.body_width = 0 # Avoids wrapping lines

    markdown_text = converter.handle(str(main_content))

    # Clean up Markdown:
    # 1. Remove excessive blank lines (more than two consecutive)
    lines = markdown_text.splitlines()
    cleaned_lines = []
    consecutive_blank_lines = 0
    for line in lines:
        if not line.strip():
            consecutive_blank_lines += 1
            if consecutive_blank_lines <= 2:
                cleaned_lines.append(line)
        else:
            consecutive_blank_lines = 0
            cleaned_lines.append(line)
    
    return "\n".join(cleaned_lines)

def save_markdown(markdown_content: str, output_file: pathlib.Path) -> None:
    """Saves the Markdown content to a file."""
    try:
        output_file.write_text(markdown_content, encoding="utf-8")
        print(f"Markdown content successfully saved to: {output_file.resolve()}")
    except IOError as e:
        print(f"Error saving file {output_file}: {e}")

def main():
    """Main function to parse arguments and run the script."""
    parser = argparse.ArgumentParser(description="Download a Gemini share link and convert to Markdown.")
    parser.add_argument(
        "url",
        nargs="?",
        default=DEFAULT_URL,
        help=f"The Gemini share URL (defaults to {DEFAULT_URL})",
    )
    parser.add_argument(
        "-o",
        "--output",
        type=pathlib.Path,
        default=pathlib.Path(DEFAULT_OUTPUT_FILENAME),
        help=f"Output Markdown file name (defaults to {DEFAULT_OUTPUT_FILENAME})",
    )

    args = parser.parse_args()

    print(f"Fetching content from: {args.url}")
    html_doc = fetch_html(args.url)

    if html_doc:
        print("Converting HTML to Markdown...")
        markdown_result = extract_and_convert_to_markdown(html_doc)
        
        # Ensure the output directory exists if a path is specified
        if args.output.parent and not args.output.parent.exists():
            args.output.parent.mkdir(parents=True, exist_ok=True)
            print(f"Created directory: {args.output.parent.resolve()}")

        save_markdown(markdown_result, args.output)

if __name__ == "__main__":
    main()
