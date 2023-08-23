generateTimelineHTML();

function addToTimeline() {
    const postInput = document.querySelector('.js-post-input');
    const postCaption = postInput.value;

    posts.unshift({
        profilePicture: "resources/profile pictures/profile picture ry an.jpg",
        profileName: "RY AN",
        dateAndTime: "July 24 at 12:00 AM",
        postCaption,
        imagePost: "",
        reactions: "69K",
        commentsNumber: "23K",
        sharesNumber: "16K"
    });

    generateTimelineHTML(); // Refreshes the Timeline HTML
    postInput.value = '';
}

function generateTimelineHTML() {
    let postHTML = '';

posts.forEach((post) => {
    const { 
        profilePicture, 
        profileName, 
        dateAndTime, 
        postCaption, 
        imagePost, 
        reactions, 
        commentsNumber, 
        sharesNumber
    } = post;

    postHTML += `
    <div class="facebook-post">
        <div class="first-section">
            <div class="info-tab">
                <div class="profile-info">
                    <div>
                        <img class="poster-profile-picture" src="${profilePicture}" alt="poster profile picture">
                    </div>
                    <div class="poster-info-stats">
                        <div class="name-info">
                            ${profileName}
                        </div>
                        <div class="stats-info">
                            ${dateAndTime} &#183; <div class="yin-yang">☯</div>
                        </div>
                    </div>
                </div>
                <div class="options-close">
                    <button class="options-button">
                        <img class="options-icon" src="resources/icons/options2.png" alt="options icon">
                    </button>
                    <button class="close-button">
                        <img class="close-icon" src="resources/icons/close.png" alt="close icon">
                    </button>
                </div>
            </div>
            <div class="post-caption">
                ${postCaption}
            </div>
        </div>
        <div class="second-section">
            <div class="content-tab">
                <img class="content-image" src="${imagePost}">
            </div>
        </div>
        <div class="third-section">
            <div class="engagement-tab">
                <div class="reactions">
                    <img class="haha-react" src="resources/icons/haha-react.svg" alt="haha react">
                    <img class="like-react" src="resources/icons/like react.svg" alt="like react">
                    <div>
                        ${reactions}
                    </div>
                    
                </div>
                <div class="comments-shares">
                    <div class="comments">
                        <div>
                            ${commentsNumber}
                        </div>
                        <img class="comments-icon" src="resources/icons/comments icon.png" alt="comments icon">
                    </div>
                    <div class="shares">
                        <div>
                            ${sharesNumber}
                        </div>
                        <img class="shares-icon" src="resources/icons/share icon.png" alt="share icon">
                    </div>
                </div>
            </div>
            <div class="gray2ndss"></div>
            <div class="buttons-tab">
                <div class="react-button">
                    <img class="engagement-icon" src="resources/icons/react.png" alt="react icon">
                    <div>
                        Like
                    </div>
                </div>
                <div class="comment-button">
                    <img class="engagement-icon" src="resources/icons/comments icon.png" alt="comments icon">
                    <div>
                        Comment
                    </div>
                </div>
                <div class="share-button">
                    <img class="engagement-icon" src="resources/icons/share icon.png" alt="share icon">
                    <div>
                        Share
                    </div>
                </div>
            </div>
            <div class="gray2ndsss"></div>
        </div>
        <div class="fourth-section">
            <div class="comments-tab-grid">
                <img class="comments-profile-picture" src="resources/profile pictures/profile picture ry an.jpg" alt="user profile picture">
                <div comment-container>
                    <input class="comments-bar" type="text" placeholder="Write a comment...">
                </div>
            </div>
        </div>
    </div>
`;
});

document.querySelector('.js-facebook-timeline').innerHTML = postHTML;

}
// For the contacts on the right sidebar

let contactsHTML = '';

contacts.forEach((friend) => {
    const { image, name } = friend;
    contactsHTML += `
    <div class="facebook-user-grid">
        <div class="online">
            <img class="facebook-user-profile-picture" src="${image}" alt="facebook-user-image">
            <div class="green-dot"></div>
        </div>
        <div class="facebook-user-name">
            ${name}
        </div>
    </div>
    `;
});

document.querySelector('.js-contacts-tab').innerHTML = contactsHTML;

let storiesHTML = `
<div class="user-container">
    <img class="ryan-profile-picture" src="resources/profile pictures/ryan main profile picture.jpg" alt="ryan profile picture">
    <img class="add-story-button" src="resources/icons/add.png" alt="add story button">
    <div class="create-story">
        Create story
    </div>
</div>
`;

story.forEach((story) => {
    const { myDayContent, profilePicture, name } = story;
    storiesHTML += `
    <div class="user-container">
        <img class="myday" src="${myDayContent}" alt="gio myday">
        <img class="my-day-user-profile-picture" src="${profilePicture}" alt="user profile picture">
        <div>
            ${name}
        </div>
    </div>
    `;
});

document.querySelector('.js-story-list').innerHTML = storiesHTML;

document.querySelector('.js-post-input')
    .addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            if (document.querySelector('.js-post-input').value === "") {
                    alert("Please type something first.");
            } else {
                addToTimeline();
            }
        }
    });

const theme = localStorage.getItem('theme');

document.querySelector('.facebook-logo')
    .addEventListener('click', () => {
        const bodyElement = document.body;
        bodyElement.classList.toggle('light-mode');

        if (bodyElement.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light-mode');
        } else {
            localStorage.removeItem('theme');
        }
    });


document.querySelector('.facebook-logo')
    .addEventListener('click', () => {
        toggleTheme();

        if (bodyElement.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
        } else {
            localStorage.removeItem('theme');
        }
    });


if (theme) {
    document.body.classList.add('light-mode');
}