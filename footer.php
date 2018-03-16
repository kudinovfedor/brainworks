</div><!-- .page-wrapper end-->

<footer class="footer">
    <?php if (is_active_sidebar('footer-widget-area')) : ?>
        <div class="pre-footer">
            <div class="container">
                <div class="row">
                    <?php dynamic_sidebar('footer-widget-area'); ?>
                </div>
            </div>
        </div><!-- .pre-footer end-->
    <?php endif; ?>

    <div class="copyright">
        <p class="container">
            <?php _e('Developed by', 'brainworks') ?>
            <a href="https://brainworks.com.ua/" target="_blank">BRAIN WORKS</a>
            &copy; <?php echo date('Y'); ?>
        </p>
    </div>
</footer>

</div><!-- .wrapper end-->

<?php scroll_top(); ?>

<?php if (is_customize_preview()) { ?>
    <button class="button-small customizer-edit" data-control='{ "name":"bw_scroll_top_display" }'>
        <?php esc_html_e('Edit Scroll Top', 'brainworks'); ?>
    </button>
    <button class="button-small customizer-edit" data-control='{ "name":"bw_analytics_google_placed" }'>
        <?php esc_html_e('Edit Analytics Tracking Code', 'brainworks'); ?>
    </button>
    <button class="button-small customizer-edit" data-control='{ "name":"bw_login_logo" }'>
        <?php esc_html_e('Edit Login Logo', 'brainworks'); ?>
    </button>
<?php } ?>

<?php
$svg_sprite = get_template_directory() . '/img/svg-sprite.svg';

if (file_exists($svg_sprite) && filesize($svg_sprite) > 0) { ?>
    <div class="is-hide"><?php require_once($svg_sprite); ?></div>
<?php } ?>

<?php wp_footer(); ?>

</body>
</html>
