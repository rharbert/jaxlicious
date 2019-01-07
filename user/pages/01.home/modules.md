---
module:
    -
        module__admin_title: Hero
        module_list:
            -
                module__admin_title_child: 'Photo 1x4 (mobile)'
                module_type: module__text_image
                text_image__image: DSC03828_cropped-1000-web.jpg
                text_image__textarea: ''
                module_styles__text_child: mtb-0
                module_styles__select_child:
                    - hide-sm
            -
                module__admin_title_child: 'Photo 2x2 (tilt tablet+)'
                module_type: module__text_image
                text_image__image: DSC03693-cropped-4000-medium.jpg
                text_image__textarea: ''
                module_styles__text_child: mtb-0
                module_styles__select_child:
                    - show-sm
        module_styles__text: 'bb-solid-xxs-2 b-yellow'
        module_isotope: '0'
        module_published: '1'
    -
        module__admin_title: 'Products: Chocolate (Content Injected)'
        module_list:
            -
                module__admin_title_child: 'Milk Chocolate & Dark Chocolate Bars: All 4 Kids'
                module_type: module__content_inject
                text_image__textarea: ''
                content_inject__url: /section-products-chocolate
                content_inject__type: modules
                module_styles__text_child: mt-0
                module_styles__select_child:
                    - contain-outer__2x
                    - background__2
        module_styles__text: mrl-xxs
        module_isotope: '0'
        module_published: '1'
    -
        module__admin_title: 'Products: Other (Content Injected)'
        module_list:
            -
                module__admin_title_child: '4 Product Photos'
                module_type: module__content_inject
                text_image__textarea: ''
                content_inject__url: /section-products-other
                content_inject__type: modules
                module_styles__text_child: mtb-0
        module_styles__text: 'mb-3 mb-md-5'
        module_isotope: '0'
        module_published: '1'
    -
        module__admin_title: 'Our Story'
        module_list:
            -
                module__admin_title_child: 'Our Story '
                module_type: module__text_image
                text_image__title: '# The Jaxlicious Story '
                text_image__subtitle: '<a class="negate" id="about" name="about"></a>'
                text_image__textarea: "One fine day, Jax was happily walking along the St. Johns River eating his favorite chocolates. Along came Jay.\r\nNeither boy was paying attention. Then, all of a sudden, **BAM!**\r\nAs chocolate flew in the air, some landed in Jay's mouth. He shouted, \"**THAT'S DELICIOUS**!\"\r\nJax and Jay became good friends, and they eat chocolate almost everyday.\r\nAfter becoming friends with Jes and Jen, they all decided to get together to create **chocolate bars for everyone**."
                module_styles__text_child: 'ptb-3 prl-1 prl-lg-3 b-dotted-xxs-3 b-yellow'
                module_styles__select_child:
                    - width__100
                    - contain-inner__md
                    - contain-outer
                    - background__2
                    - title__center
                    - text-align__justify
        module_styles__text: 'mrl-xxs mb-2 mb-md-4'
        module_styles__select:
            - text-color__brown
        module_isotope: '0'
        module_published: '1'
    -
        module__admin_title: 'Contact Form (Content Injected)'
        module_list:
            -
                module__admin_title_child: 'Contact Form Injected'
                module_type: module__content_inject
                text_image__textarea: ''
                content_inject__url: /section-contact-form
                content_inject__type: modules
                module_styles__select_child:
                    - width__100
                    - margin-auto__right-left
                    - contain-outer
        module_styles__text: 'mrl-xxs mb-3 mb-md-5'
        module_isotope: '0'
        module_published: '1'
hero__size_class: hero-default
media_order: 'logo-text-jaxlicious-regular.svg,logo-text-jaxlicious-italic.svg,logo-text-bam-thats-delicious.svg,jaxlicious-jax.svg,jaxlicious-jay.svg,jaxlicious-jen.svg,jaxlicious-jes.svg,logo-kids-and-text.svg,DSC03706-cropped-1920-high.jpg,DSC03828_cropped-1000-web.jpg,DSC03693-cropped-4000-medium.jpg'
published: true
body_classes: front-page
process:
    markdown: true
    twig: true
twig_first: true
visible: true
hero__toggle: true
---

