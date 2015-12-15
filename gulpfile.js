var fs = require("fs"),
    gulp = require("gulp"),
    browserify = require("browserify"),
    watchify = require("watchify"),
    babelify = require("babelify");

function compile(watch) {
    var b = browserify({ debug: true })
        .transform(babelify, { presets : [ "es2015" ]})
        .require("./app.js", { entry: true });
        
    function bundle() {
        console.log("Writing Bundle");
        b.bundle()
            .on("error", function (err) { console.log("Error: " + err.message);})
            .pipe(fs.createWriteStream("bundle.js"));
    }
    
    if (watch) {
        b.plugin(watchify);
        b.on("update", bundle);
    }

    bundle();
};
    
gulp.task("build", function() { return compile(); });
gulp.task("watch", function() { return compile(true); });

gulp.task("default", ["watch"]);