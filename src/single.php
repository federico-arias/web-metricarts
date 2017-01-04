	<?php get_header(); ?>

		<!--************Single************-->

		<div class="servicios">
			<div class="servicios__header">
				<div class="servicios__header__top_decorator">
				</div>
				<div class="servicios__header__top_right_decorator">
				</div>

				<?php while ( have_posts() ) : the_post(); ?>

				<div class="servicios__header__title">
					<?php the_title( '<h1>', '</h1>' ); ?>
				</div>
				<div class="servicios__header__bottom_right_decorator">
				</div>
			</div>
		</div>
		<div class="single">
			<div class="single__text__date">
				Publicado por <?php echo get_the_author(); ?><br>
				el <?php the_time( get_option( 'date_format' ) ); ?><br>
			</div>
			<div class="single__illustration">    </div>


			<div class="single__sidebar"> 
				<div class="single__sidebar__decorator__up"></div>
				<div class="single__sidebar__title">Redes sociales</div>
				<div class="single__sidebar__decorator__up"></div>
				<div class="single__icons">
					<a href="https://www.facebook.com/metricarts/" target="blank"><img src="res/facebook.png"> </a>
				</div>
				<div class="single__sidebar__decorator"></div>
				<div class="single__sidebar__title">Últimos Post</div>
				<div class="single__sidebar__decorator__up"></div>
				LOOP
				<div class="single__post">
					LATEST POSTS
				</div>
				END LOOP
				<div class="single__sidebar__decorator"></div>
			</div>

			<div class="single__text__description">
				<?php the_content(); ?>
			</div>
		</div>
	</div>
<?php endwhile; ?>

<?php get_footer(); ?>
