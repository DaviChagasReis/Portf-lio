$(document).ready(function() {
    // Quando o link for clicado
    $('a[href^="#"]').click(function(event) {
        // Previne o comportamento padrão de link
        event.preventDefault();
        
        // Faz o scroll suave para o elemento correspondente
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 800); // 800ms para a animação
    });
});

$(window).scroll(function() {
    $('.fade-in').each(function() {
        var elementTop = $(this).offset().top;
        var windowBottom = $(window).scrollTop() + $(window).height();
        
        if (windowBottom > elementTop) {
            $(this).fadeIn();
        }
    });
});

$(document).ready(function() {
    // Efeito de escala (zoom) ao passar o mouse
    $('.projeto img').hover(function() {
        $(this).animate({
            width: '110%',  // Aumenta o tamanho da imagem
            height: '110%'  // Aumenta a altura da imagem
        }, 300); // Tempo da animação
    }, function() {
        $(this).animate({
            width: '100%',
            height: '100%'
        }, 300);
    });
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('header').addClass('sticky');
    } else {
        $('header').removeClass('sticky');
    }
});

$(document).ready(function() {
    $('img').click(function() {
        var src = $(this).attr('src');
        $('body').append('<div class="lightbox"><img src="' + src + '" /></div>');
    });

    // Fecha o lightbox quando clicar fora da imagem
    $(document).on('click', '.lightbox', function() {
        $(this).remove();
    });
});

$(document).ready(function() {
    // Mostrar o botão ao rolar para baixo
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#scrollToTop').fadeIn();
        } else {
            $('#scrollToTop').fadeOut();
        }
    });

    // Quando clicar no botão, volta para o topo
    $('#scrollToTop').click(function() {
        $('html, body').animate({scrollTop: 0}, 800);
    });
});

