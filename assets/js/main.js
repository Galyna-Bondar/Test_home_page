
function getPopularGoods(){
    $.ajax({
        url:'assets/common/popular_goods.json',
        type:'get',
        dataType:'json',
        success:function(json){
            let html = '';
            for(let i=0;i<json.length;i++){
                html += `
                <li class="slider-2__card" style="display: flex; flex-direction: column;gap:30px;">
                    <div class="slider-2__img-wrap">
                        <img data-lazy=${json[i].img} alt="picture" class="slider-2__img lazy"
                        src="">
                        <svg class="item_icon" width="24" height="60" viewBox="0 0 24 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_326)">
                        <path d="M4.84871 59.4334C4.75978 59.4334 4.67086 59.4059 4.59611 59.3513C4.4638 59.2551 4.39764 59.0923 4.42556 58.9312L5.75343 51.1908L0.129644 45.7097C0.0127955 45.5954 -0.0293045 45.4248 0.0209578 45.2698C0.0716496 45.1142 0.206112 45.0008 0.368068 44.9772L8.13938 43.8478L11.6152 36.8055C11.6874 36.6586 11.8369 36.5658 12.0001 36.5658C12.1638 36.5658 12.3133 36.6586 12.385 36.8055L15.8604 43.8478L23.6322 44.9772C23.7941 45.0008 23.9282 45.1138 23.9793 45.2698C24.0296 45.4248 23.9879 45.5958 23.8706 45.7097L18.2468 51.1917L19.5743 58.9316C19.6017 59.0927 19.5356 59.2555 19.4037 59.3518C19.2714 59.4489 19.0957 59.4613 18.9509 59.3844L12.0001 55.7303L5.04847 59.3844C4.98575 59.4171 4.91701 59.4334 4.84871 59.4334ZM1.35269 45.7019L6.51467 50.7337C6.61562 50.8321 6.66202 50.9747 6.63796 51.1139L5.41921 58.2185L11.8004 54.8643C11.9254 54.7981 12.0744 54.7981 12.2003 54.8643L18.5806 58.2185L17.3623 51.1139C17.3382 50.9747 17.3846 50.8325 17.4856 50.7337L22.6476 45.7019L15.5142 44.6653C15.3741 44.6451 15.2534 44.5571 15.1907 44.4303L12.0001 37.9667L8.80955 44.4308C8.74683 44.5575 8.62611 44.6456 8.48606 44.6657L1.35269 45.7019Z" fill="black"/>
                        </g>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20 1H17V18H20V1ZM17 0H16V1V18V19H17H20H21V18V1V0H20H17ZM13 9.44441H10V18H13V9.44441ZM10 8.44441H9V9.44441V18V19H10H13H14V18V9.44441V8.44441H13H10ZM3 5.22216H6V18H3V5.22216ZM2 4.22216H3H6H7V5.22216V18V19H6H3H2V18V5.22216V4.22216Z" fill="black"/>
                        <defs>
                        <clipPath id="clip0_1_326">
                        <rect width="24" height="24" fill="white" transform="translate(0 36)"/>
                        </clipPath>
                        </defs>
                        </svg>                        
                    </div>   
                    

                    <h4 class="slider-2__title" style="text-align: center;">${json[i].title}<span class="slider-2__manufacturer" style="display: block; font-weight:normal; padding-top:10px;color: #75758A;">${json[i].manufacturer}</span></h4>
                 
                    <div class="slider-2" style="display: flex; align-items: center; justify-content: center">
                        <div style="margin-right: 20px"><div>${json[i].price.weekday}</div><div>Будний</div></div>
                        <div style="margin-right: 20px"><div>${json[i].price.weekend}</div><div>Выходной</div></div>
                        <div style="margin-right: 20px"><div>${json[i].price.week}</div><div>Неделя</div></div>
                        <div><div>${json[i].price.month}</div><div>Месяц</div></div>
                    </div>
                    <a class="slider-2__link" href="#"></a>
                    <div style="display:flex; justify-content: center; align-items:center;">
                    <button class="btn" style="font-weight: bold; border: none;">Подробнее</button>
                    <button class="btn" style="color: #fff; font-size: 16px; margin-left:20px; padding: 10px 25px; text-aligh: center;  background: linear-gradient(to bottom,#8EE901,#4F9C2C);border: none; border-radius: 20px;">
                        <svg style="margin-right: 5px;" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.8 12.8C3.92 12.8 3.2 13.52 3.2 14.4C3.2 15.28 3.92 16 4.8 16C5.68 16 6.4 15.28 6.4 14.4C6.4 13.52 5.68 12.8 4.8 12.8ZM0 0V1.6H1.6L4.48 7.68L3.36 9.6C3.28 9.84 3.2 10.16 3.2 10.4C3.2 11.28 3.92 12 4.8 12H14.4V10.4H5.12C5.04 10.4 4.96 10.32 4.96 10.24V10.16L5.68 8.79997H11.6C12.24 8.79997 12.72 8.47997 12.96 7.99997L15.84 2.8C16 2.64 16 2.56 16 2.4C16 1.92 15.68 1.6 15.2 1.6H3.36L2.64 0H0ZM12.8 12.8C11.92 12.8 11.2 13.52 11.2 14.4C11.2 15.28 11.92 16 12.8 16C13.68 16 14.4 15.28 14.4 14.4C14.4 13.52 13.68 12.8 12.8 12.8Z" fill="white"/>
                        </svg>
                    в корзину</button>
                    </div>
                </li>
            `;        
            }
            $("#slider-2").slick('slickAdd',html);           
        },
        error:function(){
            alert.danger('Can not load info',true); 
        }
    });
}




$(function(){
    getPopularGoods();
    
    $('#slider-2').slick({
        slidesToShow: 3,
        dots: true,
        lazyLoad: 'ondemand',
        arrows: true,
        responsive:[              
                {
                breakpoint: 965,
                settings: {
                    slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        arrows: false,
                        }
                },
                {
                    breakpoint: 650,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,                       
                    }
                }
        ]
    });

    // hamburger

    $(".hamburger, #page-overlay").on("click", function () {
        $("#mobile-menu-wrap .hamburger").toggleClass("is-active");
        $("body").toggleClass("open");
    });
   
    $(".sidemenu__nav li a").on('click', function(){
        $('body').removeClass('open');
        $("#mobile-menu-wrap .hamburger").removeClass("is-active");
    })
    // scroll

    $(window).on('scroll', function(){
            if($(window).scrollTop()>0){
            if(!$("body").addClass("fixed_nav")){
            $("body").addClass("fixed_nav");
            }
        }
        else {
            if($("body").addClass("fixed_nav")){
            $("body").removeClass("fixed_nav");
        }
    }
    });

    $("#main_menu a").on('click', function(e){
        e.preventDefault();
        const top = $($(this).attr("href")).offset().top-60;
        $("html, body").animate({scrollTop:top+'px'},1000);
    })

    $(".header__button").on('click', function(){
      $('html,body').animate({
          scrollTop: $('.map').offset().top
      },2000);       
    });
    
});











