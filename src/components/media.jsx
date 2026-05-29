import { useState, useEffect } from "react";
import { getMedias } from "../services/api";

function Media() {
  const [medias, setMedias] = useState({});

  useEffect(() => {
    const buscarMedia = async () => {
      const m = await getMedias();
      setMedias(m);
    };
    buscarMedia();
  }, []);

  const maiorMedia = Math.max(...Object.values(medias));

  return (
    <div className="container mt-3 mb-5 p-3" id="formulario">
      <div className="row px-3 titulo">
        <p>Média por categoria</p>
      </div>

      <div className="row">
        {Object.entries(medias).map(([cat, media]) => (
          <div
            className="d-flex align-items-center gap-3 px-3 lancamento-item"
            key={cat}
          >
            <span className="px-3 fs-6 fw-bold categoria-nome">{cat}</span>

            <div className="barra-container">
              <div
                className="barra-progresso"
                style={{ width: `${(media / maiorMedia) * 100}%` }}
              />
            </div>

            <span className="categoria-valor px-1">
              R$ {media.toFixed(0)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Media;
