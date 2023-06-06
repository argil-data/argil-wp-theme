<?php

/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage argil
 * @since argil 1.0
 */

$site_info = get_theme_mod('argil_site_info', 'argil');

?>

</main><!-- #main -->
</div><!-- #primary -->
</div><!-- #content -->

<?php get_template_part('template-parts/footer/footer-widgets'); ?>

<div class="w-full bg-marine-500">

    <!-- .site-footer -->
    <footer id="colophon" class="site-footer w-full py-16 ">

        <div class="site-info grid grid-flow-row lg:grid-cols-4 text-white py-8">

            <div class="o-container w-full text-left text-white p-2">
                <?php if ($site_info) { ?>
                    <?php

                    $allowed = array('a' => array(
                        'href' => array(),
                        'title' => array()
                    ));
                    ?>
                    <credit class="text-xs"> &copy; <?php echo date("Y"); ?> <?php echo wp_kses($site_info, $allowed); ?></credit>
                <?php } ?>
            </div>

            <!-- <div class="site-name">
                <?php if (has_custom_logo()) : ?>
                    <div class="site-logo text-white"><?php the_custom_logo(); ?></div>
                <?php else : ?>
                    <?php if (get_bloginfo('name') && get_theme_mod('display_title_and_tagline', true)) : ?>
                        <?php if (is_front_page() && !is_paged()) : ?>
                            <?php bloginfo('name'); ?>
                        <?php else : ?>
                            <a href="<?php echo esc_url(home_url('/')); ?>"><?php bloginfo('name'); ?></a>
                        <?php endif; ?>
                    <?php endif; ?>
                <?php endif; ?>
            </div> -->
            <!-- .site-name -->

            <?php if (has_nav_menu('footer')) : ?>
                <nav aria-label="<?php esc_attr_e('Secondary menu', 'argil'); ?>" class="footer-navigation text-white w-full">
                    <ul class="footer-navigation-wrapper flex-col pt-4">
                        <?php
                        wp_nav_menu(
                            array(
                                'theme_location' => 'footer',
                                'items_wrap'     => '%3$s',
                                'container'      => false,
                                'depth'          => 1,
                                'link_before'    => '<span>',
                                'link_after'     => '</span>',
                                'fallback_cb'    => false,
                            )
                        );
                        ?>
                    </ul><!-- .footer-navigation-wrapper -->
                </nav><!-- .footer-navigation -->
            <?php endif; ?>

            <?php
            if (function_exists('the_privacy_policy_link')) {
                the_privacy_policy_link('<div class="privacy-policy">', '</div>');
            }
            ?>

            <div class="powered-by w-full text-white text-left">

                <p class="pt-2 px-4">Follow us</p>

                <!-- <span>
                    < ?php
                    printf(
                        /* translators: %s: WordPress. */
                        esc_html__('Proudly powered by %s.', 'argil'),
                        '<a href="' . esc_url(__('https://wordpress.org/', 'argil')) . '">WordPress</a>'
                    );
                    ?>
                </span> -->

                <?php if (has_nav_menu('social')) : ?>
                    <nav aria-label="<?php esc_attr_e('Networks menu', 'argil'); ?>" class="footer-navigation text-white">
                        <ul class="grid grid-cols-6 gap-x-0.5 list-none">
                            <?php
                            wp_nav_menu(
                                array(
                                    'theme_location' => 'social',
                                    'menu_class'     => 'grid grid-cols-4 gap-x-0.5',
                                    'items_wrap'     => '%3$s',
                                    'container'      => false,
                                    'depth'          => 1,
                                    'link_before'    => '<span class"mx-2">',
                                    'link_after'     => '</span>',
                                    'fallback_cb'    => false,
                                    'add_li_class'   => 'drop-shadow-md hover:drop-shadow-xl'
                                )
                            );
                            ?>
                        </ul><!-- .footer-navigation-wrapper -->
                    </nav><!-- .footer-navigation -->
                <?php endif; ?>
            </div><!-- .powered-by -->

            <div class="p-4 flex flex-col items-end lg:grid lg:grid-cols-2">
                <!-- <img class="hidden" alt="EPFL map of the Center for Imaging" src="https://www.epfl.ch/education/studies/wp-content/uploads/2021/03/Capture-Plan-salles_EN-1152x648.jpg" /> -->
                <!-- <address class="text-sm text-white min-w-max px-2 pt-4">
					EPFL AVP CP IMAGING <br>
					BM 4142 (Bâtiment BM) <br>
					Station 17 <br>
					CH-1015 <br>
				</address> -->
            </div>

        </div><!-- .site-info -->
    </footer><!-- #colophon -->
</div>

</div><!-- #page -->

<!-- CHAT BUTTON -->
<!-- 
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 6">
    <path d="M12 6H0l6-6z" />
</svg> 
-->
<!-- <a class="top-link hide" href="/help/" target="_blank" id="js-top">
	<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="88" height="88" viewBox="0 0 88 88">
		<defs>
			<filter id="Tracé_1166" x="17.903" y="24.927" width="52.193" height="42.147" filterUnits="userSpaceOnUse">
				<feOffset dx="-0.5" dy="0.5" input="SourceAlpha" />
				<feGaussianBlur stdDeviation="1.5" result="blur" />
				<feFlood flood-color="#fff" result="color" />
				<feComposite operator="out" in="SourceGraphic" in2="blur" />
				<feComposite operator="in" in="color" />
				<feComposite operator="in" in2="SourceGraphic" />
			</filter>
		</defs>
		<g id="Groupe_449" data-name="Groupe 449" transform="translate(-222 -99)">
			<circle id="Ellipse_258" data-name="Ellipse 258" cx="44" cy="44" r="44" transform="translate(222 99)" fill="#fbc226" />
			<g id="Groupe_448" data-name="Groupe 448" transform="translate(239.903 123.927)">
				<g id="Groupe_403" data-name="Groupe 403" transform="translate(0 0)">
					<g id="Groupe_401" data-name="Groupe 401">
						<path id="Tracé_1165" data-name="Tracé 1165" d="M1328.406,966.38h-47.133a2.531,2.531,0,0,0-2.532,2.532v25.83a2.531,2.531,0,0,0,2.532,2.529h15.848a2.089,2.089,0,0,1,2.088,2.088v6.035h-3.454a1.567,1.567,0,0,0,0,3.134h18.166a1.567,1.567,0,1,0,0-3.134h-3.455v-6.035a2.089,2.089,0,0,1,2.088-2.088H1328.4a2.531,2.531,0,0,0,2.532-2.529v-25.83A2.531,2.531,0,0,0,1328.406,966.38Zm-16.259,19.338a.947.947,0,0,1-.945.949h-.515a.96.96,0,0,0-.6.214l-2.83,2.318a.381.381,0,0,1-.537-.052.4.4,0,0,1-.088-.256l.062-1.829a.383.383,0,0,0-.369-.395h-9.953a.947.947,0,0,1-.949-.945v-7.935a.947.947,0,0,1,.949-.945H1311.2a.944.944,0,0,1,.945.945Z" transform="translate(-1278.741 -966.38)" fill="#fff" />
					</g>
					<g id="Groupe_402" data-name="Groupe 402">
						<g data-type="innerShadowGroup">
							<path id="Tracé_1166-2" data-name="Tracé 1166" d="M1328.406,966.38h-47.133a2.531,2.531,0,0,0-2.532,2.532v25.83a2.531,2.531,0,0,0,2.532,2.529h15.848a2.089,2.089,0,0,1,2.088,2.088v6.035h-3.454a1.567,1.567,0,0,0,0,3.134h18.166a1.567,1.567,0,1,0,0-3.134h-3.455v-6.035a2.089,2.089,0,0,1,2.088-2.088H1328.4a2.531,2.531,0,0,0,2.532-2.529v-25.83A2.531,2.531,0,0,0,1328.406,966.38Zm-16.259,19.338a.947.947,0,0,1-.945.949h-.515a.96.96,0,0,0-.6.214l-2.83,2.318a.381.381,0,0,1-.537-.052.4.4,0,0,1-.088-.256l.062-1.829a.383.383,0,0,0-.369-.395h-9.953a.947.947,0,0,1-.949-.945v-7.935a.947.947,0,0,1,.949-.945H1311.2a.944.944,0,0,1,.945.945Z" transform="translate(-1278.741 -966.38)" fill="#fff" />
							<g transform="matrix(1, 0, 0, 1, -17.9, -24.93)" filter="url(#Tracé_1166)">
								<path id="Tracé_1166-3" data-name="Tracé 1166" d="M1328.406,966.38h-47.133a2.531,2.531,0,0,0-2.532,2.532v25.83a2.531,2.531,0,0,0,2.532,2.529h15.848a2.089,2.089,0,0,1,2.088,2.088v6.035h-3.454a1.567,1.567,0,0,0,0,3.134h18.166a1.567,1.567,0,1,0,0-3.134h-3.455v-6.035a2.089,2.089,0,0,1,2.088-2.088H1328.4a2.531,2.531,0,0,0,2.532-2.529v-25.83A2.531,2.531,0,0,0,1328.406,966.38Zm-16.259,19.338a.947.947,0,0,1-.945.949h-.515a.96.96,0,0,0-.6.214l-2.83,2.318a.381.381,0,0,1-.537-.052.4.4,0,0,1-.088-.256l.062-1.829a.383.383,0,0,0-.369-.395h-9.953a.947.947,0,0,1-.949-.945v-7.935a.947.947,0,0,1,.949-.945H1311.2a.944.944,0,0,1,.945.945Z" transform="translate(-1260.84 -941.45)" fill="#fff" />
							</g>
						</g>
					</g>
				</g>
			</g>
		</g>
	</svg>
	<span class="screen-reader-text">Chat with the Image Analysis HUB.</span>
</a> -->

<?php wp_footer(); ?>

</body>

</html>