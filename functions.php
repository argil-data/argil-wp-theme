<?php

/**
 * Functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @subpackage argil
 * @since argil 1.0
 */

// This theme requires WordPress 5.3 or later.
if (version_compare($GLOBALS['wp_version'], '5.3', '<')) {
    require get_template_directory() . '/inc/back-compat.php';
}

if (!function_exists('argil_setup')) {
    /**
     * Sets up theme defaults and registers support for various WordPress features.
     *
     * Note that this function is hooked into the after_setup_theme hook, which
     * runs before the init hook. The init hook is too late for some features, such
     * as indicating support for post thumbnails.
     *
     * @since argil 1.0
     *
     * @return void
     */
    function argil_setup()
    {
        /*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on argil, use a find and replace
		 * to change 'argil' to the name of your theme in all the template files.
		 */
        load_theme_textdomain('argil', get_template_directory() . '/languages');

        // Add default posts and comments RSS feed links to head.
        add_theme_support('automatic-feed-links');

        /*
		 * Let WordPress manage the document title.
		 * This theme does not use a hard-coded <title> tag in the document head,
		 * WordPress will provide it for us.
		 */
        add_theme_support('title-tag');

        /**
         * Add post-formats support.
         */
        add_theme_support(
            'post-formats',
            array(
                'link',
                'aside',
                'gallery',
                'image',
                'quote',
                'status',
                'video',
                'audio',
                'chat',
            )
        );

        /*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
        add_theme_support('post-thumbnails');
        set_post_thumbnail_size(1568, 9999);

        register_nav_menus(
            array(
                'primary' => esc_html__('Primary menu', 'argil'),
                'footer'  => esc_html__('Footer menu', 'argil'),
                'social'  => __('Social Menu', 'argil'),
            )
        );

        /*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
        add_theme_support(
            'html5',
            array(
                'comment-form',
                'comment-list',
                'gallery',
                'caption',
                'style',
                'script',
                'navigation-widgets',
            )
        );

        /*
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
        $logo_width  = 300;
        $logo_height = 100;

        add_theme_support(
            'custom-logo',
            array(
                'height'               => $logo_height,
                'width'                => $logo_width,
                'flex-width'           => true,
                'flex-height'          => true,
                'unlink-homepage-logo' => true,
            )
        );

        // Add theme support for selective refresh for widgets.
        add_theme_support('customize-selective-refresh-widgets');
        // Add support for Block Styles.
        add_theme_support('wp-block-styles');
        // Add support for full and wide align images.
        add_theme_support('align-wide');

        // Add support for editor styles.
        add_theme_support('editor-styles');

        $background_color = get_theme_mod('background_color', 'FFFFFF');
        if (127 > argil_Custom_Colors::get_relative_luminance_from_hex($background_color)) {
            add_theme_support('dark-editor-style');
        }

        $editor_stylesheet_path = './assets_alt/css/style-editor.css';

        // Note, the is_IE global variable is defined by WordPress and is used
        // to detect if the current browser is internet explorer.
        global $is_IE;
        if ($is_IE) {
            $editor_stylesheet_path = './assets_alt/css/ie-editor.css';
        }

        // Enqueue editor styles.
        add_editor_style($editor_stylesheet_path);

        // Add custom editor font sizes.
        add_theme_support(
            'editor-font-sizes',
            array(
                array(
                    'name'      => esc_html__('Extra small', 'argil'),
                    'shortName' => esc_html_x('XS', 'Font size', 'argil'),
                    'size'      => 11,
                    'slug'      => 'extra-small',
                ),
                array(
                    'name'      => esc_html__('Small', 'argil'),
                    'shortName' => esc_html_x('S', 'Font size', 'argil'),
                    'size'      => 16,
                    'slug'      => 'small',
                ),
                array(
                    'name'      => esc_html__('Normal', 'argil'),
                    'shortName' => esc_html_x('M', 'Font size', 'argil'),
                    'size'      => 18,
                    'slug'      => 'normal',
                ),
                array(
                    'name'      => esc_html__('Large', 'argil'),
                    'shortName' => esc_html_x('L', 'Font size', 'argil'),
                    'size'      => 28,
                    'slug'      => 'large',
                ),
                array(
                    'name'      => esc_html__('Extra large', 'argil'),
                    'shortName' => esc_html_x('XL', 'Font size', 'argil'),
                    'size'      => 48,
                    'slug'      => 'extra-large',
                ),
                array(
                    'name'      => esc_html__('Huge', 'argil'),
                    'shortName' => esc_html_x('XXL', 'Font size', 'argil'),
                    'size'      => 76,
                    'slug'      => 'huge',
                ),
                array(
                    'name'      => esc_html__('Gigantic', 'argil'),
                    'shortName' => esc_html_x('XXXL', 'Font size', 'argil'),
                    'size'      => 112,
                    'slug'      => 'gigantic',
                ),
            )
        );

        // Custom background color.
        add_theme_support(
            'custom-background',
            array(
                'default-color' => 'rgb(202, 199, 199)',
            )
        );


        /** USING THEME.JSON instead ??? */
        // Editor color palette.
        $black     = '#000000';
        $dark_gray = '#28303D';
        $gray      = '#39414D';
        $green     = '#D1E4DD';
        $blue      = '#1B63A0';
        $dark_blue = '#111C38';
        $purple    = '#cddfee';
        $red       = '#ff0000';
        $orange    = '#E4DAD1';
        $yellow    = '#fbc226';
        $white     = '#FFFFFF';
        $groseille = '#b51f1f';
        // $leman     = '#00a79f';
        // $canard    = '#007480';
        $ardoise   = '#413d3a';
        $perle     = '#cac7c7';

        add_theme_support(
            'editor-color-palette',
            array(
                array(
                    'name'  => esc_html__('Red', 'argil'),
                    'slug'  => 'red',
                    'color' => $red,
                ),
                array(
                    'name'  => esc_html__('Groseille', 'argil'),
                    'slug'  => 'groseille',
                    'color' => $groseille,
                ),
                array(
                    'name'  => esc_html__('Blue', 'argil'),
                    'slug'  => 'blue',
                    'color' => $blue,
                ),
                array(
                    'name'  => esc_html__('Dark Blue', 'argil'),
                    'slug'  => 'dark-blue',
                    'color' => $dark_blue,
                ),
                array(
                    'name'  => esc_html__('Ardoise', 'argil'),
                    'slug'  => 'ardoise',
                    'color' => $ardoise,
                ),
                array(
                    'name'  => esc_html__('Perle', 'argil'),
                    'slug'  => 'perle',
                    'color' => $perle,
                ),
                array(
                    'name'  => esc_html__('Dark gray', 'argil'),
                    'slug'  => 'dark-gray',
                    'color' => $dark_gray,
                ),
                array(
                    'name'  => esc_html__('Gray', 'argil'),
                    'slug'  => 'gray',
                    'color' => $gray,
                ),
                array(
                    'name'  => esc_html__('White', 'argil'),
                    'slug'  => 'white',
                    'color' => $white,
                ),
                array(
                    'name'  => esc_html__('Black', 'argil'),
                    'slug'  => 'black',
                    'color' => $black,
                ),
                array(
                    'name'  => esc_html__('Green', 'argil'),
                    'slug'  => 'green',
                    'color' => $green,
                ),
                array(
                    'name'  => esc_html__('Purple', 'argil'),
                    'slug'  => 'purple',
                    'color' => $purple,
                ),
                array(
                    'name'  => esc_html__('Orange', 'argil'),
                    'slug'  => 'orange',
                    'color' => $orange,
                ),
                array(
                    'name'  => esc_html__('Yellow', 'argil'),
                    'slug'  => 'yellow',
                    'color' => $yellow,
                ),
                // array(
                // 	'name'  => esc_html__('Leman', 'argil'),
                // 	'slug'  => 'leman',
                // 	'color' => $leman,
                // ),
                // array(
                // 	'name'  => esc_html__('Canard', 'argil'),
                // 	'slug'  => 'canard',
                // 	'color' => $canard,
                // ),
            )
        );

        add_theme_support(
            'editor-gradient-presets',
            array(
                array(
                    'name'     => esc_html__('Purple to yellow', 'argil'),
                    'gradient' => 'linear-gradient(90deg, ' . $blue . ' 0%, ' . $dark_blue . ' 100%)',
                    'slug'     => 'purple-to-yellow',
                ),
                // array(
                // 	'name'     => esc_html__('Yellow to purple', 'argil'),
                // 	'gradient' => 'linear-gradient(160deg, ' . $yellow . ' 0%, ' . $purple . ' 100%)',
                // 	'slug'     => 'yellow-to-purple',
                // ),
                // array(
                // 	'name'     => esc_html__('Green to yellow', 'argil'),
                // 	'gradient' => 'linear-gradient(160deg, ' . $green . ' 0%, ' . $yellow . ' 100%)',
                // 	'slug'     => 'green-to-yellow',
                // ),
                // array(
                // 	'name'     => esc_html__('Yellow to green', 'argil'),
                // 	'gradient' => 'linear-gradient(160deg, ' . $yellow . ' 0%, ' . $green . ' 100%)',
                // 	'slug'     => 'yellow-to-green',
                // ),
                // array(
                // 	'name'     => esc_html__('Red to yellow', 'argil'),
                // 	'gradient' => 'linear-gradient(160deg, ' . $red . ' 0%, ' . $yellow . ' 100%)',
                // 	'slug'     => 'red-to-yellow',
                // ),
                // array(
                // 	'name'     => esc_html__('Yellow to red', 'argil'),
                // 	'gradient' => 'linear-gradient(160deg, ' . $yellow . ' 0%, ' . $red . ' 100%)',
                // 	'slug'     => 'yellow-to-red',
                // ),
                // array(
                // 	'name'     => esc_html__('Purple to red', 'argil'),
                // 	'gradient' => 'linear-gradient(160deg, ' . $purple . ' 0%, ' . $red . ' 100%)',
                // 	'slug'     => 'purple-to-red',
                // ),
                // array(
                // 	'name'     => esc_html__('Red to purple', 'argil'),
                // 	'gradient' => 'linear-gradient(160deg, ' . $red . ' 0%, ' . $purple . ' 100%)',
                // 	'slug'     => 'red-to-purple',
                // ),
            )
        );

        /*
		* Adds starter content to highlight the theme on fresh sites.
		* This is done conditionally to avoid loading the starter content on every
		* page load, as it is a one-off operation only needed once in the customizer.
		*/

        // if (is_customize_preview()) {
        //     require get_template_directory() . '/inc/starter-content.php';
        //     add_theme_support('starter-content', argil_get_starter_content());
        // }

        // Add support for responsive embedded content.
        add_theme_support('responsive-embeds');
        // Add support for custom line height controls.
        add_theme_support('custom-line-height');
        // Add support for experimental link color control.
        add_theme_support('experimental-link-color');
        // Add support for experimental cover block spacing.
        add_theme_support('custom-spacing');

        // Add support for custom units.
        // This was removed in WordPress 5.6 but is still required to properly support WP 5.5.
        add_theme_support('custom-units');

        // Remove feed icon link from legacy RSS widget.
        add_filter('rss_widget_feed_link', '__return_false');
    }
}
add_action('after_setup_theme', 'argil_setup');

/**
 * Register widget area.
 *
 * @since argil 1.0
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 *
 * @return void
 */
function argil_widgets_init()
{

    register_sidebar(
        array(
            'name'          => esc_html__('Footer', 'argil'),
            'id'            => 'sidebar-1',
            'description'   => esc_html__('Add widgets here to appear in your footer.', 'argil'),
            'before_widget' => '<section id="%1$s" class="widget %2$s">',
            'after_widget'  => '</section>',
            'before_title'  => '<h2 class="widget-title">',
            'after_title'   => '</h2>',
        )
    );
}
add_action('widgets_init', 'argil_widgets_init');

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @since argil 1.0
 *
 * @global int $content_width Content width.
 *
 * @return void
 */
function argil_content_width()
{
    // This variable is intended to be overruled from themes.
    // Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
    // phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
    $GLOBALS['content_width'] = apply_filters('argil_content_width', 760);
}
add_action('after_setup_theme', 'argil_content_width', 0);


/**
 * Fix skip link focus in IE11.
 *
 * This does not enqueue the script because it is tiny and because it is only for IE11,
 * thus it does not warrant having an entire dedicated blocking script being loaded.
 *
 * @since argil 1.0
 *
 * @link https://git.io/vWdr2
 */
function argil_skip_link_focus_fix()
{
    // If SCRIPT_DEBUG is defined and true, print the unminified file.
    if (defined('SCRIPT_DEBUG') && SCRIPT_DEBUG) {
        echo '<script>';
        include get_template_directory() . '/assets_alt/js/skip-link-focus-fix.js';
        echo '</script>';
    } else {
        // The following is minified via `npx terser --compress --mangle -- assets_alt/js/skip-link-focus-fix.js`.
?>
        <script>
            /(trident|msie)/i.test(navigator.userAgent) && document.getElementById && window.addEventListener && window.addEventListener("hashchange", (function() {
                var t, e = location.hash.substring(1);
                /^[A-z0-9_-]+$/.test(e) && (t = document.getElementById(e)) && (/^(?:a|select|input|button|textarea)$/i.test(t.tagName) || (t.tabIndex = -1), t.focus())
            }), !1);
        </script>
    <?php
    }
}
add_action('wp_print_footer_scripts', 'argil_skip_link_focus_fix');


/**
 * Enqueue non-latin language styles.
 *
 * @since argil 1.0
 *
 * @return void
 */
function argil_non_latin_languages()
{
    $custom_css = argil_get_non_latin_css('front-end');

    if ($custom_css) {
        wp_add_inline_style('argil-style', $custom_css);
    }
}
add_action('wp_enqueue_scripts', 'argil_non_latin_languages');


// Assets Enqueuing
require_once get_template_directory() . '/inc/assets-enqueuing.php';
// Custom ADA Plugins Requirements
// require_once get_template_directory() . '/inc/required-plugins.php';
// Customize additional global infos fields
require_once get_template_directory() . '/inc/customize.php';
// Navigations Setup
require_once get_template_directory() . '/inc/navigation.php';

// 2021
// SVG Icons class.
require get_template_directory() . '/classes/class-argil-svg-icons.php';
// Custom color classes.
require get_template_directory() . '/classes/class-argil-custom-colors.php';
new argil_Custom_Colors();
// Enhance the theme by hooking into WordPress.
require get_template_directory() . '/inc/template-functions.php';
// Menu functions and filters.
require get_template_directory() . '/inc/menu-functions.php';
// Custom template tags for the theme.
require get_template_directory() . '/inc/template-tags.php';
// Customizer additions.
require get_template_directory() . '/classes/class-argil-customize.php';
new argil_Customize();
// Block Patterns.
// require get_template_directory() . '/inc/block-patterns.php';
// Block Styles.
// require get_template_directory() . '/inc/block-styles.php';
// Dark Mode.
require_once get_template_directory() . '/classes/class-argil-dark-mode.php';
new argil_Dark_Mode();


/**
 * Enqueue scripts for the customizer preview.
 *
 * @since argil 1.0
 *
 * @return void
 */
function argil_customize_preview_init()
{
    wp_enqueue_script(
        'argil-customize-helpers',
        get_theme_file_uri('/assets_alt/js/customize-helpers.js'),
        array(),
        wp_get_theme()->get('Version'),
        true
    );

    wp_enqueue_script(
        'argil-customize-preview',
        get_theme_file_uri('/assets_alt/js/customize-preview.js'),
        array('customize-preview', 'customize-selective-refresh', 'jquery', 'argil-customize-helpers'),
        wp_get_theme()->get('Version'),
        true
    );
}
add_action('customize_preview_init', 'argil_customize_preview_init');

/**
 * Enqueue scripts for the customizer.
 *
 * @since argil 1.0
 *
 * @return void
 */
function argil_customize_controls_enqueue_scripts()
{
    wp_enqueue_script(
        'argil-customize-helpers',
        get_theme_file_uri('/assets_alt/js/customize-helpers.js'),
        array(),
        wp_get_theme()->get('Version'),
        true
    );
}
add_action('customize_controls_enqueue_scripts', 'argil_customize_controls_enqueue_scripts');


/**
 * Calculate classes for the main <html> element.
 *
 * @since argil 1.0
 *
 * @return void
 */
function argil_the_html_classes()
{
    /**
     * Filters the classes for the main <html> element.
     *
     * @since argil 1.0
     *
     * @param string The list of classes. Default empty string.
     */
    $classes = apply_filters('argil_html_classes', '');
    if (!$classes) {
        return;
    }
    echo 'class="' . esc_attr($classes) . '"';
}

/**
 * Add "is-IE" class to body if the user is on Internet Explorer.
 *
 * @since argil 1.0
 *
 * @return void
 */
add_action('wp_footer', 'argil_add_ie_class');
function argil_add_ie_class()
{
    ?>
    <script>
        if (-1 !== navigator.userAgent.indexOf('MSIE') || -1 !== navigator.appVersion.indexOf('Trident/')) {
            document.body.classList.add('is-IE');
        }
    </script>
<?php
}

// REMOVALS FOR WP CLEANUP
// Remove emoji support
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');
// Remove RSS feed links
remove_action('wp_head', 'feed_links_extra', 3);
remove_action('wp_head', 'feed_links', 2);
// Remove WP-Embed
add_action('wp-footer', function () {
    wp_dequeue_script('wp-embed');
});
// Remove
add_action('wp_enqueue_scripts', function () {
    // wp_dequeue_style('wp-block-library');
    wp_dequeue_script('comment-reply');
});

/*  DISABLE GUTENBERG STYLE IN HEADER| WordPress 5.9 */
add_action('wp_enqueue_scripts', 'wps_deregister_styles', 100);
function wps_deregister_styles()
{
    wp_dequeue_style('global-styles');
}

add_action('parse_query', 'fix_request_redirect');
function fix_request_redirect($request)
{
    if (
        isset($request->query_vars['post_type'])
        && 'ada_labs' === $request->query_vars['post_type']
        && true === $request->is_singular
        && -1 == $request->current_post
        && true === $request->is_paged
    ) {
        add_filter('redirect_canonical', '__return_false');
    }

    return $request;
}

// PHP MAILER CONFIG
// add_action('phpmailer_init', 'send_smtp_email');
// function send_smtp_email($phpmailer)
// {
//     $phpmailer->isSMTP();
//     $phpmailer->Host = SMTP_HOST;
//     $phpmailer->SMTPAuth = SMTP_AUTH;
//     $phpmailer->Port = SMTP_PORT;
//     $phpmailer->Username = SMTP_USER;
//     $phpmailer->Password = SMTP_PASS;
//     $phpmailer->SMTPSecure = SMTP_SECURE;
//     $phpmailer->From = SMTP_FROM;
//     $phpmailer->FromName = SMTP_NAME;
// }

// ADD FEATURED IMAGE TO RSS
add_filter('the_content_feed', 'featured_image_in_feed');
add_filter('the_excerpt_rss', 'featured_image_in_feed');
function featured_image_in_feed($content)
{
    global $post, $wp_query;
    if (!$wp_query->is_comment_feed) {
        if (has_post_thumbnail($post->ID)) {
            $output = get_the_post_thumbnail($post->ID, 'medium', array('style' => 'float:right; margin:0 0 10px 10px;'));
            $content = $output . $content;
        }
    }
    return $content;
}


// ALLOWED USERS TO SEE UPDATES
function site_hide_updates_allowed_users()
{
    $allowed_users = array('admin', 'ImagingCenterAdmin');
    return $allowed_users;
}
add_filter('hide_updates_allowed_users', 'site_hide_updates_allowed_users');

// add_action('admin_head', 'custom_admin_css');
// function custom_admin_css()
// {
//     echo '<style type="text/css">
//     /* Main column width */
//     .wp-block {
//         max-width: 720px;
//     }

//     /* Width of "wide" blocks */
//          .wp-block[data-align="wide"] {
//          max-width: 1080px;
//     }

//     /* Width of "full-wide" blocks */
//     .wp-block[data-align="full"] {
//         max-width: none;
//     }
//     </style>';
// }
