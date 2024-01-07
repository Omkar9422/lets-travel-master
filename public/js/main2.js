document.addEventListener('DOMContentLoaded', async function(){
    let posts = await getPosts(); 
    //posts: we have an array of all post stored in the DB.
    let articles = document.querySelector('.dy_card');
    /*we have to be sure that every time we work with the articles,
    this div is empty without any articles*/
    articles.innerHTML='';

    posts.forEach((post) =>{
        let postHTML = `
        <div class="card">
                <h3>${post.title}</h3>
                <div class="img_text">
                    <img src="${post.imageUrl}" alt="">
                    <h4>The Lotus Temple is an edifice of Bahai faith, resembling a lotus flower. It’s constructed purely with white marble and designed by Furiburz Sabha.</h4>
                </div>
                <div class="cont_box">
                    <div class="cost">
                        <div class="heart_chat">
                            <i class="bi bi-bookmark-heart-fill"><span>8565</span></i>
                            <i class="bi bi-chat-fill"><span>5250</span></i>
                        </div>
                        <div class="info_price">
                            <a href="/buy">Buy</a>
                            <h4>$360</h4>
                        </div>
                        <div class="days">Expected<br>Days<br>3</div>
                    </div>
                </div>

`;
    //Let's add some articles
    articles.insertAdjacentHTML('beforeend', postHTML);
    })
})