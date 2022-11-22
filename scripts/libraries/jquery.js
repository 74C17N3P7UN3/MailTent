(function ($) {

   $.fn.hasScrollBar = function () {
      return this.get(0).scrollHeight > this.height()
   }

})(jQuery)

/* --------------- Has Scrollbar --------------- */
function hasScrollBar(e) {

   return $(`#${e.id}`).hasScrollBar()

}
