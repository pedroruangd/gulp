// instancia jquery e evita conflitos
// jQuery( function($){
$(document).ready(function() {

    $('.owl-carousel').owlCarousel();

    let titulos = $('h4') // tag

    let itens = $('.featured-item') // class

    let destaques = $('#featured') // id

    // console.log(titulos.first());

    // Configuração de produtos

    $('.featured-item a').addClass('btn btn-dark stretch-link');

    $('.featured-item:first h4').append('<span class="badge bg-secondary">Novo</span>')
        // $('.featured-item:first h4').start('<span class="badge bg-secondary">Novo</span>')
        // $('.featured-item:first h4').html('<span class="badge bg-secondary">Novo</span>')
        // $('.featured-item:first h4').addClass('active')
        // $('.featured-item:first h4').removeClass('active')
        // $('.featured-item:first h4').toggleClass('active')
        // $('.featured-item:first h4').hide()
        // $('.featured-item:first h4').show()
        // $('.featured-item:first h4').fadeIn(2000)
        // $('.featured-item:first h4').fadeOut()
        //  $('.featured-item:first h4').css('color', '#f00')


    $('.featured-item h4').dblclick(function() {

        $(this).css({
            'color': '#f00',
            'background': '#ff0',
            'font-weight': '100',
        });

    });

    /*
     * Manipulação de eventos
    
    $('.featured-item a').on('click', function(event) {

        event.preventDefault();

        alert('Produto esgotado!!!');

    });
    
*/

    // $('#form-submit').on('click', function(e) {

    //     e.preventDefault()

    //     if ($('#email').val() != '') {

    //         $('#email').animate({
    //             opacity: "toggle",
    //             top: "-50"
    //         }, 500, function() {
    //             console.log($(this).val())
    //         })

    //     }


    // });


    /*
     * Ouvinte de eventos .nav-modal-open
     */
    $('.nav-modal-open').on('click', function(e) {

        e.preventDefault();

        let elem = $(this).attr('rel')

        $('.modal-body').html($('#' + elem).html())

        $('.modal-header h5.modal-title').html($(this).text())

        let myModal = new bootstrap.Modal($('#modelId'))

        myModal.show()


    });


    /*
     * TODO: incrementar a validação
     * - checar se o nome é válido (mais de 2 caracteres)
     * - checar se o email é válido com ao menos um "@" e "."
     * - checar se o cpf é válido com regex
     */

    function validate(elem) {
        if (elem.val() == '') {

            console.log('o campo de ' + elem.attr('name') + ' é obrigatório')

            elem.parent().find('.text-muted').show()

            elem.addClass('invalid')

            return false
        } else {
            elem.parent().find('.text-muted').hide()
            elem.removeClass('invalid')
        }
    };

    $('body').on('submit', '.modal-body .form', function(e) {

        e.preventDefault()

        const inputName = $('#nome')
        const inputEmail = $('#email')

        validate(inputName)
        validate(inputEmail)

        if (inputEmail.hasClass('invalid') || inputName.hasClass('invalid')) {
            alert('Verificar campos obrigatórios')
            return false
        } else {
            $(this).submit();
            alert('Mensagem enviada com sucesso!')
        }

    });

    $('body').on('blur', '#nome', function() {
        validate($(this))
    })

    $('body').on('blur', '#email', function() {
        validate($(this))
    })


    $('body').on('focus', '#date', function() {
        $(this).datepicker()
    })

    $('body').on('blur', '#date', function() {
        validate($(this))
        $(this).mask('00/00/0000');
    })

    $('body').on('blur', '#time', function() {
        validate($(this))
        $(this).mask('00:00');
    })

    $('body').on('blur', '#cep', function() {
        validate($(this))
        $(this).mask('00000-000');
    })

    $('body').on('blur', '#phone', function() {
        validate($(this))
        $(this).mask('00000-0000');
    })

    $('body').on('blur', '#cpf', function() {
        validate($(this))
        $(this).mask('000.000.000-00');
    })

});

// CAROUSEL 

$(".owl-carousel").owlCarousel({
    autoPlay: 3000,
    items: 1, // THIS IS IMPORTANT
    responsive: {
        480: {
            items: 1
        }, // from zero to 480 screen width 4 items
        768: {
            items: 2
        }, // from 480 screen widthto 768 6 items
        1024: {
            items: 3 // from 768 screen width to 1024 8 items
        }
    },
});

$("#subscribe").submit(function(event) {
    event.preventDefault();

    alert("Seu e-mail foi cadastrado com sucesso!");
});