import React from "react";
import Button from "../ui/Button.jsx";
import Title from "../ui/Title.jsx";
import Image from "../ui/Image.jsx";
import Description from "../ui/Description.jsx";
import LikeDislikeButton from "../ui/LikeDislikeButton.jsx";
import DeleteButton from '../ui/DeleteButton.jsx';

export default function Article({ indice, article, delFunction, readMore }) {
  return (
    <>
    <div className="row">
      <div className="col">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4" style={{ overflow: "hidden" }}>
              <Image imageSrc={article.urlImagen} />
            </div>
            <div className="col-md-8">
              <div className="h-100 card-body">
                <div className="h-75 row">
                  <Title title={article.titulo} />
                  <Description description={article.descripcion} />
                </div>
                <div className="h-25 row text-end align-items-end">
                  <div className="col">
                    <Button 
                      buttonText={article.textoBoton} 
                      indice={indice}
                      readMore={readMore}
                    />
                    <LikeDislikeButton
                      like={true}
                    />
                    <LikeDislikeButton
                      like={false}
                    />
                    <DeleteButton 
                      indice={indice}
                      delFunction={delFunction}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
