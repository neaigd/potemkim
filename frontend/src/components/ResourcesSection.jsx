import React from 'react';

function ResourcesSection({ videoInfo, articleInfo }) {
  return (
    <div className="bg-light-card-background border-l-4 border-light-accent-blue text-light-text-primary p-6 rounded-lg shadow-md mb-10">
      <h2 className="text-3xl font-bold mb-4 border-b-2 border-light-accent-blue pb-2">Recursos Principais</h2>
      
      <h3 className="text-2xl font-semibold mb-3">Vídeo: A Incoerência das IAs</h3>
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
          src={videoInfo.url}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="A Incoerência das IAs"
        ></iframe>
      </div>

      <h3 className="text-2xl font-semibold mt-6 mb-3">Artigo Científico: {articleInfo.title}</h3>
      <p className="text-lg mb-2"><strong>Autores:</strong> {articleInfo.authors}</p>
      <p className="text-lg mb-2"><strong>Instituições:</strong> {articleInfo.institutions}</p>
      <p className="text-base italic mb-4"><strong>Abstract:</strong> {articleInfo.abstract}</p>
      <p>
        <a 
          href={articleInfo.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-light-accent-blue hover:text-dark-accent-blue font-medium transition duration-300 ease-in-out"
        >
          Acessar Artigo (se disponível)
        </a>
      </p>
    </div>
  );
}

export default ResourcesSection;