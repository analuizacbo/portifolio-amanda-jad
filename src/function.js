$(document).ready(function () {
  $('.caixa-menu-burguer').hide()
  $('.btn-close').hide()
  $('.bg-fundo').hide()

  $('.btn-menu').on('click', () => {
    $('.bg-fundo').show()
    $('.btn-menu').hide()
    $('.caixa-menu-burguer').slideToggle(() => {
      $('.btn-close').show()
    })
  })

  $('.btn-close').on('click', () => {
    $('.bg-fundo').show()
    $('.btn-close').hide()
    $('.caixa-menu-burguer').slideToggle(() => {
      $('.btn-menu').show()
      $('.bg-fundo').hide()
    })
  })

  $('.bg-fundo').on('click', () => {
    $('.caixa-menu-burguer').slideToggle(() => {
      $('.btn-menu').show()
      $('.bg-fundo').hide()
      $('.btn-close').hide()
    })
  })

});