const myDoc = document;
const setBtn = myDoc.getElementById("settingsDropdownBtn")
const setLi = myDoc.getElementById("setList");

setBtn.addEventListener('click', function () {
  if (setLi.class === "hidden"){
    setLi.class = "block" 
  } else if (setLi.class === "block") {
    setLi.class = "hidden";
  }
})


























// const blimpBtn = myDoc.getElementById('postPet');
// const postsDiv = myDoc.getElementById('posts');

// //TODO: Add functionality to postPets buton.
// //Button function should:
// //Remove h3 from DOM
// //Remove post button from DOM
// //Create and append title Input to DOM with custom ID
// //Create and append textbox to DOM with custom ID
// //Create and append image input box to DOM with specific ID
// //Create and append submitblog button to DOM
// blimpBtn.addEventListener('click', function () {
//     const npb = myDoc.getElementById("noPets");
//     const pP = myDoc.getElementById("postPet");
//     const petBlogForm = myDoc.createElement("div");
//     npb.remove();
//     pP.remove();
//     petBlogForm.id = "petPost";
//     const petImgInp = myDoc.createElement('input');
//     petImgInp.id = "petImage";
//     petImgInp.type = "file";
//     const blogTitleInp = myDoc.createElement('input');
//     blogTitleInp.id = "blogTitle";
//     const petBlogText = myDoc.createElement('textarea');
//     petBlogText.id = "blogContent";
//     petBlogText.type = "textbox";
//     const petBlogSubmit = myDoc.createElement('button');
    
//     // type was set so image still, change to button for now
//     petBlogSubmit.type = "button";
    
//     petBlogSubmit.id = "submitPet";
//     petBlogSubmit.textContent = "work goddammit";
//     petBlogForm.appendChild(petImgInp);
//     petBlogForm.appendChild(blogTitleInp);
//     petBlogForm.appendChild(petBlogText);
//     petBlogForm.appendChild(petBlogSubmit);
//     postsDiv.appendChild(petBlogForm)

//     // nest this function 
//     petBlogSubmit.addEventListener('click', function () {
//       console.log("yay!");
//   })
// });


// //TODO: Save image, title and textarea inputs to localstorage


