<?php

// function argil_add_enqueue_script_attributes($tag, $handle)
// {
// 	// Add defer
// 	if ('isotope' === $handle) {
// 		return str_replace(' src="', ' defer src="', $tag);
// 	}

// 	// Add async
// 	if ('swiper' === $handle) {
// 		return str_replace(' src="', ' async src="', $tag);
// 	}
// 	// Add multiple defers
// 	// $deferrable_handles = [
// 	// 	'alpine',
// 	// 	'isotope',
// 	// 	'swiper',
// 	// ];

// 	// if (in_array($handle, $deferrable_handles)) {
// 	// 	return str_replace(' src="', ' defer src="', $tag);
// 	// }

// 	return $tag;
// }
// add_filter('script_loader_tag', 'argil_add_enqueue_script_attributes', 10, 3);

// add async and defer attributes to enqueued scripts
function alpine_script_loader_tag($tag, $handle, $src)
{
    if ($handle === 'alpine') {

        if (false === stripos($tag, 'defer')) {
            $tag = str_replace('<script ', '<script defer ', $tag);
        }
        // if (false === stripos($tag, 'async')) {
        // 	$tag = str_replace(' src', ' async="async" src', $tag);
        // }
    }
    return $tag;
}
add_filter('script_loader_tag', 'alpine_script_loader_tag', 10, 3);

/**
 * Enqueue scripts and styles.
 *
 * @since argil 1.0
 *
 * @return void
 */
function argil_scripts()
{
    // Note, the is_IE global variable is defined by WordPress and is used
    // to detect if the current browser is internet explorer.
    global $is_IE, $wp_scripts;
    if ($is_IE) {
        // If IE 11 or below, use a flattened stylesheet with static values replacing CSS Variables.
        wp_enqueue_style('argil-style', get_template_directory_uri() . '/assets_alt/css/ie.css', array(), wp_get_theme()->get('Version'));
    } else {
        // If not IE, use the standard stylesheet.
        wp_enqueue_style('argil-style', get_template_directory_uri() . '/style.css', array(), wp_get_theme()->get('Version'));
    }

    // RTL styles.
    wp_style_add_data('argil-style', 'rtl', 'replace');

    // Print styles.
    wp_enqueue_style('argil-print-style', get_template_directory_uri() . '/assets_alt/css/print.css', array(), wp_get_theme()->get('Version'), 'print');

    // Threaded comment reply styles.
    if (is_singular() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }

    // Register the IE11 polyfill file.
    wp_register_script(
        'argil-ie11-polyfills-asset',
        get_template_directory_uri() . '/assets_alt/js/polyfills.js',
        array(),
        wp_get_theme()->get('Version'),
        true
    );

    // Register the IE11 polyfill loader.
    wp_register_script(
        'argil-ie11-polyfills',
        null,
        array(),
        wp_get_theme()->get('Version'),
        true
    );
    wp_add_inline_script(
        'argil-ie11-polyfills',
        wp_get_script_polyfill(
            $wp_scripts,
            array(
                'Element.prototype.matches && Element.prototype.closest && window.NodeList && NodeList.prototype.forEach' => 'argil-ie11-polyfills-asset',
            )
        )
    );

    // Main navigation scripts.
    if (has_nav_menu('primary')) {
        wp_enqueue_script(
            'argil-primary-navigation-script',
            get_template_directory_uri() . '/assets_alt/js/primary-navigation.js',
            array('argil-ie11-polyfills'),
            wp_get_theme()->get('Version'),
            true
        );
    }

    // Responsive embeds script.
    wp_enqueue_script(
        'argil-responsive-embeds-script',
        get_template_directory_uri() . '/assets_alt/js/responsive-embeds.js',
        array('argil-ie11-polyfills'),
        wp_get_theme()->get('Version'),
        true
    );
}
add_action('wp_enqueue_scripts', 'argil_scripts');

// NEW WORDPLATE with VITE
// Register scripts and styles.
add_action('wp_enqueue_scripts', function () {
    $manifestPath = get_theme_file_path('assets/manifest.json');

    if (
        wp_get_environment_type() === 'local' &&
        is_array(wp_remote_get('http://localhost:5173/')) // is Vite.js running
    ) {

        wp_enqueue_script('vite', 'http://localhost:5173/@vite/client', [], null);
        wp_enqueue_script('argil', 'http://localhost:5173/resources/js/index.js', [], null);
    } elseif (file_exists($manifestPath)) {

        $manifest = json_decode(file_get_contents($manifestPath), true);
        wp_enqueue_script('argil', get_theme_file_uri('assets/' . $manifest['resources/js/index.js']['file']), [], null);
        wp_enqueue_style('argil', get_theme_file_uri('assets/' . $manifest['resources/js/index.css']['file']), [], null);
    }
});

/**
 * Proper way to enqueue scripts and styles
 */
function argil_styles_enqueuing()
{
    // global $wp_styles;
    // wp_enqueue_style('style', get_stylesheet_uri());
    wp_register_style('argil', get_template_directory_uri() . '/assets_alt/css/main.css', array(), wp_get_theme()->get('Version'), 'all');
    // wp_register_style('argil-bundle', get_template_directory_uri() . '/assets_alt/css/bundle.css', array(), wp_get_theme()->get('Version'), 'all');
    // wp_register_style('ada-editor', get_template_directory_uri() . '/assets_alt/dist/editor.css', array('argil'), wp_get_theme()->get('Version'), 'all');
    // wp_register_style('ada-admin', get_template_directory_uri() . '/assets_alt/css/admin.css', array('argil'), wp_get_theme()->get('Version'), 'all');

    wp_enqueue_style('argil');
    // wp_enqueue_style('argil-bundle');
    // wp_enqueue_style('ada-editor');
    // wp_enqueue_style('ada-admin');

    // wp_enqueue_style('swiper', 'https://unpkg.com/swiper@8/swiper-bundle.min.css');
}
add_action('wp_enqueue_scripts', 'argil_styles_enqueuing');


function argil_scripts_enqueuing()
{
    // External from CDN for the moment
    wp_register_script('alpine', 'https://unpkg.com/alpinejs@3.9.6/dist/cdn.min.js', array(), '', true);
    wp_enqueue_script('alpine');
    // wp_enqueue_script('isotope', 'https://npmcdn.com/isotope-layout@3/dist/isotope.pkgd.js', array('jquery'), '', false);
    // wp_enqueue_script('swiper', 'https://unpkg.com/swiper@8/swiper-bundle.min.js', array(), '', true);

    $theme = wp_get_theme();
    wp_register_script('argil-vendor', get_template_directory_uri() . '/assets_alt/js/vendor.js', array(), wp_get_theme()->get('Version'), true);
    wp_register_script('argil', get_template_directory_uri() . '/assets_alt/js/main.js', array(), wp_get_theme()->get('Version'), true);
    wp_register_script('argil-bundle', get_template_directory_uri() . '/assets_alt/js/bundle.js', array(), wp_get_theme()->get('Version'), true);
    wp_enqueue_script('manifest', get_template_directory_uri() . '/assets_alt/js/manifest.js', array(), $theme->get('Version'), true);
    wp_enqueue_script('argil-vendor');
    wp_enqueue_script('argil');
    wp_enqueue_script('argil-bundle');

    // Threaded comment reply styles.
    if (is_page('community') || is_archive('ada_labs')) {
        wp_register_script('page-labs', get_template_directory_uri() . '/assets_alt/js/page-labs.js', array(), '1.6.0', true);
        wp_enqueue_script('page-labs');
    }
}
add_action('wp_enqueue_scripts', 'argil_scripts_enqueuing');

// AJAX LAOD SCRIPTS
function argil_load_scripts()
{
    wp_localize_script(
        'argil',
        'wpAjax',
        array('ajaxUrl' => admin_url('admin-ajax.php'))
    );
}
add_action('wp_enqueue_scripts', 'argil_load_scripts');


/**
 * Enqueue block editor script.
 *
 * @since argil 1.0
 *
 * @return void
 */
function argil_block_editor_script()
{
    wp_enqueue_script('argil-editor', get_theme_file_uri('/assets_alt/js/editor.js'), array('wp-blocks', 'wp-dom'), wp_get_theme()->get('Version'), true);
}
add_action('enqueue_block_editor_assets', 'argil_block_editor_script');
