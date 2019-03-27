var feedbackButton = document.querySelector(".feedback-button");
var modalClose = document.querySelector(".modal-close");
var modalFeedback = document.querySelector(".modal-feedback");

feedbackButton.addEventListener("click", function(evt) {
  modalFeedback.classList.add("modal-open");
});
modalClose.addEventListener("click", function(evt){
  modalFeedback.classList.remove
  ("modal-open");
});
