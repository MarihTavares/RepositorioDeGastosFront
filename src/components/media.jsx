import { useState, useEffect } from 'react'
import { getMedias } from '../services/api'

function Media() {
  const [medias, setMedias] = useState({})

  useEffect(() => {
    const buscarMedia = async () => {
      const m = await getMedias()
      setMedias(m)
    }
    buscarMedia()
  }, []);

  return (
    <div class="container py-4">
      
      <div>
        <div class="row"> <p>Média por categoria</p> </div>
        <div class="row">
          {Object.entries(medias).map(([cat, media]) => (
            <p key={cat}>{cat}: R$ {media.toFixed(2)}</p>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Media