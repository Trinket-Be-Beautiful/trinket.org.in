<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wordpress');

/** MySQL database username */
define('DB_USER', 'wordpress_user');

/** MySQL database password */
define('DB_PASSWORD', 'wordpress_password');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'jEs)I,T!kiy@CS,>Q)Da7x_9fc8y_HcoZKL9Jyc+2r6UPug/?}dJy<PmIBMMcUo#');
define('SECURE_AUTH_KEY',  '1a*`0/.x^%$XTBE6tG-yOeKR<$:tW.M<q6eMF+P]yFAU20R9+bcn[Wi 7q-r>gad');
define('LOGGED_IN_KEY',    'ua<8([[dTK]]~7_qpFxd3E+zYE5S[ls)/G(>0Rs2IeM>.]a4cQfgBn1(@1Wrsh{{');
define('NONCE_KEY',        ')P49GJLC^lzPUpWO20mtz=h2$c}e56V lNcZXV$ |)=CQ& !J}wH7nl=G9-uamB`');
define('AUTH_SALT',        'r!sx5>3^Gf8NCJv.<(Emr=G)JV7en-HUUMc,_>HdZ~:1z>n57D0/WY?iij`8-Dg)');
define('SECURE_AUTH_SALT', ' M&snQZkV6`m!kBTs,,Z^4b~r~7gw_`bX<Z|c&Wd*y!^2*0DU8|xu!x6FbT~zH!V');
define('LOGGED_IN_SALT',   'S=[lVEwtc{P@<.POKj}=N&$-TK72LP0&e/Nyx->QT#*]O,R6sZ0ouy(&pSlK;~i-');
define('NONCE_SALT',       '<w$vr(|7[|Tj-6fBS9ilO!-%T1<Zf,Bn%8`5LM}ce~ea/p=Vwu/<R+X6o]YG?j+1');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
