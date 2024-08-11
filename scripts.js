document.addEventListener('DOMContentLoaded', function () {
    const blogList = document.getElementById('blog-List');
    fetch('data/posts.json')
        .then(response => response.json())
        .then(post => {
            post.forEach(post => {
                // reading json file and retrieving the data to be loaded and simultaneously creating html objects.
                var postElement = document.createElement('div');
                var titleElement = document.createElement('h4');
                titleElement.textContent = post.title;
                postElement.appendChild(titleElement);

                var dateElement = document.createElement('div');
                dateElement.classList.add('date');
                postElement.appendChild(dateElement);

                var divElement = document.createElement('div');
                divElement.classList.add('horizontal-list')
                postElement.appendChild(divElement);

                if (post.images && post.images.length > 0) {
                    post.images.forEach(image => {

                        const imgElement = document.createElement('img');
                        imgElement.style.flex;
                        imgElement.style.flexDirection = 'row';
                        imgElement.width = 350;
                        imgElement.height = '100%';
                        imgElement.style.padding = '10px';

                        imgElement.src = image.src;
                        imgElement.alt = image.alt;
                        postElement.appendChild(imgElement);
                    });
                }

                var paraElement = document.createElement('p');
                paraElement.textContent = post.para1;
                postElement.appendChild(paraElement);

                paraElement = document.createElement('p');
                paraElement.textContent = post.para2;
                postElement.appendChild(paraElement);

                paraElement = document.createElement('p');
                postElement.appendChild(paraElement);
                
                // this will read the images file to be loaded.
                post.imagess.forEach(image1 => {
                    const imgElement = document.createElement('img');
                    imgElement.classList.add('horizontal-list');
                    imgElement.src = image1.src;
                    imgElement.alt = image1.alt;
                    postElement.appendChild(imgElement);
                });

                var paraElement = document.createElement('p');
                paraElement.textContent = post.para3;
                postElement.appendChild(paraElement);

                var paraElement = document.createElement('p');
                paraElement.textContent = post.para4;
                postElement.appendChild(paraElement);

                var paraElement = document.createElement('p');
                paraElement.textContent = post.para5;
                postElement.appendChild(paraElement);

                var paraElement = document.createElement('p');
                paraElement.textContent = post.para6;
                postElement.appendChild(paraElement);

                blogList.appendChild(postElement);

            });
        })
        // handling errors 
        .catch(error => console.error('Error loading blog posts:', error));
});