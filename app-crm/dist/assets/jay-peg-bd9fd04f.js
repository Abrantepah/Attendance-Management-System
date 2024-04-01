import{S as d,g as u,m as a,A as m,e as E,n as A,o as L,p as v,c as g,V as B}from"./restructure-6f8f6eda.js";const U=new d({identifier:new u(1),value:new u(1)}),H={name:()=>"DAC",length:a,tables:new m(U,t=>t.length/2)},N=(t,e)=>t[e],T=(t,e)=>t[e]<<8|t[e+1],y=(t,e)=>t[e]|t[e+1]<<8,b=(t,e)=>t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3],x=(t,e)=>t[e]|t[e+1]<<8|t[e+2]<<16|t[e+3]<<24,O=t=>Array.from(t,e=>e.toString(16).padStart(2,"0")).join(""),V=new TextDecoder("utf-8"),j=t=>V.decode(t),_=t=>{const e=t.reduce((n,s)=>n+s.length,0),i=new Uint8Array(e);let o=0;return t.forEach(n=>{i.set(n,o),o+=n.length}),i};class z{decode(e,i){const o={};let n=e.buffer.slice(e.pos,e.pos+i.length-2);for(;n.length>0;){let s=1;const r=[],p=N(n,0),l=n.slice(s,s+16);s+=16;for(const c of l)r.push(n.slice(s,s+c)),s+=c;n=n.slice(s),o[p]=_(r)}return e.pos+=i.length-2,o}}const J={name:()=>"DHT",length:a,tables:new z},X={name:()=>"DQT",length:a,tables:new m(new d({identifier:new u(1),data:new u(64)}),t=>(t.length-2)/65)},q={name:()=>"DRI",length:a,restartInterval:a},W={name:()=>"EOI"},D={ifd:{"010e":"imageDescription","010f":"make","011a":"xResolution","011b":"yResolution","011c":"planarConfiguration","012d":"transferFunction","013b":"artist","013e":"whitePoint","013f":"primaryChromaticities","0100":"imageWidth","0101":"imageHeight","0102":"bitsPerSample","0103":"compression","0106":"photometricInterpretation","0110":"model","0111":"stripOffsets","0112":"orientation","0115":"samplesPerPixel","0116":"rowsPerStrip","0117":"stripByteCounts","0128":"resolutionUnit","0131":"software","0132":"dateTime","0201":"jpegInterchangeFormat","0202":"jpegInterchangeFormatLength","0211":"ycbCrCoefficients","0212":"ycbCrSubSampling","0213":"ycbCrPositioning","0214":"referenceBlackWhite","829a":"exposureTime","829d":"fNumber","920a":"focalLength","927c":"makerNote",8298:"copyright",8769:"exifIFDPointer",8822:"exposureProgram",8824:"spectralSensitivity",8825:"gpsInfoIFDPointer",8827:"photographicSensitivity",8828:"oecf",8830:"sensitivityType",8831:"standardOutputSensitivity",8832:"recommendedExposureIndex",8833:"isoSpeed",8834:"isoSpeedLatitudeyyy",8835:"isoSpeedLatitudezzz",9e3:"exifVersion",9003:"dateTimeOriginal",9004:"dateTimeDigitized",9101:"componentsConfiguration",9102:"compressedBitsPerPixel",9201:"shutterSpeedValue",9202:"apertureValue",9203:"brightnessValue",9204:"exposureBiasValue",9205:"maxApertureValue",9206:"subjectDistance",9207:"meteringMode",9208:"lightSource",9209:"flash",9214:"subjectArea",9286:"userComment",9290:"subSecTime",9291:"subSecTimeOriginal",9292:"subSecTimeDigitized",a000:"flashpixVersion",a001:"colorSpace",a002:"pixelXDimension",a003:"pixelYDimension",a004:"relatedSoundFile",a005:"interoperabilityIFDPointer",a20b:"flashEnergy",a20c:"spatialFrequencyResponse",a20e:"focalPlaneXResolution",a20f:"focalPlaneYResolution",a40a:"sharpness",a40b:"deviceSettingDescription",a40c:"subjectDistanceRange",a210:"focalPlaneResolutionUnit",a214:"subjectLocation",a215:"exposureIndex",a217:"sensingMethod",a300:"fileSource",a301:"sceneType",a302:"cfaPattern",a401:"customRendered",a402:"exposureMode",a403:"whiteBalance",a404:"digitalZoomRatio",a405:"focalLengthIn35mmFilm",a406:"sceneCaptureType",a407:"gainControl",a408:"contrast",a409:"saturation",a420:"imageUniqueID",a430:"cameraOwnerName",a431:"bodySerialNumber",a432:"lensSpecification",a433:"lensMake",a434:"lensModel",a435:"lensSerialNumber",a500:"gamma"},gps:{"0000":"gpsVersionID","0001":"gpsLatitudeRef","0002":"gpsLatitude","0003":"gpsLongitudeRef","0004":"gpsLongitude","0005":"gpsAltitudeRef","0006":"gpsAltitude","0007":"gpsTimeStamp","0008":"gpsSatellites","0009":"gpsStatus","000a":"gpsMeasureMode","000b":"gpsDOP","000c":"gpsSpeedRef","000d":"gpsSpeed","000e":"gpsTrackRef","000f":"gpsTrack","0010":"gpsImgDirectionRef","0011":"gpsImgDirection","0012":"gpsMapDatum","0013":"gpsDestLatitudeRef","0014":"gpsDestLatitude","0015":"gpsDestLongitudeRef","0016":"gpsDestLongitude","0017":"gpsDestBearingRef","0018":"gpsDestBearing","0019":"gpsDestDistanceRef","001a":"gpsDestDistance","001b":"gpsProcessingMethod","001c":"gpsAreaInformation","001d":"gpsDateStamp","001e":"gpsDifferential","001f":"gpsHPositioningError"}};class G{constructor(e){this.bigEndian=e,this.bytes=[0,1,1,2,4,8,1,1,2,4,8,4,8]}_getTagValue(e,i){const o=r=>this.bigEndian?T(e,r):y(e,r),n=r=>this.bigEndian?b(e,r):x(e,r);switch(i){case 1:return e.readUInt8(0);case 2:return e.toString("ascii").replace(/\0+$/,"");case 3:return o(0);case 4:return n(0);case 5:const r=[];for(var s=0;s<e.length;s+=8)r.push(n(s)/n(s+4));return r;case 7:return null;case 10:return n(0)/n(4);default:return"0x"+e.toString("hex")}}_decodeIDFEntries(e,i,o){let n=2;const s={},r=c=>this.bigEndian?T(e,c):y(e,c),p=c=>this.bigEndian?b(e,c):x(e,c),l=r(0);for(let c=0;c<l;c++){const S=e.slice(n,n+2),I=r(n+2),k=p(n+4),M=this.bytes[I],w=k*M;let h=e.slice(n+8,n+12);if(w>4){const F=(this.bigEndian?b(h,0):x(h,0))-o;h=e.slice(F,F+w)}const C=this._getTagValue(h,I),P=this.bigEndian?O(S):O(S.reverse()),R=i[P];s[R]=C,n+=12}return s}decode(e,i){const o=e.buffer.slice(e.pos),n=i.offsetToFirstIFD;if(n>o.length)return e.pos+=i.parent.length-16,{};const s=this._decodeIDFEntries(o,D.ifd,n),{exifIFDPointer:r,gpsInfoIFDPointer:p}=s;if(r){const l=o.slice(r-n);s.subExif=this._decodeIDFEntries(l,D.ifd,r)}if(p){const l=p,c=o.slice(r?l-r:l-n);s.gpsInfo=IFDHandler(c,D.gps,l)}return e.pos+=i.parent.length-16,s}}const Q=t=>{const e=t?a:A,i=t?L:v;return new d({fortyTwo:e,offsetToFirstIFD:i,entries:new G(t)})};class Y{decode(e,i){const n=j(e.buffer.slice(e.pos,e.pos+2))==="MM";return e.pos+=2,Q(n).decode(e,i).entries}}const Z={name:()=>"EXIF",length:a,identifier:new E(6),entries:new Y},$={name:()=>"JFIF",length:a,identifier:new E(5),version:a,units:g,xDensity:a,yDensity:a,thumbnailWidth:g,thumbnailHeight:g};class K{decode(e){const i=e.buffer.slice(e.pos);let o=0,n=i.indexOf(255);for(;n!==-1;){o=n;const s=i[o+1],r=s>=208&&s<=215;if(s!==0&&!r)break;n=i.indexOf(255,n+1)}return e.pos+=o,i.slice(0,o)}}const ee=new d({scanComponentSelector:g,entropyCodingTable:new u(1)}),te={name:()=>"SOS",length:a,numberOfImageComponents:g,componentSpecifications:new m(ee,t=>t.numberOfImageComponents),startOfSpectral:g,endOfSpectral:g,successiveApproximationBit:new u(1),data:new K},ne=new d({id:g,samplingFactors:g,quantizationTableId:g}),f={name:()=>"SOF",length:a,precision:g,height:a,width:a,numberOfComponents:g,components:new m(ne,t=>t.numberOfComponents)},se={name:()=>"SOI"},ie={length:a,buf:new u(t=>t.length-2)},oe=Array(63).fill(0).reduce((t,e,i)=>({...t,[i+65472]:ie}),{}),re=new B(a,{...oe,65472:f,65473:f,65474:f,65475:f,65476:J,65477:f,65478:f,65479:f,65481:f,65482:f,65483:f,65484:H,65485:f,65486:f,65487:f,65496:se,65497:W,65498:te,65499:X,65501:q,65504:$,65505:Z}),ae=new m(re),ce=t=>ae.fromBuffer(t).map(({version:i,...o})=>({type:i,...o})),le={decode:ce};export{le as _};
