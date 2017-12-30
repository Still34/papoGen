// Separate from JSON/YAML format
// be the indie style
const fh = require("filehound");
const fsx = require("fs-extra");
const jsyaml = require("js-yaml");
const path = require("path");
const mkdirp = require("mkdirp");
const moment = require("moment");
const pug = require("pug");
const os = require("os");
const fs = require("fs");

const template_api = require('./template');
const utils = require('./utils');
const compile_engine_md = {}; 

compile_engine_md.gen_doc_md = function(src_path,title,out_path){
    // fetch and generate
    const files = fh.create().paths(src_path).ext('md').find((err,files) => {
        if(err)
            return;
        else{
            // strip out the files under node_modules
            for(var index=0;;index++){
                if(files[index] == undefined) break;
                if(files[index].indexOf('node_modules') != -1){
                    files.splice(index,1);
                    index--;
                }
            }
            // list out existed -> files 
            console.log("After exclude useless md:")
            console.dir(files);
            let fnamelist = utils.fetch(files,"md");
            // copy the buffer to dest
            utils.write_buffer(out_path);
            // read file content and pack together
            let result = template_api.md_doc()({ title: title, namelist: fnamelist});
            // success
            console.log(`Successfully compile/render target pug files. Ready to output.`);
            // Write file 
            mkdirp(out_path,function(err){
                if(err){
                    console.error("mkdirp error!");
                    return;
                }
                else{
                    // write file to dest
                    console.log(`Result html: ${path.join(out_path,'index.html')}`);
                    fs.writeFileSync(path.join(out_path,'index.html'),result,{encoding: 'utf-8', flag: 'w'});
                    // copy asset to dest
                    console.log(`Source asset path: ${path.join(__dirname,'asset')}`);
                    console.log(`Output asset path: ${path.join(out_path,'asset')}`);
                    fsx.copySync(path.join(__dirname,'asset'),path.join(out_path,'asset'));
                }
            })
        }
    });
}

module.exports = compile_engine_md;