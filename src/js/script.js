'use strict';

const postIdInput = document.getElementById('postIdInput');
const searchPostBtn = document.getElementById('searchPostBtn');
const postContainer = document.getElementById('postContainer');
const errorMessage = document.getElementById('errorMessage');

const fetchPost = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
        (response) => {
            if (!response.ok) {
                throw new Error(`Помилка завантаження: ${response.status}`);
            }
            return response.json();
        }
    );
};

const fetchComments = (postId) => {
    return fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    ).then((response) => {
        if (!response.ok) {
            throw new Error(
                `Помилка завантаження коментарів: ${response.status}`
            );
        }
        return response.json();
    });
};

const renderPost = (post) => {
    postContainer.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${post.title}</h5>
                <p class="card-text">${post.body}</p>
                <button id="loadCommentsBtn" class="btn btn-info">Завантажити коментарі</button>
            </div>
        </div>
        <div id="commentsContainer" class="mt-3"></div>
    `;

    document.getElementById('loadCommentsBtn').addEventListener('click', () => {
        fetchComments(post.id)
            .then((comments) => renderComments(comments))
            .catch((error) => {
                const commentsContainer =
                    document.getElementById('commentsContainer');
                commentsContainer.innerHTML = `<p class="text-danger">Помилка завантаження коментарів: ${error.message}</p>`;
            });
    });
};

const renderComments = (comments) => {
    const commentsContainer = document.getElementById('commentsContainer');
    commentsContainer.innerHTML = `
        <h6>Коментарі:</h6>
        <ul class="list-group">
            ${comments
                .map(
                    (comment) => `
                <li class="list-group-item">
                    <strong>${comment.name}</strong>: ${comment.body}
                </li>
            `
                )
                .join('')}
        </ul>
    `;
};

searchPostBtn.addEventListener('click', () => {
    const postId = parseInt(postIdInput.value, 10);

    postContainer.innerHTML = '';
    errorMessage.textContent = '';

    if (isNaN(postId) || postId < 1 || postId > 100) {
        errorMessage.textContent = 'ID має бути числом від 1 до 100.';
        return;
    }

    fetchPost(postId)
        .then((post) => renderPost(post))
        .catch((error) => {
            errorMessage.textContent = `Помилка завантаження поста: ${error.message}`;
        });
});
