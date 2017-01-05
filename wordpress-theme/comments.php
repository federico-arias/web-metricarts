<div id="comments" style="background-color: red;">
  <?php if(have_comments()) : ?>
    <h2> 
    <?php 
      printf(_n( 'Comentario', 'Comentarios', get_comments_number(), 'Metricarts' ),
       number_format_i18n( get_comments_number()), get_the_title());
     ?> 
    </h2>

  <?php if(get_comment_pages_count() > 1 && get_option('page_comments')) : ?>
    <nav>
      <h1><?php _e('Comment navigation', 'Metricarts'); ?></h1>
      <div><?php previous_comments_link(__('Comentarios anteriores', 'Metricarts')); ?></div>
      <div><?php next_comments_link(__('Comentarios nuevos', 'Metricarts'));?></div>
    </nav>
  <?php endif; ?>

  <ol>
    <?php wp_list_comments( array( 'style' => 'ol', 'short_ping' => true, 'avatar_size' => 34 )); ?>
  </ol>

  <?php if(get_comment_pages_count() > 1 && get_option('page_comments')) : ?>
    <nav>
      <h1><?php _e('Comment navigation', 'Metricarts'); ?></h1>
      <div><?php previous_comments_link(__('Comentarios anteriores', 'Metricarts')); ?></div>
      <div><?php next_comments_link(__('Comentarios nuevos', 'Metricarts'));?></div>
    </nav>
  <?php endif; ?>

  <?php if(!comments_open()) : ?>
    <p><?php _e('Comments are closed.', 'Metricarts'); ?></p>
  <?php endif; ?>

  <?php endif; ?>

  <?php comment_form(); ?>
</div>