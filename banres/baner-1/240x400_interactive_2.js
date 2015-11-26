(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 24,
	color: "#FEBD00",
	manifest: [
		{src:"./images/small_cinema.png", id:"small_cinema"},
		{src:"./images/small_tv.png", id:"small_tv"},
		{src:"./images/tv.jpg", id:"tv"}
	]
};



// symbols:



(lib.small_cinema = function() {
	this.initialize(img.small_cinema);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,58,92);


(lib.small_tv = function() {
	this.initialize(img.small_tv);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,148,101);


(lib.tv = function() {
	this.initialize(img.tv);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,235);


(lib.youcan = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(87.4,23.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,174.9,47.1);


(lib.want = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(95.7,27.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,191.3,55.5);


(lib.Symbol8 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FC8200").s().p("AxrD3MAjXgHtIAAHtg");
	this.shape.setTransform(129.8,24.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(16.5,0,226.5,49.5);


(lib.Symbol7 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AADBjIBmhjIhjhiAhoAAIDMAA");
	this.shape.setTransform(30.5,30.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A2C72").s().p("AjWDXQhahZAAh+QAAh9BahZQBZhaB9AAQB+AABZBaQBaBZAAB9QAAB+haBZQhZBah+AAQh9AAhZhagAADBjIBmhjIhihiIBiBigABkAAIjMAAg");
	this.shape_1.setTransform(30.5,30.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,61,61);


(lib.Symbol5 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.small_cinema();
	this.instance.setTransform(58,0,1,1,0,0,180);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,58,92);


(lib.Symbol4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.small_cinema();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,58,92);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FC8200").s().p("AzhqzMAnDAAAIAANXMgnDAIQg");
	this.shape.setTransform(125,69.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,250,138.5);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.small_tv();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,148,101);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhLCIQgigTADhCIAHiKQABgHgCgGIgCgDIBSgVIACAAQAEACABAHQABAIgDAYQgCAUADANQABAEADAFIAIAIQAIAKABAKQAFASgMAWQgDALgHAHQgFAGABAGQABAFAEABQAHADAFgFQAJgFADgPQAIgfAPgTQAJgMAPgNQAEgMAAgNQABgSgGgMQgBgCgFADQgHAEgEgBQgFAAgIgGIgNgMQgDgDABgIQABgGAEgHQACgDADgDQADgDAFgBQAlgKANAHQAEADADAHIAEANQAbBwgiBDQgPAdgYATQgVASgcAIQgWAIgTAAQgUAAgOgIg");
	this.shape.setTransform(49.8,45.3,0.966,0.967,0,-2.3,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AoFOXQAag9AAgpIAEvIQABhhgig6QgLgTgOgMIgKgJIJznWIAAC+IACAdQAJAUAkgrQBpiACwh8QBYg+BDgkIACHdQgdAFgzAXQhnAsh1BVQiRBpguCDQgXBBAGArIgHJ0QAAAxAcAzQAPAaAOAQIqBDBQANgWAMgeg");
	this.shape_1.setTransform(68.8,17.3,0.117,0.117,0,0.6,3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AuZStQAWg7AAgxIAM5IQAAgtgVgzIgWgqIIoipIFpKGIGdt8IIbitIgLAwQgLA+AABBQgDFYgET0QAAAyATA0QAJAaAKAQIo6CqQAWhaAAhIQAAgsAHkZIAHkQIl8NhIhOAZIlVqUIgFJjQgBA1ATAuQAJAWAJANIpJCuQALgUALgdg");
	this.shape_2.setTransform(50.7,19.9,0.117,0.117,0,0.6,3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("A0TZhQAahVAAhCMAAFgivQAAhAgUhGIgUg6IMgjsIH1OMIIzzJILjjYIgLBBQgLBVAABbMAADAi0QAABFAZBJQANAkAMAWItADmQALghALgsQAWhaAAg9QAAg+AGmOIAGmBIoDS1IhsAfIncubIgENUQAABIAgA/QAQAfAQARItEDnQANgcANgqg");
	this.shape_3.setTransform(23,48.4,0.117,0.117,0,0.6,3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Al9WuQAbhXABhmIAA87QAAhbg1htIg0haIMkqDMAABAm+QAAB+A4BkQAcAyAcAYItjD1QANgXAOgrg");
	this.shape_4.setTransform(102.1,29.9,0.117,0.117,0,0.6,3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AnIQDQi3idhHk7QhDksA4lLQA7lXCojxQCejiCvh1QCOhgCwgmQDsgyCKCKQBvBvArDhQAfChgFDKQgDBlgJBFIrTHoQARBdAjA+QApBEBGAnQB9BGC8hzQC0htBSitQAJgTAMgEQAMgDAAAQQgNF8jDDoQixDTk+BLQhTAUhOAAQjBAAiSh8gADnpWQjwBQgeGiIGCj+QAGhJgMhDQgShtg+AAQgOAAgQAFg");
	this.shape_5.setTransform(116.1,30.3,0.117,0.117,0,0.6,3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AnIQgQi3idhHk7QhDksA4lKQA7lYCojxQFVnmHJg3QCQgSCKAcQBFAOApASIADJOQgbggg1gaQhpg1iAAYQjOAoh4DXQhsDFAEECQAFDWAeBnQAnCJBtA9QB9BFC8hyQC0htBSitQAJgTAMgEQAMgDAAARQgNF8jDDoQiyDTk9BLQhUAUhOAAQjAAAiSh8g");
	this.shape_6.setTransform(88,36.2,0.117,0.117,0,0.6,3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AmaSXQiEgRh7gtIhfgqIAGpSIArAgQA3AmA+AfQDEBjC8gHQDOgHAbiAQANg/gZgxQgnhPiGgZQkdg1iOh2QiaiAgQjdQgHh1AmiCQAoiJBUh7QDEkhFhh0QEvhkEAAnQB/AUBDAnIggIkQgqgahHgXQiMgviMAMQiFALhZAvQhYAwgLBDQgTB2BeA+QBOAyEHBDQDcA5BrC2QA2BcAJBRQAODNgpCCQhND3kPCxQktDElOAAQhOAAhQgLg");
	this.shape_7.setTransform(69.9,40.8,0.117,0.117,0,0.6,3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#001871").s().p("Ap1FcQgHgDgGgHQgFgGAAgJQgBgJAEgIIADgGIABgHIAPkOIAAgHIgCgFQgCgGAAgFQABgHAEgFQADgHAGgEQAFgEAHgCIBjgYQAKgCAJAEQAJAEAEAJIAeA6IAvhXQADgHAGgEQAGgFAHgCIBSgTIAIiJIgBgCIAAABQgDgHAAgHQAAgIADgHQADgHAGgFQAGgFAHgBIBFgRQAKgCAJAEQAKAEAEAJIAOAcIAbgzQADgGAGgEQAGgFAHgCIBDgRQAHgCAIADQAIACAFAFQADAGACAIQACAIgDAIIAAAEIgCAJIAAAAIAogaQAHgFAJgBQAIAAAIAEIACABIAegRQAIgDAHAAQAIABAHADQAGAFAEAHQADAGAAAIIgDA6QgBAMgIAIQgJAJgLACIABAAIgHACQgIAEgLAGQgGAFgEAEIgCAEIABACIgFBFQAfgCAZAHQAOAFAJAFIAGAFQAhgoAqgQQAigOAjAEQgBgIAEgIQADgJAIgFIBlhJQAHgFAKAAQAIgBAHAEQAIADAEAIQAFAHgBAIIgEBGQAUgVAWgMQAWgMAZgEQAYgEAUAHQAOAFALAMQASARAGAgQAFAYgBAdIgEAfQgCAKgJAJQAHAEAEAHQAEAIAAAJIAAABQgFA0gfAjQgeAig1AKIx1D6IgGABQgGAAgFgCg");
	this.shape_8.setTransform(65.1,36.6,0.966,0.967,0,-2.3,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF9D22").s().p("EhRGAy+QiGgmhbhrQg3hBgchQQgchQgBhVQABhtAshoQAFgSADgFMAAFgikIgBgGIAAABQgrhmAFhxQAEhwA0hmQA1hoBYhLQBZhMBtggIMhjuQCngyCdA9QCdA9BRCSIAeA0ICDkfQAzhuBchPQBbhPBzgiIHWiKIAHt2QgqhkAAhZQAAhoAoheQAvh1BehXQBehXB3gjIIuinQBygiBzAUQBuAUBbBDIAJgTQAzhqBXhOQBYhNBvgjIIgirQCDgoCBAdQCCAdBbBbQAoAmAeA1QBWg4BggWQBggWBeAPQBbg9BCgjQB3g/CBgBQCCAABuA+QBvA+A/BtQA/BuAACDIABHfQAAC7h8CYQh8CXi8ArIAAABIAXgGQglAOg/ArIgED0QDYAGC7BCQDXjjEAiIQEAiHESggQA4h1BmhSIMnqEQB7hiCRgeQCdggCHA+QB3A3BBBvQBABuAACRIAABfQDPh2DWguQDngyDOAyQDNAxCZCNQDBCxBVExQBBDoAAEjQAACTgRCUQgHAogOAwQBKB0gBCQIAAARQgRIdksFxQkqFwoCB7MiEbAjuItFEKQhIAUhFAAQhEAAhDgUg");
	this.shape_9.setTransform(64.4,36.8,0.117,0.117,0,0.6,3,-6,-12.9);

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,129.9,73.6);


(lib.square = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2A2C73").s().p("Ak6DPIh4jLIB4jSIKJAAIBkDIIhkDVg");
	this.shape.setTransform(43.5,20.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,87,41.5);


(lib.prize = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AoQgcICrgjIgHESIhAANIAGjiIgrAHIgHDkIhAANgAk/hGIB4gXQAKAAAJACQAJAEAFAHQAHAHADANQACAJAAAVIgCAeQABASgDALQgDAMgGAIQgFAIgMAFQgKAFgSADIgwAKIgDBuIhAANgAjqgpIgXAFIgBBCIAYgEQANgDADgJQADgFABgNIAAgbQgCgHgGgCIgGgBIgGAAgAh+huIBAgNIgECPIA0iBIAAgXIA+gOIgHESIg+ANIAEiPIgzCBIgBAYIhAANgACABwQgPAAgLgFQgKgFgIgJQgGgJgDgNQgDgNABgTIAAgHIA+gMIABAgQABAGAGADQAFADAJgCQALgCAEgHQAEgGAAgNIAAggQgBgFgFgDQgFgEgIACIgwAIIABgtIAwgKQALgCAEgGQAGgGABgLIgBghQgBgGgGgDQgGgCgJACQgKACgEAGQgEAGgBAOIgBAUIg+ANIAAgDQABgbACgPQADgPAHgMQAJgPAQgJQAQgKAZgFQASgEAQABQAPAAAKAFQALAFAHAKQAHAJAEAOQACALAAAOQgBANgCAKQgCAJgEAHQgIALgSAJQAMABAJAHQAIAHADAMQACANAAAQQgBAZgFARQgFARgKALQgJAMgPAHQgPAIgVAEQgRADgNAAIgEAAgAEUjAIBAgNIgDBmIAxgIQAPgCAKADQAMADAIAIQAHAKAEARQADAMgBAVQAAAcgGAQQgDASgKALQgJALgRAHQgNAGgYAFIhcATgAFog9IgYAFIgCBIIAXgEQAOgDAEgGQAFgDAAgNIABgdIgBgJQgCgIgEgCIgGgBIgIABgAHZjoIA/gNIgGESIhAANg");
	this.shape.setTransform(53.7,24.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,107.4,49.3);


(lib.Net = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABNBYIAiiQIggAAIAHgfIBoAAIgHAfIgdAAIgiCQgAgxBYIApivIBXAAIgHAfIguAAIgJAoIArAAIgGAcIgsAAIgKAtIAxAAIgGAfgAh1BYIARhKIgdAAIgRBKIgrAAIApivIArAAIgRBIIAeAAIAQhIIArAAIgpCvg");
	this.shape.setTransform(19.1,8.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,38.2,17.7);


(lib.man = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AwgOBIAA2jMAhBAAAIAAWjg");
	mask.setTransform(76.7,89.8);

	// Layer 1
	this.instance = new lib.tv();
	this.instance.setTransform(-43.5,-23);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-29,35,211.5,144.5);


(lib.god = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AtXBVIBsgWIgECuIgpAIIAEiQIgcAGIgDCQIgpAIgAphCyQAFgBAEgCQAEgCAEgEQADgFADgIQACgIABgNIABhqIBugWIgECQIAUgEIgBBAIgkAIIABgjIhSARIgBAiIgkAIgAoeAzIgCBPQAAAcgGAIIAigHIADhygAqwDhQgJABgIgDQgJgDgEgGQgGgHgDgLQgBgJAAgMIAChHIACgSQACgKAEgHQAFgIAJgGQAHgEAUgGQAKgCAJAAQAKAAAHACQAIADAGAGQAGAHACAKQABAIAAALIgCBOQAAANgDAKQgDAJgGAGQgFAGgJAFQgKAEgNACQgJACgHAAIgDAAgAqfBLQgHACgDAEQgBADgBAEQgFBbABAHQABAEADACQAEACAGgBQAIgCADgGQACgFAAgOIADhRQgBgGgEgCQgCgCgEAAIgDAAgAl6gKIAogIIgCBEIAcgFIAChFIAogIIgECsIgpAIIAChJIgbAFIgCBKIgpAIgAjTCAQgJABgIgDQgJgDgEgGQgGgHgDgLQgBgJAAgMIAChHIACgQQACgKAEgHQAFgIAJgGQAHgEAUgGQAKgCAJAAQAKAAAHACQAIADAGAGQAGAHACAKQABAIAAALIgCBMQAAANgDAKQgDAJgGAGQgFAGgJAFQgKAEgNACQgJACgHAAIgDAAgAjCgUQgHACgDAEQgBADgBAEQgFBZABAHQABAEADACQAEACAGgBQAIgCADgGQACgFAAgOIADhPQgBgGgEgCQgCgCgEAAIgDAAgAh3g/IBGgOQAIAAAGABQAIABAFAFQAFAFACAJQABAGAAANQAAAOgCAFQgDAHgHAFQgEAEgJACQAKAAAGADQAHAEABAJQACAHgBATQAAASgCAIQgCAGgEAFQgDAFgFADQgIAEgPADIhGAPgAhBAWIgQADIgBAtIARgDQAIgCACgFQACgDABgJIAAgUQgBgEgEgCIgEgBIgEABgAhCgrIgNADIgCAmIAPgDQAIgCADgCQAEgEAAgIIABgMIgBgEQgBgGgFAAIgCAAIgHAAgAAHhZIAogIIgCBAIAfgFQAJgBAGACQAIACAFAFQAFAGACALQACAIAAALQgBARgDAMQgCALgHAHQgGAHgKAEQgJAEgPADIg6AMgAA7gGIgPADIgBAtIAOgDQAJgCADgDQADgDAAgJIABgSIgBgEQgBgFgCgBIgEgBIgGABgACDhyIAogIIgECsIgoAIgADDh/IAogIIgCBbIAghTIAAgOIApgJIgFCsIgoAIIAChZIggBRIAAAPIgpAIgAGEinIBTgQIgBAeIgrAIIgECQIgnAGgAJWhCQAGgBADgCQAFgDADgEQAEgEACgIQACgJABgMIAChqIBtgWIgECQIAVgFIgCBBIgjAHIABgiIhTAQIgBAjIgjAHgAKajCIgCBPQgBAcgGAJIAjgHIADhygAIHgTQgJABgIgDQgJgDgEgGQgGgHgDgLQgBgJAAgMIAChHIACgSQACgKAEgHQAFgIAJgGQAHgEAUgGQAKgCAJAAQAKAAAHACQAIADAGAGQAGAHACAKQABAIAAALIgCBOQAAANgDAKQgDAJgGAGQgFAGgJAFQgKAEgNACQgJACgHAAIgDAAgAIYipQgHACgDAEQgBADgBAEQgFBbABAHQABAEADACQAEACAGgBQAIgCADgGQACgFAAgOIADhRQgBgGgEgCQgCgCgEAAIgDAAgAMRhwIAjgHIgBAmIgjAHgAMSiVQABgLADgHQAGgKASgQQAHgHADgHQADgIgBgJQgBgEgDgCQgDgCgEABQgHACgCAEQgCAFAAAOIABAEIgjAHIABgZQABgKAEgGQAEgHAIgFQAJgFAPgDIAQgCQAIAAAGACQAHACAEAFQAFAFACAJQACAIgCAMQAAAKgCAFIgKAMIgOAPQgJAKgDAGQgCAFABAOIgjAHgADhiVQgFgCgDgEQgCgDgBgGIgBgJIAZgFIAAADQABAFADABQADABAEgBQAGgBADgDQADgEABgGIAYgFQAAAIgCAGQgBAHgEAFQgEAFgHADQgHAEgKACIgPABIgLgCg");
	this.shape.setTransform(86.1,25.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,172.3,51.9);


(lib.Da = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgnB2IAJgnIhiAAIgJAnIgqAAIAQhJQAHAAAEgCQAGgBAFgEQAFgFAEgIQAFgKADgOIAbh2ICBAAIgkCiIAWAAIgRBJgAhNAEQgHAhgJAIIApAAIAeiAIgiAAgAB3BPIAEgsIgkAAIgRAsIgzAAIBUjEIBNAAIgODEgABjABIAbAAIAJhkg");
	this.shape.setTransform(18.1,11.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,36.2,23.7);


(lib.btnYes = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyRHlIAAvJMAkjAAAIAAPJg");
	this.shape.setTransform(117,48.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,234,97);


(lib.wontplay = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.want();
	this.instance.setTransform(108.2,15.1,1,1,12,0,0,95.8,27.9);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(8.8,-32.1,198.7,94.1);


(lib.somnoi = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.god();
	this.instance.setTransform(45.6,27.4,1,1,0,0,0,86.2,25.9);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-40.6,1.5,172.3,51.9);


(lib.logo = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(1,119.6,0.847,0.842,0,0,1.3,1.1,72.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,58.8,110,64.6);


(lib.Button_Yes = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Da();
	this.instance.setTransform(43.6,20.8,0.858,0.857,0,0,0,18.1,11.8);

	this.instance_1 = new lib.square();
	this.instance_1.setTransform(43.5,20.8,1,1,0,0,0,43.5,20.8);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,87,41.5);


(lib.Button_No = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Net();
	this.instance.setTransform(41.6,20.7,1,1,0,0,0,19.1,8.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2A2C73").s().p("Ak6DPIh4jLIB4jSIKJAAIBkDIIhkDVg");
	this.shape.setTransform(43.5,20.8);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,87,41.5);


// stage content:
(lib._240x400_interactive_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_20 = function() {
		this.stop();
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.button_1.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.gotoAndPlay(24);
		}
		
		
		this.button_2.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.gotoAndPlay(24);
		}
	}
	this.frame_89 = function() {
		this.stop();
		document.getElementById('old').style.top=0;

	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(20).call(this.frame_20).wait(69).call(this.frame_89).wait(1));

	// Symbol 7
	this.instance = new lib.Symbol7();
	this.instance.setTransform(3.5,352.1,0.836,0.836,0,0,0,30.5,30.5);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(66).to({_off:false},0).to({rotation:360,x:122.5,y:330.1,alpha:1},9,cjs.Ease.get(1)).wait(15));

	// small_cinema.png
	this.instance_1 = new lib.Symbol5();
	this.instance_1.setTransform(294.9,228,1,1,0,0,0,29,46);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(64).to({_off:false},0).to({x:224.9,alpha:1},9,cjs.Ease.get(1)).wait(17));

	// small_cinema.png
	this.instance_2 = new lib.Symbol4();
	this.instance_2.setTransform(-51.5,228,1,1,0,0,0,29,46);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(62).to({_off:false},0).to({x:18.5,alpha:1},9,cjs.Ease.get(1)).wait(19));

	// small_tv.png
	this.instance_3 = new lib.Symbol2();
	this.instance_3.setTransform(123,228,0.622,0.622,0,0,0,74,50.5);
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(60).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},9,cjs.Ease.get(1)).wait(21));

	// prize
	this.instance_4 = new lib.prize();
	this.instance_4.setTransform(2,141.5,1,1,0,0,0,53.7,24.6);
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(58).to({_off:false},0).to({x:121,y:119.5,alpha:1},9,cjs.Ease.get(1)).wait(23));

	// youcan
	this.instance_5 = new lib.youcan();
	this.instance_5.setTransform(2,112,1,1,0,0,0,87.4,23.6);
	this.instance_5.alpha = 0.012;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(56).to({_off:false},0).to({x:121,y:90,alpha:1},9,cjs.Ease.get(1)).wait(25));

	// Layer 19
	this.button_2 = new lib.btnYes();
	this.button_2.setTransform(181.1,335.2,0.447,0.718,0,0,0,117,48.5);
	this.button_2.alpha = 0.012;
	new cjs.ButtonHelper(this.button_2, 0, 1, 1);

	this.button_1 = new lib.btnYes();
	this.button_1.setTransform(73.4,341.5,0.406,0.721,0,0,0,117,48.6);
	this.button_1.alpha = 0.012;
	new cjs.ButtonHelper(this.button_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.button_1},{t:this.button_2}]},20).to({state:[]},1).wait(69));

	// Button_Yes
	this.instance_6 = new lib.Button_Yes();
	this.instance_6.setTransform(-75.3,383.1,1,1,-11.5,0,0,43.5,20.8);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10).to({_off:false},0).to({x:78.7,y:350.1,alpha:1},9,cjs.Ease.get(1)).to({regX:43.4,regY:20.9,scaleX:1,scaleY:1,x:78.6,y:350.2},17,cjs.Ease.get(1)).to({regX:43.5,regY:20.8,scaleX:1,scaleY:1,x:235.7,y:317.1,alpha:0},10,cjs.Ease.get(1)).to({_off:true},1).wait(43));

	// Button_No
	this.instance_7 = new lib.Button_No();
	this.instance_7.setTransform(19.2,362.5,1,1,-11.5,0,0,43.5,20.8);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(8).to({_off:false},0).to({x:173.2,y:329.5,alpha:1},9,cjs.Ease.get(1)).to({regX:43.6,scaleX:1,scaleY:1,x:173.3,y:329.4},17,cjs.Ease.get(1)).to({regX:43.5,scaleX:1,scaleY:1,x:330.2,y:296.5,alpha:0},10,cjs.Ease.get(1)).to({_off:true},1).wait(45));

	// so mnoi
	this.instance_8 = new lib.somnoi();
	this.instance_8.setTransform(-18.6,317.3,1,1,-0.5,0,0,57.2,21.8);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(6).to({_off:false},0).to({x:135.4,y:284.3,alpha:1},9,cjs.Ease.get(1)).to({y:284.2},17,cjs.Ease.get(1)).to({x:292.4,y:251.3,alpha:0},10,cjs.Ease.get(1)).to({_off:true},1).wait(47));

	// wontplay
	this.instance_9 = new lib.wontplay();
	this.instance_9.setTransform(-34.3,291.5,1,1,-11.5,0,0,107.9,10.2);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(4).to({_off:false},0).to({scaleX:1,scaleY:1,x:117.7,y:258.9,alpha:0.988},8,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:119.6,y:258.5,alpha:1},1).to({regY:10.3,scaleX:1,scaleY:1,y:258.6},17,cjs.Ease.get(1)).to({regY:10.2,scaleX:1,scaleY:1,x:276.6,y:225.5,alpha:0},10,cjs.Ease.get(1)).to({_off:true},1).wait(49));

	// mr_muscle.png
	this.instance_10 = new lib.man();
	this.instance_10.setTransform(118.5,188,0.523,0.523,0,0,0,75.5,118.5);
	this.instance_10.alpha = 0.012;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(2).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},9,cjs.Ease.get(1)).wait(22).to({scaleX:1.29,scaleY:1.29,x:118.4,alpha:0.012},10,cjs.Ease.get(1)).to({_off:true},1).wait(46));

	// logo
	this.instance_11 = new lib.logo();
	this.instance_11.setTransform(-33.6,51.9,0.782,0.78,0,0,0,56.1,61.3);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({x:120.3,y:18.9,alpha:1},9,cjs.Ease.get(1)).wait(81));

	// Layer 1
	this.instance_12 = new lib.Symbol3();
	this.instance_12.setTransform(125,-1.8,1,1,0,0,0,125,69.2);

	this.instance_13 = new lib.Symbol8();
	this.instance_13.setTransform(122.5,421.8,1,1,0,0,0,121.5,62.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12}]}).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(42.5,129,327.5,480);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;