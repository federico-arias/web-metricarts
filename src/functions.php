<?php
add_theme_support( 'post-thumbnails' );

function metric_comment($comment, $args, $depth) {
    if ( 'div' === $args['style'] ) {
        $tag       = 'div';
        $add_below = 'comment';
    } else {
        $tag       = 'li';
        $add_below = 'div-comment';
    }
    ?>
	<div class="comment"id="comment-<?php comment_ID() ?>">
		<div class="comment__decorator__up__text"></div>
		<div class="comment__image"></div>
		<div class="comment__decorator__text__author">
			<?php echo get_comment_author_link(); ?>
		</div>

		<div class="comment__decorator__text__data">
			<?php printf( __('%1$s a las %2$s'), get_comment_date(),  get_comment_time() ); ?>
		</div>  

		<div class="comment__decorator__text">
			<?php comment_text(); ?>
		</div>
	</div>
<?php }
