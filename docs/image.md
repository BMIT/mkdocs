# Image Compression Tool

Our Image Compression Tool allows you to optimize images by watching a specific directory for new images or a text file containing image URLs. Once detected, the tool will automatically compress and resize the images.

## How to Use

### Direct File Drop

1. Navigate to the shared folder: [\\\\bm-us012\\webimage\\original](file://bm-us012/webimage/original)
2. Drop your image files (JPEG, PNG) into this folder.
3. The tool will automatically detect, compress, and resize the images.
4. Retrieve the optimized images from: [\\\\bm-us012\\webimage\optimised](\\bm-us012\webimage\optimised)

### Drop a Text File with Image path

1. Create a text file named `image-list.txt`.
2. Add the Sitecore media paths or direct image URLs, one per line.
>Sitecore Media Path: /sitecore/media library/...
>
>Direct Image URL: https://...
3. Drop the `image-list.txt` file into the shared folder: [\\\\bm-us012\\webimage\\original](file://bm-us012/webimage/original)
4. The tool will process each image URL, compress, and resize them.
5. Retrieve the optimized images from: [\\\\bm-us012\\webimage\optimised](file://bm-us012/webimage)
6. The `image-list.txt` will be renamed to `image-list-compressed-[DateTime].txt` once processing is complete.

#### Retrieving Image Paths

##### From Sitecore

1. Navigate to the desired image in Sitecore.
2. Right-click and select "Copy Media Path".

##### From a Web Browser

1. Right-click on the image.
2. Select "Copy Image Address" or similar option.

## Maintenance

Every Sunday, a script will automatically clean both the original and optimized image folders.

## Troubleshooting

If an image URL fails to process, it will be noted in the `image-list.txt` file. Check the file for any errors or failed URLs.
