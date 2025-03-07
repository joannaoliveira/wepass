$( document ).ready(function() {

    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector("#menu");

    hamburger.addEventListener("click", mobileMenu);

    function mobileMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }

    var behavior = function (val) {
        return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
    },
    options = {
        onKeyPress: function (val, e, field, options) {
            field.mask(behavior.apply({}, arguments), options);
        }
    };    
    $('.phone').mask(behavior, options);

    $(".goToBeneficios").on( "click", function() {
        $("#beneficios").get(0).scrollIntoView({behavior: 'smooth'});
        return false;
    });
    $(".goToSaibaMais").on( "click", function() {
        $("#sobre").get(0).scrollIntoView({behavior: 'smooth'});
        return false;
    });
    $(".goToOrcamento").on( "click", function() {
        $("#contato").get(0).scrollIntoView({behavior: 'smooth'});
        return false;
    });
    $(".goToAdministrativo").on( "click", function() {
        $("#sobre").get(0).scrollIntoView({behavior: 'smooth'});
        return false;
    });
    $(".goToMorador").on( "click", function() {
        $("#chamada").get(0).scrollIntoView({behavior: 'smooth'});
        return false;
    });

    $("#frmContato").validate({
        rules: {
            iNome: "required",
            iWhatsapp: "required",
            iEmail: {
                required: true,
                email: true
            },
            iCidade: "required",            
            iCondominio: "required",            
            iLotes: "required"
        },
        messages: {
            iNome: "Campo obrigatório",
            iWhatsapp: "Campo obrigatório",
            iEmail: {
                required: "Campo obrigatório",
                email: "Digite um e-mail válido"
            },
            iCidade: "Campo obrigatório",
            iCondominio: "Campo obrigatório",
            iLotes: "Campo obrigatório"
        }
    });

});