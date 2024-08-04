document.addEventListener('DOMContentLoaded', () => {
    const posts = [
        { title: "7月结算", url: "posts/Julysummary.html", category: "个人成长" },
        { title: "Post 2", url: "posts/post2.html", category: "Lifestyle" },
        { title: "Post 3", url: "posts/post3.html", category: "Tech" },
        { title: "Post 4", url: "posts/post4.html", category: "Travel" }
    ];

    const categories = [...new Set(posts.map(post => post.category))];

    const container = document.getElementById('posts-container');
    const categoriesContainer = document.getElementById('categories');

    function displayPosts(filterCategory = null) {
        container.innerHTML = '';
        posts.forEach(post => {
            if (!filterCategory || post.category === filterCategory) {
                const postElement = document.createElement('div');
                postElement.classList.add('post');

                const titleElement = document.createElement('a');
                titleElement.classList.add('post-title');
                titleElement.href = post.url;
                titleElement.textContent = post.title;

                postElement.appendChild(titleElement);
                container.appendChild(postElement);
            }
        });
    }

    function displayCategories() {
        categories.forEach(category => {
            const categoryElement = document.createElement('a');
            categoryElement.classList.add('category');
            categoryElement.href = '#';
            categoryElement.textContent = category;
            categoryElement.addEventListener('click', (e) => {
                e.preventDefault();
                displayPosts(category);
            });
            categoriesContainer.appendChild(categoryElement);
        });
    }

    displayPosts();
    displayCategories();
});
