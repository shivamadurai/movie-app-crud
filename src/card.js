module.exports = function cardHTML({title, description, imageUrl}) {
  return `<div class="card" style="width: 30em">
    <img class="card-img-top" src="${imageUrl}" alt="Card image cap" style="text-align:center;width:200px;height:150px;">
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">${description}</p>
    </div>
  </div>`;
}
