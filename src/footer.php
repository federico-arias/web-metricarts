		<footer>
			<div class="footer__header__decorator">
			</div>
			<div class="mini-menus">
				<div class="mini-menu">
					<h2>Quiénes somos</h2>
					<ul>
<?php
$opts= array(
	'child_of'=> 9815,
	'title_li' => NULL
);
wp_list_pages( $opts );
?>
					</ul>
				</div>
				<div class="mini-menu">
					<h2>Qué hacemos</h2>
					<ul>
<?php
$popts = array(
	'numberposts' => 5,
	'category' => 3
);
$ps = get_posts( $popts );
foreach( $ps as $p ) {  ?>
			<li> 
				<a href="<?php echo get_permalink($p);?>">
				<?php echo $p->post_title; ?>
				</a>
			</li>
<?php
}
wp_reset_postdata();
?>
					</ul>
				</div>
				<div class="mini-menu">
					<h2>Holding</h2>
					<ul>
						<li><a href="#">ProcessArts</a></li>
						<li><a href="#">MetricLearning</a></li>
						<li><a href="#">Data Science Spa</a></li>
					</ul>
				</div>
			</div>
			<div class="contacto">
				<p>Nueva Tajamar 555 Oficina 1501 / Las Condes - Santiago - Chile  <img class="chile"/></p>
				<p>Calle Miguel Dasso 134, Oficina 201, San Isidro - Lima - Perú  <img class="peru"/></p> 
				<p>Marbella, Plaza New York, piso 1, oficina 101, Panama  <img class="panama"/></p>
				<br>
				<p>Phone (56) (2) 2948 96 81 / (51) (1) 641 92 07 / (507) 65338150 / contacto@metricarts.com</p>
			</div>
			<div class="copyright">
				<p>Copyright © 2016 Metric Arts, Inc.</p>
				<p>Todos los derechos reservados.</p>
			</div>
		</footer>

		<script src="<?php echo get_stylesheet_directory_uri() . '/main.js'; ?>"></script>
		</body>
</html>
