function getBlogs(){return JSON.parse(localStorage.getItem("blogs")||"[]")}
function saveBlog(b){const x=getBlogs();x.push(b);localStorage.setItem("blogs",JSON.stringify(x))}
function getComments(){return JSON.parse(localStorage.getItem("comments")||"[]")}
function saveComment(c){const x=getComments();x.push(c);localStorage.setItem("comments",JSON.stringify(x))}
function deleteComment(i){const x=getComments();x.splice(i,1);localStorage.setItem("comments",JSON.stringify(x))}
// Load profile from localStorage
function getProfile() {
    let p = localStorage.getItem("profile");

    if (p) {
        return JSON.parse(p);
    }

    // Default profile if nothing saved
    return {
        name: "ELIZUBA",
        about: "I am a Blogger, loves to read, write, travel...",
        email: "elizubakuriakose7994@gmail.com"
    };
}

// Save profile to localStorage
function saveProfile(data) {
    localStorage.setItem("profile", JSON.stringify(data));
}
