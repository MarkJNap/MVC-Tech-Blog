const delCommentBtnHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");
    const response = await fetch(`/api/comments/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert("Error deleting comment: " + response);
    }
  }
};

document.querySelectorAll(".delete-comment").forEach((delComment) => {
  delComment.addEventListener("click", delCommentBtnHandler);
});
