<?php

function argil_customize_register($wp_customize)
{
    $wp_customize->add_section('argil_footer_options', array(
        'title' => esc_html__('Footer Options', 'argil'),
        'description' => esc_html__('You can change footer options from here.', 'argil'),
        'priority' => 105,
    ));

    $wp_customize->add_setting('argil_site_info', array(
        'default' => '',
        'sanitize_callback' => 'argil_sanitize_site_info',

    ));

    $wp_customize->add_control('argil_site_info', array(
        'type' => 'text',
        'label' => esc_html__('Site Info', 'argil'),
        'section' => 'argil_footer_options',
    ));
}

add_action('customize_register', 'argil_customize_register');

function argil_sanitize_site_info($input)
{
    $allowed = array('a' => array(
        'href' => array(),
        'title' => array()
    ));
    return wp_kses($input, $allowed);
}
