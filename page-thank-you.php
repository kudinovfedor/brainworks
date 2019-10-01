<?php
/**
 * Template Name: Thank You Page
 **/
?>

<?php get_header(); ?>
<div class="container">

<?php get_template_part('loops/content', 'page'); ?>

<a href="<?php echo esc_url(home_url('/')); ?>" class="btn btn-secondary btn-lg">
    <?php _e('Back to the homepage', 'brainworks'); ?>
</a>

</div><!-- /.container -->
<?php get_footer(); ?>
