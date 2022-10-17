const options = {
    method,
    headers: new Headers ({ "content-type": "application/json" }),
    mode:"no cors",
    body: JSON.stringify(body),
};

await fetch()

fetch('/js/faq-1.json')
    .then((response) => response.json())
    .then((data) => console.log(data));

function listsposts(postContainerElementId) {
    const postContainerElement = document.getElementById(postContainerElement);

    if (!postContainerElement) {
        return;
    }

    fetchPosts().then(posts => {
        if (!posts) {
            postContainerElement.innerHTML = 'No posts';
            return;
        }

        for (const post of post) {
            postContainerElement.appendChildELement(post);
        }
    })
        .catch(e => {
            console.log(e);
        })
}

function postElement(post) {
    const anchorElement = document.createElement('a')
    anchorElement.setAttribute()
    anchorElement.innerText = post.tittle

    const postTittleElement = document.createElement('h3');
    return postTittleElement;
}



function toggle(ID){
    var element = document.getElementById(ID);
    if(element.style.display === "none"){
        element.style.display = "block";
    }else{
        element.style.display = "none";
    }
}