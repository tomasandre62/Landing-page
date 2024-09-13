import React from 'react'

export const Card = (Props) => {
  return (
    <>
        <div class="card col-md-6 col-12 col-lg-3 border-0 p-2">
            <img src={Props.imagen} />
            <div class="card-body">
                <h5 class="card-title">{Props.title}</h5>
                <p class="card-text">{Props.texto}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </>
  )
}
