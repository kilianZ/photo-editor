# photo-editor
Web Based Photo Editor 

# Specifications 

Every "Edit" is called a filter, for example, making a brightness adjustment adds a filter, grayscaling the image adds another filter on top of that filter. 

The Original Image is kept, and modified with a filter corresponding to each edit. The Undo Method simply pops these filters off the stack, and adds them to the redo() stack?

Pixlr Features: 

Arrange (Layer Image) 
- Create Layers (Duplicate Layer, Delet Layer)
- Change Opacity (Slider) 
- Transform (drag & drop)
- Rotate (Slider) 
- Flip Horizontal 
- Flip Vertical 

Crop 
- Set Width (input) 
- Set Height (input), gives bounding box which can be moves around
- Fixed Ratio Crop Box, select aspect ratio or size ratio 

Adjust 
(Color) 
- Vibrance 
- Saturation 
- Temperature 
- Tint
- Hue 
(Light) 
- Brightness 
- Exposure 
- Contrast 
- Black 
- White 
- Highlights 
- Shadows 
(Details)
- Sharpen 
- Clairty 
- Smooth 
- Blur
- Grain 
(Scene) 
- Vignette 
- Glamour 
- Bloom 
- Dehaze 

Compare Button to Switch Between Current Image and Preview 

Effects/Filters 

Retouch Tool 

Drawing Tools (Color Selection) 

# Organization 

```
photo-editor/
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── main.js
│   ├── filters.js
│   ├── utils.js
└── assets/
    └── (optional: images, fonts, or other resources)
```

