<?php
// registering WP menus for theme
function argil_register_menus()
{
    // register_nav_menu(array(
    //     'main-menu'
    // ));

    // This theme uses wp_nav_menu() in one location.
    register_nav_menus(
        array(
            'primary' => __('Header Menu', 'argil'),
            'footer'  => __('Footer Menu', 'argil'),
            'social'  => __('Social Menu', 'argil'),
        )
    );
}
add_action('init', 'argil_register_menus');

// require_once './vendor/fortawesome/wordpress-fontawesome/index.php';

function argil_aria_hasdropdown($atts, $item, $args)
{
    if ($args->theme_location == 'primary') {
        if (in_array('menu-item-has-children', $item->classes)) {
            $atts['aria-haspopup'] = 'true';
            $atts['aria-expanded'] = 'false';
        }
    }
    return $atts;
}
add_filter('nav_menu_link_attributes', 'argil_aria_hasdropdown', 10, 3);


function argil_submenu_button($dir = 'down', $title)
{
    $button = '<button class="menu-button bg-marine-500">';
    $button .= '<span class="u-screen-reader-text menu-button-show">' . sprintf(esc_html__('Show %s submenu', 'argil'), $title) . '</span>';
    $button .= '<span aria-hidden="true" class="u-screen-reader-text menu-button-hide">' . sprintf(esc_html__('Hide %s submenu', 'argil'), $title) . '</span>';
    $button .= '<i class="fas fa-chevron-' . $dir . ' mx-1 md:inline-block" aria-hidden="true"></i>';
    $button .= '</button>';
    return $button;
}


function argil_dropdown_icon($title, $item, $args, $depth)
{
    if ($args->theme_location == 'primary') {
        if (in_array('menu-item-has-children', $item->classes)) {
            if ($depth == 0) {
                $title .= argil_submenu_button('down', $title);
            } else {
                $title .= argil_submenu_button('right', $title);
            }
        }
    }
    return $title;
}
add_filter('nav_menu_item_title', 'argil_dropdown_icon', 10, 4);


function argil_add_additional_class_on_li($classes, $item, $args)
{
    if (isset($args->add_li_class)) {
        $classes[] = $args->add_li_class;
    }
    return $classes;
}
add_filter('nav_menu_css_class', 'argil_add_additional_class_on_li', 1, 3);
