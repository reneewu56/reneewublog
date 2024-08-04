document.addEventListener('DOMContentLoaded', () => {
    const posts = [
        { title: "Post 1", url: "posts/post1.html" },
        { title: "Post 2", url: "posts/post2.html" },
        { title: "Post 3", url: "posts/post3.html" }
    ];

    const container = document.getElementById('posts-container');

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        const titleElement = document.createElement('a');
        titleElement.classList.add('post-title');
        titleElement.href = post.url;
        titleElement.textContent = post.title;

        postElement.appendChild(titleElement);
        container.appendChild(postElement);
    });
});
