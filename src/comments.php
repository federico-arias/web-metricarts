<div class="title__comment">
	<?php if(have_comments()) : ?>
		<?php 
		  printf(_n( 'comentario', 'comentarios', get_comments_number(), 'para esta publicación' ),
		   number_format_i18n( get_comments_number()), get_the_title())
		 ?> 
	<?php endif ?>
</div>

<?php wp_list_comments( 'type=comment&callback=metric_comment' ); ?>

<!--
<div class="title__comment">Deja un comentario</div>

<?php echo comment_form(); ?>

