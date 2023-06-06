<?php

/**
 * The header.
 *
 * This is the template that displays all of the <head> section and everything up until main.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage argil
 * @since Twenty Twenty-One 1.0
 */

?>
<!doctype html>
<html <?php language_attributes(); ?> class="text-sans text-base" <?php // argil_the_html_classes();                                                                     
                                                                    ?>>

<head>
    <title><?php the_title(); ?></title>
    <meta charset="<?php bloginfo('charset'); ?>" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <?php wp_head(); ?>
    <script defer src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.js"></script>
    <!-- <script defer src="https://unpkg.com/alpinejs@3.9.0/dist/cdn.min.js"></script> -->

</head>

<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>
    <div id="page" class="site min-h-screen">

        <a class="skip-link screen-reader-text" href="#content">
            <?php esc_html_e('Skip to content', 'argil'); ?>
        </a>

        <header role="banner" id="masthead" class="flex flex-col items-center bg-transparent top-0 z-20 w-screen fixed">
            <div class="site-header__wrapper w-full h-16 bg-rouge-500 max-h-20">
                <div id="site-header__container" class="min-h-24 h-24 lg:mx-12 xl:mx-24 2xl:mx-32 px-2 flex flex-row justify-between items-center bg-marine-500 drop-shadow-lg">

                    <div class="c-header min-w-1/3">
                        <div class="o-container u-flex u-align-justify u-align-middle">
                            <div class="c-header__logo pb-1">
                                <!-- Logo -->
                                <?php if (function_exists('the_custom_logo')) {
                                    the_custom_logo();
                                }
                                ?>
                                <a class="c-header__blogname flex flex-row items-center" href="<?php echo esc_url(home_url('/')); ?>">
                                    <span class="min-w-full w-max font-display font-semibold tracking-wide">
                                        <?php esc_html_e(bloginfo('name')); ?>
                                    </span>
                                </a>
                            </div>
                            <!-- <?php get_search_form(); ?> -->
                        </div>
                    </div>
                    <div class="c-navigation min-w-2/3 flex items-center">
                        <!-- Menu Button -->
                        <div class="menu-button-container lg:hidden">
                            <button type="button" id="primary-mobile-menu" class="button focus:outline-none" aria-controls="primary-menu-list" aria-expanded="false">
                                <span class="dropdown-icon text-white open">
                                    <!-- < ?php esc_html_e('Menu', 'argil'); ?> -->
                                    <?php //echo argil_get_icon_svg('ui', 'menu'); // phpcs:ignore WordPress.Security.EscapeOutput
                                    ?>
                                </span>
                                <span class="dropdown-icon text-white close">
                                    <!-- < ?php esc_html_e('Close', 'argil'); ?> -->
                                    <?php //echo argil_get_icon_svg('ui', 'close'); // phpcs:ignore WordPress.Security.EscapeOutput
                                    ?>
                                </span>
                            </button><!-- #primary-mobile-menu -->
                        </div><!-- .menu-button-container -->

                        <div id="modal-o-nav" class="o-container origin-top-left absolute hidden lg:flex items-center lg:relative top-0 right-0 bg-marine-500 lg:bg-transparent w-screen lg:w-full h-screen lg:h-24 -z-10 lg:z-10 lg:mx-2">
                            <nav class="header-nav w-full mb-20 lg:mb-0" role="navigation" aria-label="<?php esc_html_e('Primary Navigation', 'argil'); ?>">
                                <!-- Menu -->
                                <?php wp_nav_menu(array(
                                    'theme_location'    => 'primary',
                                    'menu_class'        => 'menu menu-wrapper flex flex-col lg:flex-row lg:grid lg:grid-cols-8 lg:gap-x-0.5',
                                    'container_id' => 'topnav',
                                    'container_class'   => 'primary-menu-container h-full pb-16 lg:pb-0',
                                    'items_wrap'      => '<ul id="primary-menu-list" class="%2$s">%3$s</ul>',
                                    'fallback_cb'     => false,
                                )) ?>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- #masthead -->

        <!-- < ?php get_template_part('template-parts/header/site-header'); ? > -->

        <div id="content" class="site-content min-h-screen">
            <div id="primary" class="content-area">
                <main id="main" class="site-main min-h-screen flex flex-col items-center justify-center">