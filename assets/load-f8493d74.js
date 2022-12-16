import{S as Pt,_ as m,O as B,E as re,R as mi,M as F,a as ae,s as E,b as $,C as Ge,T as Ft,V as v,c as P,d as pi,I as Ei,P as gi,e as bt,G as Nt,f as tt,g as ne,h as y,i as N,j as Kt,p as Ai,k as qt,l as Z,m as xt,n as Ze,o as yt,Q as ue,W as wt,q as je,r as De,t as x,u as ut,A as Ti,v as Ye,w as Je,U as Ut,D as lt,x as J,K as vi,y as _t,z as ce,B as Si,F as Qe,H as Ri,J as jt,L as Ci,N as q,X as Ke,Y as Te,Z as Zt,$ as Ii,a0 as Y,a1 as le,a2 as it,a3 as xe,a4 as V,a5 as Bt,a6 as xi,a7 as Mi,a8 as bi,a9 as Ni,aa as yi,ab as Oi,ac as Li,ad as Di,ae as Ae,af as I,ag as Ne,ah as Tt,ai as ve,aj as Pi,ak as Fi,al as vt,am as qe,an as wi,ao as be,ap as Jt,aq as at,ar as ot,as as $t,at as Ui,au as ei,av as Vt,aw as Bi,ax as Vi,ay as Gi,az as Xi,aA as ki,aB as Ot,aC as ti,aD as Hi}from"./index-b2f4df0f.js";class Pe{constructor(e){if(this._keys=[],this._isDirty=!0,this._areLightsDirty=!0,this._areLightsDisposed=!1,this._areAttributesDirty=!0,this._areTexturesDirty=!0,this._areFresnelDirty=!0,this._areMiscDirty=!0,this._arePrePassDirty=!0,this._areImageProcessingDirty=!0,this._normals=!1,this._uvs=!1,this._needNormals=!1,this._needUVs=!1,this._externalProperties=e,e)for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&this._setDefaultValue(t)}get isDirty(){return this._isDirty}markAsProcessed(){this._isDirty=!1,this._areAttributesDirty=!1,this._areTexturesDirty=!1,this._areFresnelDirty=!1,this._areLightsDirty=!1,this._areLightsDisposed=!1,this._areMiscDirty=!1,this._arePrePassDirty=!1,this._areImageProcessingDirty=!1}markAsUnprocessed(){this._isDirty=!0}markAllAsDirty(){this._areTexturesDirty=!0,this._areAttributesDirty=!0,this._areLightsDirty=!0,this._areFresnelDirty=!0,this._areMiscDirty=!0,this._areImageProcessingDirty=!0,this._isDirty=!0}markAsImageProcessingDirty(){this._areImageProcessingDirty=!0,this._isDirty=!0}markAsLightDirty(e=!1){this._areLightsDirty=!0,this._areLightsDisposed=this._areLightsDisposed||e,this._isDirty=!0}markAsAttributesDirty(){this._areAttributesDirty=!0,this._isDirty=!0}markAsTexturesDirty(){this._areTexturesDirty=!0,this._isDirty=!0}markAsFresnelDirty(){this._areFresnelDirty=!0,this._isDirty=!0}markAsMiscDirty(){this._areMiscDirty=!0,this._isDirty=!0}markAsPrePassDirty(){this._arePrePassDirty=!0,this._isDirty=!0}rebuild(){this._keys.length=0;for(const e of Object.keys(this))e[0]!=="_"&&this._keys.push(e);if(this._externalProperties)for(const e in this._externalProperties)this._keys.indexOf(e)===-1&&this._keys.push(e)}isEqual(e){if(this._keys.length!==e._keys.length)return!1;for(let t=0;t<this._keys.length;t++){const i=this._keys[t];if(this[i]!==e[i])return!1}return!0}cloneTo(e){this._keys.length!==e._keys.length&&(e._keys=this._keys.slice(0));for(let t=0;t<this._keys.length;t++){const i=this._keys[t];e[i]=this[i]}}reset(){this._keys.forEach(e=>this._setDefaultValue(e))}_setDefaultValue(e){var t,i,r,n,s;const a=(r=(i=(t=this._externalProperties)===null||t===void 0?void 0:t[e])===null||i===void 0?void 0:i.type)!==null&&r!==void 0?r:typeof this[e],o=(s=(n=this._externalProperties)===null||n===void 0?void 0:n[e])===null||s===void 0?void 0:s.default;switch(a){case"number":this[e]=o??0;break;case"string":this[e]=o??"";break;default:this[e]=o??!1;break}}toString(){let e="";for(let t=0;t<this._keys.length;t++){const i=this._keys[t],r=this[i];switch(typeof r){case"number":case"string":e+="#define "+i+" "+r+`
`;break;default:r&&(e+="#define "+i+`
`);break}}return e}}class zi{constructor(e){this._wrapU=1,this._wrapV=1,this.wrapR=1,this.anisotropicFilteringLevel=4,this.delayLoadState=0,this._texture=null,this._engine=null,this._cachedSize=Pt.Zero(),this._cachedBaseSize=Pt.Zero(),this._initialSamplingMode=2,this._texture=e,this._texture&&(this._engine=this._texture.getEngine())}get wrapU(){return this._wrapU}set wrapU(e){this._wrapU=e}get wrapV(){return this._wrapV}set wrapV(e){this._wrapV=e}get coordinatesMode(){return 0}get isCube(){return this._texture?this._texture.isCube:!1}set isCube(e){this._texture&&(this._texture.isCube=e)}get is3D(){return this._texture?this._texture.is3D:!1}set is3D(e){this._texture&&(this._texture.is3D=e)}get is2DArray(){return this._texture?this._texture.is2DArray:!1}set is2DArray(e){this._texture&&(this._texture.is2DArray=e)}getClassName(){return"ThinTexture"}isReady(){return this.delayLoadState===4?(this.delayLoad(),!1):this._texture?this._texture.isReady:!1}delayLoad(){}getInternalTexture(){return this._texture}getSize(){if(this._texture){if(this._texture.width)return this._cachedSize.width=this._texture.width,this._cachedSize.height=this._texture.height,this._cachedSize;if(this._texture._size)return this._cachedSize.width=this._texture._size,this._cachedSize.height=this._texture._size,this._cachedSize}return this._cachedSize}getBaseSize(){return!this.isReady()||!this._texture?(this._cachedBaseSize.width=0,this._cachedBaseSize.height=0,this._cachedBaseSize):this._texture._size?(this._cachedBaseSize.width=this._texture._size,this._cachedBaseSize.height=this._texture._size,this._cachedBaseSize):(this._cachedBaseSize.width=this._texture.baseWidth,this._cachedBaseSize.height=this._texture.baseHeight,this._cachedBaseSize)}get samplingMode(){return this._texture?this._texture.samplingMode:this._initialSamplingMode}updateSamplingMode(e){this._texture&&this._engine&&this._engine.updateTextureSamplingMode(e,this._texture)}releaseInternalTexture(){this._texture&&(this._texture.dispose(),this._texture=null)}dispose(){this._texture&&(this.releaseInternalTexture(),this._engine=null)}}class Q extends zi{constructor(e,t=null){super(null),this.metadata=null,this.reservedDataStore=null,this._hasAlpha=!1,this._getAlphaFromRGB=!1,this.level=1,this._coordinatesIndex=0,this.optimizeUVAllocation=!0,this._coordinatesMode=0,this.wrapR=1,this.anisotropicFilteringLevel=Q.DEFAULT_ANISOTROPIC_FILTERING_LEVEL,this._isCube=!1,this._gammaSpace=!0,this.invertZ=!1,this.lodLevelInAlpha=!1,this.isRenderTarget=!1,this._prefiltered=!1,this._forceSerialize=!1,this.animations=new Array,this.onDisposeObservable=new B,this._onDisposeObserver=null,this._scene=null,this._uid=null,this._parentContainer=null,this._loadingError=!1,e?Q._IsScene(e)?this._scene=e:this._engine=e:this._scene=re.LastCreatedScene,this._scene&&(this.uniqueId=this._scene.getUniqueId(),this._scene.addTexture(this),this._engine=this._scene.getEngine()),this._texture=t,this._uid=null}set hasAlpha(e){this._hasAlpha!==e&&(this._hasAlpha=e,this._scene&&this._scene.markAllMaterialsAsDirty(1,t=>t.hasTexture(this)))}get hasAlpha(){return this._hasAlpha}set getAlphaFromRGB(e){this._getAlphaFromRGB!==e&&(this._getAlphaFromRGB=e,this._scene&&this._scene.markAllMaterialsAsDirty(1,t=>t.hasTexture(this)))}get getAlphaFromRGB(){return this._getAlphaFromRGB}set coordinatesIndex(e){this._coordinatesIndex!==e&&(this._coordinatesIndex=e,this._scene&&this._scene.markAllMaterialsAsDirty(1,t=>t.hasTexture(this)))}get coordinatesIndex(){return this._coordinatesIndex}set coordinatesMode(e){this._coordinatesMode!==e&&(this._coordinatesMode=e,this._scene&&this._scene.markAllMaterialsAsDirty(1,t=>t.hasTexture(this)))}get coordinatesMode(){return this._coordinatesMode}get wrapU(){return this._wrapU}set wrapU(e){this._wrapU=e}get wrapV(){return this._wrapV}set wrapV(e){this._wrapV=e}get isCube(){return this._texture?this._texture.isCube:this._isCube}set isCube(e){this._texture?this._texture.isCube=e:this._isCube=e}get is3D(){return this._texture?this._texture.is3D:!1}set is3D(e){this._texture&&(this._texture.is3D=e)}get is2DArray(){return this._texture?this._texture.is2DArray:!1}set is2DArray(e){this._texture&&(this._texture.is2DArray=e)}get gammaSpace(){if(this._texture)this._texture._gammaSpace===null&&(this._texture._gammaSpace=this._gammaSpace);else return this._gammaSpace;return this._texture._gammaSpace&&!this._texture._useSRGBBuffer}set gammaSpace(e){if(this._texture){if(this._texture._gammaSpace===e)return;this._texture._gammaSpace=e}else{if(this._gammaSpace===e)return;this._gammaSpace=e}this._markAllSubMeshesAsTexturesDirty()}get isRGBD(){return this._texture!=null&&this._texture._isRGBD}set isRGBD(e){this._texture&&(this._texture._isRGBD=e)}get noMipmap(){return!1}get lodGenerationOffset(){return this._texture?this._texture._lodGenerationOffset:0}set lodGenerationOffset(e){this._texture&&(this._texture._lodGenerationOffset=e)}get lodGenerationScale(){return this._texture?this._texture._lodGenerationScale:0}set lodGenerationScale(e){this._texture&&(this._texture._lodGenerationScale=e)}get linearSpecularLOD(){return this._texture?this._texture._linearSpecularLOD:!1}set linearSpecularLOD(e){this._texture&&(this._texture._linearSpecularLOD=e)}get irradianceTexture(){return this._texture?this._texture._irradianceTexture:null}set irradianceTexture(e){this._texture&&(this._texture._irradianceTexture=e)}get uid(){return this._uid||(this._uid=mi()),this._uid}toString(){return this.name}getClassName(){return"BaseTexture"}set onDispose(e){this._onDisposeObserver&&this.onDisposeObservable.remove(this._onDisposeObserver),this._onDisposeObserver=this.onDisposeObservable.add(e)}get isBlocking(){return!0}get loadingError(){return this._loadingError}get errorObject(){return this._errorObject}getScene(){return this._scene}_getEngine(){return this._engine}checkTransformsAreIdentical(e){return e!==null}getTextureMatrix(){return F.IdentityReadOnly}getReflectionTextureMatrix(){return F.IdentityReadOnly}isReadyOrNotBlocking(){return!this.isBlocking||this.isReady()||this.loadingError}scale(e){}get canRescale(){return!1}_getFromCache(e,t,i,r,n,s){const a=this._getEngine();if(!a)return null;const o=a._getUseSRGBBuffer(!!n,t),l=a.getLoadedTexturesCache();for(let c=0;c<l.length;c++){const f=l[c];if((n===void 0||o===f._useSRGBBuffer)&&(r===void 0||r===f.invertY)&&f.url===e&&f.generateMipMaps===!t&&(!i||i===f.samplingMode)&&(s===void 0||s===f.isCube))return f.incrementReferences(),f}return null}_rebuild(){}clone(){return null}get textureType(){return this._texture&&this._texture.type!==void 0?this._texture.type:0}get textureFormat(){return this._texture&&this._texture.format!==void 0?this._texture.format:5}_markAllSubMeshesAsTexturesDirty(){const e=this.getScene();e&&e.markAllMaterialsAsDirty(1)}readPixels(e=0,t=0,i=null,r=!0,n=!1,s=0,a=0,o=Number.MAX_VALUE,l=Number.MAX_VALUE){if(!this._texture)return null;const c=this._getEngine();if(!c)return null;const f=this.getSize();let d=f.width,_=f.height;t!==0&&(d=d/Math.pow(2,t),_=_/Math.pow(2,t),d=Math.round(d),_=Math.round(_)),o=Math.min(d,o),l=Math.min(_,l);try{return this._texture.isCube?c._readTexturePixels(this._texture,o,l,e,t,i,r,n,s,a):c._readTexturePixels(this._texture,o,l,-1,t,i,r,n,s,a)}catch{return null}}_readPixelsSync(e=0,t=0,i=null,r=!0,n=!1){if(!this._texture)return null;const s=this.getSize();let a=s.width,o=s.height;const l=this._getEngine();if(!l)return null;t!=0&&(a=a/Math.pow(2,t),o=o/Math.pow(2,t),a=Math.round(a),o=Math.round(o));try{return this._texture.isCube?l._readTexturePixelsSync(this._texture,a,o,e,t,i,r,n):l._readTexturePixelsSync(this._texture,a,o,-1,t,i,r,n)}catch{return null}}get _lodTextureHigh(){return this._texture?this._texture._lodTextureHigh:null}get _lodTextureMid(){return this._texture?this._texture._lodTextureMid:null}get _lodTextureLow(){return this._texture?this._texture._lodTextureLow:null}dispose(){if(this._scene){this._scene.stopAnimation&&this._scene.stopAnimation(this),this._scene.removePendingData(this);const e=this._scene.textures.indexOf(this);if(e>=0&&this._scene.textures.splice(e,1),this._scene.onTextureRemovedObservable.notifyObservers(this),this._scene=null,this._parentContainer){const t=this._parentContainer.textures.indexOf(this);t>-1&&this._parentContainer.textures.splice(t,1),this._parentContainer=null}}this.onDisposeObservable.notifyObservers(this),this.onDisposeObservable.clear(),this.metadata=null,super.dispose()}serialize(e=!1){if(!this.name&&!e)return null;const t=ae.Serialize(this);return ae.AppendSerializedAnimations(this,t),t}static WhenAllReady(e,t){let i=e.length;if(i===0){t();return}for(let r=0;r<e.length;r++){const n=e[r];if(n.isReady())--i===0&&t();else{const s=n.onLoadObservable;s?s.addOnce(()=>{--i===0&&t()}):--i===0&&t()}}}static _IsScene(e){return e.getClassName()==="Scene"}}Q.DEFAULT_ANISOTROPIC_FILTERING_LEVEL=4;m([E()],Q.prototype,"uniqueId",void 0);m([E()],Q.prototype,"name",void 0);m([E()],Q.prototype,"metadata",void 0);m([E("hasAlpha")],Q.prototype,"_hasAlpha",void 0);m([E("getAlphaFromRGB")],Q.prototype,"_getAlphaFromRGB",void 0);m([E()],Q.prototype,"level",void 0);m([E("coordinatesIndex")],Q.prototype,"_coordinatesIndex",void 0);m([E()],Q.prototype,"optimizeUVAllocation",void 0);m([E("coordinatesMode")],Q.prototype,"_coordinatesMode",void 0);m([E()],Q.prototype,"wrapU",null);m([E()],Q.prototype,"wrapV",null);m([E()],Q.prototype,"wrapR",void 0);m([E()],Q.prototype,"anisotropicFilteringLevel",void 0);m([E()],Q.prototype,"isCube",null);m([E()],Q.prototype,"is3D",null);m([E()],Q.prototype,"is2DArray",null);m([E()],Q.prototype,"gammaSpace",null);m([E()],Q.prototype,"invertZ",void 0);m([E()],Q.prototype,"lodLevelInAlpha",void 0);m([E()],Q.prototype,"lodGenerationOffset",null);m([E()],Q.prototype,"lodGenerationScale",null);m([E()],Q.prototype,"linearSpecularLOD",null);m([$()],Q.prototype,"irradianceTexture",null);m([E()],Q.prototype,"isRenderTarget",void 0);function ii(h,e,t=!1){const i=e.width,r=e.height;if(h instanceof Float32Array){let l=h.byteLength/h.BYTES_PER_ELEMENT;const c=new Uint8Array(l);for(;--l>=0;){let f=h[l];f<0?f=0:f>1&&(f=1),c[l]=f*255}h=c}const n=document.createElement("canvas");n.width=i,n.height=r;const s=n.getContext("2d");if(!s)return null;const a=s.createImageData(i,r);if(a.data.set(h),s.putImageData(a,0,0),t){const l=document.createElement("canvas");l.width=i,l.height=r;const c=l.getContext("2d");return c?(c.translate(0,r),c.scale(1,-1),c.drawImage(n,0,0),l.toDataURL("image/png")):null}return n.toDataURL("image/png")}function Wi(h,e=0,t=0){const i=h.getInternalTexture();if(!i)return null;const r=h._readPixelsSync(e,t);return r?ii(r,h.getSize(),i.invertY):null}async function Yi(h,e=0,t=0){const i=h.getInternalTexture();if(!i)return null;const r=await h.readPixels(e,t);return r?ii(r,h.getSize(),i.invertY):null}class A extends Q{constructor(e,t,i,r,n=A.TRILINEAR_SAMPLINGMODE,s=null,a=null,o=null,l=!1,c,f,d,_,u){var p,g,T,C,R,b,G,X,L;super(t),this.url=null,this.uOffset=0,this.vOffset=0,this.uScale=1,this.vScale=1,this.uAng=0,this.vAng=0,this.wAng=0,this.uRotationCenter=.5,this.vRotationCenter=.5,this.wRotationCenter=.5,this.homogeneousRotationInUVTransform=!1,this.inspectableCustomProperties=null,this._noMipmap=!1,this._invertY=!1,this._rowGenerationMatrix=null,this._cachedTextureMatrix=null,this._projectionModeMatrix=null,this._t0=null,this._t1=null,this._t2=null,this._cachedUOffset=-1,this._cachedVOffset=-1,this._cachedUScale=0,this._cachedVScale=0,this._cachedUAng=-1,this._cachedVAng=-1,this._cachedWAng=-1,this._cachedReflectionProjectionMatrixId=-1,this._cachedURotationCenter=-1,this._cachedVRotationCenter=-1,this._cachedWRotationCenter=-1,this._cachedHomogeneousRotationInUVTransform=!1,this._cachedReflectionTextureMatrix=null,this._cachedReflectionUOffset=-1,this._cachedReflectionVOffset=-1,this._cachedReflectionUScale=0,this._cachedReflectionVScale=0,this._cachedReflectionCoordinatesMode=-1,this._buffer=null,this._deleteBuffer=!1,this._format=null,this._delayedOnLoad=null,this._delayedOnError=null,this.onLoadObservable=new B,this._isBlocking=!0,this.name=e||"",this.url=e;let O,D=!1,K=null;typeof i=="object"&&i!==null?(O=(p=i.noMipmap)!==null&&p!==void 0?p:!1,r=(g=i.invertY)!==null&&g!==void 0?g:!Ge.UseOpenGLOrientationForUV,n=(T=i.samplingMode)!==null&&T!==void 0?T:A.TRILINEAR_SAMPLINGMODE,s=(C=i.onLoad)!==null&&C!==void 0?C:null,a=(R=i.onError)!==null&&R!==void 0?R:null,o=(b=i.buffer)!==null&&b!==void 0?b:null,l=(G=i.deleteBuffer)!==null&&G!==void 0?G:!1,c=i.format,f=i.mimeType,d=i.loaderOptions,_=i.creationFlags,D=(X=i.useSRGBBuffer)!==null&&X!==void 0?X:!1,K=(L=i.internalTexture)!==null&&L!==void 0?L:null):O=!!i,this._noMipmap=O,this._invertY=r===void 0?!Ge.UseOpenGLOrientationForUV:r,this._initialSamplingMode=n,this._buffer=o,this._deleteBuffer=l,this._mimeType=f,this._loaderOptions=d,this._creationFlags=_,this._useSRGBBuffer=D,this._forcedExtension=u,c&&(this._format=c);const fe=this.getScene(),_e=this._getEngine();if(!_e)return;_e.onBeforeTextureInitObservable.notifyObservers(this);const He=()=>{this._texture&&(this._texture._invertVScale&&(this.vScale*=-1,this.vOffset+=1),this._texture._cachedWrapU!==null&&(this.wrapU=this._texture._cachedWrapU,this._texture._cachedWrapU=null),this._texture._cachedWrapV!==null&&(this.wrapV=this._texture._cachedWrapV,this._texture._cachedWrapV=null),this._texture._cachedWrapR!==null&&(this.wrapR=this._texture._cachedWrapR,this._texture._cachedWrapR=null)),this.onLoadObservable.hasObservers()&&this.onLoadObservable.notifyObservers(this),s&&s(),!this.isBlocking&&fe&&fe.resetCachedMaterial()},ze=(Fe,We)=>{this._loadingError=!0,this._errorObject={message:Fe,exception:We},a&&a(Fe,We),A.OnTextureLoadErrorObservable.notifyObservers(this)};if(!this.url&&!K){this._delayedOnLoad=He,this._delayedOnError=ze;return}if(this._texture=K??this._getFromCache(this.url,O,n,this._invertY,D),this._texture)if(this._texture.isReady)Ft.SetImmediate(()=>He());else{const Fe=this._texture.onLoadedObservable.add(He);this._texture.onErrorObservable.add(We=>{var At;ze(We.message,We.exception),(At=this._texture)===null||At===void 0||At.onLoadedObservable.remove(Fe)})}else if(!fe||!fe.useDelayedTextureLoading){try{this._texture=_e.createTexture(this.url,O,this._invertY,fe,n,He,ze,this._buffer,void 0,this._format,this._forcedExtension,f,d,_,D)}catch(Fe){throw ze("error loading",Fe),Fe}l&&(this._buffer=null)}else this.delayLoadState=4,this._delayedOnLoad=He,this._delayedOnError=ze}get noMipmap(){return this._noMipmap}get mimeType(){return this._mimeType}set isBlocking(e){this._isBlocking=e}get isBlocking(){return this._isBlocking}get invertY(){return this._invertY}updateURL(e,t=null,i,r){this.url&&(this.releaseInternalTexture(),this.getScene().markAllMaterialsAsDirty(1)),(!this.name||this.name.startsWith("data:"))&&(this.name=e),this.url=e,this._buffer=t,this._forcedExtension=r,this.delayLoadState=4,i&&(this._delayedOnLoad=i),this.delayLoad()}delayLoad(){if(this.delayLoadState!==4)return;const e=this.getScene();e&&(this.delayLoadState=1,this._texture=this._getFromCache(this.url,this._noMipmap,this.samplingMode,this._invertY,this._useSRGBBuffer),this._texture?this._delayedOnLoad&&(this._texture.isReady?Ft.SetImmediate(this._delayedOnLoad):this._texture.onLoadedObservable.add(this._delayedOnLoad)):(this._texture=e.getEngine().createTexture(this.url,this._noMipmap,this._invertY,e,this.samplingMode,this._delayedOnLoad,this._delayedOnError,this._buffer,null,this._format,this._forcedExtension,this._mimeType,this._loaderOptions,this._creationFlags,this._useSRGBBuffer),this._deleteBuffer&&(this._buffer=null)),this._delayedOnLoad=null,this._delayedOnError=null)}_prepareRowForTextureGeneration(e,t,i,r){e*=this._cachedUScale,t*=this._cachedVScale,e-=this.uRotationCenter*this._cachedUScale,t-=this.vRotationCenter*this._cachedVScale,i-=this.wRotationCenter,v.TransformCoordinatesFromFloatsToRef(e,t,i,this._rowGenerationMatrix,r),r.x+=this.uRotationCenter*this._cachedUScale+this._cachedUOffset,r.y+=this.vRotationCenter*this._cachedVScale+this._cachedVOffset,r.z+=this.wRotationCenter}checkTransformsAreIdentical(e){return e!==null&&this.uOffset===e.uOffset&&this.vOffset===e.vOffset&&this.uScale===e.uScale&&this.vScale===e.vScale&&this.uAng===e.uAng&&this.vAng===e.vAng&&this.wAng===e.wAng}getTextureMatrix(e=1){if(this.uOffset===this._cachedUOffset&&this.vOffset===this._cachedVOffset&&this.uScale*e===this._cachedUScale&&this.vScale===this._cachedVScale&&this.uAng===this._cachedUAng&&this.vAng===this._cachedVAng&&this.wAng===this._cachedWAng&&this.uRotationCenter===this._cachedURotationCenter&&this.vRotationCenter===this._cachedVRotationCenter&&this.wRotationCenter===this._cachedWRotationCenter&&this.homogeneousRotationInUVTransform===this._cachedHomogeneousRotationInUVTransform)return this._cachedTextureMatrix;this._cachedUOffset=this.uOffset,this._cachedVOffset=this.vOffset,this._cachedUScale=this.uScale*e,this._cachedVScale=this.vScale,this._cachedUAng=this.uAng,this._cachedVAng=this.vAng,this._cachedWAng=this.wAng,this._cachedURotationCenter=this.uRotationCenter,this._cachedVRotationCenter=this.vRotationCenter,this._cachedWRotationCenter=this.wRotationCenter,this._cachedHomogeneousRotationInUVTransform=this.homogeneousRotationInUVTransform,(!this._cachedTextureMatrix||!this._rowGenerationMatrix)&&(this._cachedTextureMatrix=F.Zero(),this._rowGenerationMatrix=new F,this._t0=v.Zero(),this._t1=v.Zero(),this._t2=v.Zero()),F.RotationYawPitchRollToRef(this.vAng,this.uAng,this.wAng,this._rowGenerationMatrix),this.homogeneousRotationInUVTransform?(F.TranslationToRef(-this._cachedURotationCenter,-this._cachedVRotationCenter,-this._cachedWRotationCenter,P.Matrix[0]),F.TranslationToRef(this._cachedURotationCenter,this._cachedVRotationCenter,this._cachedWRotationCenter,P.Matrix[1]),F.ScalingToRef(this._cachedUScale,this._cachedVScale,0,P.Matrix[2]),F.TranslationToRef(this._cachedUOffset,this._cachedVOffset,0,P.Matrix[3]),P.Matrix[0].multiplyToRef(this._rowGenerationMatrix,this._cachedTextureMatrix),this._cachedTextureMatrix.multiplyToRef(P.Matrix[1],this._cachedTextureMatrix),this._cachedTextureMatrix.multiplyToRef(P.Matrix[2],this._cachedTextureMatrix),this._cachedTextureMatrix.multiplyToRef(P.Matrix[3],this._cachedTextureMatrix),this._cachedTextureMatrix.setRowFromFloats(2,this._cachedTextureMatrix.m[12],this._cachedTextureMatrix.m[13],this._cachedTextureMatrix.m[14],1)):(this._prepareRowForTextureGeneration(0,0,0,this._t0),this._prepareRowForTextureGeneration(1,0,0,this._t1),this._prepareRowForTextureGeneration(0,1,0,this._t2),this._t1.subtractInPlace(this._t0),this._t2.subtractInPlace(this._t0),F.FromValuesToRef(this._t1.x,this._t1.y,this._t1.z,0,this._t2.x,this._t2.y,this._t2.z,0,this._t0.x,this._t0.y,this._t0.z,0,0,0,0,1,this._cachedTextureMatrix));const t=this.getScene();return t?(this.optimizeUVAllocation&&t.markAllMaterialsAsDirty(1,i=>i.hasTexture(this)),this._cachedTextureMatrix):this._cachedTextureMatrix}getReflectionTextureMatrix(){const e=this.getScene();if(!e)return this._cachedReflectionTextureMatrix;if(this.uOffset===this._cachedReflectionUOffset&&this.vOffset===this._cachedReflectionVOffset&&this.uScale===this._cachedReflectionUScale&&this.vScale===this._cachedReflectionVScale&&this.coordinatesMode===this._cachedReflectionCoordinatesMode)if(this.coordinatesMode===A.PROJECTION_MODE){if(this._cachedReflectionProjectionMatrixId===e.getProjectionMatrix().updateFlag)return this._cachedReflectionTextureMatrix}else return this._cachedReflectionTextureMatrix;this._cachedReflectionTextureMatrix||(this._cachedReflectionTextureMatrix=F.Zero()),this._projectionModeMatrix||(this._projectionModeMatrix=F.Zero());const t=this._cachedReflectionCoordinatesMode!==this.coordinatesMode;switch(this._cachedReflectionUOffset=this.uOffset,this._cachedReflectionVOffset=this.vOffset,this._cachedReflectionUScale=this.uScale,this._cachedReflectionVScale=this.vScale,this._cachedReflectionCoordinatesMode=this.coordinatesMode,this.coordinatesMode){case A.PLANAR_MODE:{F.IdentityToRef(this._cachedReflectionTextureMatrix),this._cachedReflectionTextureMatrix[0]=this.uScale,this._cachedReflectionTextureMatrix[5]=this.vScale,this._cachedReflectionTextureMatrix[12]=this.uOffset,this._cachedReflectionTextureMatrix[13]=this.vOffset;break}case A.PROJECTION_MODE:{F.FromValuesToRef(.5,0,0,0,0,-.5,0,0,0,0,0,0,.5,.5,1,1,this._projectionModeMatrix);const i=e.getProjectionMatrix();this._cachedReflectionProjectionMatrixId=i.updateFlag,i.multiplyToRef(this._projectionModeMatrix,this._cachedReflectionTextureMatrix);break}default:F.IdentityToRef(this._cachedReflectionTextureMatrix);break}return t&&e.markAllMaterialsAsDirty(1,i=>i.getActiveTextures().indexOf(this)!==-1),this._cachedReflectionTextureMatrix}clone(){const e={noMipmap:this._noMipmap,invertY:this._invertY,samplingMode:this.samplingMode,onLoad:void 0,onError:void 0,buffer:this._texture?this._texture._buffer:void 0,deleteBuffer:this._deleteBuffer,format:this.textureFormat,mimeType:this.mimeType,loaderOptions:this._loaderOptions,creationFlags:this._creationFlags,useSRGBBuffer:this._useSRGBBuffer};return ae.Clone(()=>new A(this._texture?this._texture.url:null,this.getScene(),e),this)}serialize(){var e,t;const i=this.name;A.SerializeBuffers||this.name.startsWith("data:")&&(this.name=""),this.name.startsWith("data:")&&this.url===this.name&&(this.url="");const r=super.serialize(A._SerializeInternalTextureUniqueId);return r?((A.SerializeBuffers||A.ForceSerializeBuffers)&&(typeof this._buffer=="string"&&this._buffer.substr(0,5)==="data:"?(r.base64String=this._buffer,r.name=r.name.replace("data:","")):this.url&&this.url.startsWith("data:")&&this._buffer instanceof Uint8Array?r.base64String="data:image/png;base64,"+pi(this._buffer):(A.ForceSerializeBuffers||this.url&&this.url.startsWith("blob:")||this._forceSerialize)&&(r.base64String=!this._engine||this._engine._features.supportSyncTextureRead?Wi(this):Yi(this))),r.invertY=this._invertY,r.samplingMode=this.samplingMode,r._creationFlags=this._creationFlags,r._useSRGBBuffer=this._useSRGBBuffer,A._SerializeInternalTextureUniqueId&&(r.internalTextureUniqueId=(t=(e=this._texture)===null||e===void 0?void 0:e.uniqueId)!==null&&t!==void 0?t:void 0),this.name=i,r):null}getClassName(){return"Texture"}dispose(){super.dispose(),this.onLoadObservable.clear(),this._delayedOnLoad=null,this._delayedOnError=null}static Parse(e,t,i){if(e.customType){const l=Ei.Instantiate(e.customType).Parse(e,t,i);return e.samplingMode&&l.updateSamplingMode&&l._samplingMode&&l._samplingMode!==e.samplingMode&&l.updateSamplingMode(e.samplingMode),l}if(e.isCube&&!e.isRenderTarget)return A._CubeTextureParser(e,t,i);const r=e.internalTextureUniqueId!==void 0;if(!e.name&&!e.isRenderTarget&&!r)return null;let n;if(r){const o=t.getEngine().getLoadedTexturesCache();for(const l of o)if(l.uniqueId===e.internalTextureUniqueId){n=l;break}}const s=o=>{var l;if(o&&o._texture&&(o._texture._cachedWrapU=null,o._texture._cachedWrapV=null,o._texture._cachedWrapR=null),e.samplingMode){const c=e.samplingMode;o&&o.samplingMode!==c&&o.updateSamplingMode(c)}if(o&&e.animations)for(let c=0;c<e.animations.length;c++){const f=e.animations[c],d=Nt("BABYLON.Animation");d&&o.animations.push(d.Parse(f))}r&&!n&&((l=o==null?void 0:o._texture)===null||l===void 0||l._setUniqueId(e.internalTextureUniqueId))};return ae.Parse(()=>{var o,l,c;let f=!0;if(e.noMipmap&&(f=!1),e.mirrorPlane){const d=A._CreateMirror(e.name,e.renderTargetSize,t,f);return d._waitingRenderList=e.renderList,d.mirrorPlane=gi.FromArray(e.mirrorPlane),s(d),d}else if(e.isRenderTarget){let d=null;if(e.isCube){if(t.reflectionProbes)for(let _=0;_<t.reflectionProbes.length;_++){const u=t.reflectionProbes[_];if(u.name===e.name)return u.cubeTexture}}else d=A._CreateRenderTargetTexture(e.name,e.renderTargetSize,t,f,(o=e._creationFlags)!==null&&o!==void 0?o:0),d._waitingRenderList=e.renderList;return s(d),d}else{let d;if(e.base64String&&!n)d=A.CreateFromBase64String(e.base64String,e.base64String,t,!f,e.invertY,e.samplingMode,()=>{s(d)},(l=e._creationFlags)!==null&&l!==void 0?l:0,(c=e._useSRGBBuffer)!==null&&c!==void 0?c:!1),d.name=e.name;else{let _;e.name&&e.name.indexOf("://")>0?_=e.name:_=i+e.name,e.url&&(e.url.startsWith("data:")||A.UseSerializedUrlIfAny)&&(_=e.url);const u={noMipmap:!f,invertY:e.invertY,samplingMode:e.samplingMode,onLoad:()=>{s(d)},internalTexture:n};d=new A(_,t,u)}return d}},e,t)}static CreateFromBase64String(e,t,i,r,n,s=A.TRILINEAR_SAMPLINGMODE,a=null,o=null,l=5,c){return new A("data:"+t,i,r,n,s,a,o,e,!1,l,void 0,void 0,c)}static LoadFromDataString(e,t,i,r=!1,n,s=!0,a=A.TRILINEAR_SAMPLINGMODE,o=null,l=null,c=5,f){return e.substr(0,5)!=="data:"&&(e="data:"+e),new A(e,i,n,s,a,o,l,t,r,c,void 0,void 0,f)}}A.SerializeBuffers=!0;A.ForceSerializeBuffers=!1;A.OnTextureLoadErrorObservable=new B;A._SerializeInternalTextureUniqueId=!1;A._CubeTextureParser=(h,e,t)=>{throw bt("CubeTexture")};A._CreateMirror=(h,e,t,i)=>{throw bt("MirrorTexture")};A._CreateRenderTargetTexture=(h,e,t,i,r)=>{throw bt("RenderTargetTexture")};A.NEAREST_SAMPLINGMODE=1;A.NEAREST_NEAREST_MIPLINEAR=8;A.BILINEAR_SAMPLINGMODE=2;A.LINEAR_LINEAR_MIPNEAREST=11;A.TRILINEAR_SAMPLINGMODE=3;A.LINEAR_LINEAR_MIPLINEAR=3;A.NEAREST_NEAREST_MIPNEAREST=4;A.NEAREST_LINEAR_MIPNEAREST=5;A.NEAREST_LINEAR_MIPLINEAR=6;A.NEAREST_LINEAR=7;A.NEAREST_NEAREST=1;A.LINEAR_NEAREST_MIPNEAREST=9;A.LINEAR_NEAREST_MIPLINEAR=10;A.LINEAR_LINEAR=2;A.LINEAR_NEAREST=12;A.EXPLICIT_MODE=0;A.SPHERICAL_MODE=1;A.PLANAR_MODE=2;A.CUBIC_MODE=3;A.PROJECTION_MODE=4;A.SKYBOX_MODE=5;A.INVCUBIC_MODE=6;A.EQUIRECTANGULAR_MODE=7;A.FIXED_EQUIRECTANGULAR_MODE=8;A.FIXED_EQUIRECTANGULAR_MIRRORED_MODE=9;A.CLAMP_ADDRESSMODE=0;A.WRAP_ADDRESSMODE=1;A.MIRROR_ADDRESSMODE=2;A.UseSerializedUrlIfAny=!1;m([E()],A.prototype,"url",void 0);m([E()],A.prototype,"uOffset",void 0);m([E()],A.prototype,"vOffset",void 0);m([E()],A.prototype,"uScale",void 0);m([E()],A.prototype,"vScale",void 0);m([E()],A.prototype,"uAng",void 0);m([E()],A.prototype,"vAng",void 0);m([E()],A.prototype,"wAng",void 0);m([E()],A.prototype,"uRotationCenter",void 0);m([E()],A.prototype,"vRotationCenter",void 0);m([E()],A.prototype,"wRotationCenter",void 0);m([E()],A.prototype,"homogeneousRotationInUVTransform",void 0);m([E()],A.prototype,"isBlocking",null);tt("BABYLON.Texture",A);ae._TextureParser=A.Parse;class ri{constructor(){this._defines={},this._currentRank=32,this._maxRank=-1,this._mesh=null}unBindMesh(){this._mesh=null}addFallback(e,t){this._defines[e]||(e<this._currentRank&&(this._currentRank=e),e>this._maxRank&&(this._maxRank=e),this._defines[e]=new Array),this._defines[e].push(t)}addCPUSkinningFallback(e,t){this._mesh=t,e<this._currentRank&&(this._currentRank=e),e>this._maxRank&&(this._maxRank=e)}get hasMoreFallbacks(){return this._currentRank<=this._maxRank}reduce(e,t){if(this._mesh&&this._mesh.computeBonesUsingShaders&&this._mesh.numBoneInfluencers>0){this._mesh.computeBonesUsingShaders=!1,e=e.replace("#define NUM_BONE_INFLUENCERS "+this._mesh.numBoneInfluencers,"#define NUM_BONE_INFLUENCERS 0"),t._bonesComputationForcedToCPU=!0;const i=this._mesh.getScene();for(let r=0;r<i.meshes.length;r++){const n=i.meshes[r];if(!n.material){!this._mesh.material&&n.computeBonesUsingShaders&&n.numBoneInfluencers>0&&(n.computeBonesUsingShaders=!1);continue}if(!(!n.computeBonesUsingShaders||n.numBoneInfluencers===0)){if(n.material.getEffect()===t)n.computeBonesUsingShaders=!1;else if(n.subMeshes){for(const s of n.subMeshes)if(s.effect===t){n.computeBonesUsingShaders=!1;break}}}}}else{const i=this._defines[this._currentRank];if(i)for(let r=0;r<i.length;r++)e=e.replace("#define "+i[r],"");this._currentRank++}return e}}class ni extends ne{constructor(e,t,i=!0){super(e,t),this._normalMatrix=new F,this._storeEffectOnSubMeshes=i}getEffect(){return this._storeEffectOnSubMeshes?this._activeEffect:super.getEffect()}isReady(e,t){return e?!this._storeEffectOnSubMeshes||!e.subMeshes||e.subMeshes.length===0?!0:this.isReadyForSubMesh(e,e.subMeshes[0],t):!1}_isReadyForSubMesh(e){const t=e.materialDefines;return!!(!this.checkReadyOnEveryCall&&e.effect&&t&&t._renderId===this.getScene().getRenderId())}bindOnlyWorldMatrix(e){this._activeEffect.setMatrix("world",e)}bindOnlyNormalMatrix(e){this._activeEffect.setMatrix("normalMatrix",e)}bind(e,t){t&&this.bindForSubMesh(e,t,t.subMeshes[0])}_afterBind(e,t=null){super._afterBind(e,t),this.getScene()._cachedEffect=t}_mustRebind(e,t,i=1){return e.isCachedMaterialInvalid(this,t,i)}}const St={effect:null,subMesh:null};class Me extends ni{constructor(e,t,i,r={},n=!0){super(e,t,n),this._textures={},this._textureArrays={},this._externalTextures={},this._floats={},this._ints={},this._floatsArrays={},this._colors3={},this._colors3Arrays={},this._colors4={},this._colors4Arrays={},this._vectors2={},this._vectors3={},this._vectors4={},this._quaternions={},this._quaternionsArrays={},this._matrices={},this._matrixArrays={},this._matrices3x3={},this._matrices2x2={},this._vectors2Arrays={},this._vectors3Arrays={},this._vectors4Arrays={},this._uniformBuffers={},this._textureSamplers={},this._storageBuffers={},this._cachedWorldViewMatrix=new F,this._cachedWorldViewProjectionMatrix=new F,this._multiview=!1,this._shaderPath=i,this._options={needAlphaBlending:!1,needAlphaTesting:!1,attributes:["position","normal","uv"],uniforms:["worldViewProjection"],uniformBuffers:[],samplers:[],externalTextures:[],samplerObjects:[],storageBuffers:[],defines:[],useClipPlane:!1,...r}}get shaderPath(){return this._shaderPath}set shaderPath(e){this._shaderPath=e}get options(){return this._options}getClassName(){return"ShaderMaterial"}needAlphaBlending(){return this.alpha<1||this._options.needAlphaBlending}needAlphaTesting(){return this._options.needAlphaTesting}_checkUniform(e){this._options.uniforms.indexOf(e)===-1&&this._options.uniforms.push(e)}setTexture(e,t){return this._options.samplers.indexOf(e)===-1&&this._options.samplers.push(e),this._textures[e]=t,this}setTextureArray(e,t){return this._options.samplers.indexOf(e)===-1&&this._options.samplers.push(e),this._checkUniform(e),this._textureArrays[e]=t,this}setExternalTexture(e,t){return this._options.externalTextures.indexOf(e)===-1&&this._options.externalTextures.push(e),this._externalTextures[e]=t,this}setFloat(e,t){return this._checkUniform(e),this._floats[e]=t,this}setInt(e,t){return this._checkUniform(e),this._ints[e]=t,this}setFloats(e,t){return this._checkUniform(e),this._floatsArrays[e]=t,this}setColor3(e,t){return this._checkUniform(e),this._colors3[e]=t,this}setColor3Array(e,t){return this._checkUniform(e),this._colors3Arrays[e]=t.reduce((i,r)=>(r.toArray(i,i.length),i),[]),this}setColor4(e,t){return this._checkUniform(e),this._colors4[e]=t,this}setColor4Array(e,t){return this._checkUniform(e),this._colors4Arrays[e]=t.reduce((i,r)=>(r.toArray(i,i.length),i),[]),this}setVector2(e,t){return this._checkUniform(e),this._vectors2[e]=t,this}setVector3(e,t){return this._checkUniform(e),this._vectors3[e]=t,this}setVector4(e,t){return this._checkUniform(e),this._vectors4[e]=t,this}setQuaternion(e,t){return this._checkUniform(e),this._quaternions[e]=t,this}setQuaternionArray(e,t){return this._checkUniform(e),this._quaternionsArrays[e]=t.reduce((i,r)=>(r.toArray(i,i.length),i),[]),this}setMatrix(e,t){return this._checkUniform(e),this._matrices[e]=t,this}setMatrices(e,t){this._checkUniform(e);const i=new Float32Array(t.length*16);for(let r=0;r<t.length;r++)t[r].copyToArray(i,r*16);return this._matrixArrays[e]=i,this}setMatrix3x3(e,t){return this._checkUniform(e),this._matrices3x3[e]=t,this}setMatrix2x2(e,t){return this._checkUniform(e),this._matrices2x2[e]=t,this}setArray2(e,t){return this._checkUniform(e),this._vectors2Arrays[e]=t,this}setArray3(e,t){return this._checkUniform(e),this._vectors3Arrays[e]=t,this}setArray4(e,t){return this._checkUniform(e),this._vectors4Arrays[e]=t,this}setUniformBuffer(e,t){return this._options.uniformBuffers.indexOf(e)===-1&&this._options.uniformBuffers.push(e),this._uniformBuffers[e]=t,this}setTextureSampler(e,t){return this._options.samplerObjects.indexOf(e)===-1&&this._options.samplerObjects.push(e),this._textureSamplers[e]=t,this}setStorageBuffer(e,t){return this._options.storageBuffers.indexOf(e)===-1&&this._options.storageBuffers.push(e),this._storageBuffers[e]=t,this}isReadyForSubMesh(e,t,i){return this.isReady(e,i,t)}isReady(e,t,i){var r,n,s,a;const o=i&&this._storeEffectOnSubMeshes;if(this.isFrozen)if(o){if(i.effect&&i.effect._wasPreviouslyReady)return!0}else{const D=this._drawWrapper.effect;if(D&&D._wasPreviouslyReady&&D._wasPreviouslyUsingInstances===t)return!0}const l=this.getScene(),c=l.getEngine(),f=[],d=[],_=new ri;let u=this._shaderPath,p=this._options.uniforms,g=this._options.uniformBuffers,T=this._options.samplers;c.getCaps().multiview&&l.activeCamera&&l.activeCamera.outputRenderTarget&&l.activeCamera.outputRenderTarget.getViewCount()>1&&(this._multiview=!0,f.push("#define MULTIVIEW"),this._options.uniforms.indexOf("viewProjection")!==-1&&this._options.uniforms.indexOf("viewProjectionR")===-1&&this._options.uniforms.push("viewProjectionR"));for(let D=0;D<this._options.defines.length;D++){const K=this._options.defines[D].indexOf("#define")===0?this._options.defines[D]:`#define ${this._options.defines[D]}`;f.push(K)}for(let D=0;D<this._options.attributes.length;D++)d.push(this._options.attributes[D]);if(e&&e.isVerticesDataPresent(y.ColorKind)&&(d.push(y.ColorKind),f.push("#define VERTEXCOLOR")),t&&(f.push("#define INSTANCES"),N.PushAttributesForInstances(d),e!=null&&e.hasThinInstances&&(f.push("#define THIN_INSTANCES"),e&&e.isVerticesDataPresent(y.ColorInstanceKind)&&(d.push(y.ColorInstanceKind),f.push("#define INSTANCESCOLOR")))),e&&e.useBones&&e.computeBonesUsingShaders&&e.skeleton){d.push(y.MatricesIndicesKind),d.push(y.MatricesWeightsKind),e.numBoneInfluencers>4&&(d.push(y.MatricesIndicesExtraKind),d.push(y.MatricesWeightsExtraKind));const D=e.skeleton;f.push("#define NUM_BONE_INFLUENCERS "+e.numBoneInfluencers),_.addCPUSkinningFallback(0,e),D.isUsingTextureForMatrices?(f.push("#define BONETEXTURE"),this._options.uniforms.indexOf("boneTextureWidth")===-1&&this._options.uniforms.push("boneTextureWidth"),this._options.samplers.indexOf("boneSampler")===-1&&this._options.samplers.push("boneSampler")):(f.push("#define BonesPerMesh "+(D.bones.length+1)),this._options.uniforms.indexOf("mBones")===-1&&this._options.uniforms.push("mBones"))}else f.push("#define NUM_BONE_INFLUENCERS 0");let C=0;const R=e?e.morphTargetManager:null;if(R){const D=R.supportsUVs&&f.indexOf("#define UV1")!==-1,K=R.supportsTangents&&f.indexOf("#define TANGENT")!==-1,fe=R.supportsNormals&&f.indexOf("#define NORMAL")!==-1;C=R.numInfluencers,D&&f.push("#define MORPHTARGETS_UV"),K&&f.push("#define MORPHTARGETS_TANGENT"),fe&&f.push("#define MORPHTARGETS_NORMAL"),C>0&&f.push("#define MORPHTARGETS"),R.isUsingTextureForTargets&&(f.push("#define MORPHTARGETS_TEXTURE"),this._options.uniforms.indexOf("morphTargetTextureIndices")===-1&&this._options.uniforms.push("morphTargetTextureIndices"),this._options.samplers.indexOf("morphTargets")===-1&&this._options.samplers.push("morphTargets")),f.push("#define NUM_MORPH_INFLUENCERS "+C);for(let _e=0;_e<C;_e++)d.push(y.PositionKind+_e),fe&&d.push(y.NormalKind+_e),K&&d.push(y.TangentKind+_e),D&&d.push(y.UVKind+"_"+_e);C>0&&(p=p.slice(),p.push("morphTargetInfluences"),p.push("morphTargetTextureInfo"),p.push("morphTargetTextureIndices"))}else f.push("#define NUM_MORPH_INFLUENCERS 0");if(e){const D=e.bakedVertexAnimationManager;D&&D.isEnabled&&(f.push("#define BAKED_VERTEX_ANIMATION_TEXTURE"),this._options.uniforms.indexOf("bakedVertexAnimationSettings")===-1&&this._options.uniforms.push("bakedVertexAnimationSettings"),this._options.uniforms.indexOf("bakedVertexAnimationTextureSizeInverted")===-1&&this._options.uniforms.push("bakedVertexAnimationTextureSizeInverted"),this._options.uniforms.indexOf("bakedVertexAnimationTime")===-1&&this._options.uniforms.push("bakedVertexAnimationTime"),this._options.samplers.indexOf("bakedVertexAnimationTexture")===-1&&this._options.samplers.push("bakedVertexAnimationTexture")),N.PrepareAttributesForBakedVertexAnimation(d,e,f)}for(const D in this._textures)if(!this._textures[D].isReady())return!1;e&&this._shouldTurnAlphaTestOn(e)&&f.push("#define ALPHATEST"),this._options.useClipPlane!==!1&&(Kt(p),Ai(this,l,f)),this.customShaderNameResolve&&(p=p.slice(),g=g.slice(),T=T.slice(),u=this.customShaderNameResolve(u,p,g,T,f,d));const b=o?i._getDrawWrapper():this._drawWrapper,G=(r=b==null?void 0:b.effect)!==null&&r!==void 0?r:null,X=(n=b==null?void 0:b.defines)!==null&&n!==void 0?n:null,L=f.join(`
`);let O=G;return X!==L&&(O=c.createEffect(u,{attributes:d,uniformsNames:p,uniformBuffersNames:g,samplers:T,defines:L,fallbacks:_,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousMorphTargets:C},shaderLanguage:this._options.shaderLanguage},c),o?i.setEffect(O,L,this._materialContext):b&&b.setEffect(O,L),this._onEffectCreatedObservable&&(St.effect=O,St.subMesh=(s=i??(e==null?void 0:e.subMeshes[0]))!==null&&s!==void 0?s:null,this._onEffectCreatedObservable.notifyObservers(St))),O._wasPreviouslyUsingInstances=!!t,!((a=!(O!=null&&O.isReady()))!==null&&a!==void 0)||a?!1:(G!==O&&l.resetCachedMaterial(),O._wasPreviouslyReady=!0,!0)}bindOnlyWorldMatrix(e,t){const i=this.getScene(),r=t??this.getEffect();r&&(this._options.uniforms.indexOf("world")!==-1&&r.setMatrix("world",e),this._options.uniforms.indexOf("worldView")!==-1&&(e.multiplyToRef(i.getViewMatrix(),this._cachedWorldViewMatrix),r.setMatrix("worldView",this._cachedWorldViewMatrix)),this._options.uniforms.indexOf("worldViewProjection")!==-1&&(e.multiplyToRef(i.getTransformMatrix(),this._cachedWorldViewProjectionMatrix),r.setMatrix("worldViewProjection",this._cachedWorldViewProjectionMatrix)))}bindForSubMesh(e,t,i){var r;this.bind(e,t,(r=i._drawWrapperOverride)===null||r===void 0?void 0:r.effect,i)}bind(e,t,i,r){var n;const s=r&&this._storeEffectOnSubMeshes,a=i??(s?r.effect:this.getEffect());if(!a)return;this._activeEffect=a,this.bindOnlyWorldMatrix(e,i);const o=this._options.uniformBuffers;let l=!1;if(a&&o&&o.length>0&&this.getScene().getEngine().supportsUniformBuffers)for(let f=0;f<o.length;++f)switch(o[f]){case"Mesh":t&&(t.getMeshUniformBuffer().bindToEffect(a,"Mesh"),t.transferToEffect(e));break;case"Scene":N.BindSceneUniformBuffer(a,this.getScene().getSceneUniformBuffer()),this.getScene().finalizeSceneUbo(),l=!0;break}const c=t&&s?this._mustRebind(this.getScene(),a,t.visibility):this.getScene().getCachedMaterial()!==this;if(a&&c){!l&&this._options.uniforms.indexOf("view")!==-1&&a.setMatrix("view",this.getScene().getViewMatrix()),!l&&this._options.uniforms.indexOf("projection")!==-1&&a.setMatrix("projection",this.getScene().getProjectionMatrix()),!l&&this._options.uniforms.indexOf("viewProjection")!==-1&&(a.setMatrix("viewProjection",this.getScene().getTransformMatrix()),this._multiview&&a.setMatrix("viewProjectionR",this.getScene()._transformMatrixR)),this.getScene().activeCamera&&this._options.uniforms.indexOf("cameraPosition")!==-1&&a.setVector3("cameraPosition",this.getScene().activeCamera.globalPosition),N.BindBonesParameters(t,a),qt(a,this,this.getScene());let f;for(f in this._textures)a.setTexture(f,this._textures[f]);for(f in this._textureArrays)a.setTextureArray(f,this._textureArrays[f]);for(f in this._externalTextures)a.setExternalTexture(f,this._externalTextures[f]);for(f in this._ints)a.setInt(f,this._ints[f]);for(f in this._floats)a.setFloat(f,this._floats[f]);for(f in this._floatsArrays)a.setArray(f,this._floatsArrays[f]);for(f in this._colors3)a.setColor3(f,this._colors3[f]);for(f in this._colors3Arrays)a.setArray3(f,this._colors3Arrays[f]);for(f in this._colors4){const d=this._colors4[f];a.setFloat4(f,d.r,d.g,d.b,d.a)}for(f in this._colors4Arrays)a.setArray4(f,this._colors4Arrays[f]);for(f in this._vectors2)a.setVector2(f,this._vectors2[f]);for(f in this._vectors3)a.setVector3(f,this._vectors3[f]);for(f in this._vectors4)a.setVector4(f,this._vectors4[f]);for(f in this._quaternions)a.setQuaternion(f,this._quaternions[f]);for(f in this._matrices)a.setMatrix(f,this._matrices[f]);for(f in this._matrixArrays)a.setMatrices(f,this._matrixArrays[f]);for(f in this._matrices3x3)a.setMatrix3x3(f,this._matrices3x3[f]);for(f in this._matrices2x2)a.setMatrix2x2(f,this._matrices2x2[f]);for(f in this._vectors2Arrays)a.setArray2(f,this._vectors2Arrays[f]);for(f in this._vectors3Arrays)a.setArray3(f,this._vectors3Arrays[f]);for(f in this._vectors4Arrays)a.setArray4(f,this._vectors4Arrays[f]);for(f in this._quaternionsArrays)a.setArray4(f,this._quaternionsArrays[f]);for(f in this._uniformBuffers){const d=this._uniformBuffers[f].getBuffer();d&&a.bindUniformBuffer(d,f)}for(f in this._textureSamplers)a.setTextureSampler(f,this._textureSamplers[f]);for(f in this._storageBuffers)a.setStorageBuffer(f,this._storageBuffers[f])}if(a&&t&&(c||!this.isFrozen)){const f=t.morphTargetManager;f&&f.numInfluencers>0&&N.BindMorphTargetParameters(t,a);const d=t.bakedVertexAnimationManager;d&&d.isEnabled&&((n=t.bakedVertexAnimationManager)===null||n===void 0||n.bind(a,!!a._wasPreviouslyUsingInstances))}this._afterBind(t,a)}getActiveTextures(){const e=super.getActiveTextures();for(const t in this._textures)e.push(this._textures[t]);for(const t in this._textureArrays){const i=this._textureArrays[t];for(let r=0;r<i.length;r++)e.push(i[r])}return e}hasTexture(e){if(super.hasTexture(e))return!0;for(const t in this._textures)if(this._textures[t]===e)return!0;for(const t in this._textureArrays){const i=this._textureArrays[t];for(let r=0;r<i.length;r++)if(i[r]===e)return!0}return!1}clone(e){const t=ae.Clone(()=>new Me(e,this.getScene(),this._shaderPath,this._options,this._storeEffectOnSubMeshes),this);t.name=e,t.id=e,typeof t._shaderPath=="object"&&(t._shaderPath={...t._shaderPath}),this._options={...this._options},Object.keys(this._options).forEach(i=>{const r=this._options[i];Array.isArray(r)&&(this._options[i]=r.slice(0))}),this.stencil.copyTo(t.stencil);for(const i in this._textures)t.setTexture(i,this._textures[i]);for(const i in this._textureArrays)t.setTextureArray(i,this._textureArrays[i]);for(const i in this._externalTextures)t.setExternalTexture(i,this._externalTextures[i]);for(const i in this._ints)t.setInt(i,this._ints[i]);for(const i in this._floats)t.setFloat(i,this._floats[i]);for(const i in this._floatsArrays)t.setFloats(i,this._floatsArrays[i]);for(const i in this._colors3)t.setColor3(i,this._colors3[i]);for(const i in this._colors3Arrays)t._colors3Arrays[i]=this._colors3Arrays[i];for(const i in this._colors4)t.setColor4(i,this._colors4[i]);for(const i in this._colors4Arrays)t._colors4Arrays[i]=this._colors4Arrays[i];for(const i in this._vectors2)t.setVector2(i,this._vectors2[i]);for(const i in this._vectors3)t.setVector3(i,this._vectors3[i]);for(const i in this._vectors4)t.setVector4(i,this._vectors4[i]);for(const i in this._quaternions)t.setQuaternion(i,this._quaternions[i]);for(const i in this._quaternionsArrays)t._quaternionsArrays[i]=this._quaternionsArrays[i];for(const i in this._matrices)t.setMatrix(i,this._matrices[i]);for(const i in this._matrixArrays)t._matrixArrays[i]=this._matrixArrays[i].slice();for(const i in this._matrices3x3)t.setMatrix3x3(i,this._matrices3x3[i]);for(const i in this._matrices2x2)t.setMatrix2x2(i,this._matrices2x2[i]);for(const i in this._vectors2Arrays)t.setArray2(i,this._vectors2Arrays[i]);for(const i in this._vectors3Arrays)t.setArray3(i,this._vectors3Arrays[i]);for(const i in this._vectors4Arrays)t.setArray4(i,this._vectors4Arrays[i]);for(const i in this._uniformBuffers)t.setUniformBuffer(i,this._uniformBuffers[i]);for(const i in this._textureSamplers)t.setTextureSampler(i,this._textureSamplers[i]);for(const i in this._storageBuffers)t.setStorageBuffer(i,this._storageBuffers[i]);return t}dispose(e,t,i){if(t){let r;for(r in this._textures)this._textures[r].dispose();for(r in this._textureArrays){const n=this._textureArrays[r];for(let s=0;s<n.length;s++)n[s].dispose()}}this._textures={},super.dispose(e,t,i)}serialize(){const e=ae.Serialize(this);e.customType="BABYLON.ShaderMaterial",e.uniqueId=this.uniqueId,e.options=this._options,e.shaderPath=this._shaderPath,e.storeEffectOnSubMeshes=this._storeEffectOnSubMeshes;let t;e.stencil=this.stencil.serialize(),e.textures={};for(t in this._textures)e.textures[t]=this._textures[t].serialize();e.textureArrays={};for(t in this._textureArrays){e.textureArrays[t]=[];const i=this._textureArrays[t];for(let r=0;r<i.length;r++)e.textureArrays[t].push(i[r].serialize())}e.ints={};for(t in this._ints)e.ints[t]=this._ints[t];e.floats={};for(t in this._floats)e.floats[t]=this._floats[t];e.FloatArrays={};for(t in this._floatsArrays)e.FloatArrays[t]=this._floatsArrays[t];e.colors3={};for(t in this._colors3)e.colors3[t]=this._colors3[t].asArray();e.colors3Arrays={};for(t in this._colors3Arrays)e.colors3Arrays[t]=this._colors3Arrays[t];e.colors4={};for(t in this._colors4)e.colors4[t]=this._colors4[t].asArray();e.colors4Arrays={};for(t in this._colors4Arrays)e.colors4Arrays[t]=this._colors4Arrays[t];e.vectors2={};for(t in this._vectors2)e.vectors2[t]=this._vectors2[t].asArray();e.vectors3={};for(t in this._vectors3)e.vectors3[t]=this._vectors3[t].asArray();e.vectors4={};for(t in this._vectors4)e.vectors4[t]=this._vectors4[t].asArray();e.quaternions={};for(t in this._quaternions)e.quaternions[t]=this._quaternions[t].asArray();e.matrices={};for(t in this._matrices)e.matrices[t]=this._matrices[t].asArray();e.matrixArray={};for(t in this._matrixArrays)e.matrixArray[t]=this._matrixArrays[t];e.matrices3x3={};for(t in this._matrices3x3)e.matrices3x3[t]=this._matrices3x3[t];e.matrices2x2={};for(t in this._matrices2x2)e.matrices2x2[t]=this._matrices2x2[t];e.vectors2Arrays={};for(t in this._vectors2Arrays)e.vectors2Arrays[t]=this._vectors2Arrays[t];e.vectors3Arrays={};for(t in this._vectors3Arrays)e.vectors3Arrays[t]=this._vectors3Arrays[t];e.vectors4Arrays={};for(t in this._vectors4Arrays)e.vectors4Arrays[t]=this._vectors4Arrays[t];e.quaternionsArrays={};for(t in this._quaternionsArrays)e.quaternionsArrays[t]=this._quaternionsArrays[t];return e}static Parse(e,t,i){const r=ae.Parse(()=>new Me(e.name,t,e.shaderPath,e.options,e.storeEffectOnSubMeshes),e,t,i);let n;e.stencil&&r.stencil.parse(e.stencil,t,i);for(n in e.textures)r.setTexture(n,A.Parse(e.textures[n],t,i));for(n in e.textureArrays){const s=e.textureArrays[n],a=new Array;for(let o=0;o<s.length;o++)a.push(A.Parse(s[o],t,i));r.setTextureArray(n,a)}for(n in e.ints)r.setInt(n,e.ints[n]);for(n in e.floats)r.setFloat(n,e.floats[n]);for(n in e.floatsArrays)r.setFloats(n,e.floatsArrays[n]);for(n in e.colors3)r.setColor3(n,Z.FromArray(e.colors3[n]));for(n in e.colors3Arrays){const s=e.colors3Arrays[n].reduce((a,o,l)=>(l%3===0?a.push([o]):a[a.length-1].push(o),a),[]).map(a=>Z.FromArray(a));r.setColor3Array(n,s)}for(n in e.colors4)r.setColor4(n,xt.FromArray(e.colors4[n]));for(n in e.colors4Arrays){const s=e.colors4Arrays[n].reduce((a,o,l)=>(l%4===0?a.push([o]):a[a.length-1].push(o),a),[]).map(a=>xt.FromArray(a));r.setColor4Array(n,s)}for(n in e.vectors2)r.setVector2(n,Ze.FromArray(e.vectors2[n]));for(n in e.vectors3)r.setVector3(n,v.FromArray(e.vectors3[n]));for(n in e.vectors4)r.setVector4(n,yt.FromArray(e.vectors4[n]));for(n in e.quaternions)r.setQuaternion(n,ue.FromArray(e.quaternions[n]));for(n in e.matrices)r.setMatrix(n,F.FromArray(e.matrices[n]));for(n in e.matrixArray)r._matrixArrays[n]=new Float32Array(e.matrixArray[n]);for(n in e.matrices3x3)r.setMatrix3x3(n,e.matrices3x3[n]);for(n in e.matrices2x2)r.setMatrix2x2(n,e.matrices2x2[n]);for(n in e.vectors2Arrays)r.setArray2(n,e.vectors2Arrays[n]);for(n in e.vectors3Arrays)r.setArray3(n,e.vectors3Arrays[n]);for(n in e.vectors4Arrays)r.setArray4(n,e.vectors4Arrays[n]);for(n in e.quaternionsArrays)r.setArray4(n,e.quaternionsArrays[n]);return r}static ParseFromFileAsync(e,t,i,r=""){return new Promise((n,s)=>{const a=new wt;a.addEventListener("readystatechange",()=>{if(a.readyState==4)if(a.status==200){const o=JSON.parse(a.responseText),l=this.Parse(o,i||re.LastCreatedScene,r);e&&(l.name=e),n(l)}else s("Unable to load the ShaderMaterial")}),a.open("GET",t),a.send()})}static ParseFromSnippetAsync(e,t,i=""){return new Promise((r,n)=>{const s=new wt;s.addEventListener("readystatechange",()=>{if(s.readyState==4)if(s.status==200){const a=JSON.parse(JSON.parse(s.responseText).jsonPayload),o=JSON.parse(a.shaderMaterial),l=this.Parse(o,t||re.LastCreatedScene,i);l.snippetId=e,r(l)}else n("Unable to load the snippet "+e)}),s.open("GET",this.SnippetUrl+"/"+e.replace(/#/g,"/")),s.send()})}}Me.SnippetUrl="https://snippet.babylonjs.com";Me.CreateFromSnippetAsync=Me.ParseFromSnippetAsync;tt("BABYLON.ShaderMaterial",Me);function Lt(h){let t=[0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23];const i=[0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0],r=[];let n=[];const s=h.width||h.size||1,a=h.height||h.size||1,o=h.depth||h.size||1,l=h.wrap||!1;let c=h.topBaseAt===void 0?1:h.topBaseAt,f=h.bottomBaseAt===void 0?0:h.bottomBaseAt;c=(c+4)%4,f=(f+4)%4;const d=[2,0,3,1],_=[2,0,1,3];let u=d[c],p=_[f],g=[1,-1,1,-1,-1,1,-1,1,1,1,1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1,1,1,-1,1,-1,-1,1,-1,1,1,1,1,-1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1,1,1,-1,1,-1,1,1,-1,1,1,1,1,-1,1,1,-1,-1,-1,-1,-1,-1,-1,1];if(l){t=[2,3,0,2,0,1,4,5,6,4,6,7,9,10,11,9,11,8,12,14,15,12,13,14],g=[-1,1,1,1,1,1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1,1,1,1,1,1,-1,1,-1,-1,1,-1,1,-1,1,-1,-1,1,1,-1,-1,1,-1,-1,-1];let L=[[1,1,1],[-1,1,1],[-1,1,-1],[1,1,-1]],O=[[-1,-1,1],[1,-1,1],[1,-1,-1],[-1,-1,-1]];const D=[17,18,19,16],K=[22,23,20,21];for(;u>0;)L.unshift(L.pop()),D.unshift(D.pop()),u--;for(;p>0;)O.unshift(O.pop()),K.unshift(K.pop()),p--;L=L.flat(),O=O.flat(),g=g.concat(L).concat(O),t.push(D[0],D[2],D[3],D[0],D[1],D[2]),t.push(K[0],K[2],K[3],K[0],K[1],K[2])}const T=[s/2,a/2,o/2];n=g.reduce((L,O,D)=>L.concat(O*T[D%3]),[]);const C=h.sideOrientation===0?0:h.sideOrientation||je.DEFAULTSIDE,R=h.faceUV||new Array(6),b=h.faceColors,G=[];for(let L=0;L<6;L++)R[L]===void 0&&(R[L]=new yt(0,0,1,1)),b&&b[L]===void 0&&(b[L]=new xt(1,1,1,1));for(let L=0;L<6;L++)if(r.push(R[L].z,Ge.UseOpenGLOrientationForUV?1-R[L].w:R[L].w),r.push(R[L].x,Ge.UseOpenGLOrientationForUV?1-R[L].w:R[L].w),r.push(R[L].x,Ge.UseOpenGLOrientationForUV?1-R[L].y:R[L].y),r.push(R[L].z,Ge.UseOpenGLOrientationForUV?1-R[L].y:R[L].y),b)for(let O=0;O<4;O++)G.push(b[L].r,b[L].g,b[L].b,b[L].a);je._ComputeSides(C,n,t,i,r,h.frontUVs,h.backUVs);const X=new je;if(X.indices=t,X.positions=n,X.normals=i,X.uvs=r,b){const L=C===je.DOUBLESIDE?G.concat(G):G;X.colors=L}return X}function Qi(h,e={},t=null){const i=new De(h,t);return e.sideOrientation=De._GetDefaultSideOrientation(e.sideOrientation),i._originalBuilderSideOrientation=e.sideOrientation,Lt(e).applyToMesh(i,e.updatable),i}je.CreateBox=Lt;De.CreateBox=(h,e,t=null,i,r)=>Qi(h,{size:e,sideOrientation:r,updatable:i},t);const Ki="boundingBoxRendererFragmentDeclaration",qi=`uniform vec4 color;
`;x.IncludesShadersStore[Ki]=qi;const ji="boundingBoxRendererUboDeclaration",Zi=`#ifdef WEBGL2
uniform vec4 color;
uniform mat4 world;
uniform mat4 viewProjection;
#ifdef MULTIVIEW
uniform mat4 viewProjectionR;
#endif
#else
layout(std140,column_major) uniform;
uniform BoundingBoxRenderer {
vec4 color;
mat4 world;
mat4 viewProjection;
mat4 viewProjectionR;
};
#endif
`;x.IncludesShadersStore[ji]=Zi;const Ji="boundingBoxRendererPixelShader",$i=`#include<__decl__boundingBoxRendererFragment>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
gl_FragColor=color;
#define CUSTOM_FRAGMENT_MAIN_END
}`;x.ShadersStore[Ji]=$i;const er="boundingBoxRendererVertexDeclaration",tr=`uniform mat4 world;
uniform mat4 viewProjection;
#ifdef MULTIVIEW
uniform mat4 viewProjectionR;
#endif
`;x.IncludesShadersStore[er]=tr;const ir="boundingBoxRendererVertexShader",rr=`attribute vec3 position;
#include<__decl__boundingBoxRendererVertex>
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
vec4 worldPos=world*vec4(position,1.0);
#ifdef MULTIVIEW
if (gl_ViewID_OVR==0u) {
gl_Position=viewProjection*worldPos;
} else {
gl_Position=viewProjectionR*worldPos;
}
#else
gl_Position=viewProjection*worldPos;
#endif
#define CUSTOM_VERTEX_MAIN_END
}
`;x.ShadersStore[ir]=rr;Object.defineProperty(ut.prototype,"forceShowBoundingBoxes",{get:function(){return this._forceShowBoundingBoxes||!1},set:function(h){this._forceShowBoundingBoxes=h,h&&this.getBoundingBoxRenderer()},enumerable:!0,configurable:!0});ut.prototype.getBoundingBoxRenderer=function(){return this._boundingBoxRenderer||(this._boundingBoxRenderer=new nr(this)),this._boundingBoxRenderer};Object.defineProperty(Ti.prototype,"showBoundingBox",{get:function(){return this._showBoundingBox||!1},set:function(h){this._showBoundingBox=h,h&&this.getScene().getBoundingBoxRenderer()},enumerable:!0,configurable:!0});class nr{constructor(e){this.name=Ye.NAME_BOUNDINGBOXRENDERER,this.frontColor=new Z(1,1,1),this.backColor=new Z(.1,.1,.1),this.showBackLines=!0,this.onBeforeBoxRenderingObservable=new B,this.onAfterBoxRenderingObservable=new B,this.onResourcesReadyObservable=new B,this.enabled=!0,this.renderList=new Je(32),this._vertexBuffers={},this._fillIndexBuffer=null,this._fillIndexData=null,this.scene=e,e._addComponent(this),this._uniformBufferFront=new Ut(this.scene.getEngine(),void 0,void 0,"BoundingBoxRendererFront",!this.scene.getEngine().isWebGPU),this._buildUniformLayout(this._uniformBufferFront),this._uniformBufferBack=new Ut(this.scene.getEngine(),void 0,void 0,"BoundingBoxRendererBack",!this.scene.getEngine().isWebGPU),this._buildUniformLayout(this._uniformBufferBack)}_buildUniformLayout(e){e.addUniform("color",4),e.addUniform("world",16),e.addUniform("viewProjection",16),e.addUniform("viewProjectionR",16),e.create()}register(){this.scene._beforeEvaluateActiveMeshStage.registerStep(Ye.STEP_BEFOREEVALUATEACTIVEMESH_BOUNDINGBOXRENDERER,this,this.reset),this.scene._preActiveMeshStage.registerStep(Ye.STEP_PREACTIVEMESH_BOUNDINGBOXRENDERER,this,this._preActiveMesh),this.scene._evaluateSubMeshStage.registerStep(Ye.STEP_EVALUATESUBMESH_BOUNDINGBOXRENDERER,this,this._evaluateSubMesh),this.scene._afterRenderingGroupDrawStage.registerStep(Ye.STEP_AFTERRENDERINGGROUPDRAW_BOUNDINGBOXRENDERER,this,this.render)}_evaluateSubMesh(e,t){if(e.showSubMeshesBoundingBox){const i=t.getBoundingInfo();i!=null&&(i.boundingBox._tag=e.renderingGroupId,this.renderList.push(i.boundingBox))}}_preActiveMesh(e){if(e.showBoundingBox||this.scene.forceShowBoundingBoxes){const t=e.getBoundingInfo();t.boundingBox._tag=e.renderingGroupId,this.renderList.push(t.boundingBox)}}_prepareResources(){if(this._colorShader)return;this._colorShader=new Me("colorShader",this.scene,"boundingBoxRenderer",{attributes:[y.PositionKind],uniforms:["world","viewProjection","viewProjectionR","color"],uniformBuffers:["BoundingBoxRenderer"]},!1),this._colorShader.reservedDataStore={hidden:!0},this._colorShaderForOcclusionQuery=new Me("colorShaderOccQuery",this.scene,"boundingBoxRenderer",{attributes:[y.PositionKind],uniforms:["world","viewProjection","viewProjectionR","color"],uniformBuffers:["BoundingBoxRenderer"]},!0),this._colorShaderForOcclusionQuery.reservedDataStore={hidden:!0};const e=this.scene.getEngine(),t=Lt({size:1});this._vertexBuffers[y.PositionKind]=new y(e,t.positions,y.PositionKind,!1),this._createIndexBuffer(),this._fillIndexData=t.indices,this.onResourcesReadyObservable.notifyObservers(this)}_createIndexBuffer(){const e=this.scene.getEngine();this._indexBuffer=e.createIndexBuffer([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,7,1,6,2,5,3,4])}rebuild(){const e=this._vertexBuffers[y.PositionKind];e&&e._rebuild(),this._createIndexBuffer()}reset(){this.renderList.reset()}render(e){var t,i;if(this.renderList.length===0||!this.enabled||(this._prepareResources(),!this._colorShader.isReady()))return;const r=this.scene.getEngine();r.setDepthWrite(!1);const n=this.frontColor.toColor4(),s=this.backColor.toColor4(),a=this.scene.getTransformMatrix();for(let o=0;o<this.renderList.length;o++){const l=this.renderList.data[o];if(l._tag!==e)continue;this._createWrappersForBoundingBox(l),this.onBeforeBoxRenderingObservable.notifyObservers(l);const c=l.minimum,d=l.maximum.subtract(c),_=c.add(d.scale(.5)),u=F.Scaling(d.x,d.y,d.z).multiply(F.Translation(_.x,_.y,_.z)).multiply(l.getWorldMatrix()),p=r.useReverseDepthBuffer;if(this.showBackLines){const T=(t=l._drawWrapperBack)!==null&&t!==void 0?t:this._colorShader._getDrawWrapper();this._colorShader._preBind(T),r.bindBuffers(this._vertexBuffers,this._indexBuffer,this._colorShader.getEffect()),p?r.setDepthFunctionToLessOrEqual():r.setDepthFunctionToGreaterOrEqual(),this._uniformBufferBack.bindToEffect(T.effect,"BoundingBoxRenderer"),this._uniformBufferBack.updateDirectColor4("color",s),this._uniformBufferBack.updateMatrix("world",u),this._uniformBufferBack.updateMatrix("viewProjection",a),this._uniformBufferBack.update(),r.drawElementsType(ne.LineListDrawMode,0,24)}const g=(i=l._drawWrapperFront)!==null&&i!==void 0?i:this._colorShader._getDrawWrapper();this._colorShader._preBind(g),r.bindBuffers(this._vertexBuffers,this._indexBuffer,this._colorShader.getEffect()),p?r.setDepthFunctionToGreater():r.setDepthFunctionToLess(),this._uniformBufferFront.bindToEffect(g.effect,"BoundingBoxRenderer"),this._uniformBufferFront.updateDirectColor4("color",n),this._uniformBufferFront.updateMatrix("world",u),this._uniformBufferFront.updateMatrix("viewProjection",a),this._uniformBufferFront.update(),r.drawElementsType(ne.LineListDrawMode,0,24),this.onAfterBoxRenderingObservable.notifyObservers(l)}this._colorShader.unbind(),r.setDepthFunctionToLessOrEqual(),r.setDepthWrite(!0)}_createWrappersForBoundingBox(e){if(!e._drawWrapperFront){const t=this.scene.getEngine();e._drawWrapperFront=new lt(t),e._drawWrapperBack=new lt(t),e._drawWrapperFront.setEffect(this._colorShader.getEffect()),e._drawWrapperBack.setEffect(this._colorShader.getEffect())}}renderOcclusionBoundingBox(e){const t=this.scene.getEngine();this._renderPassIdForOcclusionQuery===void 0&&(this._renderPassIdForOcclusionQuery=t.createRenderPassId("Render pass for occlusion query"));const i=t.currentRenderPassId;t.currentRenderPassId=this._renderPassIdForOcclusionQuery,this._prepareResources();const r=e.subMeshes[0];if(!this._colorShaderForOcclusionQuery.isReady(e,void 0,r)||!e.hasBoundingInfo){t.currentRenderPassId=i;return}this._fillIndexBuffer||(this._fillIndexBuffer=t.createIndexBuffer(this._fillIndexData));const n=t.useReverseDepthBuffer;t.setDepthWrite(!1),t.setColorWrite(!1);const s=e.getBoundingInfo().boundingBox,a=s.minimum,l=s.maximum.subtract(a),c=a.add(l.scale(.5)),f=F.Scaling(l.x,l.y,l.z).multiply(F.Translation(c.x,c.y,c.z)).multiply(s.getWorldMatrix()),d=r._drawWrapper;this._colorShaderForOcclusionQuery._preBind(d),t.bindBuffers(this._vertexBuffers,this._fillIndexBuffer,d.effect),n?t.setDepthFunctionToGreater():t.setDepthFunctionToLess(),this.scene.resetCachedMaterial(),this._uniformBufferFront.bindToEffect(d.effect,"BoundingBoxRenderer"),this._uniformBufferFront.updateMatrix("world",f),this._uniformBufferFront.updateMatrix("viewProjection",this.scene.getTransformMatrix()),this._uniformBufferFront.update(),t.drawElementsType(ne.TriangleFillMode,0,36),this._colorShaderForOcclusionQuery.unbind(),t.setDepthFunctionToLessOrEqual(),t.setDepthWrite(!0),t.setColorWrite(!0),t.currentRenderPassId=i}dispose(){if(this._renderPassIdForOcclusionQuery!==void 0&&(this.scene.getEngine().releaseRenderPassId(this._renderPassIdForOcclusionQuery),this._renderPassIdForOcclusionQuery=void 0),!this._colorShader)return;this.onBeforeBoxRenderingObservable.clear(),this.onAfterBoxRenderingObservable.clear(),this.onResourcesReadyObservable.clear(),this.renderList.dispose(),this._colorShader.dispose(),this._colorShaderForOcclusionQuery.dispose(),this._uniformBufferFront.dispose(),this._uniformBufferBack.dispose();const e=this._vertexBuffers[y.PositionKind];e&&(e.dispose(),this._vertexBuffers[y.PositionKind]=null),this.scene.getEngine()._releaseBuffer(this._indexBuffer),this._fillIndexBuffer&&(this.scene.getEngine()._releaseBuffer(this._fillIndexBuffer),this._fillIndexBuffer=null)}}class sr{constructor(){this.promise=new Promise((e,t)=>{this._resolve=e,this._reject=t})}get resolve(){return this._resolve}get reject(){return this._reject}}class pe{constructor(){this.keysUp=[38],this.keysUpward=[33],this.keysDown=[40],this.keysDownward=[34],this.keysLeft=[37],this.keysRight=[39],this.rotationSpeed=.5,this.keysRotateLeft=[],this.keysRotateRight=[],this._keys=new Array}attachControl(e){e=J.BackCompatCameraNoPreventDefault(arguments),!this._onCanvasBlurObserver&&(this._scene=this.camera.getScene(),this._engine=this._scene.getEngine(),this._onCanvasBlurObserver=this._engine.onCanvasBlurObservable.add(()=>{this._keys.length=0}),this._onKeyboardObserver=this._scene.onKeyboardObservable.add(t=>{const i=t.event;if(!i.metaKey){if(t.type===vi.KEYDOWN)(this.keysUp.indexOf(i.keyCode)!==-1||this.keysDown.indexOf(i.keyCode)!==-1||this.keysLeft.indexOf(i.keyCode)!==-1||this.keysRight.indexOf(i.keyCode)!==-1||this.keysUpward.indexOf(i.keyCode)!==-1||this.keysDownward.indexOf(i.keyCode)!==-1||this.keysRotateLeft.indexOf(i.keyCode)!==-1||this.keysRotateRight.indexOf(i.keyCode)!==-1)&&(this._keys.indexOf(i.keyCode)===-1&&this._keys.push(i.keyCode),e||i.preventDefault());else if(this.keysUp.indexOf(i.keyCode)!==-1||this.keysDown.indexOf(i.keyCode)!==-1||this.keysLeft.indexOf(i.keyCode)!==-1||this.keysRight.indexOf(i.keyCode)!==-1||this.keysUpward.indexOf(i.keyCode)!==-1||this.keysDownward.indexOf(i.keyCode)!==-1||this.keysRotateLeft.indexOf(i.keyCode)!==-1||this.keysRotateRight.indexOf(i.keyCode)!==-1){const r=this._keys.indexOf(i.keyCode);r>=0&&this._keys.splice(r,1),e||i.preventDefault()}}}))}detachControl(){this._scene&&(this._onKeyboardObserver&&this._scene.onKeyboardObservable.remove(this._onKeyboardObserver),this._onCanvasBlurObserver&&this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver),this._onKeyboardObserver=null,this._onCanvasBlurObserver=null),this._keys.length=0}checkInputs(){if(this._onKeyboardObserver){const e=this.camera;for(let t=0;t<this._keys.length;t++){const i=this._keys[t],r=e._computeLocalCameraSpeed();this.keysLeft.indexOf(i)!==-1?e._localDirection.copyFromFloats(-r,0,0):this.keysUp.indexOf(i)!==-1?e._localDirection.copyFromFloats(0,0,r):this.keysRight.indexOf(i)!==-1?e._localDirection.copyFromFloats(r,0,0):this.keysDown.indexOf(i)!==-1?e._localDirection.copyFromFloats(0,0,-r):this.keysUpward.indexOf(i)!==-1?e._localDirection.copyFromFloats(0,r,0):this.keysDownward.indexOf(i)!==-1?e._localDirection.copyFromFloats(0,-r,0):this.keysRotateLeft.indexOf(i)!==-1?(e._localDirection.copyFromFloats(0,0,0),e.cameraRotation.y-=this._getLocalRotation()):this.keysRotateRight.indexOf(i)!==-1&&(e._localDirection.copyFromFloats(0,0,0),e.cameraRotation.y+=this._getLocalRotation()),e.getScene().useRightHandedSystem&&(e._localDirection.z*=-1),e.getViewMatrix().invertToRef(e._cameraTransformMatrix),v.TransformNormalToRef(e._localDirection,e._cameraTransformMatrix,e._transformedDirection),e.cameraDirection.addInPlace(e._transformedDirection)}}}getClassName(){return"FreeCameraKeyboardMoveInput"}_onLostFocus(){this._keys.length=0}getSimpleName(){return"keyboard"}_getLocalRotation(){let e=this.rotationSpeed*this._engine.getDeltaTime()/1e3;return this.camera.getScene().useRightHandedSystem&&(e*=-1),this.camera.parent&&this.camera.parent._getWorldMatrixDeterminant()<0&&(e*=-1),e}}m([E()],pe.prototype,"keysUp",void 0);m([E()],pe.prototype,"keysUpward",void 0);m([E()],pe.prototype,"keysDown",void 0);m([E()],pe.prototype,"keysDownward",void 0);m([E()],pe.prototype,"keysLeft",void 0);m([E()],pe.prototype,"keysRight",void 0);m([E()],pe.prototype,"rotationSpeed",void 0);m([E()],pe.prototype,"keysRotateLeft",void 0);m([E()],pe.prototype,"keysRotateRight",void 0);_t.FreeCameraKeyboardMoveInput=pe;class mt{constructor(e=!0){this.touchEnabled=e,this.buttons=[0,1,2],this.angularSensibility=2e3,this._previousPosition=null,this.onPointerMovedObservable=new B,this._allowCameraRotation=!0,this._currentActiveButton=-1,this._activePointerId=-1}attachControl(e){e=J.BackCompatCameraNoPreventDefault(arguments);const t=this.camera.getEngine(),i=t.getInputElement();this._pointerInput||(this._pointerInput=r=>{const n=r.event,s=n.pointerType==="touch";if(t.isInVRExclusivePointerMode||!this.touchEnabled&&s||r.type!==ce.POINTERMOVE&&this.buttons.indexOf(n.button)===-1)return;const a=n.target;if(r.type===ce.POINTERDOWN){if(s&&this._activePointerId!==-1||!s&&this._currentActiveButton!==-1)return;this._activePointerId=n.pointerId;try{a==null||a.setPointerCapture(n.pointerId)}catch{}this._currentActiveButton===-1&&(this._currentActiveButton=n.button),this._previousPosition={x:n.clientX,y:n.clientY},e||(n.preventDefault(),i&&i.focus()),t.isPointerLock&&this._onMouseMove&&this._onMouseMove(r.event)}else if(r.type===ce.POINTERUP){if(s&&this._activePointerId!==n.pointerId||!s&&this._currentActiveButton!==n.button)return;try{a==null||a.releasePointerCapture(n.pointerId)}catch{}this._currentActiveButton=-1,this._previousPosition=null,e||n.preventDefault(),this._activePointerId=-1}else if(r.type===ce.POINTERMOVE&&(this._activePointerId===n.pointerId||!s)){if(t.isPointerLock&&this._onMouseMove)this._onMouseMove(r.event);else if(this._previousPosition){let o=n.clientX-this._previousPosition.x;const l=n.clientY-this._previousPosition.y;this.camera.getScene().useRightHandedSystem&&(o*=-1),this.camera.parent&&this.camera.parent._getWorldMatrixDeterminant()<0&&(o*=-1),this._allowCameraRotation&&(this.camera.cameraRotation.y+=o/this.angularSensibility,this.camera.cameraRotation.x+=l/this.angularSensibility),this.onPointerMovedObservable.notifyObservers({offsetX:o,offsetY:l}),this._previousPosition={x:n.clientX,y:n.clientY},e||n.preventDefault()}}}),this._onMouseMove=r=>{if(!t.isPointerLock||t.isInVRExclusivePointerMode)return;let n=r.movementX;this.camera.getScene().useRightHandedSystem&&(n*=-1),this.camera.parent&&this.camera.parent._getWorldMatrixDeterminant()<0&&(n*=-1),this.camera.cameraRotation.y+=n/this.angularSensibility;const s=r.movementY;this.camera.cameraRotation.x+=s/this.angularSensibility,this._previousPosition=null,e||r.preventDefault()},this._observer=this.camera.getScene()._inputManager._addCameraPointerObserver(this._pointerInput,ce.POINTERDOWN|ce.POINTERUP|ce.POINTERMOVE),i&&(this._contextMenuBind=this.onContextMenu.bind(this),i.addEventListener("contextmenu",this._contextMenuBind,!1))}onContextMenu(e){e.preventDefault()}detachControl(){if(this._observer){if(this.camera.getScene()._inputManager._removeCameraPointerObserver(this._observer),this._contextMenuBind){const t=this.camera.getEngine().getInputElement();t&&t.removeEventListener("contextmenu",this._contextMenuBind)}this.onPointerMovedObservable&&this.onPointerMovedObservable.clear(),this._observer=null,this._onMouseMove=null,this._previousPosition=null}this._currentActiveButton=-1}getClassName(){return"FreeCameraMouseInput"}getSimpleName(){return"mouse"}}m([E()],mt.prototype,"buttons",void 0);m([E()],mt.prototype,"angularSensibility",void 0);_t.FreeCameraMouseInput=mt;class pt{constructor(){this.wheelPrecisionX=3,this.wheelPrecisionY=3,this.wheelPrecisionZ=3,this.onChangedObservable=new B,this._wheelDeltaX=0,this._wheelDeltaY=0,this._wheelDeltaZ=0,this._ffMultiplier=12,this._normalize=120}attachControl(e){e=J.BackCompatCameraNoPreventDefault(arguments),this._wheel=t=>{if(t.type!==ce.POINTERWHEEL)return;const i=t.event,r=i.deltaMode===Si.DOM_DELTA_LINE?this._ffMultiplier:1;this._wheelDeltaX+=this.wheelPrecisionX*r*i.deltaX/this._normalize,this._wheelDeltaY-=this.wheelPrecisionY*r*i.deltaY/this._normalize,this._wheelDeltaZ+=this.wheelPrecisionZ*r*i.deltaZ/this._normalize,i.preventDefault&&(e||i.preventDefault())},this._observer=this.camera.getScene()._inputManager._addCameraPointerObserver(this._wheel,ce.POINTERWHEEL)}detachControl(){this._observer&&(this.camera.getScene()._inputManager._removeCameraPointerObserver(this._observer),this._observer=null,this._wheel=null),this.onChangedObservable&&this.onChangedObservable.clear()}checkInputs(){this.onChangedObservable.notifyObservers({wheelDeltaX:this._wheelDeltaX,wheelDeltaY:this._wheelDeltaY,wheelDeltaZ:this._wheelDeltaZ}),this._wheelDeltaX=0,this._wheelDeltaY=0,this._wheelDeltaZ=0}getClassName(){return"BaseCameraMouseWheelInput"}getSimpleName(){return"mousewheel"}}m([E()],pt.prototype,"wheelPrecisionX",void 0);m([E()],pt.prototype,"wheelPrecisionY",void 0);m([E()],pt.prototype,"wheelPrecisionZ",void 0);var k;(function(h){h[h.MoveRelative=0]="MoveRelative",h[h.RotateRelative=1]="RotateRelative",h[h.MoveScene=2]="MoveScene"})(k||(k={}));class Ee extends pt{constructor(){super(...arguments),this._moveRelative=v.Zero(),this._rotateRelative=v.Zero(),this._moveScene=v.Zero(),this._wheelXAction=k.MoveRelative,this._wheelXActionCoordinate=Qe.X,this._wheelYAction=k.MoveRelative,this._wheelYActionCoordinate=Qe.Z,this._wheelZAction=null,this._wheelZActionCoordinate=null}getClassName(){return"FreeCameraMouseWheelInput"}set wheelXMoveRelative(e){e===null&&this._wheelXAction!==k.MoveRelative||(this._wheelXAction=k.MoveRelative,this._wheelXActionCoordinate=e)}get wheelXMoveRelative(){return this._wheelXAction!==k.MoveRelative?null:this._wheelXActionCoordinate}set wheelYMoveRelative(e){e===null&&this._wheelYAction!==k.MoveRelative||(this._wheelYAction=k.MoveRelative,this._wheelYActionCoordinate=e)}get wheelYMoveRelative(){return this._wheelYAction!==k.MoveRelative?null:this._wheelYActionCoordinate}set wheelZMoveRelative(e){e===null&&this._wheelZAction!==k.MoveRelative||(this._wheelZAction=k.MoveRelative,this._wheelZActionCoordinate=e)}get wheelZMoveRelative(){return this._wheelZAction!==k.MoveRelative?null:this._wheelZActionCoordinate}set wheelXRotateRelative(e){e===null&&this._wheelXAction!==k.RotateRelative||(this._wheelXAction=k.RotateRelative,this._wheelXActionCoordinate=e)}get wheelXRotateRelative(){return this._wheelXAction!==k.RotateRelative?null:this._wheelXActionCoordinate}set wheelYRotateRelative(e){e===null&&this._wheelYAction!==k.RotateRelative||(this._wheelYAction=k.RotateRelative,this._wheelYActionCoordinate=e)}get wheelYRotateRelative(){return this._wheelYAction!==k.RotateRelative?null:this._wheelYActionCoordinate}set wheelZRotateRelative(e){e===null&&this._wheelZAction!==k.RotateRelative||(this._wheelZAction=k.RotateRelative,this._wheelZActionCoordinate=e)}get wheelZRotateRelative(){return this._wheelZAction!==k.RotateRelative?null:this._wheelZActionCoordinate}set wheelXMoveScene(e){e===null&&this._wheelXAction!==k.MoveScene||(this._wheelXAction=k.MoveScene,this._wheelXActionCoordinate=e)}get wheelXMoveScene(){return this._wheelXAction!==k.MoveScene?null:this._wheelXActionCoordinate}set wheelYMoveScene(e){e===null&&this._wheelYAction!==k.MoveScene||(this._wheelYAction=k.MoveScene,this._wheelYActionCoordinate=e)}get wheelYMoveScene(){return this._wheelYAction!==k.MoveScene?null:this._wheelYActionCoordinate}set wheelZMoveScene(e){e===null&&this._wheelZAction!==k.MoveScene||(this._wheelZAction=k.MoveScene,this._wheelZActionCoordinate=e)}get wheelZMoveScene(){return this._wheelZAction!==k.MoveScene?null:this._wheelZActionCoordinate}checkInputs(){if(this._wheelDeltaX===0&&this._wheelDeltaY===0&&this._wheelDeltaZ==0)return;this._moveRelative.setAll(0),this._rotateRelative.setAll(0),this._moveScene.setAll(0),this._updateCamera(),this.camera.getScene().useRightHandedSystem&&(this._moveRelative.z*=-1);const e=F.Zero();this.camera.getViewMatrix().invertToRef(e);const t=v.Zero();v.TransformNormalToRef(this._moveRelative,e,t),this.camera.cameraRotation.x+=this._rotateRelative.x/200,this.camera.cameraRotation.y+=this._rotateRelative.y/200,this.camera.cameraDirection.addInPlace(t),this.camera.cameraDirection.addInPlace(this._moveScene),super.checkInputs()}_updateCamera(){this._updateCameraProperty(this._wheelDeltaX,this._wheelXAction,this._wheelXActionCoordinate),this._updateCameraProperty(this._wheelDeltaY,this._wheelYAction,this._wheelYActionCoordinate),this._updateCameraProperty(this._wheelDeltaZ,this._wheelZAction,this._wheelZActionCoordinate)}_updateCameraProperty(e,t,i){if(e===0||t===null||i===null)return;let r=null;switch(t){case k.MoveRelative:r=this._moveRelative;break;case k.RotateRelative:r=this._rotateRelative;break;case k.MoveScene:r=this._moveScene;break}switch(i){case Qe.X:r.set(e,0,0);break;case Qe.Y:r.set(0,e,0);break;case Qe.Z:r.set(0,0,e);break}}}m([E()],Ee.prototype,"wheelXMoveRelative",null);m([E()],Ee.prototype,"wheelYMoveRelative",null);m([E()],Ee.prototype,"wheelZMoveRelative",null);m([E()],Ee.prototype,"wheelXRotateRelative",null);m([E()],Ee.prototype,"wheelYRotateRelative",null);m([E()],Ee.prototype,"wheelZRotateRelative",null);m([E()],Ee.prototype,"wheelXMoveScene",null);m([E()],Ee.prototype,"wheelYMoveScene",null);m([E()],Ee.prototype,"wheelZMoveScene",null);_t.FreeCameraMouseWheelInput=Ee;class Et{constructor(e=!1){this.allowMouse=e,this.touchAngularSensibility=2e5,this.touchMoveSensibility=250,this.singleFingerRotate=!1,this._offsetX=null,this._offsetY=null,this._pointerPressed=new Array,this._isSafari=J.IsSafari()}attachControl(e){e=J.BackCompatCameraNoPreventDefault(arguments);let t=null;if(this._pointerInput===void 0&&(this._onLostFocus=()=>{this._offsetX=null,this._offsetY=null},this._pointerInput=i=>{const r=i.event,n=r.pointerType==="mouse"||this._isSafari&&typeof r.pointerType>"u";if(!(!this.allowMouse&&n)){if(i.type===ce.POINTERDOWN){if(e||r.preventDefault(),this._pointerPressed.push(r.pointerId),this._pointerPressed.length!==1)return;t={x:r.clientX,y:r.clientY}}else if(i.type===ce.POINTERUP){e||r.preventDefault();const s=this._pointerPressed.indexOf(r.pointerId);if(s===-1||(this._pointerPressed.splice(s,1),s!=0))return;t=null,this._offsetX=null,this._offsetY=null}else if(i.type===ce.POINTERMOVE){if(e||r.preventDefault(),!t||this._pointerPressed.indexOf(r.pointerId)!=0)return;this._offsetX=r.clientX-t.x,this._offsetY=-(r.clientY-t.y)}}}),this._observer=this.camera.getScene()._inputManager._addCameraPointerObserver(this._pointerInput,ce.POINTERDOWN|ce.POINTERUP|ce.POINTERMOVE),this._onLostFocus){const r=this.camera.getEngine().getInputElement();r&&r.addEventListener("blur",this._onLostFocus)}}detachControl(){if(this._pointerInput){if(this._observer&&(this.camera.getScene()._inputManager._removeCameraPointerObserver(this._observer),this._observer=null),this._onLostFocus){const t=this.camera.getEngine().getInputElement();t&&t.removeEventListener("blur",this._onLostFocus),this._onLostFocus=null}this._pointerPressed.length=0,this._offsetX=null,this._offsetY=null}}checkInputs(){if(this._offsetX===null||this._offsetY===null||this._offsetX===0&&this._offsetY===0)return;const e=this.camera;if(e.cameraRotation.y=this._offsetX/this.touchAngularSensibility,this.singleFingerRotate&&this._pointerPressed.length===1||!this.singleFingerRotate&&this._pointerPressed.length>1)e.cameraRotation.x=-this._offsetY/this.touchAngularSensibility;else{const i=e._computeLocalCameraSpeed(),r=new v(0,0,this.touchMoveSensibility!==0?i*this._offsetY/this.touchMoveSensibility:0);F.RotationYawPitchRollToRef(e.rotation.y,e.rotation.x,0,e._cameraRotationMatrix),e.cameraDirection.addInPlace(v.TransformCoordinates(r,e._cameraRotationMatrix))}}getClassName(){return"FreeCameraTouchInput"}getSimpleName(){return"touch"}}m([E()],Et.prototype,"touchAngularSensibility",void 0);m([E()],Et.prototype,"touchMoveSensibility",void 0);_t.FreeCameraTouchInput=Et;class ar extends Ri{constructor(e){super(e),this._mouseInput=null,this._mouseWheelInput=null}addKeyboard(){return this.add(new pe),this}addMouse(e=!0){return this._mouseInput||(this._mouseInput=new mt(e),this.add(this._mouseInput)),this}removeMouse(){return this._mouseInput&&this.remove(this._mouseInput),this}addMouseWheel(){return this._mouseWheelInput||(this._mouseWheelInput=new Ee,this.add(this._mouseWheelInput)),this}removeMouseWheel(){return this._mouseWheelInput&&this.remove(this._mouseWheelInput),this}addTouch(){return this.add(new Et),this}clear(){super.clear(),this._mouseInput=null}}class rt extends Ci{constructor(e,t,i,r=!0){super(e,t,i,r),this.ellipsoid=new v(.5,1,.5),this.ellipsoidOffset=new v(0,0,0),this.checkCollisions=!1,this.applyGravity=!1,this._needMoveForGravity=!1,this._oldPosition=v.Zero(),this._diffPosition=v.Zero(),this._newPosition=v.Zero(),this._collisionMask=-1,this._onCollisionPositionChange=(n,s,a=null)=>{(l=>{this._newPosition.copyFrom(l),this._newPosition.subtractToRef(this._oldPosition,this._diffPosition),this._diffPosition.length()>q.CollisionsEpsilon&&(this.position.addInPlace(this._diffPosition),this.onCollide&&a&&this.onCollide(a))})(s)},this.inputs=new ar(this),this.inputs.addKeyboard().addMouse()}get angularSensibility(){const e=this.inputs.attached.mouse;return e?e.angularSensibility:0}set angularSensibility(e){const t=this.inputs.attached.mouse;t&&(t.angularSensibility=e)}get keysUp(){const e=this.inputs.attached.keyboard;return e?e.keysUp:[]}set keysUp(e){const t=this.inputs.attached.keyboard;t&&(t.keysUp=e)}get keysUpward(){const e=this.inputs.attached.keyboard;return e?e.keysUpward:[]}set keysUpward(e){const t=this.inputs.attached.keyboard;t&&(t.keysUpward=e)}get keysDown(){const e=this.inputs.attached.keyboard;return e?e.keysDown:[]}set keysDown(e){const t=this.inputs.attached.keyboard;t&&(t.keysDown=e)}get keysDownward(){const e=this.inputs.attached.keyboard;return e?e.keysDownward:[]}set keysDownward(e){const t=this.inputs.attached.keyboard;t&&(t.keysDownward=e)}get keysLeft(){const e=this.inputs.attached.keyboard;return e?e.keysLeft:[]}set keysLeft(e){const t=this.inputs.attached.keyboard;t&&(t.keysLeft=e)}get keysRight(){const e=this.inputs.attached.keyboard;return e?e.keysRight:[]}set keysRight(e){const t=this.inputs.attached.keyboard;t&&(t.keysRight=e)}get keysRotateLeft(){const e=this.inputs.attached.keyboard;return e?e.keysRotateLeft:[]}set keysRotateLeft(e){const t=this.inputs.attached.keyboard;t&&(t.keysRotateLeft=e)}get keysRotateRight(){const e=this.inputs.attached.keyboard;return e?e.keysRotateRight:[]}set keysRotateRight(e){const t=this.inputs.attached.keyboard;t&&(t.keysRotateRight=e)}attachControl(e,t){t=J.BackCompatCameraNoPreventDefault(arguments),this.inputs.attachElement(t)}detachControl(){this.inputs.detachElement(),this.cameraDirection=new v(0,0,0),this.cameraRotation=new Ze(0,0)}get collisionMask(){return this._collisionMask}set collisionMask(e){this._collisionMask=isNaN(e)?-1:e}_collideWithWorld(e){let t;this.parent?t=v.TransformCoordinates(this.position,this.parent.getWorldMatrix()):t=this.position,t.subtractFromFloatsToRef(0,this.ellipsoid.y,0,this._oldPosition),this._oldPosition.addInPlace(this.ellipsoidOffset);const i=this.getScene().collisionCoordinator;this._collider||(this._collider=i.createCollider()),this._collider._radius=this.ellipsoid,this._collider.collisionMask=this._collisionMask;let r=e;this.applyGravity&&(r=e.add(this.getScene().gravity)),i.getNewPosition(this._oldPosition,r,this._collider,3,null,this._onCollisionPositionChange,this.uniqueId)}_checkInputs(){this._localDirection||(this._localDirection=v.Zero(),this._transformedDirection=v.Zero()),this.inputs.checkInputs(),super._checkInputs()}_decideIfNeedsToMove(){return this._needMoveForGravity||Math.abs(this.cameraDirection.x)>0||Math.abs(this.cameraDirection.y)>0||Math.abs(this.cameraDirection.z)>0}_updatePosition(){this.checkCollisions&&this.getScene().collisionsEnabled?this._collideWithWorld(this.cameraDirection):super._updatePosition()}dispose(){this.inputs.clear(),super.dispose()}getClassName(){return"FreeCamera"}}m([jt()],rt.prototype,"ellipsoid",void 0);m([jt()],rt.prototype,"ellipsoidOffset",void 0);m([E()],rt.prototype,"checkCollisions",void 0);m([E()],rt.prototype,"applyGravity",void 0);class or{getClassName(){return"TargetedAnimation"}serialize(){const e={};return e.animation=this.animation.serialize(),e.targetId=this.target.id,e}}class ft{constructor(e,t=null){this.name=e,this._targetedAnimations=new Array,this._animatables=new Array,this._from=Number.MAX_VALUE,this._to=-Number.MAX_VALUE,this._speedRatio=1,this._loopAnimation=!1,this._isAdditive=!1,this._parentContainer=null,this.onAnimationEndObservable=new B,this.onAnimationLoopObservable=new B,this.onAnimationGroupLoopObservable=new B,this.onAnimationGroupEndObservable=new B,this.onAnimationGroupPauseObservable=new B,this.onAnimationGroupPlayObservable=new B,this.metadata=null,this._animationLoopFlags=[],this._scene=t||re.LastCreatedScene,this.uniqueId=this._scene.getUniqueId(),this._scene.addAnimationGroup(this)}get from(){return this._from}get to(){return this._to}get isStarted(){return this._isStarted}get isPlaying(){return this._isStarted&&!this._isPaused}get speedRatio(){return this._speedRatio}set speedRatio(e){if(this._speedRatio!==e){this._speedRatio=e;for(let t=0;t<this._animatables.length;t++){const i=this._animatables[t];i.speedRatio=this._speedRatio}}}get loopAnimation(){return this._loopAnimation}set loopAnimation(e){if(this._loopAnimation!==e){this._loopAnimation=e;for(let t=0;t<this._animatables.length;t++){const i=this._animatables[t];i.loopAnimation=this._loopAnimation}}}get isAdditive(){return this._isAdditive}set isAdditive(e){if(this._isAdditive!==e){this._isAdditive=e;for(let t=0;t<this._animatables.length;t++){const i=this._animatables[t];i.isAdditive=this._isAdditive}}}get targetedAnimations(){return this._targetedAnimations}get animatables(){return this._animatables}get children(){return this._targetedAnimations}addTargetedAnimation(e,t){const i=new or;i.animation=e,i.target=t;const r=e.getKeys();return this._from>r[0].frame&&(this._from=r[0].frame),this._to<r[r.length-1].frame&&(this._to=r[r.length-1].frame),this._targetedAnimations.push(i),i}normalize(e=null,t=null){e==null&&(e=this._from),t==null&&(t=this._to);for(let i=0;i<this._targetedAnimations.length;i++){const n=this._targetedAnimations[i].animation.getKeys(),s=n[0],a=n[n.length-1];if(s.frame>e){const o={frame:e,value:s.value,inTangent:s.inTangent,outTangent:s.outTangent,interpolation:s.interpolation};n.splice(0,0,o)}if(a.frame<t){const o={frame:t,value:a.value,inTangent:a.inTangent,outTangent:a.outTangent,interpolation:a.interpolation};n.push(o)}}return this._from=e,this._to=t,this}_processLoop(e,t,i){e.onAnimationLoop=()=>{this.onAnimationLoopObservable.notifyObservers(t),!this._animationLoopFlags[i]&&(this._animationLoopFlags[i]=!0,this._animationLoopCount++,this._animationLoopCount===this._targetedAnimations.length&&(this.onAnimationGroupLoopObservable.notifyObservers(this),this._animationLoopCount=0,this._animationLoopFlags.length=0))}}start(e=!1,t=1,i,r,n){if(this._isStarted||this._targetedAnimations.length===0)return this;this._loopAnimation=e,this._animationLoopCount=0,this._animationLoopFlags.length=0;for(let s=0;s<this._targetedAnimations.length;s++){const a=this._targetedAnimations[s],o=this._scene.beginDirectAnimation(a.target,[a.animation],i!==void 0?i:this._from,r!==void 0?r:this._to,e,t,void 0,void 0,n!==void 0?n:this._isAdditive);o.onAnimationEnd=()=>{this.onAnimationEndObservable.notifyObservers(a),this._checkAnimationGroupEnded(o)},this._processLoop(o,a,s),this._animatables.push(o)}return this._speedRatio=t,this._isStarted=!0,this._isPaused=!1,this.onAnimationGroupPlayObservable.notifyObservers(this),this}pause(){if(!this._isStarted)return this;this._isPaused=!0;for(let e=0;e<this._animatables.length;e++)this._animatables[e].pause();return this.onAnimationGroupPauseObservable.notifyObservers(this),this}play(e){return this.isStarted&&this._animatables.length===this._targetedAnimations.length?(e!==void 0&&(this.loopAnimation=e),this.restart()):(this.stop(),this.start(e,this._speedRatio)),this._isPaused=!1,this}reset(){if(!this._isStarted)return this.play(),this.goToFrame(0),this.stop(),this;for(let e=0;e<this._animatables.length;e++)this._animatables[e].reset();return this}restart(){if(!this._isStarted)return this;for(let e=0;e<this._animatables.length;e++)this._animatables[e].restart();return this.onAnimationGroupPlayObservable.notifyObservers(this),this}stop(){if(!this._isStarted)return this;const e=this._animatables.slice();for(let t=0;t<e.length;t++)e[t].stop();return this._isStarted=!1,this}setWeightForAllAnimatables(e){for(let t=0;t<this._animatables.length;t++){const i=this._animatables[t];i.weight=e}return this}syncAllAnimationsWith(e){for(let t=0;t<this._animatables.length;t++)this._animatables[t].syncWith(e);return this}goToFrame(e){if(!this._isStarted)return this;for(let t=0;t<this._animatables.length;t++)this._animatables[t].goToFrame(e);return this}dispose(){this._targetedAnimations.length=0,this._animatables.length=0;const e=this._scene.animationGroups.indexOf(this);if(e>-1&&this._scene.animationGroups.splice(e,1),this._parentContainer){const t=this._parentContainer.animationGroups.indexOf(this);t>-1&&this._parentContainer.animationGroups.splice(t,1),this._parentContainer=null}this.onAnimationEndObservable.clear(),this.onAnimationGroupEndObservable.clear(),this.onAnimationGroupPauseObservable.clear(),this.onAnimationGroupPlayObservable.clear(),this.onAnimationLoopObservable.clear(),this.onAnimationGroupLoopObservable.clear()}_checkAnimationGroupEnded(e){const t=this._animatables.indexOf(e);t>-1&&this._animatables.splice(t,1),this._animatables.length===0&&(this._isStarted=!1,this.onAnimationGroupEndObservable.notifyObservers(this))}clone(e,t,i=!1){const r=new ft(e||this.name,this._scene);for(const n of this._targetedAnimations)r.addTargetedAnimation(i?n.animation.clone():n.animation,t?t(n.target):n.target);return r}serialize(){const e={};e.name=this.name,e.from=this.from,e.to=this.to,e.targetedAnimations=[];for(let t=0;t<this.targetedAnimations.length;t++){const i=this.targetedAnimations[t];e.targetedAnimations[t]=i.serialize()}return Ke&&Ke.HasTags(this)&&(e.tags=Ke.GetTags(this)),this.metadata&&(e.metadata=this.metadata),e}static Parse(e,t){const i=new ft(e.name,t);for(let r=0;r<e.targetedAnimations.length;r++){const n=e.targetedAnimations[r],s=Te.Parse(n.animation),a=n.targetId;if(n.animation.property==="influence"){const o=t.getMorphTargetById(a);o&&i.addTargetedAnimation(s,o)}else{const o=t.getNodeById(a);o!=null&&i.addTargetedAnimation(s,o)}}return e.from!==null&&e.to!==null&&i.normalize(e.from,e.to),Ke&&Ke.AddTagsTo(i,e.tags),e.metadata!==void 0&&(i.metadata=e.metadata),i}static MakeAnimationAdditive(e,t=0,i,r=!1,n){let s=e;r&&(s=e.clone(n||s.name));const a=s.targetedAnimations;for(let o=0;o<a.length;o++){const l=a[o];Te.MakeAnimationAdditive(l.animation,t,i)}return s.isAdditive=!0,s}getClassName(){return"AnimationGroup"}toString(e){let t="Name: "+this.name;return t+=", type: "+this.getClassName(),e&&(t+=", from: "+this._from,t+=", to: "+this._to,t+=", isStarted: "+this._isStarted,t+=", speedRatio: "+this._speedRatio,t+=", targetedAnimations length: "+this._targetedAnimations.length,t+=", animatables length: "+this._animatables),t}}class H extends Ii{constructor(e,t,i=null,r=null,n=null,s=null,a=null){super(e,t.getScene()),this.name=e,this.children=new Array,this.animations=new Array,this._index=null,this._absoluteTransform=new F,this._invertedAbsoluteTransform=new F,this._scalingDeterminant=1,this._worldTransform=new F,this._needToDecompose=!0,this._needToCompose=!1,this._linkedTransformNode=null,this._waitingTransformNodeId=null,this._skeleton=t,this._localMatrix=r?r.clone():F.Identity(),this._restPose=n||this._localMatrix.clone(),this._baseMatrix=s||this._localMatrix.clone(),this._index=a,t.bones.push(this),this.setParent(i,!1),(s||r)&&this._updateDifferenceMatrix()}get _matrix(){return this._compose(),this._localMatrix}set _matrix(e){this._needToCompose=!1,e.updateFlag!==this._localMatrix.updateFlag&&(this._localMatrix.copyFrom(e),this._markAsDirtyAndDecompose())}getClassName(){return"Bone"}getSkeleton(){return this._skeleton}get parent(){return this._parentNode}getParent(){return this.parent}getChildren(){return this.children}getIndex(){return this._index===null?this.getSkeleton().bones.indexOf(this):this._index}set parent(e){this.setParent(e)}setParent(e,t=!0){if(this.parent!==e){if(this.parent){const i=this.parent.children.indexOf(this);i!==-1&&this.parent.children.splice(i,1)}this._parentNode=e,this.parent&&this.parent.children.push(this),t&&this._updateDifferenceMatrix(),this.markAsDirty()}}getLocalMatrix(){return this._compose(),this._localMatrix}getBaseMatrix(){return this._baseMatrix}getRestPose(){return this._restPose}setRestPose(e){this._restPose.copyFrom(e)}getBindPose(){return this._baseMatrix}setBindPose(e){this.updateMatrix(e)}getWorldMatrix(){return this._worldTransform}returnToRest(){var e;if(this._linkedTransformNode){const t=P.Vector3[0],i=P.Quaternion[0],r=P.Vector3[1];this.getRestPose().decompose(t,i,r),this._linkedTransformNode.position.copyFrom(r),this._linkedTransformNode.rotationQuaternion=(e=this._linkedTransformNode.rotationQuaternion)!==null&&e!==void 0?e:ue.Identity(),this._linkedTransformNode.rotationQuaternion.copyFrom(i),this._linkedTransformNode.scaling.copyFrom(t)}else this._matrix=this._restPose}getInvertedAbsoluteTransform(){return this._invertedAbsoluteTransform}getAbsoluteTransform(){return this._absoluteTransform}linkTransformNode(e){this._linkedTransformNode&&this._skeleton._numBonesWithLinkedTransformNode--,this._linkedTransformNode=e,this._linkedTransformNode&&this._skeleton._numBonesWithLinkedTransformNode++}getTransformNode(){return this._linkedTransformNode}get position(){return this._decompose(),this._localPosition}set position(e){this._decompose(),this._localPosition.copyFrom(e),this._markAsDirtyAndCompose()}get rotation(){return this.getRotation()}set rotation(e){this.setRotation(e)}get rotationQuaternion(){return this._decompose(),this._localRotation}set rotationQuaternion(e){this.setRotationQuaternion(e)}get scaling(){return this.getScale()}set scaling(e){this.setScale(e)}get animationPropertiesOverride(){return this._skeleton.animationPropertiesOverride}_decompose(){this._needToDecompose&&(this._needToDecompose=!1,this._localScaling||(this._localScaling=v.Zero(),this._localRotation=ue.Zero(),this._localPosition=v.Zero()),this._localMatrix.decompose(this._localScaling,this._localRotation,this._localPosition))}_compose(){if(this._needToCompose){if(!this._localScaling){this._needToCompose=!1;return}this._needToCompose=!1,F.ComposeToRef(this._localScaling,this._localRotation,this._localPosition,this._localMatrix)}}updateMatrix(e,t=!0,i=!0){this._baseMatrix.copyFrom(e),t&&this._updateDifferenceMatrix(),i?this._matrix=e:this.markAsDirty()}_updateDifferenceMatrix(e,t=!0){if(e||(e=this._baseMatrix),this.parent?e.multiplyToRef(this.parent._absoluteTransform,this._absoluteTransform):this._absoluteTransform.copyFrom(e),this._absoluteTransform.invertToRef(this._invertedAbsoluteTransform),t)for(let i=0;i<this.children.length;i++)this.children[i]._updateDifferenceMatrix();this._scalingDeterminant=this._absoluteTransform.determinant()<0?-1:1}markAsDirty(){return this._currentRenderId++,this._childUpdateId++,this._skeleton._markAsDirty(),this}_markAsDirtyAndCompose(){this.markAsDirty(),this._needToCompose=!0}_markAsDirtyAndDecompose(){this.markAsDirty(),this._needToDecompose=!0}translate(e,t=Y.LOCAL,i){const r=this.getLocalMatrix();if(t==Y.LOCAL)r.addAtIndex(12,e.x),r.addAtIndex(13,e.y),r.addAtIndex(14,e.z);else{let n=null;i&&(n=i.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();const s=H._TmpMats[0],a=H._TmpVecs[0];this.parent?i&&n?(s.copyFrom(this.parent.getAbsoluteTransform()),s.multiplyToRef(n,s)):s.copyFrom(this.parent.getAbsoluteTransform()):F.IdentityToRef(s),s.setTranslationFromFloats(0,0,0),s.invert(),v.TransformCoordinatesToRef(e,s,a),r.addAtIndex(12,a.x),r.addAtIndex(13,a.y),r.addAtIndex(14,a.z)}this._markAsDirtyAndDecompose()}setPosition(e,t=Y.LOCAL,i){const r=this.getLocalMatrix();if(t==Y.LOCAL)r.setTranslationFromFloats(e.x,e.y,e.z);else{let n=null;i&&(n=i.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();const s=H._TmpMats[0],a=H._TmpVecs[0];this.parent?(i&&n?(s.copyFrom(this.parent.getAbsoluteTransform()),s.multiplyToRef(n,s)):s.copyFrom(this.parent.getAbsoluteTransform()),s.invert()):F.IdentityToRef(s),v.TransformCoordinatesToRef(e,s,a),r.setTranslationFromFloats(a.x,a.y,a.z)}this._markAsDirtyAndDecompose()}setAbsolutePosition(e,t){this.setPosition(e,Y.WORLD,t)}scale(e,t,i,r=!1){const n=this.getLocalMatrix(),s=H._TmpMats[0];F.ScalingToRef(e,t,i,s),s.multiplyToRef(n,n),s.invert();for(const a of this.children){const o=a.getLocalMatrix();o.multiplyToRef(s,o),o.multiplyAtIndex(12,e),o.multiplyAtIndex(13,t),o.multiplyAtIndex(14,i),a._markAsDirtyAndDecompose()}if(this._markAsDirtyAndDecompose(),r)for(const a of this.children)a.scale(e,t,i,r)}setScale(e){this._decompose(),this._localScaling.copyFrom(e),this._markAsDirtyAndCompose()}getScale(){return this._decompose(),this._localScaling}getScaleToRef(e){this._decompose(),e.copyFrom(this._localScaling)}setYawPitchRoll(e,t,i,r=Y.LOCAL,n){if(r===Y.LOCAL){const o=H._TmpQuat;ue.RotationYawPitchRollToRef(e,t,i,o),this.setRotationQuaternion(o,r,n);return}const s=H._TmpMats[0];if(!this._getNegativeRotationToRef(s,n))return;const a=H._TmpMats[1];F.RotationYawPitchRollToRef(e,t,i,a),s.multiplyToRef(a,a),this._rotateWithMatrix(a,r,n)}rotate(e,t,i=Y.LOCAL,r){const n=H._TmpMats[0];n.setTranslationFromFloats(0,0,0),F.RotationAxisToRef(e,t,n),this._rotateWithMatrix(n,i,r)}setAxisAngle(e,t,i=Y.LOCAL,r){if(i===Y.LOCAL){const a=H._TmpQuat;ue.RotationAxisToRef(e,t,a),this.setRotationQuaternion(a,i,r);return}const n=H._TmpMats[0];if(!this._getNegativeRotationToRef(n,r))return;const s=H._TmpMats[1];F.RotationAxisToRef(e,t,s),n.multiplyToRef(s,s),this._rotateWithMatrix(s,i,r)}setRotation(e,t=Y.LOCAL,i){this.setYawPitchRoll(e.y,e.x,e.z,t,i)}setRotationQuaternion(e,t=Y.LOCAL,i){if(t===Y.LOCAL){this._decompose(),this._localRotation.copyFrom(e),this._markAsDirtyAndCompose();return}const r=H._TmpMats[0];if(!this._getNegativeRotationToRef(r,i))return;const n=H._TmpMats[1];F.FromQuaternionToRef(e,n),r.multiplyToRef(n,n),this._rotateWithMatrix(n,t,i)}setRotationMatrix(e,t=Y.LOCAL,i){if(t===Y.LOCAL){const s=H._TmpQuat;ue.FromRotationMatrixToRef(e,s),this.setRotationQuaternion(s,t,i);return}const r=H._TmpMats[0];if(!this._getNegativeRotationToRef(r,i))return;const n=H._TmpMats[1];n.copyFrom(e),r.multiplyToRef(e,n),this._rotateWithMatrix(n,t,i)}_rotateWithMatrix(e,t=Y.LOCAL,i){const r=this.getLocalMatrix(),n=r.m[12],s=r.m[13],a=r.m[14],o=this.getParent(),l=H._TmpMats[3],c=H._TmpMats[4];o&&t==Y.WORLD?(i?(l.copyFrom(i.getWorldMatrix()),o.getAbsoluteTransform().multiplyToRef(l,l)):l.copyFrom(o.getAbsoluteTransform()),c.copyFrom(l),c.invert(),r.multiplyToRef(l,r),r.multiplyToRef(e,r),r.multiplyToRef(c,r)):t==Y.WORLD&&i?(l.copyFrom(i.getWorldMatrix()),c.copyFrom(l),c.invert(),r.multiplyToRef(l,r),r.multiplyToRef(e,r),r.multiplyToRef(c,r)):r.multiplyToRef(e,r),r.setTranslationFromFloats(n,s,a),this.computeAbsoluteTransforms(),this._markAsDirtyAndDecompose()}_getNegativeRotationToRef(e,t){const i=H._TmpMats[2];return e.copyFrom(this.getAbsoluteTransform()),t?(e.multiplyToRef(t.getWorldMatrix(),e),F.ScalingToRef(t.scaling.x,t.scaling.y,t.scaling.z,i)):F.IdentityToRef(i),e.invert(),isNaN(e.m[0])?!1:(i.multiplyAtIndex(0,this._scalingDeterminant),e.multiplyToRef(i,e),!0)}getPosition(e=Y.LOCAL,t=null){const i=v.Zero();return this.getPositionToRef(e,t,i),i}getPositionToRef(e=Y.LOCAL,t,i){if(e==Y.LOCAL){const r=this.getLocalMatrix();i.x=r.m[12],i.y=r.m[13],i.z=r.m[14]}else{let r=null;t&&(r=t.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();let n=H._TmpMats[0];t&&r?(n.copyFrom(this.getAbsoluteTransform()),n.multiplyToRef(r,n)):n=this.getAbsoluteTransform(),i.x=n.m[12],i.y=n.m[13],i.z=n.m[14]}}getAbsolutePosition(e=null){const t=v.Zero();return this.getPositionToRef(Y.WORLD,e,t),t}getAbsolutePositionToRef(e,t){this.getPositionToRef(Y.WORLD,e,t)}computeAbsoluteTransforms(){if(this._compose(),this.parent)this._localMatrix.multiplyToRef(this.parent._absoluteTransform,this._absoluteTransform);else{this._absoluteTransform.copyFrom(this._localMatrix);const i=this._skeleton.getPoseMatrix();i&&this._absoluteTransform.multiplyToRef(i,this._absoluteTransform)}const e=this.children,t=e.length;for(let i=0;i<t;i++)e[i].computeAbsoluteTransforms()}getDirection(e,t=null){const i=v.Zero();return this.getDirectionToRef(e,t,i),i}getDirectionToRef(e,t=null,i){let r=null;t&&(r=t.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();const n=H._TmpMats[0];n.copyFrom(this.getAbsoluteTransform()),t&&r&&n.multiplyToRef(r,n),v.TransformNormalToRef(e,n,i),i.normalize()}getRotation(e=Y.LOCAL,t=null){const i=v.Zero();return this.getRotationToRef(e,t,i),i}getRotationToRef(e=Y.LOCAL,t=null,i){const r=H._TmpQuat;this.getRotationQuaternionToRef(e,t,r),r.toEulerAnglesToRef(i)}getRotationQuaternion(e=Y.LOCAL,t=null){const i=ue.Identity();return this.getRotationQuaternionToRef(e,t,i),i}getRotationQuaternionToRef(e=Y.LOCAL,t=null,i){if(e==Y.LOCAL)this._decompose(),i.copyFrom(this._localRotation);else{const r=H._TmpMats[0],n=this.getAbsoluteTransform();t?n.multiplyToRef(t.getWorldMatrix(),r):r.copyFrom(n),r.multiplyAtIndex(0,this._scalingDeterminant),r.multiplyAtIndex(1,this._scalingDeterminant),r.multiplyAtIndex(2,this._scalingDeterminant),r.decompose(void 0,i,void 0)}}getRotationMatrix(e=Y.LOCAL,t){const i=F.Identity();return this.getRotationMatrixToRef(e,t,i),i}getRotationMatrixToRef(e=Y.LOCAL,t,i){if(e==Y.LOCAL)this.getLocalMatrix().getRotationMatrixToRef(i);else{const r=H._TmpMats[0],n=this.getAbsoluteTransform();t?n.multiplyToRef(t.getWorldMatrix(),r):r.copyFrom(n),r.multiplyAtIndex(0,this._scalingDeterminant),r.multiplyAtIndex(1,this._scalingDeterminant),r.multiplyAtIndex(2,this._scalingDeterminant),r.getRotationMatrixToRef(i)}}getAbsolutePositionFromLocal(e,t=null){const i=v.Zero();return this.getAbsolutePositionFromLocalToRef(e,t,i),i}getAbsolutePositionFromLocalToRef(e,t=null,i){let r=null;t&&(r=t.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();let n=H._TmpMats[0];t&&r?(n.copyFrom(this.getAbsoluteTransform()),n.multiplyToRef(r,n)):n=this.getAbsoluteTransform(),v.TransformCoordinatesToRef(e,n,i)}getLocalPositionFromAbsolute(e,t=null){const i=v.Zero();return this.getLocalPositionFromAbsoluteToRef(e,t,i),i}getLocalPositionFromAbsoluteToRef(e,t=null,i){let r=null;t&&(r=t.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();const n=H._TmpMats[0];n.copyFrom(this.getAbsoluteTransform()),t&&r&&n.multiplyToRef(r,n),n.invert(),v.TransformCoordinatesToRef(e,n,i)}setCurrentPoseAsRest(){this.setRestPose(this.getLocalMatrix())}}H._TmpVecs=Zt.BuildArray(2,v.Zero);H._TmpQuat=ue.Identity();H._TmpMats=Zt.BuildArray(5,F.Identity);le.prototype.updateRawTexture=function(h,e,t,i,r=null,n=0,s=!1){if(!h)return;const a=this._getRGBABufferInternalSizedFormat(n,t,s),o=this._getInternalFormat(t),l=this._getWebGLTextureType(n);this._bindTextureDirectly(this._gl.TEXTURE_2D,h,!0),this._unpackFlipY(i===void 0?!0:!!i),this._doNotHandleContextLost||(h._bufferView=e,h.format=t,h.type=n,h.invertY=i,h._compression=r),h.width%4!==0&&this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT,1),r&&e?this._gl.compressedTexImage2D(this._gl.TEXTURE_2D,0,this.getCaps().s3tc[r],h.width,h.height,0,e):this._gl.texImage2D(this._gl.TEXTURE_2D,0,a,h.width,h.height,0,o,l,e),h.generateMipMaps&&this._gl.generateMipmap(this._gl.TEXTURE_2D),this._bindTextureDirectly(this._gl.TEXTURE_2D,null),h.isReady=!0};le.prototype.createRawTexture=function(h,e,t,i,r,n,s,a=null,o=0,l=0,c=!1){const f=new it(this,xe.Raw);f.baseWidth=e,f.baseHeight=t,f.width=e,f.height=t,f.format=i,f.generateMipMaps=r,f.samplingMode=s,f.invertY=n,f._compression=a,f.type=o,f._useSRGBBuffer=this._getUseSRGBBuffer(c,!r),this._doNotHandleContextLost||(f._bufferView=h),this.updateRawTexture(f,h,i,n,a,o,f._useSRGBBuffer),this._bindTextureDirectly(this._gl.TEXTURE_2D,f,!0);const d=this._getSamplingParameters(s,r);return this._gl.texParameteri(this._gl.TEXTURE_2D,this._gl.TEXTURE_MAG_FILTER,d.mag),this._gl.texParameteri(this._gl.TEXTURE_2D,this._gl.TEXTURE_MIN_FILTER,d.min),r&&this._gl.generateMipmap(this._gl.TEXTURE_2D),this._bindTextureDirectly(this._gl.TEXTURE_2D,null),this._internalTexturesCache.push(f),f};le.prototype.createRawCubeTexture=function(h,e,t,i,r,n,s,a=null){const o=this._gl,l=new it(this,xe.CubeRaw);l.isCube=!0,l.format=t,l.type=i,this._doNotHandleContextLost||(l._bufferViewArray=h);const c=this._getWebGLTextureType(i);let f=this._getInternalFormat(t);f===o.RGB&&(f=o.RGBA),c===o.FLOAT&&!this._caps.textureFloatLinearFiltering?(r=!1,s=1,V.Warn("Float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively.")):c===this._gl.HALF_FLOAT_OES&&!this._caps.textureHalfFloatLinearFiltering?(r=!1,s=1,V.Warn("Half float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively.")):c===o.FLOAT&&!this._caps.textureFloatRender?(r=!1,V.Warn("Render to float textures is not supported. Mipmap generation forced to false.")):c===o.HALF_FLOAT&&!this._caps.colorBufferFloat&&(r=!1,V.Warn("Render to half float textures is not supported. Mipmap generation forced to false."));const d=e,_=d;if(l.width=d,l.height=_,l.invertY=n,l._compression=a,!this.needPOTTextures||J.IsExponentOfTwo(l.width)&&J.IsExponentOfTwo(l.height)||(r=!1),h)this.updateRawCubeTexture(l,h,t,i,n,a);else{const g=this._getRGBABufferInternalSizedFormat(i),T=0;this._bindTextureDirectly(o.TEXTURE_CUBE_MAP,l,!0);for(let C=0;C<6;C++)a?o.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+C,T,this.getCaps().s3tc[a],l.width,l.height,0,void 0):o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+C,T,g,l.width,l.height,0,f,c,null);this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP,null)}this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP,l,!0),h&&r&&this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP);const p=this._getSamplingParameters(s,r);return o.texParameteri(o.TEXTURE_CUBE_MAP,o.TEXTURE_MAG_FILTER,p.mag),o.texParameteri(o.TEXTURE_CUBE_MAP,o.TEXTURE_MIN_FILTER,p.min),o.texParameteri(o.TEXTURE_CUBE_MAP,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_CUBE_MAP,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),this._bindTextureDirectly(o.TEXTURE_CUBE_MAP,null),l.generateMipMaps=r,l.samplingMode=s,l.isReady=!0,l};le.prototype.updateRawCubeTexture=function(h,e,t,i,r,n=null,s=0){h._bufferViewArray=e,h.format=t,h.type=i,h.invertY=r,h._compression=n;const a=this._gl,o=this._getWebGLTextureType(i);let l=this._getInternalFormat(t);const c=this._getRGBABufferInternalSizedFormat(i);let f=!1;l===a.RGB&&(l=a.RGBA,f=!0),this._bindTextureDirectly(a.TEXTURE_CUBE_MAP,h,!0),this._unpackFlipY(r===void 0?!0:!!r),h.width%4!==0&&a.pixelStorei(a.UNPACK_ALIGNMENT,1);for(let _=0;_<6;_++){let u=e[_];n?a.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_,s,this.getCaps().s3tc[n],h.width,h.height,0,u):(f&&(u=si(u,h.width,h.height,i)),a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_,s,c,h.width,h.height,0,l,o,u))}(!this.needPOTTextures||J.IsExponentOfTwo(h.width)&&J.IsExponentOfTwo(h.height))&&h.generateMipMaps&&s===0&&this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP),this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP,null),h.isReady=!0};le.prototype.createRawCubeTextureFromUrl=function(h,e,t,i,r,n,s,a,o=null,l=null,c=3,f=!1){const d=this._gl,_=this.createRawCubeTexture(null,t,i,r,!n,f,c,null);e==null||e.addPendingData(_),_.url=h,this._internalTexturesCache.push(_);const u=(g,T)=>{e==null||e.removePendingData(_),l&&g&&l(g.status+" "+g.statusText,T)},p=g=>{const T=_.width,C=s(g);if(C){if(a){const R=this._getWebGLTextureType(r);let b=this._getInternalFormat(i);const G=this._getRGBABufferInternalSizedFormat(r);let X=!1;b===d.RGB&&(b=d.RGBA,X=!0),this._bindTextureDirectly(d.TEXTURE_CUBE_MAP,_,!0),this._unpackFlipY(!1);const L=a(C);for(let O=0;O<L.length;O++){const D=T>>O;for(let K=0;K<6;K++){let fe=L[O][K];X&&(fe=si(fe,D,D,r)),d.texImage2D(K,O,G,D,D,0,b,R,fe)}}this._bindTextureDirectly(d.TEXTURE_CUBE_MAP,null)}else this.updateRawCubeTexture(_,C,i,r,f);_.isReady=!0,e==null||e.removePendingData(_),_.onLoadedObservable.notifyObservers(_),_.onLoadedObservable.clear(),o&&o()}};return this._loadFile(h,g=>{p(g)},void 0,e==null?void 0:e.offlineProvider,!0,u),_};function si(h,e,t,i){let r,n=1;i===1?r=new Float32Array(e*t*4):i===2?(r=new Uint16Array(e*t*4),n=15360):i===7?r=new Uint32Array(e*t*4):r=new Uint8Array(e*t*4);for(let s=0;s<e;s++)for(let a=0;a<t;a++){const o=(a*e+s)*3,l=(a*e+s)*4;r[l+0]=h[o+0],r[l+1]=h[o+1],r[l+2]=h[o+2],r[l+3]=n}return r}function ai(h){return function(e,t,i,r,n,s,a,o,l=null,c=0){const f=h?this._gl.TEXTURE_3D:this._gl.TEXTURE_2D_ARRAY,d=h?xe.Raw3D:xe.Raw2DArray,_=new it(this,d);_.baseWidth=t,_.baseHeight=i,_.baseDepth=r,_.width=t,_.height=i,_.depth=r,_.format=n,_.type=c,_.generateMipMaps=s,_.samplingMode=o,h?_.is3D=!0:_.is2DArray=!0,this._doNotHandleContextLost||(_._bufferView=e),h?this.updateRawTexture3D(_,e,n,a,l,c):this.updateRawTexture2DArray(_,e,n,a,l,c),this._bindTextureDirectly(f,_,!0);const u=this._getSamplingParameters(o,s);return this._gl.texParameteri(f,this._gl.TEXTURE_MAG_FILTER,u.mag),this._gl.texParameteri(f,this._gl.TEXTURE_MIN_FILTER,u.min),s&&this._gl.generateMipmap(f),this._bindTextureDirectly(f,null),this._internalTexturesCache.push(_),_}}le.prototype.createRawTexture2DArray=ai(!1);le.prototype.createRawTexture3D=ai(!0);function oi(h){return function(e,t,i,r,n=null,s=0){const a=h?this._gl.TEXTURE_3D:this._gl.TEXTURE_2D_ARRAY,o=this._getWebGLTextureType(s),l=this._getInternalFormat(i),c=this._getRGBABufferInternalSizedFormat(s,i);this._bindTextureDirectly(a,e,!0),this._unpackFlipY(r===void 0?!0:!!r),this._doNotHandleContextLost||(e._bufferView=t,e.format=i,e.invertY=r,e._compression=n),e.width%4!==0&&this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT,1),n&&t?this._gl.compressedTexImage3D(a,0,this.getCaps().s3tc[n],e.width,e.height,e.depth,0,t):this._gl.texImage3D(a,0,c,e.width,e.height,e.depth,0,l,o,t),e.generateMipMaps&&this._gl.generateMipmap(a),this._bindTextureDirectly(a,null),e.isReady=!0}}le.prototype.updateRawTexture2DArray=oi(!1);le.prototype.updateRawTexture3D=oi(!0);class me extends A{constructor(e,t,i,r,n,s=!0,a=!1,o=3,l=0,c,f){super(null,n,!s,a,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,c),this.format=r,this._engine&&(!this._engine._caps.textureFloatLinearFiltering&&l===1&&(o=1),!this._engine._caps.textureHalfFloatLinearFiltering&&l===2&&(o=1),this._texture=this._engine.createRawTexture(e,t,i,r,s,a,o,null,l,c??0,f??!1),this.wrapU=A.CLAMP_ADDRESSMODE,this.wrapV=A.CLAMP_ADDRESSMODE)}update(e){this._getEngine().updateRawTexture(this._texture,e,this._texture.format,this._texture.invertY,null,this._texture.type,this._texture._useSRGBBuffer)}static CreateLuminanceTexture(e,t,i,r,n=!0,s=!1,a=3){return new me(e,t,i,1,r,n,s,a)}static CreateLuminanceAlphaTexture(e,t,i,r,n=!0,s=!1,a=3){return new me(e,t,i,2,r,n,s,a)}static CreateAlphaTexture(e,t,i,r,n=!0,s=!1,a=3){return new me(e,t,i,0,r,n,s,a)}static CreateRGBTexture(e,t,i,r,n=!0,s=!1,a=3,o=0,l=0,c=!1){return new me(e,t,i,4,r,n,s,a,o,l,c)}static CreateRGBATexture(e,t,i,r,n=!0,s=!1,a=3,o=0,l=0,c=!1){return new me(e,t,i,5,r,n,s,a,o,l,c)}static CreateRGBAStorageTexture(e,t,i,r,n=!0,s=!1,a=3,o=0,l=!1){return new me(e,t,i,5,r,n,s,a,o,1,l)}static CreateRTexture(e,t,i,r,n=!0,s=!1,a=A.TRILINEAR_SAMPLINGMODE,o=1){return new me(e,t,i,6,r,n,s,a,o)}static CreateRStorageTexture(e,t,i,r,n=!0,s=!1,a=A.TRILINEAR_SAMPLINGMODE,o=1){return new me(e,t,i,6,r,n,s,a,o,1)}}class ct{constructor(e,t,i){this.name=e,this.id=t,this.bones=new Array,this.needInitialSkinMatrix=!1,this._isDirty=!0,this._meshesWithPoseMatrix=new Array,this._identity=F.Identity(),this._ranges={},this._absoluteTransformIsDirty=!0,this._canUseTextureForBones=!1,this._uniqueId=0,this._numBonesWithLinkedTransformNode=0,this._hasWaitingData=null,this._parentContainer=null,this.doNotSerialize=!1,this._useTextureToStoreBoneMatrices=!0,this._animationPropertiesOverride=null,this.onBeforeComputeObservable=new B,this.bones=[],this._scene=i||re.LastCreatedScene,this._uniqueId=this._scene.getUniqueId(),this._scene.addSkeleton(this),this._isDirty=!0;const r=this._scene.getEngine().getCaps();this._canUseTextureForBones=r.textureFloat&&r.maxVertexTextureImageUnits>0}get useTextureToStoreBoneMatrices(){return this._useTextureToStoreBoneMatrices}set useTextureToStoreBoneMatrices(e){this._useTextureToStoreBoneMatrices=e,this._markAsDirty()}get animationPropertiesOverride(){return this._animationPropertiesOverride?this._animationPropertiesOverride:this._scene.animationPropertiesOverride}set animationPropertiesOverride(e){this._animationPropertiesOverride=e}get isUsingTextureForMatrices(){return this.useTextureToStoreBoneMatrices&&this._canUseTextureForBones}get uniqueId(){return this._uniqueId}getClassName(){return"Skeleton"}getChildren(){return this.bones.filter(e=>!e.getParent())}getTransformMatrices(e){return this.needInitialSkinMatrix?(e._bonesTransformMatrices||this.prepare(),e._bonesTransformMatrices):(this._transformMatrices||this.prepare(),this._transformMatrices)}getTransformMatrixTexture(e){return this.needInitialSkinMatrix&&e._transformMatrixTexture?e._transformMatrixTexture:this._transformMatrixTexture}getScene(){return this._scene}toString(e){let t=`Name: ${this.name}, nBones: ${this.bones.length}`;if(t+=`, nAnimationRanges: ${this._ranges?Object.keys(this._ranges).length:"none"}`,e){t+=", Ranges: {";let i=!0;for(const r in this._ranges)i&&(t+=", ",i=!1),t+=r;t+="}"}return t}getBoneIndexByName(e){for(let t=0,i=this.bones.length;t<i;t++)if(this.bones[t].name===e)return t;return-1}createAnimationRange(e,t,i){if(!this._ranges[e]){this._ranges[e]=new Bt(e,t,i);for(let r=0,n=this.bones.length;r<n;r++)this.bones[r].animations[0]&&this.bones[r].animations[0].createRange(e,t,i)}}deleteAnimationRange(e,t=!0){for(let i=0,r=this.bones.length;i<r;i++)this.bones[i].animations[0]&&this.bones[i].animations[0].deleteRange(e,t);this._ranges[e]=null}getAnimationRange(e){return this._ranges[e]||null}getAnimationRanges(){const e=[];let t;for(t in this._ranges)e.push(this._ranges[t]);return e}copyAnimationRange(e,t,i=!1){if(this._ranges[t]||!e.getAnimationRange(t))return!1;let r=!0;const n=this._getHighestAnimationFrame()+1,s={},a=e.bones;let o,l;for(l=0,o=a.length;l<o;l++)s[a[l].name]=a[l];this.bones.length!==a.length&&(V.Warn(`copyAnimationRange: this rig has ${this.bones.length} bones, while source as ${a.length}`),r=!1);const c=i&&this.dimensionsAtRest&&e.dimensionsAtRest?this.dimensionsAtRest.divide(e.dimensionsAtRest):null;for(l=0,o=this.bones.length;l<o;l++){const d=this.bones[l].name,_=s[d];_?r=r&&this.bones[l].copyAnimationRange(_,t,n,i,c):(V.Warn("copyAnimationRange: not same rig, missing source bone "+d),r=!1)}const f=e.getAnimationRange(t);return f&&(this._ranges[t]=new Bt(t,f.from+n,f.to+n)),r}returnToRest(){for(const e of this.bones)e._index!==-1&&e.returnToRest()}_getHighestAnimationFrame(){let e=0;for(let t=0,i=this.bones.length;t<i;t++)if(this.bones[t].animations[0]){const r=this.bones[t].animations[0].getHighestFrame();e<r&&(e=r)}return e}beginAnimation(e,t,i,r){const n=this.getAnimationRange(e);return n?this._scene.beginAnimation(this,n.from,n.to,t,i,r):null}static MakeAnimationAdditive(e,t=0,i){const r=e.getAnimationRange(i);if(!r)return null;const n=e._scene.getAllAnimatablesByTarget(e);let s=null;for(let o=0;o<n.length;o++){const l=n[o];if(l.fromFrame===(r==null?void 0:r.from)&&l.toFrame===(r==null?void 0:r.to)){s=l;break}}const a=e.getAnimatables();for(let o=0;o<a.length;o++){const c=a[o].animations;if(c)for(let f=0;f<c.length;f++)Te.MakeAnimationAdditive(c[f],t,i)}return s&&(s.isAdditive=!0),e}_markAsDirty(){this._isDirty=!0,this._absoluteTransformIsDirty=!0}_registerMeshWithPoseMatrix(e){this._meshesWithPoseMatrix.push(e)}_unregisterMeshWithPoseMatrix(e){const t=this._meshesWithPoseMatrix.indexOf(e);t>-1&&this._meshesWithPoseMatrix.splice(t,1)}_computeTransformMatrices(e,t){this.onBeforeComputeObservable.notifyObservers(this);for(let i=0;i<this.bones.length;i++){const r=this.bones[i];r._childUpdateId++;const n=r.getParent();if(n?r.getLocalMatrix().multiplyToRef(n.getWorldMatrix(),r.getWorldMatrix()):t?r.getLocalMatrix().multiplyToRef(t,r.getWorldMatrix()):r.getWorldMatrix().copyFrom(r.getLocalMatrix()),r._index!==-1){const s=r._index===null?i:r._index;r.getInvertedAbsoluteTransform().multiplyToArray(r.getWorldMatrix(),e,s*16)}}this._identity.copyToArray(e,this.bones.length*16)}prepare(){if(this._numBonesWithLinkedTransformNode>0){for(const e of this.bones)if(e._linkedTransformNode){const t=e._linkedTransformNode;e.position=t.position,t.rotationQuaternion?e.rotationQuaternion=t.rotationQuaternion:e.rotation=t.rotation,e.scaling=t.scaling}}if(this.needInitialSkinMatrix)for(const e of this._meshesWithPoseMatrix){const t=e.getPoseMatrix();let i=this._isDirty;if((!e._bonesTransformMatrices||e._bonesTransformMatrices.length!==16*(this.bones.length+1))&&(e._bonesTransformMatrices=new Float32Array(16*(this.bones.length+1)),i=!0),!!i){if(this._synchronizedWithMesh!==e){this._synchronizedWithMesh=e;for(const r of this.bones)r.getParent()||(r.getBaseMatrix().multiplyToRef(t,P.Matrix[1]),r._updateDifferenceMatrix(P.Matrix[1]));if(this.isUsingTextureForMatrices){const r=(this.bones.length+1)*4;(!e._transformMatrixTexture||e._transformMatrixTexture.getSize().width!==r)&&(e._transformMatrixTexture&&e._transformMatrixTexture.dispose(),e._transformMatrixTexture=me.CreateRGBATexture(e._bonesTransformMatrices,(this.bones.length+1)*4,1,this._scene,!1,!1,1,1))}}this._computeTransformMatrices(e._bonesTransformMatrices,t),this.isUsingTextureForMatrices&&e._transformMatrixTexture&&e._transformMatrixTexture.update(e._bonesTransformMatrices)}}else{if(!this._isDirty)return;(!this._transformMatrices||this._transformMatrices.length!==16*(this.bones.length+1))&&(this._transformMatrices=new Float32Array(16*(this.bones.length+1)),this.isUsingTextureForMatrices&&(this._transformMatrixTexture&&this._transformMatrixTexture.dispose(),this._transformMatrixTexture=me.CreateRGBATexture(this._transformMatrices,(this.bones.length+1)*4,1,this._scene,!1,!1,1,1))),this._computeTransformMatrices(this._transformMatrices,null),this.isUsingTextureForMatrices&&this._transformMatrixTexture&&this._transformMatrixTexture.update(this._transformMatrices)}this._isDirty=!1}getAnimatables(){if(!this._animatables||this._animatables.length!==this.bones.length){this._animatables=[];for(let e=0;e<this.bones.length;e++)this._animatables.push(this.bones[e])}return this._animatables}clone(e,t){const i=new ct(e,t||e,this._scene);i.needInitialSkinMatrix=this.needInitialSkinMatrix;for(let r=0;r<this.bones.length;r++){const n=this.bones[r];let s=null;const a=n.getParent();if(a){const l=this.bones.indexOf(a);s=i.bones[l]}const o=new H(n.name,i,s,n.getBaseMatrix().clone(),n.getRestPose().clone());o._index=n._index,n._linkedTransformNode&&o.linkTransformNode(n._linkedTransformNode),xi.DeepCopy(n.animations,o.animations)}if(this._ranges){i._ranges={};for(const r in this._ranges){const n=this._ranges[r];n&&(i._ranges[r]=n.clone())}}return this._isDirty=!0,i}enableBlending(e=.01){this.bones.forEach(t=>{t.animations.forEach(i=>{i.enableBlending=!0,i.blendingSpeed=e})})}dispose(){if(this._meshesWithPoseMatrix.length=0,this.getScene().stopAnimation(this),this.getScene().removeSkeleton(this),this._parentContainer){const e=this._parentContainer.skeletons.indexOf(this);e>-1&&this._parentContainer.skeletons.splice(e,1),this._parentContainer=null}this._transformMatrixTexture&&(this._transformMatrixTexture.dispose(),this._transformMatrixTexture=null)}serialize(){var e;const t={};t.name=this.name,t.id=this.id,this.dimensionsAtRest&&(t.dimensionsAtRest=this.dimensionsAtRest.asArray()),t.bones=[],t.needInitialSkinMatrix=this.needInitialSkinMatrix;for(let i=0;i<this.bones.length;i++){const r=this.bones[i],n=r.getParent(),s={parentBoneIndex:n?this.bones.indexOf(n):-1,index:r.getIndex(),name:r.name,id:r.id,matrix:r.getBaseMatrix().toArray(),rest:r.getRestPose().toArray(),linkedTransformNodeId:(e=r.getTransformNode())===null||e===void 0?void 0:e.id};t.bones.push(s),r.length&&(s.length=r.length),r.metadata&&(s.metadata=r.metadata),r.animations&&r.animations.length>0&&(s.animation=r.animations[0].serialize()),t.ranges=[];for(const a in this._ranges){const o=this._ranges[a];if(!o)continue;const l={};l.name=a,l.from=o.from,l.to=o.to,t.ranges.push(l)}}return t}static Parse(e,t){const i=new ct(e.name,e.id,t);e.dimensionsAtRest&&(i.dimensionsAtRest=v.FromArray(e.dimensionsAtRest)),i.needInitialSkinMatrix=e.needInitialSkinMatrix;let r;for(r=0;r<e.bones.length;r++){const n=e.bones[r],s=e.bones[r].index;let a=null;n.parentBoneIndex>-1&&(a=i.bones[n.parentBoneIndex]);const o=n.rest?F.FromArray(n.rest):null,l=new H(n.name,i,a,F.FromArray(n.matrix),o,null,s);n.id!==void 0&&n.id!==null&&(l.id=n.id),n.length&&(l.length=n.length),n.metadata&&(l.metadata=n.metadata),n.animation&&l.animations.push(Te.Parse(n.animation)),n.linkedTransformNodeId!==void 0&&n.linkedTransformNodeId!==null&&(i._hasWaitingData=!0,l._waitingTransformNodeId=n.linkedTransformNodeId)}if(e.ranges)for(r=0;r<e.ranges.length;r++){const n=e.ranges[r];i.createAnimationRange(n.name,n.from,n.to)}return i}computeAbsoluteTransforms(e=!1){(this._absoluteTransformIsDirty||e)&&(this.bones[0].computeAbsoluteTransforms(),this._absoluteTransformIsDirty=!1)}getPoseMatrix(){let e=null;return this._meshesWithPoseMatrix.length>0&&(e=this._meshesWithPoseMatrix[0].getPoseMatrix()),e}sortBones(){const e=new Array,t=new Array(this.bones.length);for(let i=0;i<this.bones.length;i++)this._sortBones(i,e,t);this.bones=e}_sortBones(e,t,i){if(i[e])return;i[e]=!0;const r=this.bones[e];if(!r)return;r._index===void 0&&(r._index=e);const n=r.getParent();n&&this._sortBones(this.bones.indexOf(n),t,i),t.push(r)}setCurrentPoseAsRest(){this.bones.forEach(e=>{e.setCurrentPoseAsRest()})}}const lr="postprocessVertexShader",fr=`attribute vec2 position;
uniform vec2 scale;
varying vec2 vUV;
const vec2 madd=vec2(0.5,0.5);
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
vUV=(position*madd+madd)*scale;
gl_Position=vec4(position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;x.ShadersStore[lr]=fr;class cr{constructor(e,t,i,r){this._textures=null,this._samples=1,this._attachments=null,this._generateStencilBuffer=!1,this._generateDepthBuffer=!1,this._depthStencilTextureWithStencil=!1,this._isMulti=e,this._isCube=t,this._size=i,this._engine=r,this._depthStencilTexture=null}get depthStencilTexture(){return this._depthStencilTexture}get depthStencilTextureWithStencil(){return this._depthStencilTextureWithStencil}get isCube(){return this._isCube}get isMulti(){return this._isMulti}get is2DArray(){return this.layers>0}get size(){return this.width}get width(){return this._size.width||this._size}get height(){return this._size.height||this._size}get layers(){return this._size.layers||0}get texture(){var e,t;return(t=(e=this._textures)===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:null}get textures(){return this._textures}get samples(){return this._samples}setSamples(e,t=!0,i=!1){if(this.samples===e&&!i)return e;const r=this._isMulti?this._engine.updateMultipleRenderTargetTextureSampleCount(this,e,t):this._engine.updateRenderTargetTextureSampleCount(this,e);return this._samples=e,r}setTextures(e){Array.isArray(e)?this._textures=e:e?this._textures=[e]:this._textures=null}setTexture(e,t=0,i=!0){this._textures||(this._textures=[]),this._textures[t]&&i&&this._textures[t].dispose(),this._textures[t]=e}createDepthStencilTexture(e=0,t=!0,i=!1,r=1,n=14){var s;return(s=this._depthStencilTexture)===null||s===void 0||s.dispose(),this._depthStencilTextureWithStencil=i,this._depthStencilTexture=this._engine.createDepthStencilTexture(this._size,{bilinearFiltering:t,comparisonFunction:e,generateStencil:i,isCube:this._isCube,samples:r,depthTextureFormat:n},this),this._depthStencilTexture}_shareDepth(e){this._depthStencilTexture&&(e._depthStencilTexture&&e._depthStencilTexture.dispose(),e._depthStencilTexture=this._depthStencilTexture,this._depthStencilTexture.incrementReferences())}_swapAndDie(e){this.texture&&this.texture._swapAndDie(e),this._textures=null,this.dispose(!0)}_cloneRenderTargetWrapper(){var e,t,i,r,n,s;let a=null;if(this._isMulti){const o=this.textures;if(o&&o.length>0){let l=!1,c=o.length;const f=o[o.length-1]._source;(f===xe.Depth||f===xe.DepthStencil)&&(l=!0,c--);const d=[],_=[];for(let g=0;g<c;++g){const T=o[g];d.push(T.samplingMode),_.push(T.type)}const u={samplingModes:d,generateMipMaps:o[0].generateMipMaps,generateDepthBuffer:this._generateDepthBuffer,generateStencilBuffer:this._generateStencilBuffer,generateDepthTexture:l,types:_,textureCount:c},p={width:this.width,height:this.height};a=this._engine.createMultipleRenderTarget(p,u)}}else{const o={};if(o.generateDepthBuffer=this._generateDepthBuffer,o.generateMipMaps=(t=(e=this.texture)===null||e===void 0?void 0:e.generateMipMaps)!==null&&t!==void 0?t:!1,o.generateStencilBuffer=this._generateStencilBuffer,o.samplingMode=(i=this.texture)===null||i===void 0?void 0:i.samplingMode,o.type=(r=this.texture)===null||r===void 0?void 0:r.type,o.format=(n=this.texture)===null||n===void 0?void 0:n.format,this.isCube)a=this._engine.createRenderTargetCubeTexture(this.width,o);else{const l={width:this.width,height:this.height,layers:this.is2DArray?(s=this.texture)===null||s===void 0?void 0:s.depth:void 0};a=this._engine.createRenderTargetTexture(l,o)}a.texture.isReady=!0}return a}_swapRenderTargetWrapper(e){if(this._textures&&e._textures)for(let t=0;t<this._textures.length;++t)this._textures[t]._swapAndDie(e._textures[t],!1),e._textures[t].isReady=!0;this._depthStencilTexture&&e._depthStencilTexture&&(this._depthStencilTexture._swapAndDie(e._depthStencilTexture),e._depthStencilTexture.isReady=!0),this._textures=null,this._depthStencilTexture=null}_rebuild(){const e=this._cloneRenderTargetWrapper();if(e){if(this._depthStencilTexture){const t=this._depthStencilTexture.samplingMode,i=t===2||t===3||t===11;e.createDepthStencilTexture(this._depthStencilTexture._comparisonFunction,i,this._depthStencilTextureWithStencil,this._depthStencilTexture.samples)}this.samples>1&&e.setSamples(this.samples),e._swapRenderTargetWrapper(this),e.dispose()}}releaseTextures(){var e,t;if(this._textures)for(let i=0;(t=i<((e=this._textures)===null||e===void 0?void 0:e.length))!==null&&t!==void 0&&t;++i)this._textures[i].dispose();this._textures=null}dispose(e=!1){var t;e||((t=this._depthStencilTexture)===null||t===void 0||t.dispose(),this._depthStencilTexture=null,this.releaseTextures()),this._engine._releaseRenderTargetWrapper(this)}}class hr extends cr{constructor(e,t,i,r,n){super(e,t,i,r),this._framebuffer=null,this._depthStencilBuffer=null,this._MSAAFramebuffer=null,this._colorTextureArray=null,this._depthStencilTextureArray=null,this._context=n}_cloneRenderTargetWrapper(){let e=null;return this._colorTextureArray&&this._depthStencilTextureArray?(e=this._engine.createMultiviewRenderTargetTexture(this.width,this.height),e.texture.isReady=!0):e=super._cloneRenderTargetWrapper(),e}_swapRenderTargetWrapper(e){super._swapRenderTargetWrapper(e),e._framebuffer=this._framebuffer,e._depthStencilBuffer=this._depthStencilBuffer,e._MSAAFramebuffer=this._MSAAFramebuffer,e._colorTextureArray=this._colorTextureArray,e._depthStencilTextureArray=this._depthStencilTextureArray,this._framebuffer=this._depthStencilBuffer=this._MSAAFramebuffer=this._colorTextureArray=this._depthStencilTextureArray=null}_shareDepth(e){super._shareDepth(e);const t=this._context,i=this._depthStencilBuffer,r=e._MSAAFramebuffer||e._framebuffer;e._depthStencilBuffer&&t.deleteRenderbuffer(e._depthStencilBuffer),e._depthStencilBuffer=this._depthStencilBuffer,this._engine._bindUnboundFramebuffer(r),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,i),this._engine._bindUnboundFramebuffer(null)}_bindTextureRenderTarget(e,t=0,i=-1,r=0){if(!e._hardwareTexture)return;const n=this._context,s=this._framebuffer,a=this._engine._currentFramebuffer;this._engine._bindUnboundFramebuffer(s);const o=n[this._engine.webGLVersion>1?"COLOR_ATTACHMENT"+t:"COLOR_ATTACHMENT"+t+"_WEBGL"],l=i!==-1?n.TEXTURE_CUBE_MAP_POSITIVE_X+i:n.TEXTURE_2D;n.framebufferTexture2D(n.FRAMEBUFFER,o,l,e._hardwareTexture.underlyingResource,r),this._engine._bindUnboundFramebuffer(a)}setTexture(e,t=0,i=!0){super.setTexture(e,t,i),this._bindTextureRenderTarget(e,t)}dispose(e=!1){const t=this._context;e||(this._colorTextureArray&&(this._context.deleteTexture(this._colorTextureArray),this._colorTextureArray=null),this._depthStencilTextureArray&&(this._context.deleteTexture(this._depthStencilTextureArray),this._depthStencilTextureArray=null)),this._framebuffer&&(t.deleteFramebuffer(this._framebuffer),this._framebuffer=null),this._depthStencilBuffer&&(t.deleteRenderbuffer(this._depthStencilBuffer),this._depthStencilBuffer=null),this._MSAAFramebuffer&&(t.deleteFramebuffer(this._MSAAFramebuffer),this._MSAAFramebuffer=null),super.dispose(e)}}le.prototype._createHardwareRenderTargetWrapper=function(h,e,t){const i=new hr(h,e,t,this,this._gl);return this._renderTargetWrapperCache.push(i),i};le.prototype.createRenderTargetTexture=function(h,e){var t;const i=this._createHardwareRenderTargetWrapper(!1,!1,h);let r=!0,n=!1,s=!1,a,o=1;e!==void 0&&typeof e=="object"&&(r=!!e.generateDepthBuffer,n=!!e.generateStencilBuffer,s=!!e.noColorAttachment,a=e.colorAttachment,o=(t=e.samples)!==null&&t!==void 0?t:1);const l=a||(s?null:this._createInternalTexture(h,e,!0,xe.RenderTarget)),c=h.width||h,f=h.height||h,d=this._currentFramebuffer,_=this._gl,u=_.createFramebuffer();return this._bindUnboundFramebuffer(u),i._depthStencilBuffer=this._setupFramebufferDepthAttachments(n,r,c,f),l&&!l.is2DArray&&_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,l._hardwareTexture.underlyingResource,0),this._bindUnboundFramebuffer(d),i._framebuffer=u,i._generateDepthBuffer=r,i._generateStencilBuffer=n,i.setTextures(l),this.updateRenderTargetTextureSampleCount(i,o),i};le.prototype.createDepthStencilTexture=function(h,e,t){if(e.isCube){const i=h.width||h;return this._createDepthStencilCubeTexture(i,e,t)}else return this._createDepthStencilTexture(h,e,t)};le.prototype._createDepthStencilTexture=function(h,e,t){const i=this._gl,r=h.layers||0,n=r!==0?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D,s=new it(this,xe.DepthStencil);if(!this._caps.depthTextureExtension)return V.Error("Depth texture is not supported by your browser or hardware."),s;const a={bilinearFiltering:!1,comparisonFunction:0,generateStencil:!1,...e};if(this._bindTextureDirectly(n,s,!0),this._setupDepthStencilTexture(s,h,a.generateStencil,a.comparisonFunction===0?!1:a.bilinearFiltering,a.comparisonFunction,a.samples),a.depthTextureFormat!==void 0){if(a.depthTextureFormat!==15&&a.depthTextureFormat!==16&&a.depthTextureFormat!==17&&a.depthTextureFormat!==13&&a.depthTextureFormat!==14&&a.depthTextureFormat!==18)return V.Error("Depth texture format is not supported."),s;s.format=a.depthTextureFormat}else s.format=a.generateStencil?13:16;const o=s.format===17||s.format===13||s.format===18;t._depthStencilTexture=s,t._depthStencilTextureWithStencil=o;let l=i.UNSIGNED_INT;s.format===15?l=i.UNSIGNED_SHORT:s.format===17||s.format===13?l=i.UNSIGNED_INT_24_8:s.format===14?l=i.FLOAT:s.format===18&&(l=i.FLOAT_32_UNSIGNED_INT_24_8_REV);const c=o?i.DEPTH_STENCIL:i.DEPTH_COMPONENT;let f=c;this.webGLVersion>1&&(s.format===15?f=i.DEPTH_COMPONENT16:s.format===16?f=i.DEPTH_COMPONENT24:s.format===17||s.format===13?f=i.DEPTH24_STENCIL8:s.format===14?f=i.DEPTH_COMPONENT32F:s.format===18&&(f=i.DEPTH32F_STENCIL8)),s.is2DArray?i.texImage3D(n,0,f,s.width,s.height,r,0,c,l,null):i.texImage2D(n,0,f,s.width,s.height,0,c,l,null),this._bindTextureDirectly(n,null),this._internalTexturesCache.push(s);const d=t;if(d._depthStencilBuffer){const _=this._currentFramebuffer;this._bindUnboundFramebuffer(d._framebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,null),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,null),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.STENCIL_ATTACHMENT,i.RENDERBUFFER,null),this._bindUnboundFramebuffer(_),i.deleteRenderbuffer(d._depthStencilBuffer),d._depthStencilBuffer=null}return s};le.prototype.updateRenderTargetTextureSampleCount=function(h,e){if(this.webGLVersion<2||!h||!h.texture)return 1;if(h.samples===e)return e;const t=this._gl;e=Math.min(e,this.getCaps().maxMSAASamples),h._depthStencilBuffer&&(t.deleteRenderbuffer(h._depthStencilBuffer),h._depthStencilBuffer=null),h._MSAAFramebuffer&&(t.deleteFramebuffer(h._MSAAFramebuffer),h._MSAAFramebuffer=null);const i=h.texture._hardwareTexture;if(i._MSAARenderBuffer&&(t.deleteRenderbuffer(i._MSAARenderBuffer),i._MSAARenderBuffer=null),e>1&&t.renderbufferStorageMultisample){const r=t.createFramebuffer();if(!r)throw new Error("Unable to create multi sampled framebuffer");h._MSAAFramebuffer=r,this._bindUnboundFramebuffer(h._MSAAFramebuffer);const n=this._createRenderBuffer(h.texture.width,h.texture.height,e,-1,this._getRGBAMultiSampleBufferFormat(h.texture.type),t.COLOR_ATTACHMENT0,!1);if(!n)throw new Error("Unable to create multi sampled framebuffer");i._MSAARenderBuffer=n}else this._bindUnboundFramebuffer(h._framebuffer);return h.texture.samples=e,h._samples=e,h._depthStencilBuffer=this._setupFramebufferDepthAttachments(h._generateStencilBuffer,h._generateDepthBuffer,h.texture.width,h.texture.height,e),this._bindUnboundFramebuffer(null),e};class j{constructor(e,t,i,r,n,s,a=1,o,l,c=null,f=0,d="postprocess",_,u=!1,p=5,g=bi.GLSL){this._parentContainer=null,this.width=-1,this.height=-1,this.nodeMaterialSource=null,this._outputTexture=null,this.autoClear=!0,this.alphaMode=0,this.animations=new Array,this.enablePixelPerfectMode=!1,this.forceFullscreenViewport=!0,this.scaleMode=1,this.alwaysForcePOT=!1,this._samples=1,this.adaptScaleToCurrentViewport=!1,this._reusable=!1,this._renderId=0,this.externalTextureSamplerBinding=!1,this._textures=new Je(2),this._textureCache=[],this._currentRenderTextureInd=0,this._scaleRatio=new Ze(1,1),this._texelSize=Ze.Zero(),this.onActivateObservable=new B,this.onSizeChangedObservable=new B,this.onApplyObservable=new B,this.onBeforeRenderObservable=new B,this.onAfterRenderObservable=new B,this.name=e,s!=null?(this._camera=s,this._scene=s.getScene(),s.attachPostProcess(this),this._engine=this._scene.getEngine(),this._scene.postProcesses.push(this),this.uniqueId=this._scene.getUniqueId()):o&&(this._engine=o,this._engine.postProcesses.push(this)),this._options=n,this.renderTargetSamplingMode=a||1,this._reusable=l||!1,this._textureType=f,this._textureFormat=p,this._shaderLanguage=g,this._samplers=r||[],this._samplers.push("textureSampler"),this._fragmentUrl=t,this._vertexUrl=d,this._parameters=i||[],this._parameters.push("scale"),this._indexParameters=_,this._drawWrapper=new lt(this._engine),u||this.updateEffect(c)}static RegisterShaderCodeProcessing(e,t){if(!t){delete j._CustomShaderCodeProcessing[e??""];return}j._CustomShaderCodeProcessing[e??""]=t}static _GetShaderCodeProcessing(e){var t;return(t=j._CustomShaderCodeProcessing[e])!==null&&t!==void 0?t:j._CustomShaderCodeProcessing[""]}get samples(){return this._samples}set samples(e){this._samples=Math.min(e,this._engine.getCaps().maxMSAASamples),this._textures.forEach(t=>{t.setSamples(this._samples)})}getEffectName(){return this._fragmentUrl}set onActivate(e){this._onActivateObserver&&this.onActivateObservable.remove(this._onActivateObserver),e&&(this._onActivateObserver=this.onActivateObservable.add(e))}set onSizeChanged(e){this._onSizeChangedObserver&&this.onSizeChangedObservable.remove(this._onSizeChangedObserver),this._onSizeChangedObserver=this.onSizeChangedObservable.add(e)}set onApply(e){this._onApplyObserver&&this.onApplyObservable.remove(this._onApplyObserver),this._onApplyObserver=this.onApplyObservable.add(e)}set onBeforeRender(e){this._onBeforeRenderObserver&&this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver),this._onBeforeRenderObserver=this.onBeforeRenderObservable.add(e)}set onAfterRender(e){this._onAfterRenderObserver&&this.onAfterRenderObservable.remove(this._onAfterRenderObserver),this._onAfterRenderObserver=this.onAfterRenderObservable.add(e)}get inputTexture(){return this._textures.data[this._currentRenderTextureInd]}set inputTexture(e){this._forcedOutputTexture=e}restoreDefaultInputTexture(){this._forcedOutputTexture&&(this._forcedOutputTexture=null,this.markTextureDirty())}getCamera(){return this._camera}get texelSize(){return this._shareOutputWithPostProcess?this._shareOutputWithPostProcess.texelSize:(this._forcedOutputTexture&&this._texelSize.copyFromFloats(1/this._forcedOutputTexture.width,1/this._forcedOutputTexture.height),this._texelSize)}getClassName(){return"PostProcess"}getEngine(){return this._engine}getEffect(){return this._drawWrapper.effect}shareOutputWith(e){return this._disposeTextures(),this._shareOutputWithPostProcess=e,this}useOwnOutput(){this._textures.length==0&&(this._textures=new Je(2)),this._shareOutputWithPostProcess=null}updateEffect(e=null,t=null,i=null,r,n,s,a,o){var l,c;const f=j._GetShaderCodeProcessing(this.name);if(f!=null&&f.defineCustomBindings){const d=(l=t==null?void 0:t.slice())!==null&&l!==void 0?l:[];d.push(...this._parameters);const _=(c=i==null?void 0:i.slice())!==null&&c!==void 0?c:[];_.push(...this._samplers),e=f.defineCustomBindings(this.name,e,d,_),t=d,i=_}this._postProcessDefines=e,this._drawWrapper.effect=this._engine.createEffect({vertex:a??this._vertexUrl,fragment:o??this._fragmentUrl},{attributes:["position"],uniformsNames:t||this._parameters,uniformBuffersNames:[],samplers:i||this._samplers,defines:e!==null?e:"",fallbacks:null,onCompiled:n??null,onError:s??null,indexParameters:r||this._indexParameters,processCodeAfterIncludes:f!=null&&f.processCodeAfterIncludes?(d,_)=>f.processCodeAfterIncludes(this.name,d,_):null,processFinalCode:f!=null&&f.processFinalCode?(d,_)=>f.processFinalCode(this.name,d,_):null,shaderLanguage:this._shaderLanguage},this._engine)}isReusable(){return this._reusable}markTextureDirty(){this.width=-1}_createRenderTargetTexture(e,t,i=0){for(let n=0;n<this._textureCache.length;n++)if(this._textureCache[n].texture.width===e.width&&this._textureCache[n].texture.height===e.height&&this._textureCache[n].postProcessChannel===i&&this._textureCache[n].texture._generateDepthBuffer===t.generateDepthBuffer&&this._textureCache[n].texture.samples===t.samples)return this._textureCache[n].texture;const r=this._engine.createRenderTargetTexture(e,t);return this._textureCache.push({texture:r,postProcessChannel:i,lastUsedRenderId:-1}),r}_flushTextureCache(){const e=this._renderId;for(let t=this._textureCache.length-1;t>=0;t--)if(e-this._textureCache[t].lastUsedRenderId>100){let i=!1;for(let r=0;r<this._textures.length;r++)if(this._textures.data[r]===this._textureCache[t].texture){i=!0;break}i||(this._textureCache[t].texture.dispose(),this._textureCache.splice(t,1))}}_resize(e,t,i,r,n){this._textures.length>0&&this._textures.reset(),this.width=e,this.height=t;let s=null;for(let l=0;l<i._postProcesses.length;l++)if(i._postProcesses[l]!==null){s=i._postProcesses[l];break}const a={width:this.width,height:this.height},o={generateMipMaps:r,generateDepthBuffer:n||s===this,generateStencilBuffer:(n||s===this)&&this._engine.isStencilEnable,samplingMode:this.renderTargetSamplingMode,type:this._textureType,format:this._textureFormat,samples:this._samples};this._textures.push(this._createRenderTargetTexture(a,o,0)),this._reusable&&this._textures.push(this._createRenderTargetTexture(a,o,1)),this._texelSize.copyFromFloats(1/this.width,1/this.height),this.onSizeChangedObservable.notifyObservers(this)}activate(e,t=null,i){var r,n;e=e||this._camera;const s=e.getScene(),a=s.getEngine(),o=a.getCaps().maxTextureSize;let l=(t?t.width:this._engine.getRenderWidth(!0))*this._options|0;const c=(t?t.height:this._engine.getRenderHeight(!0))*this._options|0,f=e.parent;f&&(f.leftCamera==e||f.rightCamera==e)&&(l/=2);let d=this._options.width||l,_=this._options.height||c;const u=this.renderTargetSamplingMode!==7&&this.renderTargetSamplingMode!==1&&this.renderTargetSamplingMode!==2;if(!this._shareOutputWithPostProcess&&!this._forcedOutputTexture){if(this.adaptScaleToCurrentViewport){const g=a.currentViewport;g&&(d*=g.width,_*=g.height)}(u||this.alwaysForcePOT)&&(this._options.width||(d=a.needPOTTextures?q.GetExponentOfTwo(d,o,this.scaleMode):d),this._options.height||(_=a.needPOTTextures?q.GetExponentOfTwo(_,o,this.scaleMode):_)),(this.width!==d||this.height!==_)&&this._resize(d,_,e,u,i),this._textures.forEach(g=>{g.samples!==this.samples&&this._engine.updateRenderTargetTextureSampleCount(g,this.samples)}),this._flushTextureCache(),this._renderId++}let p;if(this._shareOutputWithPostProcess)p=this._shareOutputWithPostProcess.inputTexture;else if(this._forcedOutputTexture)p=this._forcedOutputTexture,this.width=this._forcedOutputTexture.width,this.height=this._forcedOutputTexture.height;else{p=this.inputTexture;let g;for(let T=0;T<this._textureCache.length;T++)if(this._textureCache[T].texture===p){g=this._textureCache[T];break}g&&(g.lastUsedRenderId=this._renderId)}return this.enablePixelPerfectMode?(this._scaleRatio.copyFromFloats(l/d,c/_),this._engine.bindFramebuffer(p,0,l,c,this.forceFullscreenViewport)):(this._scaleRatio.copyFromFloats(1,1),this._engine.bindFramebuffer(p,0,void 0,void 0,this.forceFullscreenViewport)),(n=(r=this._engine)._debugInsertMarker)===null||n===void 0||n.call(r,`post process ${this.name} input`),this.onActivateObservable.notifyObservers(e),this.autoClear&&this.alphaMode===0&&this._engine.clear(this.clearColor?this.clearColor:s.clearColor,s._allowPostProcessClearColor,!0,!0),this._reusable&&(this._currentRenderTextureInd=(this._currentRenderTextureInd+1)%2),p}get isSupported(){return this._drawWrapper.effect.isSupported}get aspectRatio(){return this._shareOutputWithPostProcess?this._shareOutputWithPostProcess.aspectRatio:this._forcedOutputTexture?this._forcedOutputTexture.width/this._forcedOutputTexture.height:this.width/this.height}isReady(){var e,t;return(t=(e=this._drawWrapper.effect)===null||e===void 0?void 0:e.isReady())!==null&&t!==void 0?t:!1}apply(){var e,t,i;if(!(!((e=this._drawWrapper.effect)===null||e===void 0)&&e.isReady()))return null;this._engine.enableEffect(this._drawWrapper),this._engine.setState(!1),this._engine.setDepthBuffer(!1),this._engine.setDepthWrite(!1),this._engine.setAlphaMode(this.alphaMode),this.alphaConstants&&this.getEngine().setAlphaConstants(this.alphaConstants.r,this.alphaConstants.g,this.alphaConstants.b,this.alphaConstants.a);let r;return this._shareOutputWithPostProcess?r=this._shareOutputWithPostProcess.inputTexture:this._forcedOutputTexture?r=this._forcedOutputTexture:r=this.inputTexture,this.externalTextureSamplerBinding||this._drawWrapper.effect._bindTexture("textureSampler",r==null?void 0:r.texture),this._drawWrapper.effect.setVector2("scale",this._scaleRatio),this.onApplyObservable.notifyObservers(this._drawWrapper.effect),(i=(t=j._GetShaderCodeProcessing(this.name))===null||t===void 0?void 0:t.bindCustomBindings)===null||i===void 0||i.call(t,this.name,this._drawWrapper.effect),this._drawWrapper.effect}_disposeTextures(){if(this._shareOutputWithPostProcess||this._forcedOutputTexture){this._disposeTextureCache();return}this._disposeTextureCache(),this._textures.dispose()}_disposeTextureCache(){for(let e=this._textureCache.length-1;e>=0;e--)this._textureCache[e].texture.dispose();this._textureCache.length=0}setPrePassRenderer(e){return this._prePassEffectConfiguration?(this._prePassEffectConfiguration=e.addEffectConfiguration(this._prePassEffectConfiguration),this._prePassEffectConfiguration.enabled=!0,!0):!1}dispose(e){e=e||this._camera,this._disposeTextures();let t;if(this._scene&&(t=this._scene.postProcesses.indexOf(this),t!==-1&&this._scene.postProcesses.splice(t,1)),this._parentContainer){const i=this._parentContainer.postProcesses.indexOf(this);i>-1&&this._parentContainer.postProcesses.splice(i,1),this._parentContainer=null}if(t=this._engine.postProcesses.indexOf(this),t!==-1&&this._engine.postProcesses.splice(t,1),!!e){if(e.detachPostProcess(this),t=e._postProcesses.indexOf(this),t===0&&e._postProcesses.length>0){const i=this._camera._getFirstPostProcess();i&&i.markTextureDirty()}this.onActivateObservable.clear(),this.onAfterRenderObservable.clear(),this.onApplyObservable.clear(),this.onBeforeRenderObservable.clear(),this.onSizeChangedObservable.clear()}}serialize(){const e=ae.Serialize(this),t=this.getCamera()||this._scene&&this._scene.activeCamera;return e.customType="BABYLON."+this.getClassName(),e.cameraId=t?t.id:null,e.reusable=this._reusable,e.textureType=this._textureType,e.fragmentUrl=this._fragmentUrl,e.parameters=this._parameters,e.samplers=this._samplers,e.options=this._options,e.defines=this._postProcessDefines,e.textureFormat=this._textureFormat,e.vertexUrl=this._vertexUrl,e.indexParameters=this._indexParameters,e}clone(){const e=this.serialize();e._engine=this._engine,e.cameraId=null;const t=j.Parse(e,this._scene,"");return t?(t.onActivateObservable=this.onActivateObservable.clone(),t.onSizeChangedObservable=this.onSizeChangedObservable.clone(),t.onApplyObservable=this.onApplyObservable.clone(),t.onBeforeRenderObservable=this.onBeforeRenderObservable.clone(),t.onAfterRenderObservable=this.onAfterRenderObservable.clone(),t._prePassEffectConfiguration=this._prePassEffectConfiguration,t):null}static Parse(e,t,i){const r=Nt(e.customType);if(!r||!r._Parse)return null;const n=t?t.getCameraById(e.cameraId):null;return r._Parse(e,n,t,i)}static _Parse(e,t,i,r){return ae.Parse(()=>new j(e.name,e.fragmentUrl,e.parameters,e.samplers,e.options,t,e.renderTargetSamplingMode,e._engine,e.reusable,e.defines,e.textureType,e.vertexUrl,e.indexParameters,!1,e.textureFormat),e,i,r)}}j._CustomShaderCodeProcessing={};m([E()],j.prototype,"uniqueId",void 0);m([E()],j.prototype,"name",void 0);m([E()],j.prototype,"width",void 0);m([E()],j.prototype,"height",void 0);m([E()],j.prototype,"renderTargetSamplingMode",void 0);m([Mi()],j.prototype,"clearColor",void 0);m([E()],j.prototype,"autoClear",void 0);m([E()],j.prototype,"alphaMode",void 0);m([E()],j.prototype,"alphaConstants",void 0);m([E()],j.prototype,"enablePixelPerfectMode",void 0);m([E()],j.prototype,"forceFullscreenViewport",void 0);m([E()],j.prototype,"scaleMode",void 0);m([E()],j.prototype,"alwaysForcePOT",void 0);m([E("samples")],j.prototype,"_samples",void 0);m([E()],j.prototype,"adaptScaleToCurrentViewport",void 0);tt("BABYLON.PostProcess",j);const dr="helperFunctions",ur=`const float PI=3.1415926535897932384626433832795;
const float HALF_MIN=5.96046448e-08; 
const float LinearEncodePowerApprox=2.2;
const float GammaEncodePowerApprox=1.0/LinearEncodePowerApprox;
const vec3 LuminanceEncodeApprox=vec3(0.2126,0.7152,0.0722);
const float Epsilon=0.0000001;
#define saturate(x) clamp(x,0.0,1.0)
#define absEps(x) abs(x)+Epsilon
#define maxEps(x) max(x,Epsilon)
#define saturateEps(x) clamp(x,Epsilon,1.0)
mat3 transposeMat3(mat3 inMatrix) {
vec3 i0=inMatrix[0];
vec3 i1=inMatrix[1];
vec3 i2=inMatrix[2];
mat3 outMatrix=mat3(
vec3(i0.x,i1.x,i2.x),
vec3(i0.y,i1.y,i2.y),
vec3(i0.z,i1.z,i2.z)
);
return outMatrix;
}
mat3 inverseMat3(mat3 inMatrix) {
float a00=inMatrix[0][0],a01=inMatrix[0][1],a02=inMatrix[0][2];
float a10=inMatrix[1][0],a11=inMatrix[1][1],a12=inMatrix[1][2];
float a20=inMatrix[2][0],a21=inMatrix[2][1],a22=inMatrix[2][2];
float b01=a22*a11-a12*a21;
float b11=-a22*a10+a12*a20;
float b21=a21*a10-a11*a20;
float det=a00*b01+a01*b11+a02*b21;
return mat3(b01,(-a22*a01+a02*a21),(a12*a01-a02*a11),
b11,(a22*a00-a02*a20),(-a12*a00+a02*a10),
b21,(-a21*a00+a01*a20),(a11*a00-a01*a10))/det;
}
#if USE_EXACT_SRGB_CONVERSIONS
vec3 toLinearSpaceExact(vec3 color)
{
vec3 nearZeroSection=0.0773993808*color;
vec3 remainingSection=pow(0.947867299*(color+vec3(0.055)),vec3(2.4));
#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)
return mix(remainingSection,nearZeroSection,lessThanEqual(color,vec3(0.04045)));
#else
return
vec3(
color.r<=0.04045 ? nearZeroSection.r : remainingSection.r,
color.g<=0.04045 ? nearZeroSection.g : remainingSection.g,
color.b<=0.04045 ? nearZeroSection.b : remainingSection.b);
#endif
}
vec3 toGammaSpaceExact(vec3 color)
{
vec3 nearZeroSection=12.92*color;
vec3 remainingSection=1.055*pow(color,vec3(0.41666))-vec3(0.055);
#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)
return mix(remainingSection,nearZeroSection,lessThanEqual(color,vec3(0.0031308)));
#else
return
vec3(
color.r<=0.0031308 ? nearZeroSection.r : remainingSection.r,
color.g<=0.0031308 ? nearZeroSection.g : remainingSection.g,
color.b<=0.0031308 ? nearZeroSection.b : remainingSection.b);
#endif
}
#endif
float toLinearSpace(float color)
{
#if USE_EXACT_SRGB_CONVERSIONS
float nearZeroSection=0.0773993808*color;
float remainingSection=pow(0.947867299*(color+0.055),2.4);
return color<=0.04045 ? nearZeroSection : remainingSection;
#else
return pow(color,LinearEncodePowerApprox);
#endif
}
vec3 toLinearSpace(vec3 color)
{
#if USE_EXACT_SRGB_CONVERSIONS
return toLinearSpaceExact(color);
#else
return pow(color,vec3(LinearEncodePowerApprox));
#endif
}
vec4 toLinearSpace(vec4 color)
{
#if USE_EXACT_SRGB_CONVERSIONS
return vec4(toLinearSpaceExact(color.rgb),color.a);
#else
return vec4(pow(color.rgb,vec3(LinearEncodePowerApprox)),color.a);
#endif
}
float toGammaSpace(float color)
{
#if USE_EXACT_SRGB_CONVERSIONS
float nearZeroSection=12.92*color;
float remainingSection=1.055*pow(color,0.41666)-0.055;
return color<=0.0031308 ? nearZeroSection : remainingSection;
#else
return pow(color,GammaEncodePowerApprox);
#endif
}
vec3 toGammaSpace(vec3 color)
{
#if USE_EXACT_SRGB_CONVERSIONS
return toGammaSpaceExact(color);
#else
return pow(color,vec3(GammaEncodePowerApprox));
#endif
}
vec4 toGammaSpace(vec4 color)
{
#if USE_EXACT_SRGB_CONVERSIONS
return vec4(toGammaSpaceExact(color.rgb),color.a);
#else
return vec4(pow(color.rgb,vec3(GammaEncodePowerApprox)),color.a);
#endif
}
float square(float value)
{
return value*value;
}
vec3 square(vec3 value)
{
return value*value;
}
float pow5(float value) {
float sq=value*value;
return sq*sq*value;
}
float getLuminance(vec3 color)
{
return clamp(dot(color,LuminanceEncodeApprox),0.,1.);
}
float getRand(vec2 seed) {
return fract(sin(dot(seed.xy ,vec2(12.9898,78.233)))*43758.5453);
}
float dither(vec2 seed,float varianceAmount) {
float rand=getRand(seed);
float normVariance=varianceAmount/255.0;
float dither=mix(-normVariance,normVariance,rand);
return dither;
}
const float rgbdMaxRange=255.0;
vec4 toRGBD(vec3 color) {
float maxRGB=maxEps(max(color.r,max(color.g,color.b)));
float D =max(rgbdMaxRange/maxRGB,1.);
D =clamp(floor(D)/255.0,0.,1.);
vec3 rgb=color.rgb*D;
rgb=toGammaSpace(rgb);
return vec4(clamp(rgb,0.,1.),D); 
}
vec3 fromRGBD(vec4 rgbd) {
rgbd.rgb=toLinearSpace(rgbd.rgb);
return rgbd.rgb/rgbd.a;
}
vec3 parallaxCorrectNormal( vec3 vertexPos,vec3 origVec,vec3 cubeSize,vec3 cubePos ) {
vec3 invOrigVec=vec3(1.0,1.0,1.0)/origVec;
vec3 halfSize=cubeSize*0.5;
vec3 intersecAtMaxPlane=(cubePos+halfSize-vertexPos)*invOrigVec;
vec3 intersecAtMinPlane=(cubePos-halfSize-vertexPos)*invOrigVec;
vec3 largestIntersec=max(intersecAtMaxPlane,intersecAtMinPlane);
float distance=min(min(largestIntersec.x,largestIntersec.y),largestIntersec.z);
vec3 intersectPositionWS=vertexPos+origVec*distance;
return intersectPositionWS-cubePos;
}
`;x.IncludesShadersStore[dr]=ur;const _r="rgbdDecodePixelShader",mr=`varying vec2 vUV;
uniform sampler2D textureSampler;
#include<helperFunctions>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) 
{
gl_FragColor=vec4(fromRGBD(texture2D(textureSampler,vUV)),1.0);
}`;x.ShadersStore[_r]=mr;le.prototype.createRenderTargetCubeTexture=function(h,e){const t=this._createHardwareRenderTargetWrapper(!1,!0,h),i={generateMipMaps:!0,generateDepthBuffer:!0,generateStencilBuffer:!1,type:0,samplingMode:3,format:5,...e};i.generateStencilBuffer=i.generateDepthBuffer&&i.generateStencilBuffer,(i.type===1&&!this._caps.textureFloatLinearFiltering||i.type===2&&!this._caps.textureHalfFloatLinearFiltering)&&(i.samplingMode=1);const r=this._gl,n=new it(this,xe.RenderTarget);this._bindTextureDirectly(r.TEXTURE_CUBE_MAP,n,!0);const s=this._getSamplingParameters(i.samplingMode,i.generateMipMaps);i.type===1&&!this._caps.textureFloat&&(i.type=0,V.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")),r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAG_FILTER,s.mag),r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MIN_FILTER,s.min),r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE);for(let o=0;o<6;o++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+o,0,this._getRGBABufferInternalSizedFormat(i.type,i.format),h,h,0,this._getInternalFormat(i.format),this._getWebGLTextureType(i.type),null);const a=r.createFramebuffer();return this._bindUnboundFramebuffer(a),t._depthStencilBuffer=this._setupFramebufferDepthAttachments(i.generateStencilBuffer,i.generateDepthBuffer,h,h),i.generateMipMaps&&r.generateMipmap(r.TEXTURE_CUBE_MAP),this._bindTextureDirectly(r.TEXTURE_CUBE_MAP,null),this._bindUnboundFramebuffer(null),t._framebuffer=a,t._generateDepthBuffer=i.generateDepthBuffer,t._generateStencilBuffer=i.generateStencilBuffer,n.width=h,n.height=h,n.isReady=!0,n.isCube=!0,n.samples=1,n.generateMipMaps=i.generateMipMaps,n.samplingMode=i.samplingMode,n.type=i.type,n.format=i.format,this._internalTexturesCache.push(n),t.setTextures(n),t};const Rt={positions:[1,1,-1,1,-1,-1,1,-1],indices:[0,1,2,0,2,3]};class pr{constructor(e,t=Rt){var i,r;this._fullscreenViewport=new Ni(0,0,1,1);const n=(i=t.positions)!==null&&i!==void 0?i:Rt.positions,s=(r=t.indices)!==null&&r!==void 0?r:Rt.indices;this.engine=e,this._vertexBuffers={[y.PositionKind]:new y(e,n,y.PositionKind,!1,!1,2)},this._indexBuffer=e.createIndexBuffer(s),this._onContextRestoredObserver=e.onContextRestoredObservable.add(()=>{this._indexBuffer=e.createIndexBuffer(s);for(const a in this._vertexBuffers)this._vertexBuffers[a]._rebuild()})}setViewport(e=this._fullscreenViewport){this.engine.setViewport(e)}bindBuffers(e){this.engine.bindBuffers(this._vertexBuffers,this._indexBuffer,e)}applyEffectWrapper(e){this.engine.setState(!0),this.engine.depthCullingState.depthTest=!1,this.engine.stencilState.stencilTest=!1,this.engine.enableEffect(e._drawWrapper),this.bindBuffers(e.effect),e.onApplyObservable.notifyObservers({})}restoreStates(){this.engine.depthCullingState.depthTest=!0,this.engine.stencilState.stencilTest=!0}draw(){this.engine.drawElementsType(0,0,6)}_isRenderTargetTexture(e){return e.renderTarget!==void 0}render(e,t=null){if(!e.effect.isReady())return;this.setViewport();const i=t===null?null:this._isRenderTargetTexture(t)?t.renderTarget:t;i&&this.engine.bindFramebuffer(i),this.applyEffectWrapper(e),this.draw(),i&&this.engine.unBindFramebuffer(i),this.restoreStates()}dispose(){const e=this._vertexBuffers[y.PositionKind];e&&(e.dispose(),delete this._vertexBuffers[y.PositionKind]),this._indexBuffer&&this.engine._releaseBuffer(this._indexBuffer),this._onContextRestoredObserver&&(this.engine.onContextRestoredObservable.remove(this._onContextRestoredObserver),this._onContextRestoredObserver=null)}}class Er{constructor(e){this.onApplyObservable=new B;let t;const i=e.uniformNames||[];e.vertexShader?t={fragmentSource:e.fragmentShader,vertexSource:e.vertexShader,spectorName:e.name||"effectWrapper"}:(i.push("scale"),t={fragmentSource:e.fragmentShader,vertex:"postprocess",spectorName:e.name||"effectWrapper"},this.onApplyObservable.add(()=>{this.effect.setFloat2("scale",1,1)}));const r=e.defines?e.defines.join(`
`):"";this._drawWrapper=new lt(e.engine),e.useShaderStore?(t.fragment=t.fragmentSource,t.vertex||(t.vertex=t.vertexSource),delete t.fragmentSource,delete t.vertexSource,this.effect=e.engine.createEffect(t,e.attributeNames||["position"],i,e.samplerNames,r,void 0,e.onCompiled,void 0,void 0,e.shaderLanguage)):(this.effect=new yi(t,e.attributeNames||["position"],i,e.samplerNames,e.engine,r,void 0,e.onCompiled,void 0,void 0,void 0,e.shaderLanguage),this._onContextRestoredObserver=e.engine.onContextRestoredObservable.add(()=>{this.effect._pipelineContext=null,this.effect._wasPreviouslyReady=!1,this.effect._prepareEffect()}))}get effect(){return this._drawWrapper.effect}set effect(e){this._drawWrapper.effect=e}dispose(){this._onContextRestoredObserver&&(this.effect.getEngine().onContextRestoredObservable.remove(this._onContextRestoredObserver),this._onContextRestoredObserver=null),this.effect.dispose()}}const li="passPixelShader",fi=`varying vec2 vUV;
uniform sampler2D textureSampler;
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) 
{
gl_FragColor=texture2D(textureSampler,vUV);
}`;x.ShadersStore[li]=fi;const Gt={name:li,shader:fi};class oe{static _CreateDumpRenderer(){if(!oe._DumpToolsEngine){const e=document.createElement("canvas"),t=new le(e,!1,{preserveDrawingBuffer:!0,depth:!1,stencil:!1,alpha:!0,premultipliedAlpha:!1,antialias:!1,failIfMajorPerformanceCaveat:!1});t.getCaps().parallelShaderCompile=void 0;const i=new pr(t),r=new Er({engine:t,name:Gt.name,fragmentShader:Gt.shader,samplerNames:["textureSampler"]});oe._DumpToolsEngine={canvas:e,engine:t,renderer:i,wrapper:r}}return oe._DumpToolsEngine}static async DumpFramebuffer(e,t,i,r,n="image/png",s){const a=await i.readPixels(0,0,e,t),o=new Uint8Array(a.buffer);oe.DumpData(e,t,o,r,n,s,!0)}static DumpDataAsync(e,t,i,r="image/png",n,s=!1,a=!1,o){return new Promise(l=>{oe.DumpData(e,t,i,c=>l(c),r,n,s,a,o)})}static DumpData(e,t,i,r,n="image/png",s,a=!1,o=!1,l){const c=oe._CreateDumpRenderer();if(c.engine.setSize(e,t,!0),i instanceof Float32Array){const d=new Uint8Array(i.length);let _=i.length;for(;_--;){const u=i[_];d[_]=u<0?0:u>1?1:Math.round(u*255)}i=d}const f=c.engine.createRawTexture(i,e,t,5,!1,!a,1);c.renderer.setViewport(),c.renderer.applyEffectWrapper(c.wrapper),c.wrapper.effect._bindTexture("textureSampler",f),c.renderer.draw(),o?J.ToBlob(c.canvas,d=>{const _=new FileReader;_.onload=u=>{const p=u.target.result;r&&r(p)},_.readAsArrayBuffer(d)},n,l):J.EncodeScreenshotCanvasData(c.canvas,r,n,s,l),f.dispose()}static Dispose(){oe._DumpToolsEngine&&(oe._DumpToolsEngine.wrapper.dispose(),oe._DumpToolsEngine.renderer.dispose(),oe._DumpToolsEngine.engine.dispose()),oe._DumpToolsEngine=null}}const gr=()=>{J.DumpData=oe.DumpData,J.DumpDataAsync=oe.DumpDataAsync,J.DumpFramebuffer=oe.DumpFramebuffer};gr();class Le extends A{constructor(e,t,i,r=!1,n=!0,s=0,a=!1,o=A.TRILINEAR_SAMPLINGMODE,l=!0,c=!1,f=!1,d=5,_=!1,u,p,g=!1,T=!1){var C,R,b,G;let X;if(typeof r=="object"){const O=r;r=!!O.generateMipMaps,n=!!O.doNotChangeAspectRatio,s=(C=O.type)!==null&&C!==void 0?C:0,a=!!O.isCube,o=(R=O.samplingMode)!==null&&R!==void 0?R:A.TRILINEAR_SAMPLINGMODE,l=!!O.generateDepthBuffer,c=!!O.generateStencilBuffer,f=!!O.isMulti,d=(b=O.format)!==null&&b!==void 0?b:5,_=!!O.delayAllocation,u=O.samples,p=O.creationFlags,g=!!O.noColorAttachment,T=!!O.useSRGBBuffer,X=O.colorAttachment}if(super(null,i,!r,void 0,o,void 0,void 0,void 0,void 0,d),this._unObserveRenderList=null,this._renderListHasChanged=(O,D)=>{var K;const fe=this._renderList?this._renderList.length:0;(D===0&&fe>0||fe===0)&&((K=this.getScene())===null||K===void 0||K.meshes.forEach(_e=>{_e._markSubMeshesAsLightDirty()}))},this.renderParticles=!0,this.renderSprites=!1,this.ignoreCameraViewport=!1,this.onBeforeBindObservable=new B,this.onAfterUnbindObservable=new B,this.onBeforeRenderObservable=new B,this.onAfterRenderObservable=new B,this.onClearObservable=new B,this.onResizeObservable=new B,this._cleared=!1,this.skipInitialClear=!1,this._currentRefreshId=-1,this._refreshRate=1,this._samples=1,this._canRescale=!0,this._renderTarget=null,this.boundingBoxPosition=v.Zero(),i=this.getScene(),!i)return;const L=this.getScene().getEngine();this._coordinatesMode=A.PROJECTION_MODE,this.renderList=new Array,this.name=e,this.isRenderTarget=!0,this._initialSizeParameter=t,this._renderPassIds=[],this._isCubeData=a,this._processSizeParameter(t),this.renderPassId=this._renderPassIds[0],this._resizeObserver=L.onResizeObservable.add(()=>{}),this._generateMipMaps=!!r,this._doNotChangeAspectRatio=n,this._renderingManager=new Oi(i),this._renderingManager._useSceneAutoClearSetup=!0,!f&&(this._renderTargetOptions={generateMipMaps:r,type:s,format:(G=this._format)!==null&&G!==void 0?G:void 0,samplingMode:this.samplingMode,generateDepthBuffer:l,generateStencilBuffer:c,samples:u,creationFlags:p,noColorAttachment:g,useSRGBBuffer:T,colorAttachment:X},this.samplingMode===A.NEAREST_SAMPLINGMODE&&(this.wrapU=A.CLAMP_ADDRESSMODE,this.wrapV=A.CLAMP_ADDRESSMODE),_||(a?(this._renderTarget=i.getEngine().createRenderTargetCubeTexture(this.getRenderSize(),this._renderTargetOptions),this.coordinatesMode=A.INVCUBIC_MODE,this._textureMatrix=F.Identity()):this._renderTarget=i.getEngine().createRenderTargetTexture(this._size,this._renderTargetOptions),this._texture=this._renderTarget.texture,u!==void 0&&(this.samples=u)))}get renderList(){return this._renderList}set renderList(e){this._unObserveRenderList&&(this._unObserveRenderList(),this._unObserveRenderList=null),e&&(this._unObserveRenderList=Li(e,this._renderListHasChanged)),this._renderList=e}get postProcesses(){return this._postProcesses}get _prePassEnabled(){return!!this._prePassRenderTarget&&this._prePassRenderTarget.enabled}set onAfterUnbind(e){this._onAfterUnbindObserver&&this.onAfterUnbindObservable.remove(this._onAfterUnbindObserver),this._onAfterUnbindObserver=this.onAfterUnbindObservable.add(e)}set onBeforeRender(e){this._onBeforeRenderObserver&&this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver),this._onBeforeRenderObserver=this.onBeforeRenderObservable.add(e)}set onAfterRender(e){this._onAfterRenderObserver&&this.onAfterRenderObservable.remove(this._onAfterRenderObserver),this._onAfterRenderObserver=this.onAfterRenderObservable.add(e)}set onClear(e){this._onClearObserver&&this.onClearObservable.remove(this._onClearObserver),this._onClearObserver=this.onClearObservable.add(e)}get renderPassIds(){return this._renderPassIds}get currentRefreshId(){return this._currentRefreshId}setMaterialForRendering(e,t){let i;Array.isArray(e)?i=e:i=[e];for(let r=0;r<i.length;++r)for(let n=0;n<this._renderPassIds.length;++n)i[r].setMaterialForRenderPass(this._renderPassIds[n],t!==void 0?Array.isArray(t)?t[n]:t:void 0)}get renderTargetOptions(){return this._renderTargetOptions}get renderTarget(){return this._renderTarget}_onRatioRescale(){this._sizeRatio&&this.resize(this._initialSizeParameter)}set boundingBoxSize(e){if(this._boundingBoxSize&&this._boundingBoxSize.equals(e))return;this._boundingBoxSize=e;const t=this.getScene();t&&t.markAllMaterialsAsDirty(1)}get boundingBoxSize(){return this._boundingBoxSize}get depthStencilTexture(){var e,t;return(t=(e=this._renderTarget)===null||e===void 0?void 0:e._depthStencilTexture)!==null&&t!==void 0?t:null}createDepthStencilTexture(e=0,t=!0,i=!1,r=1,n=14){var s;(s=this._renderTarget)===null||s===void 0||s.createDepthStencilTexture(e,t,i,r,n)}_releaseRenderPassId(){if(this._scene){const e=this._scene.getEngine();for(let t=0;t<this._renderPassIds.length;++t)e.releaseRenderPassId(this._renderPassIds[t])}this._renderPassIds=[]}_createRenderPassId(){this._releaseRenderPassId();const e=this._scene.getEngine(),t=this._isCubeData?6:this.getRenderLayers()||1;for(let i=0;i<t;++i)this._renderPassIds[i]=e.createRenderPassId(`RenderTargetTexture - ${this.name}#${i}`)}_processSizeParameter(e){if(e.ratio){this._sizeRatio=e.ratio;const t=this._getEngine();this._size={width:this._bestReflectionRenderTargetDimension(t.getRenderWidth(),this._sizeRatio),height:this._bestReflectionRenderTargetDimension(t.getRenderHeight(),this._sizeRatio)}}else this._size=e;this._createRenderPassId()}get samples(){var e,t;return(t=(e=this._renderTarget)===null||e===void 0?void 0:e.samples)!==null&&t!==void 0?t:this._samples}set samples(e){this._renderTarget&&(this._samples=this._renderTarget.setSamples(e))}resetRefreshCounter(){this._currentRefreshId=-1}get refreshRate(){return this._refreshRate}set refreshRate(e){this._refreshRate=e,this.resetRefreshCounter()}addPostProcess(e){if(!this._postProcessManager){const t=this.getScene();if(!t)return;this._postProcessManager=new Di(t),this._postProcesses=new Array}this._postProcesses.push(e),this._postProcesses[0].autoClear=!1}clearPostProcesses(e=!1){if(this._postProcesses){if(e)for(const t of this._postProcesses)t.dispose();this._postProcesses=[]}}removePostProcess(e){if(!this._postProcesses)return;const t=this._postProcesses.indexOf(e);t!==-1&&(this._postProcesses.splice(t,1),this._postProcesses.length>0&&(this._postProcesses[0].autoClear=!1))}_shouldRender(){return this._currentRefreshId===-1?(this._currentRefreshId=1,!0):this.refreshRate===this._currentRefreshId?(this._currentRefreshId=1,!0):(this._currentRefreshId++,!1)}getRenderSize(){return this.getRenderWidth()}getRenderWidth(){return this._size.width?this._size.width:this._size}getRenderHeight(){return this._size.width?this._size.height:this._size}getRenderLayers(){const e=this._size.layers;return e||0}disableRescaling(){this._canRescale=!1}get canRescale(){return this._canRescale}scale(e){const t=Math.max(1,this.getRenderSize()*e);this.resize(t)}getReflectionTextureMatrix(){return this.isCube?this._textureMatrix:super.getReflectionTextureMatrix()}resize(e){var t;const i=this.isCube;(t=this._renderTarget)===null||t===void 0||t.dispose(),this._renderTarget=null;const r=this.getScene();r&&(this._processSizeParameter(e),i?this._renderTarget=r.getEngine().createRenderTargetCubeTexture(this.getRenderSize(),this._renderTargetOptions):this._renderTarget=r.getEngine().createRenderTargetTexture(this._size,this._renderTargetOptions),this._texture=this._renderTarget.texture,this._renderTargetOptions.samples!==void 0&&(this.samples=this._renderTargetOptions.samples),this.onResizeObservable.hasObservers()&&this.onResizeObservable.notifyObservers(this))}render(e=!1,t=!1){this._render(e,t)}isReadyForRendering(){return this._render(!1,!1,!0)}_render(e=!1,t=!1,i=!1){var r;const n=this.getScene();if(!n)return i;const s=n.getEngine();if(this.useCameraPostProcesses!==void 0&&(e=this.useCameraPostProcesses),this._waitingRenderList){this.renderList=[];for(let f=0;f<this._waitingRenderList.length;f++){const d=this._waitingRenderList[f],_=n.getMeshById(d);_&&this.renderList.push(_)}this._waitingRenderList=void 0}if(this.renderListPredicate){this.renderList?this.renderList.length=0:this.renderList=[];const f=this.getScene();if(!f)return i;const d=f.meshes;for(let _=0;_<d.length;_++){const u=d[_];this.renderListPredicate(u)&&this.renderList.push(u)}}const a=s.currentRenderPassId;this.onBeforeBindObservable.notifyObservers(this);const o=(r=this.activeCamera)!==null&&r!==void 0?r:n.activeCamera,l=n.activeCamera;o&&(o!==n.activeCamera&&(n.setTransformMatrix(o.getViewMatrix(),o.getProjectionMatrix(!0)),n.activeCamera=o),s.setViewport(o.viewport,this.getRenderWidth(),this.getRenderHeight())),this._defaultRenderListPrepared=!1;let c=i;if(i){n.getViewMatrix()||n.updateTransformMatrix();const f=this.is2DArray?this.getRenderLayers():this.isCube?6:1;for(let d=0;d<f&&c;d++){let _=null;const u=this.renderList?this.renderList:n.getActiveMeshes().data,p=this.renderList?this.renderList.length:n.getActiveMeshes().length;s.currentRenderPassId=this._renderPassIds[d],this.onBeforeRenderObservable.notifyObservers(d),this.getCustomRenderList&&(_=this.getCustomRenderList(d,u,p)),_||(_=u),this._doNotChangeAspectRatio||n.updateTransformMatrix(!0);for(let g=0;g<_.length&&c;++g){const T=_[g];if(!(!T.isEnabled()||T.isBlocked||!T.isVisible||!T.subMeshes)){if(this.customIsReadyFunction){if(!this.customIsReadyFunction(T,this.refreshRate,i)){c=!1;continue}}else if(!T.isReady(!0)){c=!1;continue}}}this.onAfterRenderObservable.notifyObservers(d),(this.is2DArray||this.isCube)&&(n.incrementRenderId(),n.resetCachedMaterial())}}else if(this.is2DArray)for(let f=0;f<this.getRenderLayers();f++)this._renderToTarget(0,e,t,f,o),n.incrementRenderId(),n.resetCachedMaterial();else if(this.isCube)for(let f=0;f<6;f++)this._renderToTarget(f,e,t,void 0,o),n.incrementRenderId(),n.resetCachedMaterial();else this._renderToTarget(0,e,t,void 0,o);return this.onAfterUnbindObservable.notifyObservers(this),s.currentRenderPassId=a,l&&(n.activeCamera=l,(n.getEngine().scenes.length>1||this.activeCamera&&this.activeCamera!==n.activeCamera)&&n.setTransformMatrix(n.activeCamera.getViewMatrix(),n.activeCamera.getProjectionMatrix(!0)),s.setViewport(n.activeCamera.viewport)),n.resetCachedMaterial(),c}_bestReflectionRenderTargetDimension(e,t){const r=e*t,n=q.NearestPOT(r+128*128/(128+r));return Math.min(q.FloorPOT(e),n)}_prepareRenderingManager(e,t,i,r){const n=this.getScene();if(!n)return;this._renderingManager.reset();const s=n.getRenderId();for(let a=0;a<t;a++){const o=e[a];if(o&&!o.isBlocked){if(this.customIsReadyFunction){if(!this.customIsReadyFunction(o,this.refreshRate,!1)){this.resetRefreshCounter();continue}}else if(!o.isReady(this.refreshRate===0)){this.resetRefreshCounter();continue}if(!o._internalAbstractMeshDataInfo._currentLODIsUpToDate&&n.activeCamera&&(o._internalAbstractMeshDataInfo._currentLOD=n.customLODSelector?n.customLODSelector(o,this.activeCamera||n.activeCamera):o.getLOD(this.activeCamera||n.activeCamera),o._internalAbstractMeshDataInfo._currentLODIsUpToDate=!0),!o._internalAbstractMeshDataInfo._currentLOD)continue;let l=o._internalAbstractMeshDataInfo._currentLOD;l._preActivateForIntermediateRendering(s);let c;if(r&&i?c=(o.layerMask&i.layerMask)===0:c=!1,o.isEnabled()&&o.isVisible&&o.subMeshes&&!c&&(l!==o&&l._activate(s,!0),o._activate(s,!0)&&o.subMeshes.length)){o.isAnInstance?o._internalAbstractMeshDataInfo._actAsRegularMesh&&(l=o):l._internalAbstractMeshDataInfo._onlyForInstancesIntermediate=!1,l._internalAbstractMeshDataInfo._isActiveIntermediate=!0;for(let f=0;f<l.subMeshes.length;f++){const d=l.subMeshes[f];this._renderingManager.dispatch(d,l)}}}}for(let a=0;a<n.particleSystems.length;a++){const o=n.particleSystems[a],l=o.emitter;!o.isStarted()||!l||!l.position||!l.isEnabled()||e.indexOf(l)>=0&&this._renderingManager.dispatchParticles(o)}}_bindFrameBuffer(e=0,t=0){const i=this.getScene();if(!i)return;const r=i.getEngine();this._renderTarget&&r.bindFramebuffer(this._renderTarget,this.isCube?e:void 0,void 0,void 0,this.ignoreCameraViewport,0,t)}_unbindFrameBuffer(e,t){this._renderTarget&&e.unBindFramebuffer(this._renderTarget,this.isCube,()=>{this.onAfterRenderObservable.notifyObservers(t)})}_prepareFrame(e,t,i,r){this._postProcessManager?this._prePassEnabled||this._postProcessManager._prepareFrame(this._texture,this._postProcesses):(!r||!e.postProcessManager._prepareFrame(this._texture))&&this._bindFrameBuffer(t,i)}_renderToTarget(e,t,i,r=0,n=null){var s,a,o,l,c,f;const d=this.getScene();if(!d)return;const _=d.getEngine();if((s=_._debugPushGroup)===null||s===void 0||s.call(_,`render to face #${e} layer #${r}`,1),this._prepareFrame(d,e,r,t),this.is2DArray?(_.currentRenderPassId=this._renderPassIds[r],this.onBeforeRenderObservable.notifyObservers(r)):(_.currentRenderPassId=this._renderPassIds[e],this.onBeforeRenderObservable.notifyObservers(e)),_.snapshotRendering&&_.snapshotRenderingMode===1)this.onClearObservable.hasObservers()?this.onClearObservable.notifyObservers(_):this.skipInitialClear||_.clear(this.clearColor||d.clearColor,!0,!0,!0);else{let p=null;const g=this.renderList?this.renderList:d.getActiveMeshes().data,T=this.renderList?this.renderList.length:d.getActiveMeshes().length;this.getCustomRenderList&&(p=this.getCustomRenderList(this.is2DArray?r:e,g,T)),p?this._prepareRenderingManager(p,p.length,n,!1):(this._defaultRenderListPrepared||(this._prepareRenderingManager(g,T,n,!this.renderList),this._defaultRenderListPrepared=!0),p=g);for(const R of d._beforeRenderTargetClearStage)R.action(this,e,r);this.onClearObservable.hasObservers()?this.onClearObservable.notifyObservers(_):this.skipInitialClear||_.clear(this.clearColor||d.clearColor,!0,!0,!0),this._doNotChangeAspectRatio||d.updateTransformMatrix(!0);for(const R of d._beforeRenderTargetDrawStage)R.action(this,e,r);this._renderingManager.render(this.customRenderFunction,p,this.renderParticles,this.renderSprites);for(const R of d._afterRenderTargetDrawStage)R.action(this,e,r);const C=(o=(a=this._texture)===null||a===void 0?void 0:a.generateMipMaps)!==null&&o!==void 0?o:!1;this._texture&&(this._texture.generateMipMaps=!1),this._postProcessManager?this._postProcessManager._finalizeFrame(!1,(l=this._renderTarget)!==null&&l!==void 0?l:void 0,e,this._postProcesses,this.ignoreCameraViewport):t&&d.postProcessManager._finalizeFrame(!1,(c=this._renderTarget)!==null&&c!==void 0?c:void 0,e);for(const R of d._afterRenderTargetPostProcessStage)R.action(this,e,r);this._texture&&(this._texture.generateMipMaps=C),this._doNotChangeAspectRatio||d.updateTransformMatrix(!0),i&&oe.DumpFramebuffer(this.getRenderWidth(),this.getRenderHeight(),_)}this._unbindFrameBuffer(_,e),this._texture&&this.isCube&&e===5&&_.generateMipMapsForCubemap(this._texture),(f=_._debugPopGroup)===null||f===void 0||f.call(_,1)}setRenderingOrder(e,t=null,i=null,r=null){this._renderingManager.setRenderingOrder(e,t,i,r)}setRenderingAutoClearDepthStencil(e,t){this._renderingManager.setRenderingAutoClearDepthStencil(e,t),this._renderingManager._useSceneAutoClearSetup=!1}clone(){const e=this.getSize(),t=new Le(this.name,e,this.getScene(),this._renderTargetOptions.generateMipMaps,this._doNotChangeAspectRatio,this._renderTargetOptions.type,this.isCube,this._renderTargetOptions.samplingMode,this._renderTargetOptions.generateDepthBuffer,this._renderTargetOptions.generateStencilBuffer,void 0,this._renderTargetOptions.format,void 0,this._renderTargetOptions.samples);return t.hasAlpha=this.hasAlpha,t.level=this.level,t.coordinatesMode=this.coordinatesMode,this.renderList&&(t.renderList=this.renderList.slice(0)),t}serialize(){if(!this.name)return null;const e=super.serialize();if(e.renderTargetSize=this.getRenderSize(),e.renderList=[],this.renderList)for(let t=0;t<this.renderList.length;t++)e.renderList.push(this.renderList[t].id);return e}disposeFramebufferObjects(){var e;(e=this._renderTarget)===null||e===void 0||e.dispose(!0)}releaseInternalTexture(){var e;(e=this._renderTarget)===null||e===void 0||e.releaseTextures(),this._texture=null}dispose(){var e;this.onResizeObservable.clear(),this.onClearObservable.clear(),this.onAfterRenderObservable.clear(),this.onAfterUnbindObservable.clear(),this.onBeforeBindObservable.clear(),this.onBeforeRenderObservable.clear(),this._postProcessManager&&(this._postProcessManager.dispose(),this._postProcessManager=null),this._prePassRenderTarget&&this._prePassRenderTarget.dispose(),this._releaseRenderPassId(),this.clearPostProcesses(!0),this._resizeObserver&&(this.getScene().getEngine().onResizeObservable.remove(this._resizeObserver),this._resizeObserver=null),this.renderList=null;const t=this.getScene();if(!t)return;let i=t.customRenderTargets.indexOf(this);i>=0&&t.customRenderTargets.splice(i,1);for(const r of t.cameras)i=r.customRenderTargets.indexOf(this),i>=0&&r.customRenderTargets.splice(i,1);(e=this._renderTarget)===null||e===void 0||e.dispose(),this._renderTarget=null,this._texture=null,super.dispose()}_rebuild(){this.refreshRate===Le.REFRESHRATE_RENDER_ONCE&&(this.refreshRate=Le.REFRESHRATE_RENDER_ONCE),this._postProcessManager&&this._postProcessManager._rebuild()}freeRenderingGroups(){this._renderingManager&&this._renderingManager.freeRenderingGroups()}getViewCount(){return 1}}Le.REFRESHRATE_RENDER_ONCE=0;Le.REFRESHRATE_RENDER_ONEVERYFRAME=1;Le.REFRESHRATE_RENDER_ONEVERYTWOFRAMES=2;A._CreateRenderTargetTexture=(h,e,t,i,r)=>new Le(h,e,t,i);const Ar="passCubePixelShader",Tr=`varying vec2 vUV;
uniform samplerCube textureSampler;
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) 
{
vec2 uv=vUV*2.0-1.0;
#ifdef POSITIVEX
gl_FragColor=textureCube(textureSampler,vec3(1.001,uv.y,uv.x));
#endif
#ifdef NEGATIVEX
gl_FragColor=textureCube(textureSampler,vec3(-1.001,uv.y,uv.x));
#endif
#ifdef POSITIVEY
gl_FragColor=textureCube(textureSampler,vec3(uv.y,1.001,uv.x));
#endif
#ifdef NEGATIVEY
gl_FragColor=textureCube(textureSampler,vec3(uv.y,-1.001,uv.x));
#endif
#ifdef POSITIVEZ
gl_FragColor=textureCube(textureSampler,vec3(uv,1.001));
#endif
#ifdef NEGATIVEZ
gl_FragColor=textureCube(textureSampler,vec3(uv,-1.001));
#endif
}`;x.ShadersStore[Ar]=Tr;class gt extends j{getClassName(){return"PassPostProcess"}constructor(e,t,i=null,r,n,s,a=0,o=!1){super(e,"pass",null,null,t,i,r,n,s,void 0,a,void 0,null,o)}static _Parse(e,t,i,r){return ae.Parse(()=>new gt(e.name,e.options,t,e.renderTargetSamplingMode,e._engine,e.reusable),e,i,r)}}tt("BABYLON.PassPostProcess",gt);q._RescalePostProcessFactory=h=>new gt("rescale",1,null,2,h,!1,0);function vr(h,e,t,i,r,n){const s=e.getEngine();return e.isReady=!1,r=r??e.samplingMode,i=i??e.type,n=n??e.format,i===-1&&(i=0),new Promise(a=>{const o=new j("postprocess",h,null,null,1,null,r,s,!1,void 0,i,void 0,null,!1,n);o.externalTextureSamplerBinding=!0;const l=s.createRenderTargetTexture({width:e.width,height:e.height},{generateDepthBuffer:!1,generateMipMaps:!1,generateStencilBuffer:!1,samplingMode:r,type:i,format:n});o.getEffect().executeWhenCompiled(()=>{o.onApply=c=>{c._bindTexture("textureSampler",e),c.setFloat2("scale",1,1)},t.postProcessManager.directRender([o],l,!0),s.restoreDefaultFramebuffer(),s._releaseTexture(e),o&&o.dispose(),l._swapAndDie(e),e.type=i,e.format=5,e.isReady=!0,a(e)})})}class Xt{static ExpandRGBDTexture(e){const t=e._texture;if(!t||!e.isRGBD)return;const i=t.getEngine(),r=i.getCaps(),n=t.isReady;let s=!1;r.textureHalfFloatRender&&r.textureHalfFloatLinearFiltering?(s=!0,t.type=2):r.textureFloatRender&&r.textureFloatLinearFiltering&&(s=!0,t.type=1),s&&(t.isReady=!1,t._isRGBD=!1,t.invertY=!1);const a=()=>{if(s){const o=new j("rgbdDecode","rgbdDecode",null,null,1,null,3,i,!1,void 0,t.type,void 0,null,!1);o.externalTextureSamplerBinding=!0;const l=i.createRenderTargetTexture(t.width,{generateDepthBuffer:!1,generateMipMaps:!1,generateStencilBuffer:!1,samplingMode:t.samplingMode,type:t.type,format:5});o.getEffect().executeWhenCompiled(()=>{o.onApply=c=>{c._bindTexture("textureSampler",t),c.setFloat2("scale",1,1)},e.getScene().postProcessManager.directRender([o],l,!0),i.restoreDefaultFramebuffer(),i._releaseTexture(t),o&&o.dispose(),l._swapAndDie(t),t.isReady=!0})}};n?a():e.onLoadObservable.addOnce(a)}static EncodeTextureToRGBD(e,t,i=0){return vr("rgbdEncode",e,t,i,1,5)}}const Sr="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAgAElEQVR42u29yY5tWXIlZnbuiSaTbZFUkZRKrCKhElASQA0EoQABgn6hJvoXzfUP+gP9hWb6Bg00IgRoQJaKqUxmZmTEe8/v0uB2u7Fm2T7HIyIrnz88uPvt3f2a2WrMbOvf/u3PvvzP/sUf/N6//i8vf/lv/3v5H//d//Sb//Uq/5u8yf8hV/m/5Cp/L1f5hVzlG7nKJ7mKyJuIXN/hPwqXI/g++zq6rPI5u8z+WqfLre+zy7PrVv9L8brsMiGvk8XLmM/sdfHXal4e3ad6GXPdyu2ij8u/+uv/5cuf/OSLfdtEfvUr+dnf/d0X//t3H/7bf/hP//N/928h/0Yg/4VA/kogfyGQP5Wr/IFAvhbIlwK5CGQTPP+9z5uPeePJSW+yo2+s/GtN30Rnv1E+f5zxof9R/lSXv/nr//mrr3+i+5dfyX7ZZQP07Tffys//8R/l/9TtX7790T/7r/8G8pdy+/8XAvnnAvkzgfwzgfyxQP5AIL8vkJ8K5KsmMVzu1U7p5PA5AXxOAJ8TwPf7sX/51ZeXfcemqnp9w/W77/S7X/6T/vzf/7383RWCX3/z05/9i3/13/0PX//eX/2FyP8tIv+PiPy9iPy/IvIzEfm5iPxCRH4lIt/c/393//9BRD6KyKf7f488fP74/PH544dJAF9cLl98IZfLBZtuqterXr/7Dt9982v95S9+Lv+gF/3i7Spv/8lf/vnf/vGf/dF/JfKnIvLnIvLvReQ/NEngn0TklyLy6/v/34jIt00iGJOBlxAsdvv54/PH5493SQCXy9t2ueh2ueimKorrFbjq9eNH+fDtb+TXv/ol/vHyhX4Fxfbx7euPf/Lnf/PfiPyeiPyhiPxxkwB+fk8AvxzQgJcIrGTwFsiAEXH4/PH54/PHUgLY7whgu2C7bLqpQgHB2xvePn6SDx8+6G9+84384vKF/IPu8iVU9Y/+7C/+jWxffiHytYj8VER+X0T+oEEBvxqQwCMJeIngo5EI3goIwVMIPn98/vj8ESaAbbtu2ybbvl8u2ybbdtluSECA65u8ffqIDx8+6G++/VZ/efkV/sO261dQXP7wT/7kX8vl8qXIFyLylbySwe/dE0CLAr65B/9vGn0gQwRMMqgmhM/J4fPH548eAezbZd/lsm3YtssNAYiqiogAAkCvb5/k46cP8u2HD/rrb7+R/2/b9Wu9yJe//8d/9Ney6S5yEZFdRL68/38khG/uKOCnAwoYkcCoEXwkEgGDDq7CeQfyOTl8/vhd1QCum26ybZtu2yabbrKpQvXue1yvuF6v+vbpTT5+/CDffviAX1++1V9sO77WXb/66R/+4V/dgkbllQi+aBLBV/dE8LWRALwkYCWCNyMZXElkwLTMeMkga/P4/PH547ccAVwuctkvdxSw6bbdtYDbTfSZBN7e8PHTR/3u4wf55vKd/nL7DX6mu3791U9//5+/gkNFZGuSgZUQvnKowKgLWLTAQgRtEniTuEfwaELw0MJvf3LQzynud+53uG+X6y3gN9kul+2y6XVT1U27JCDAFVc8ksAn/e7jR/nN5YP+avtWfq6Xy9f7Vz/9w1dgRYngiyYhfNkkgzYBWHTg44AEMmqQUYQKOmDaiCIa8TmsfmzB+DnZDQjgcpGLbti2y3bZHjRAdRMVvb/dcYU8kcDbPQlsH/CrbddfbF98+RPZfvLFnAQeieCRDC5DMvju/vmD4JkEvjRQgKULeGggowdHkAHTYxihg89vu88I5UeGAPSOAFTlrgPopiqbKPSmCKreUoAAkCcSePukHz590m8vH+WbD9/JP335k6/+tA86KxFchv8jMvhiogE4JQm8XhfKqOAqx5qRPyeGzx8/cgSwbXcUoLJtim27C4Oi93+4v6VxQwKAvl2v+Hj9pB8+fZJvt4/yzfbF9lPdv/wJnsE2BogmyeCRED40tGFvksIXiSbgiYSRRpDNDZ6BDI6ghM+J4fPHeyKAO+zX7cb9t4tedMMNAQju5V+f1uAtBSiu1zsduMrHy5t8ePsk3376KN98sX/xE5FPAnm7/782o0DiUINXMkCXCB7/P94/e87AWUmARQWVvgMuKej9t1RLBp+Tw+ePgwngsutFFdu26WXbbl+rSvdfbnqAiuA23QcBgCugV1zl7e1NPm5v+LC96XfbJ/1W9y++fgXjA3bDYXV+MuhRwSPwL3JLMFYC+HS/LU8HYrGwIhwyNOF12SvgM4SgztdifP85MXz+KGsA2C6X7aJ6bXSAOwrY5OYIqGy3d5uq4P5GhABXuV6veLvRAf10fZMPb2/y3b7vX7+g+9v98/WOBq7GG7RNAlYy+Dgkhhb+Xxp0sE8IAC4SGAP/TbgVJK/PoJPBnAiwPKxsXfbbnRg+i3s/JAK4Q/4b9NfLtomBAqCickMBjy7BuywAUVyv8na94tMjCVzf9KNcLl/0SeA6oAEYb1i9g+FtSALb/bKL8/+t+wxXFMyswqiHoK4ToIgKqslgpg1qUC0QoYbvJZg/B/q5v4szHmPX7YEAsD0CX25OwEUVm9xag1+agKg+nxQArnKjAtDr9U0+Xd/k4/UqH7bL5YsewrcBBiMJZPRAp6TwQgWfjM9vgRbgUYGL8AvLWH2gqhesCokeUmCSwPsnhs8fP2YNYMO2XeSmAWxy2VQaXeDmDIhApf33rD4PTUCuV+DtCn27XuXT5ir8VmCJ2G5BpBM8/r/dEcJb8/0lEQMtJHA5TAlqNuLRhJChhEpSqFabH3di+G1AGj+W1/dyAR4IYJNNnuLf6+tWC9CHHiAtFhAIFLjK2/Uqn65X+SS67aK+3QeTDoy/IG2ogQ7fb/dAtz5vBgrYGqrwNtCHsVfgIvwK07OTQBURVNCBFpKCOjqCHn5L/67TgTN+fpySAC56nwSUi256kXsSuFGAVyLoUIDo8/Pz7fdoErr/v17lk162HbgHvFpIYDfoAJJfW4sGPjkU4VNAF8ZEcLmLhdc7kljdY1y1Dq9yLiI4IiRqcLujb138KIPn80ejATwRwIbtBvn1cqv+2J78/5EI5N4cJA8qIPcmwRsKAHDF9WYP6mV7VmrgLuTpxYTcMEW0LAmoQxFsuvAI8tv/a/C5fV2ZMMiKg++FCM7RDPRu8ebWY7VG6VJi+Bzk35MI2LsAckMAgwvQ0gC5DQjd3ABg2HQLAPpEAlZ1Bu7VV7MGHDFRAbo3VKsTbAY9sPWC/uvx86gBbDK3D1eEQS8pbAeSgSwmhepnJb6uBv/o/PzHLzxWA/X7TH77De5j6AGQi6o0CUGfCOD2X7cXAlCFQABtEsGLDtxuOyQB2UTQBKZe5GUPXgkUYCUAbZJRhBDeuq8xBf+bgwbehDm+BFQi2IJksOocvA8ysIMfxluVcRsY/eB3JzH8GFDAXQO48X/dcIf9jyDHptIigDsFkEe066tBSETQUYF7ElDdYEBytN4+rk9UcBPfrKaZqFHWcw3i4J8/X4ev2//bSXqAhwTay6OEIPLD2Ipt8OtAGzxkwLw9WVFRjTc/qC6H3+YK/b1oAA0KuOizHfieCLaHHiAb5NYTIC9EMEbZrVEQt1xwhVy1UfBh8PUOquMizwaap3tQXfY5B//tea/NZdfhsvbz+PURQTDSGWB87VX/7WSd4KxjUqrIgE0IUkoKGnhIvwvawpGf6eECXJ7tv4qbA7DJgwpsKthEmmYgfaAAffYF3HLxo0vwNjJ0SwRWMG4db4eh1gPNm18vQ+us/0eGmxDemu/fnM/X4evq/8342ksGHgLY5LyT/zg0wM8lcMjgGFXwqIOVFJBQw99eCvF9oZL9Mfl3QwAvIXDsBRC9R+fz8x0FPBLB0xJEpwUobrfAkARgIAF41h3wQgP6QAmX5E/7eI43IxGwwf/moIkRyWRJQIPgt9CA9b39nzt4bYUWjAlCjWDPgv8IEjgLJfzuaAsrv9VdVG4OwOXW/fdoA35qAdL0BDwvf6AAUVHd8LIEu94A3K+Q+2YxaB84MOH62P//qoo38fCRDERE2zf0JfmDa+MieElAjcDPKz+mRKCOtdgGtXaBjgNJ4H2owSpNeAW/rRH4CaHSpMwnBYYycjgSJwfie9CR6mPu20Uv8kABF206AvXlBMiIBPSlB9wjBW1fwEuSb94296VCqgMaGCt/G1BbExi3IG+r3a3J6P48Gv/J0YmEYoiGY7V/SxwFCwGoE/xa0AJ0CEiV9QPCJb1OJ5F1VTjEY2/MO9AEJvj1BJTQpqLfTlGwjABuzT962e4IoKnyrdh3+/6mzDVJ4PHOxj0JqGKoy20+wBMN6D1gLWi9NQHfVP5MEEPzjGYy8BMAOnTAJgEr8HUIejRo5xrA5xkR5AngmiSHs+zDDAmMgWzTg55GSJEmHE8IvWPAoYTfhWak/Wn/bQ0CGLSAjv83SUEfKp5q24LXuQICpzrjrgWoza8xVE00CQCORdhMJuTUT/rjuls0gO4Iby8BIEgK6gS7BsGuTtDrScH/fR68biUHNVGBnxjeNyHEvQe/ve3LZQqgG3rof6cEclsNflG9J4KtaQ8WHcVBHS1BtHE4QP9OBMS98mpbKTeDW7dJwRsnHpMBTFJpV4I+b0kY/NqInVFSyBLANbnMSgBM8F+Fqfxq/h657/Up+GaBnwV9hRqc9bZ/vA6vu+T9E8KPJWns94UfTeCj2QXwCHS9dNL8Xf3Ho/rfewSeFODGDV69AU0y6NFAE1DP3qK++rdB7/1HRxf86gT376zOr99T/h/ioBiXWQkgQgVeIrCC/WomhDmQK+hASI2ARQZKooHMLdCJwGEBBXC3+uERwg+VOHZ9ioAt9H80AI06wGgJ3nQA3BoCut6AhxYwgcPOFnxuFnrphk+NIKIGrWPQtgz3b0i7Y6D5rs1GKqTop0nQX52vmQC4BkjA+r4a7Kx9WLENGeegkhSETBCrNXIMdi/444Rw1n6E96ry7OPuj8UfLxtQ78NA2iSBbg7gIiIbdDLsb5agPhLC3RkYKv8NDbS2YGsatNRAG2oQwf9ZIOydgy1MAzBkAw8UwEEIDzSAqdPQ6za0PkeJAMH3Z0wXniUSZoHvBXU2mcjQgv56TedIKglCpIoQfgwCIjOytd8WgN0bfxoR8Fn9Gx0Aj5Zgq0lIZbsH/ibSJoFnS+C98g9ooHEELI3gliy25yONIiE6pb0NfBlyNEYyENoodkKwgl6I6s8kARgJ4ZoEfuYWHLEJa0LhSBXm7kImGeSfVdoJ1DO2G7WXsehAptupSOoyrCSF904k+6vt98X/ZcM98Hsd4JYIXhQAIg3/f9AAUYhsLQKAtkHVBnzjCKhOoYl2ym+iBtvzDzQ2DLXJ4PUmbJHAVnBQX4jkxfvHhNDqAdHXGQJgv0aSDGItgOseHIU+K9hXnIJzkoGlEKzNHagTdJ6VWEUH4iCKH4fd2AwDPaYBm4Wgng4gQ9V/CoGiuNmD04AQtNGMGzSAAQ2I2pzfogY9LRh7BrbOh4+D30sAencljFu2CUFrwY8UAWRfWwGvVOVfbx2uIILM0pwDv082dUTw8hYs8L+uIWiHGpWgClnAa1lMPJogovvvbePPs/q3Xr++kgCsfgB5oQF9WYKPJqEn6G+OE3i5AqouF59FQOmahQC8rlPLj38kg1c2f30vw+XaoIX24/pMGIgSBoZqoH3wo0sIIGlA9PWcCPrAtpPB8eBf6x1o6cHra+2+tpIFP4PgBfxZtZUJfo4qxELT948D9ucK8Mt9+ccjIQw6QJcEbrD/1g340ATuDgDkFfx6twSf1f9xvuBECYxq/7ythQQGm+5JDx6Brw4CkMGT3wgscCUoQ4sU2t6DR2ciBjTgtcpenQoZVX9NuL4Owc+dVaDursYVkVALX+shjSBKBuvCYDUZjE5BdNkxdHAUBexyHwB6NP7Iyw7sxUDViwge1t+mz8B/LAvVx/c3PeBBCToB8IUGOgqA3iV4yUg6UAOxaUFHDx6CYS8SorMOue0CCJGAf5YfRhoAI+A1CvwxqNkAY5yAIx2EQmkFfeWOXi+nEdSQQA0ZHMEItiagJArQxDXIrj8nCfQi4HZPAttrIahso9oPQ/2/JwV5JQU8zw+7I4D7/sBn4EO6rjw0FR+i3Z9fHtahzsFvJgM0X+tmVH5vaYiNDGAigewAz+gyNLThnjCURQFR1b9d3lZvnVqmj9mEPDKIUIC4KCCjBXywS4N+otp/Hk3QVthOkwEKlV9PQwXjT7s/zwF4Qf9toAAzFdjuaEB6S7D1//U5FIQu2MevO0rQQH8ZmoXE6B/IkgE60XCjVoq8gt2iCG0S8L5GdxkM1cGsfsCMArSCAnrr7dzAZxCEEpepvB8tqHJ/q+bmJGGts/AcAXFOMMeTwC7Pw0B6CtCtA2vWgonqBQJFSwH0JQK29OB2kvgj2HHXAoyeAIsCQO0kMNECAhFMqCBf8mElAkyBbX1tJQP2RJ/ha0gpAfS9l+/5n00CkrQpq0MZbOdAuxmMvHswog62jZj7BnYQe19b14kxNq2D/ehX/p68HEcF+x3yP7z/V/A/q/5DA3i5A/dzA5pdgbKp3v3/wQF4Bb70WkCTHGRAA6+KL0bFl6FJaFw0ImZwm6igSwbbwPn9RMBWf3sN2JgA/BVh/Rg0kQBgePf6HglAHLFQwqQQOwDjbdVxNZjR4iM6Qa3WxwvNxh0JFb3g/WzFQQS8b/ttKcDWoABtUMAd8j9hf0MB2uDXhzX4CHj03L9DBU3Qjz0C0l4mLSLQPicOOwZoVCB6P6dA7nDbGkVuxcNr8PU2JQO4wX5trEqmccZaHU4q8oCDFOpzAnOwqyMIMktNNNAHouDGxO37DgArQZzlmp/14W1QlqHTMaIIx7SCx0+5yza7AKJ3IXBrNAHVDcMZAU/BT/vgv/ULPOA+XiLggAREDF2g0ci6xNDRglegd7P7TWWH5oJfayliEg7bScQRBVgI4Ookg/F6rvpLWP29swREqA3CaG8/FpKqS8DTAV4TiBqIqtxfzaQRLys5I0XEFIFrPbZRQb+16Fgi2LvJv8EFUPW1gGfQv1T/F/d/HBnccP7rAwnIIyHI4ArgWeGbU4eHy6Tx/EeTZIb5bo/BsMBjmjBE08f/RB0PHYBd9eVRAGY7cHRwiBf8WeCPHY1bgBTa9xKTELzEkQX9CPtl0gJiqsAmCT7I8xbjivh3JGFI+D2nBcSJQJ8agDX+O9iBL7UfG4bzAkcaICrbtYHz1ycSmGmAjJfL3CMgT3tQpmrfB7gxSzC1DnvdhQMieG47u75+kTouKNkM8c/+vq/Q7ZYjO/hhVvRq8F/9gGfhP8aqE9EIdR6LTwJ1h0BItyDqB8iFwuNqASscRnYioxOg9ApvnYA35f8e9Ohbfe8J4rknoFkO0lmA2gmAG0YK0DkB4ieEjiLoMD8wBzom27ANZkzIoU8EMHk/uo1mzeVoEoRWKn8L/62EYAX/lsB7D/LXg74uAMr9oGivJ0CNJCGD6i9DhZdQF+gtOp4S+NODRzsDVbhdgv4BqTMNyIL9SCKwL9/FGPp5oQKxIf8A/UX6r231H7YIqLML0Ae2GtrADOvRQH5b/MPE9dt9BGLNG8jVTAQvIaK5TtvvvWQgDvyXIClUA78S9Nfg7VtIBlO7cbsEYkQDMot+ygQ7QwmOawTHnAM2XUSnJvPIYRYMmYPS+sv3J+cfP3d04JYIXsF/EwMbBKB9Q9AY+BiSwFj9mzrSXmcJhFPVHySTbgHJCPvRQ/z7G/SVUETsg0ZF+i3CRoCjhf7y1A9mOiDD7TwdwEoEXjLwAv+avLE2B7Jnb+OqDpBoAchoQJskxKnss0vu7Q2YhcDv4ySeLOg9GsCKiUIihP7yfW7zbTsBh0TQfN0iAWn9f72Z56/Ax9P7j5OAH/Qvv3/QxKfk0DgDuP+R3USg3bzBC7bO/QT9Eeh9QvDPG7glBQzJwK740lAFFgFk8P88CqDGAa223YckWYhr+c0BPdwetl2ocnsfzePAWcVnnAIp6gDVhDLyfV4nqFEDPxHsbWD3k4BDkN+pARqKMLYBPzYEvxp9xmCHQQdgWH/9EtH2TIFpu3AH/cdGydv1j0TQbRrq+D/mLcX3ZACZ15bF378CG0My6Kq/zoGOQwhASDFwFbxyNGBuSxbCEhQ/uEPe/6gAERWQObCVVfjPpQX+rexxYhYFxIkgpgX7Y/vPs+Pvxf9vwt8kAs7i32t3QCP+3SPaTwIytQXP38u0PESm+YER+o9B3vr8mETAUfDrEkPI80ck0FZ0dXh9U+HRbhey0cAc2H7A4y4egoD6y8JfkBiigLdFP8v2W00E8deT2IeAKujZ/QAVKpAtKI20gLWksHedfgPcb+0+NEHefd9vB9rayi8h7J91gBbaw20MsnWAF5xHkyDUCOoXp+yrOwwxcKj0aL6fFppaaKDv6OpHR5sgx5BAlK/+fYhuP1D196o8e7lFBaKqv5YIMnFQpd0FGVR35RJCnCDaABaXBtgbiSwtICMtalKC+1JQ6bx/PLcDPQL91QFodQNKpwOgF/9eqcBxBBqRcKAAVk+ArQOMx1RYGgB6naDhlK+uQQwJYx4meQbxtNnYQwMjt/d4f3M9ZE4UOld1LAh99fbfzOxiEkKFCkTJIUIMUeVnJ/9sDt8/e1NEJOi9oVHDGYhgnSLss9DX2IAqw1zALUncKcDr0FB5NP+0cBQNrEezDiyiADPkt9qGpwoPdL0AGPx/NOKeyf3b9WJNdfcFv6bKd2cLMJVfJ6Y3B6wB9WFUfWWEwKMfGiQL+3bz9XGQz2EHKhF41GCtZyDi/gUCsNhYoAr3UNJ58YidHKqnMb/6AB5J4N73/4L+t7mAkeeP3P+1LNSB/l0SkMEd8DcEuUlguEw6t2AU/PCE/q++Akw6QFf1u6SBrj1ZnnhG50AfkoGIdf7gJv1KcSfgzWWkQ9U33Z3tHXYASKJ9e/YhU90rvD+q9Ej69/wxYJVs506Eg/r3DkMDzEdDBRGgcZay49XihLA30P+l8N+hf1f57/0AoxbQbwYaan/rBMirE9Dk+sBzTkC8JNDEUlv5McB8PP19Y01Gayep+hC/2zvQ/2HGLAurowsNGlA1cnqGGzeH5weiYLZm7h3QQC4O2tXdhvMMk1ZS5ebpgI8eMrPvPGkwaxayk8Yc6PMOBPEdC1XZ+2UfbfOPtxLMQQAG9BcZFoF0gp/RKjxe7+oAw9T7ZPWhgedodgz0gf5KBtrtIZhQAZpAV1Bi36w6t98qVfH7hqGI318lLCjLCUFlxRHwqYEH9a2qb4XjWvDT7kBwfbZA5P0+PNuRuW1yf4yNQH3zzwv6b70QOJ0G9OT/dhoYRUGT15uQH/71MjQLtQlxfDuiCXrtM+SkA+icQdH6sU/xz7Ze7FlubV4TpoTQ2osdpaEjtqADmEU7OkBEFoLeC3IWFFeswJXKXzkboNL+wzcFHU8hTGKIboO7CLi1/P+5F+gydQhuvRbwEgxvtACmANikhLTbj0gCYk8KdlYgmj+4Ymaod7TwahwadICuX0Cm2fE5iNHPK0x/CDV66Kyg1MnqjNFBnhBoLQCgUULfaVe5nq/6EQWY67bXCszUb+7232fVPz51iGB12owK9peyP1T4raMFF/OEYJP792mgXYfZ04GHMAhBkCSmSj+dKqRPgVFGHbpLEGMiGFeQWfSgrY52VxaeDUPSNJI0P7NoisG729HHl78z6hxfs9rV3m4JjgM/lsui2qmThjCfDFSb+I9vwUqG5wwL55U7C+6ot8B+7N2o6r3q37T9trfpjgmTvv7PSQATLLeRAOZhIJHBQfDQQJPBdUwEbVW3+L08EcEE/9G4ANrCeWcnPKRHDupbNynMx5AA9IRYLmrc/YLSiD5EaEBS/s/TgnU9ILcH19n+CpHwegLejx7Mn/d25fdN+e9U/1vgb7bqf08MOtf8EXxaoh+GY8L6gDfhvs4i6HQ7seYI2sv1GchdMsBIG3xlvxcCRzdgCPTn+6q/TW00VE8Q9FaFv+R2VlOM1vm/hhjhDCdgNflVKME5B47I9xT8z0YgPAJ8myb/LqHy36j/Mwqw9AALxuO1JVjiuQAYLcFzIhiEPe05fk8tRjGw7yWQbsfuLAT2VqOId1osnr0F49VM8INACPHDoBz4B5mqqSnUgyh3ArjXxfQH5BbgUS8gP7aU+w0zHD9GGD0CGHf+P1p/DeivlhU4BbxR9a2kYFR58YaDZCUR2P0DMmgED2eg77puegy6PgDphEB0CwlG/i9d+/Hs34pBEQrBn0W51mqGnJAk3ACCHeiqkQ1XFQA5AlKH7Lk8yJKWY3/nym14h2C3JvxeMwD9ZVMz0BPMi1n1RbKl1cYhIVblF3G0ATsRiCMUvoK9//OgcwYMoe+ZKOLlC6/Xk50br9NFz9fanqA8UIYSpCwlBO4kHc4WLLBfBHVaKwKgLQjmP4Un61Vq+3s7Bsyi0WztmLjJwJwFeE0I2vD/1Q6MVwefxfUf32skCPbCnxQqf+QMPEUDHZ7vGeyj020JgkPXXwsldA7SYR1RE3h94NvNtugswcgxXEkIcBPCGZ1rmrgDC0A4K88nm2fn/eTnpQtWyZfybRoK8Dro4zYDIMGsf7saTBzvX0SMbkAD6o9CYbsfMK38cJKD9l2FJt9/VGs0h5Gib33pxMKWNsigFUh3G2un+/N1WUglI/EEx8fq27vUNnwsiOoKecL7kQS8VnWAGCFUgn6dBtQhv40CmIYggwK0uwDHRGAuBXVdfwzHUjZzATLMAoyJ4FmBhzaWBlrHld9CCWpPHRqofBqMReMGTJ78q9rDes1Tv7/0m0v0AFHXNR6P6g30SHivin7V1BOhh3iWPwvps/yE836L2XiwnUT8x2iHgfqhnwn667QHEE8oLQjEvtEW7GYBZDrDVkwNIO4G5GiBDf9fGoFM6n+vbEtzXwP6u9AduaWnGYSLAlVdl/AU+ikrSeEIKgwdaZ4AACAASURBVKj4/wtgHcHtdO2nWKcBkPfxcvnNQvsj2Me9f02r76T8q0IBn9OLKfz1HX8yVXQYGoAB/2UeBQ5/5kCL6+H/OGGoRnLSwdd3oH8r7KkGTbgIxEwVWvnF8KOpHnyzfF9Jod5Px+IF1h8owyitDw/XEgRb5bPqbt1uvn7qBIQ16vtS/u+DP3cR7CH0WWJgd5mTJKYgNzoGjQrfvu99NDBC+bnyW1x/qhTatv2OaMKgJWPvv5kwnMgxHYGFRtJW8VMl3uP+MgoqSZyWFKr7+KIDw1d6+IiOgZI4+d5iYL3imzbgyO+tph9t2oSBxOM3ugHtPoFZ1LM0hF4kXNEBssvVgPdjdXZWK7uKvyS3q1Xb1WQwtVDqSUggq+Vw3t56JA2cz7PXOwGNW1ecwxPhfe3QEUsDsFaAz8jg0nf+iZMAHNg/XSazDuC18Iq1HBRrOsAQ8NLB+16g614jmuSgs3bROxE55D+WDDQNA4ivdMJ9M1b309UqknaDU8ObV9/PwmMPATvTMAxpABLBzugUtV9bLdhNDQA+7B9tQJ06/7QNDHGSwtgZOCIA47InIoDdROQGtt0U1HI3GaoUnCnC/rzBMQJteN17+VaAzYNA7e+PFqHQUyXPUYB7iQYa5ZFjq1Zqpx8Uqu/XT7+6BWC1Xaj0GlBIwMoHu7UzcI/6/Acb8KIq+hzmGWmAYnADrIpvKP7TZeLaf0LAeQkGgebbq9FToI44p654F47tekKkI0L5PQNZPsDwPBpy/ni+wKMN76Vav4+2cFZFf8+JwAraMt0DFB7beA/u4Zz/a+RXx0M/ct4/jwaNAS8G17eSwmta0Fhx0VRxJkHMivso+onMXr+YwdWKbgioy1jp4x4AzIKg5lEA7wvHEYCRmdx11TAuT6lDLVl4KvXkAET9P4RT8H2u+lg9EPQIpw+/NpJ7RwE8HaDv/Mu4f3OdNkq/EfAiEiOANjEALvcWL9gfFV4NZbgbQc6qPky4Pm35QZxtH1f4j+P/jXuaYPcWwIEH/fmEPBoAO4m4LGxV3txOQqDU+dXgey+UwSzuqP++uImO/u/6ogCb7wTc1n61sL+vZi87rxnrNas+giTg6QLzaUCjIp6JfhwtGI7AjBBB9JjDY4ePYVR6ZPgN4owVv6Q2N5hhVHwNeYrM+w6dN6K1sMHZm/Ce7bHe3dzKr1xw1w4JrSQMZtgnoQHlr18fzunAszD4qurNUg/TDqzx/lfCaO6t4tACMUQ6P6htWjDPC1hCoZ8kpODzJ70MUR9AODcgwyqyPhmE+wfHYB/hvSqt6qeXUShhXH+d9SR8DzrDaZZdpSp/HxqLMQuATgDU/qDPRgOIeT8cvz/h/XC6BtE7ACLOWPE0KIS4UUjmZaJ2grBphiWgT41BUVWZfP3AnEIT6OrfoF122l2rMycBoU5i/OXoUZ4/aglsXwLzHNU++FVF3qikOj5HXm2PBitT1WuvJRAB+6O//W0/PY8vQH5IrAsMs/WuVmAdHBrQgrbOxJShXwRSsu08h8JMBpo0+aDTALwV4tbswgzHrftG/dJKIAQb5h9KCssWIMeto+GYqG12/HWGjx8kzqNJaa0noMWOr2KwW01AMwJoNvhMQda2/RKQP/3ecABM3g9uD6BY68Ntz9+nDOMb5iV+hIE+dP/Zs/wwJhJ9mgBnohBuStABUXjugF3hkXF9ZZJAjefKdHZCc389LoStKvIl7QIEb1d9RyciQgFDI9Cjyccc/23Aam7/PZJBhgDgin5CtQvbCzX8ip9YgIFtOAt+w0owp/hOiCWgEGbVHuYjRigPGR/YOnEoqPDoV5z5YqB3mRq2ox5ICmSSgAP1Ne+XV2NE+/vuFbCTRADxtS70VRBCjgBk2OyDUQiUgfl77b7DwaHm2rAZ7osRSOOUoHgKfNBSLI767+oDYrfwZvqChSpGfj3pFwZFsCJg2jeIQQBUiyI4WgD68ww4qO8khuWkkIuDrxWv2nv+UTBpJYiPd0KemTA8qqFiuUF1jWS3BoG6pADJq751JqBI0wvAVPyMQvjcX1zbELltKK+zBiXRFiRxG+b7q3M9xuLdzR8g0gCGNzSM5gNYfqGO9CBT8OHct6oB3KsSDBisUnwsFuISQaRHxDSv0vptt2oeLHMERfRn/FG/Cx01EpgIQG8LP+/i37PKw53xn6sYCM4/JwSRrCnIeB1ZkLsawDhaPKv/njU3wnZ/dBdGE8+YTHSG8+ofGgIjsC19YnwdM/KAnTSsqj6ig7uGgIPw3nYFzhhIIvriAxFP9CQd4HSlnzgxONIdrE7A8ZDPx9fjib8ifgegNIliRgdx95+E1T7+3nQVNNhEzDgGA3T2rEDLduwtPpuuouPcs8swwXFjdTaMKt+jA5gUAQPcf95KJQxYU0cYxEDvsBSmYuukp7AwnqniC9Afa5z8vboI68ImT0t26CvwBzSggkj447r9IojvCn7U92J/Hw0QSdwZKNNjxPCfSxRqnATkdwpOwh88oc4J8KTSm/wdbZjrc+4iFP8YO0/5JJDCfaijK5xVXevqfg6zGRrQf83chvX4aRfAE//6vv5+6490U4ADdO7QgM/5bcHP/n4OtCQhBEFeDWSvos8DPq8/IwzLzjpa8/U6MMSkBklDm8e0mn3QIY7XG1Om8wzN48y7HwhOK3P0/ZwUQHHv4psbdoVeb9VlAjChBCdtDDpOKTh9ZfcagOYq31RFjN4/gwBYzp8lAwYNwBELhZoxECeZxMlAzWGdCRV0fQWGHo8+8Kx+AAxnCIzowAxy9KvNepWfsfp4RR9kUrD88CPVTuXRybhqqTHcnxEGndsgub1Gdug8yz9fHt3Hpl57x/mfCOC29FOSQ7/noAZR5W3Ob24UMpuPYAYiQrQgk1gnFoUIKr4vKFpV15pHUJO3Y5rfH3UFHU4bGkU+NKJ9f2hJyOMxDBDpjAgwiYqvk5TqNl9EH2Arb6fA3yaA4cBtPWewhkEcIQJBlGzYp6zRmr1v+e3Fv27xpzvyI44NGDkCIi7CGNV9Dw0M8NtHC2vUwHINumCGNG8erxOwtQINsW88Tlwdoc+F85nI559ngEDpt2F/Uu3hiXYrkN/pBFS26hYDAkFgErMK67y9mGBA3L5ore5izf8b3n805MOq/t7XU4WHv1DUF/5gugCSOAIW/59uMwl6CHWAib8bvfxWl9/rBGEMTTwDfG+ezEYG4yk6FvRPuPwE+wvc39IRjENWM+/cm5b0W4Pf4WuKUnw/vD6eDbB1ETs5vl77Dhnm/51g6wPWwQAqxnivgQaeS3gy/u/1H4hpTPrIgHAN0mSgXUX13YP5PMIuQAfBr/f70cdeE+QoCX3i8nFMLcAjInBoAIYqt1LhC1WdtvmSab28AYffaeivCB+ohdYQgfUa/WS4ToMsNLHLc9nnvPZLwn1/EefPVf+U/xvnCVSEQEkEQEnEQJO7S7RvYDxNeNYKrG7DKMhtsQ8cMmhgPKKKj+F7CiHYFR5KIIPxOmg5IVAtu3ACQSPh7CzUQOgAej5CWEkIe3vgxz0ROGO//qYfz/dnLT+ZxDr4QW0eNCJBorCFOVC312Ec2TiY5Bk0cAaQmiA1VH1MOwDHQ0kHdEDDf+2UTWhS4Z8diQMicLx8MLBfverLcP/jQzF0P8EJj5+NGK9RCz755S6F/f1+X/gxeP+Wsedv+vF8/54aSPJYFjIQd624MDz/UDLQnr8HU3ztKHRf8Qeno1vyAQJBaLcMtTV3cvgP56COCqd/QP9xLgBkH4BxO13n4hNUDtACC6G1S3zqooZ6Ba4lp/zcAFb7iERKQwQcF39IFJjdXECGADw0IE4gg674pYAnk4HoHPx54tD5daO5vxrugSkMjgiiqc7TVKAT6AT8R4ckbHEQCYR/IZBxJgA+XZjsR7vaoRpIxWqeqfXuGC2CxwudicwePEB1kNkaZCuwyF0DuKv/4sz9mzP/Qxdg3BDkBTMC8Q+loD6UGBzx0Kz6eAX/KArOQTlPHFoI4vVtf4rNuLrca9edRn4xBP7k8w+9AgZCgBfEUZWfEs8iFNZ3UO7TqmkjCO/rWdgco/yIqHcQWaC2EGTzgz5y/iXQAvyx3riyxxV/JeBriaGB9OrTA5g9/eokM+37GszqfA/UZk9iW5UnCtBqBl3XoNN6Ag/+zy6A5evPAp+TIFDn15gQw9rjrOzFX0s2JBVAxa/nP1a6AsNWYGjPNGPLTQgBsNUFvOA3Ht9o/rGDN0tWOCcxJGp+f7++kkP7PxcGv1+GjkaLt/fawpwwerQxBJNW4b+PJsYEgiAYYdEAGIlDNaAbRkIgK3ut0jKByp+8yz23X6GttmBmjwDvChgiYLP5V/zhH6/110sGcKo5CkggCngxnIPoPja0j2B+1BRkiYJiviaLJqghDI63G2nAgAxMCuDdnoD0wIQm+urMB3VuAwbBrFGgGgnhAFqg9+ujKsLxB3qGCQNEEtPinIQlAj4WgIw7/iXc9V/x/yUWFs2KH504bAh4aYWf4TrTLGTy9YbftyLeVOWNfYNyt/ji29mQnqMAltU3ioTtbX343yv/1u0YPUBz6zB702tQucnX0gWaFh6DgPdmhXaapGotw0SFz1qDiTMdd8h45HfcqCPRUhA3+NmKz1l9teCPaMd4urGaewRitNBDdahR5c3AfQmDCFT9vmtQEwqAYXX4XI2n23Z9B/Yb1FL+LWox6wHGbZSo6FR1LzyG+3hriSZvWT6jfXhl2cmQZJDrAbuYAqAHo1GA/EOgD8eGcU7A8eDvH4fQBuAhBL/Zp/vamPTrRENDGLTV/7E1WEPLDlP/PwzU4YhusIMUgfIPAr6Dhv5R4y2r8ldFwiFoYHnmr8TAHbhRQSZOctH598ZYhqt6wP7q/ouqe77RJxvzFYaji/z4vna4v5cUMDXqDAJ5ytktqtBDckyjvJg04hl16LB0xFfyMfD77PZjErGQRRjYIfSvoAXntks0ok8MsUC4KARWnYPlJBeIgLeFrUgDOHYCag0/XNAbWgRwQuLAsaQwIhC1g7+jCNKuT38JfnYSyTi+QQEwwHeT4/dWHYxJPxfOj5oAnRQqgU3YgGZSOaDyK3n/qkDYBKptzR3oD6B4fyRKjp2AzSl80YR/3P+/1vBjX18Jbu+YsrMRgbqPP8zrDLTAaupphfeZtyPs9BPztpLSBZjowF3woYRwBwOWaqbev15b7X4RWsiqYiY6ZkFEIoUwUA2OrkeEQE8HYNyD/rl3m88jCGgO/nPW3xy8x4Q/HBcM1dYg5q8N+B/SBSYhtD0EY1PRGLDoKIBHF3yLz4H/gSYQJRETgqeB2d4vC8L2NVnQn4PoVJJAcP0inahAfdXVI8CFszjRagCTtRdV7Sr895NBpRKXIT64RMFw/iw5eChhEvmmyUIH+k+Qu3cLzOAN6ILlFvgWnx3YWFDz0f38ze9GlfP6UQ3ojEY0gtqRIEbA5/WgQFhsEuIeL75uTzvqHktAWfj/OD6sQXssROcGiRgFn0QVkld7OznMDT7CJKzhMIqxW9B+LCOQdH4uyxIcE49VTSeLj0wKjzcp2oDXQA8YoDEGBLMW0BJw+eAxXejPV/IXd59/tp5rVyYXDw5BlRetSpQAcvgfOwVM8ObzBq/AQ2wX4lwkQV3vNhYFfn2LFgaoDU1ogqsfqGkJYmrj9Tr22KQwBLzbLuzDeA9yzyJjVRfwegWq0H+FThDPA6ZhZwX2M2Kh4waovCzAWJTzD/qY00c+6PM8coz08VNqglzx54LfHuTJK7z2rwX35ABLg1DzsZ7Qv7l/f2yXDlbf4C/irg0MJ0aCuD0wP74MrxfdFlX7tq+vtRdCpvt599EG9Yz3V+P+Oj/n4zLruZHcJ7oMt/MNp9eD6HEeFb6/TMfbWo85Pb79HJo8t3371/PuIAZqMvjPC34nVV6ZB4hEuA7AzA5cfU0y2n6ux89D/35/n2/vWY5Bf0qwf3tPLISO1Tap9qzFB6eap/beqI94NCCbGwgqOItY3CGl446CaQ8i2Q9g0AvmgJOnBoAA0gu17tsKtKS7D4udgCYERy2QIceCX/P7mBW+g/7D9S6Mn50CS0eAoQPDcBjopIA5+EcxEjLweRjXq0UbLIjcBxsGx2IZvlf0ATjz/6qypAmY7bhrk4ahsIis6ccXKHdueAfUgk+RWPCLh42c6zEeKyJpRTdRAOqBbl/Wq/uT+q+Fx3FoTIuCzc6+hN8j4veGjuAnhSE5gKnco3A3XwYlq2sq+lmP4yEOpqEoG0M+mGDYuYT0pKCFHgLHKt3T7T9p8GcWH+n1UwGa8X6kQt2x4CeqPexegT6o/Z4Cr313PHdgrsS2ZReLfpKIf+IMFnmVmwxQ9AhithYT73+p2s+JIVfrjwiHnpAZrSsr9CMstQXP1+1+510N/q8E/YoekMN9OMFvi5LvkRDsy9rgFCOoPdpgaQIWBZjf5KCSQszZJ1ivTvLokpen6tsJAVND0NFqb6GUGg2Im4Dyx9Pn7/0dm4pADAslJzTv+dKNrAPQ0wyySm7bj1RQgbAXsRa4R+mBJzpaQmHLmy0BLoL+Nh2ZRca8uUc6P37k97n451fvTieAE8BdZ2ItqFEK6oOJIYPsiU4woo140Oh+H/UC++gatHYcOFT+2y3AYvD1rM/fpxdUcsAi70c0OxAEP45X/hymE9XeoC0zfYhbcqfbhs09HpwnKMDR6g0mmYyKth/UcLl9ITGQ8N1S6s+gA1HvQCc2pluPvN2Br8SyZyfyxPP/VhCi1L1HWX2CQCuAE8TIq/sBYdANZmTIwqq0sb0HIzhhugBeUpBZLFyA8y+EErsBUYDZHYN9QAAooQwOws+uQlhdESSSqk5Qsh8LSYI6LDS1AbmOvLlRBqQIeITvM36+TP63VfE5hFClCTr9zEyVFwS3STQBy66DMHB+PJWIrfgGnYBx2dTboPa2X49GaBVlePA7CFx4iaGi4ns0aLVjMGvtPTDtmO4XEE8E5Kb/8qYai+NHl60LgAICcUCoJPVeiYG6Pxw/X9VFNVbFn9FNPzXoIRDTyzcpREYB5Fm1EQQn3KRi9wKApR8Tz48SwxnV3qM0q7ZhpdKvr0zfY+gO4oQf+EGPFYW/Xf5hwWsUgxiBbShGoGIx+D2eH1h2EeR3UQMH4zMaUKr4033nzkSkfQADelFbLOQCalxdxvN8mInhPas9bxtGJw29Fx3Y8429MAS0fL33Oeo7qFZeiToCC3B/VSNYuU0fgDnkhxGgMFdxiYEY7MYel+OHPH30IMeVFK1C79l+QdXVpFqHlMAXEf3EYDyfkkGdNvJ8f3RAXU0jpgM7jMNA5yCrtfzOicKG/M9bgEkEjqqPPDEcDfqVwGZv6zcO9avDfOhf4OmLFd9OLBHHdxp51HvOBlnAoQksYjASA1xnIhPsapTCPjbsGB2YevpPpgM73EYeSYIftgPgte6CWesVBB9QEgfnWYMgoeC8ql69bWoRIqYHvSIv/u26bj/jdqZ9KSGk74JRo6QS9PuTiSHm6Z62kLUGH0UO4rwWrhtRETkR4iKRdI8giJ2D2nUCMjsA0TXiVDb98NAf/rCMlajA9wesWHZrAe1dlwRyVI2jx4KkyUHSx7YDe6YD4tOC6XW01puEdAJwaEJzf1uATHi6ZlSCpBQscsh6C1xRcWEG4bCFeKcAVhVlDu54JQIkTT21hptIT/Afk0kMcS9BKfjBJozcDXCrtgbWXxbMAw3INQIxtQJPAGwXmYaBbYh4SCsuKwLOAQ5awKskCMmRg8P3xwlBfbosQaDqyZqBkyQe1CLQACoTgN4qbyHsPwkTiF2pYaj6MAXBmUosQHnUEYCsBL3MW39SNKMJ5PfoBsT33DVJCEbFnBCMOkHfvj6Xq8uw+dgRIhGgAiUqf5QgKDFyhe8nnYrlqn9sG1GoAfirubygX4H+8IM1CmQrMFAJ5ExzKIp54nPoVU2Auh6eBShDlTV4u5c4HE/fVvjFrsII0Ik6QX+Iq68jB19ziLoKC27FYe0gC+j1RSS+BgB7AvAM3m8HLdy5fV60C8RMVuhD1ieQB32MCCq0QPJuvuw5IHF/geMKwOPdpmsxBwVEfGEOgeincJqNmuSFIPhPq/xM81CWIIi+gCFBqDX3QPYd2OcCRo6GZBoA3AM+00aesAOQ7/2Pe/vBCXoguD4OBD1WfPwClzcui12AuH+gC0gEwW72KfjBCQRBr05D0IQc7N8PzOCMehPWK384MPVDJQim7yDdoiRTItzzFV/ZOX9sYFetP0fsQzb6O7wOoFjxk89YoQXv+BmSN+yYHYO+BsDRAXHhuJXsEFbdIEGZQWUkNVNzGA9NZUVBIQL7jASR0AclE4Pb7JN3BO72mG92+o8UG3nybj+mASh0FsLKn9GPxDrEcS2Au35BzHO1BksriIJdpqWjKR1wlpR4fN977rZqI+XbYjYDgVDpcYQalOYKMiuQbB3G6Pu/HlMbi9a0EMkksXtjvvXTfgMKAEZRN/i/O7yD8Da2S2Bdh3ICWfp8yuMkYl5a4df4vVWt4UF0yyqEnaT6swYyWB8/j111Y1ERS9oB0SLMtBGDEBD1PEHwtdjUEAHnqmoHU4wCDAoAS+lHwtu9eQLUAgmxVvAuMB9cELMV3m8EUtcBYYI9nkNIEEJYrQeUHfnzzRyC39j8CgSkir/E0P2odnAmAqDnDIhqrtV9BDNS2POjv/0pwKr6z1h/PMz3uf9ykFYq9TtoAXSwpz0HljdvBCVAPY6t7osv6gFhMpkX13rcfXQMIpuTsfTibkfOPRAC2meLRipI4mDPwMD5x+v3+Ey+qEfACwoUEkKQSMZxYJDz9R68PyP43yvo2aYf881rNQbZgRU/jp80QnW/hdXqJxMvCFxXQSNHpE8QiF4XI+wFfQcw7VL2Md7RRajsKgh2D+6SLAKPF356+/7yXYBTUgFy/38StUjFHweD+iiHh8/LV/i/TSvGk4L5x7F6AsIKbgb4C0YjgdGRIToGUx7cgS3JKP8pRcgak95BJGQbjaJdBYQ1qHYnYHL8F45QgHx2gLMQ2cDxBD/4SeR0LSDi5XzPQNjM4ySE/HGG6g+ugltLNSARn281BPtNO72eJLjdX4ITSEgpQvJYFEUg24f1qAYQNQdxx6Q/RcB85j9f+03zf2QV33IDPHegNgPABTfqFR8cZK9TA7/ll0EQbUUHW8Gr1d+MSadia+LRHwhunv87yWoJ3h/pRDwJAbDNQQFd2P2mH4kP/wDT/ZeN3CK3+ZjvgVpw4r20AMafb58j4N1UMknuj6iCx883PU9g2VHVH5JX2eEcPghSgRBCKPzK0Q3fknwPN0Hk0CyC0zBkz//7duEetgFjVtypASDI4CsknYJgYDhqsBxxy29+eyxrAZX75EEf8f+CkOcijMDDHx4ASYGGu8WHgPwpHJc0qOG8FgFTuVk0cRZVePFwHEIUEu8xSHoL5qWg4I7/HgOKXe2dcnu2SSdCGIDTA+AcxY1zYL6Q6AAFu+/1GvjKPSeEoJV3NiM4Dz9C6oWkEav+NWjPWXNOIkKgNTi2I8LeBgaZHJxqrC4oNXoB9pzzMws/OW3ghSyQJgjbygOVEDhoj4nHLld8HPD6UUMFVLIgKrTL7cFoBRLQgEdXIseZ2/HhFPKbk4d5tYWwwR0nIFQSD2P5gQhs6meVfB+Bkyz2fOIvX/zxqsSODuAGIOLtPNnmIPCrv6Kqvgz3q4tCwNl9lWYfnsdHj2HTgQw5IBHwULmfSu1jEV3gDFSxTBmqSEVqiYK2IkWcRiAkwV/cyW9YhqHXDw9dkNQAcO6HFNJT7oChfrPUYc3KY17zAd+evAwF2w5SCKLV4EuCEKsKfjBVWHu9Q9Arh4CoBqEMWYBsNX7YgKP/69uC3M7/mOOz232QT+ox4iCyJGEFP4oBHd+GVvXBwX35nqp7qeIbV6L6tdZub3ueJ+gBIKgC6S5gOQFxDoGr+Bv2nzqbknd7ph/EmXzO0o+kZdc/wqvQkAOUffVMzKtYgx5Vob1/+HAfCdzHSiXHenX35/2JTr3KZ9Ruj2lYiMhLIFoNyMq9hFroeYMTE0bSLbhb4l3YlFPa6hMd2jk8dmrDgdQCnC4/+ANFlYTB6ATlx2GDGXP1rvL+SnWHw+cJes5/rRWt4H2pw9GklD4uSMpwasIQiaYR92gIyFX5S8dtRZt/nCAH48VXW3hRE/HKOsGquj8EM85Q9cfeAV4XwNGAlmIFIwPYrfLKuxV476RRetzcdeAsRSZhiHizCKEIOHn3EMOWy5X4uIJnXX6sFiBFLaBm/THOQAkVJK9j6TKwiSDTBWpwHkSPQJX7U959uAkoaTUuug6oQCBz1Zlxm0OJSIoIw04M+7zCGuYiznCfHww9AN6Ir+HXA7lfn2oBSJ2FOOh8SzINfmcAyITq8JX/sOMPx6A9LeYtVfwgCBZhdu25OB9/XmWWNPUEPD5dUuJ68wd1AqD2+w1PI9KxE9BW5t3z/igdYGWiL7L+wPv9jgVY8f0ZcbCKCuLAHN+c5wa69Zpr0J9t2KnpAGzyiAIPiFalJ8/xXrrA6Y+/8NoDnWCPNwFJzf5DpVkHte8hx76P+HU1+HEytEeSEIzAsu5r6wPJGu6oLz8VrKofXLce+ywIHhNa/Dmw8LrptWXZ4NKZm4pr/QQ7Qk8ehMrPtAF7PQCD309QgRgRZMKgAbFREAfBBXNalbHA9cEHMo4IgIUuPjjBWEUFEQpYTkhVO43eRiynJw9Jjj8TOUIlJExK+0wA4gWgQvcFBHAc7P4/u78/Ff4CC5ATB3P3oUwFClYgcALcxzp/B9Ez4DUV8RjBbsCBrMH4dLNwIDaCGhA6o3pXksdBvYBsktrXDgNJKAFy1Z+ZGIy5NXgXoBT8a3ZgVSPIUAMV6DjLxhsV8wX4n4ibbONObHNyCr8Z4FinNFjg8ziiF5zSV8A99u7Zdf5OisvVaAAAG3VJREFU/kIPAJLWX3hUIFD6o7MD4WkHIMXBk4IftSrPNBJVk0OoC7ice8HGS8XBKDoz/YFBLaQi392lGpCMJfhD9xVkx5Xbj73P9V4m1j0v73x9FjDDPlYvATkgFAVWcdNvJBamliOjAwRV0EpeRymAe717kMYRyy/j5FwFBX0fP7Dyx8gq8wn2ZXi8GfGYR+lFcGJSxa3Y84WgzBHetlU4cvKY44Ps4iP9fsgsPGEhQTAcHqwwGCj61SoPexKwasXFqtxq8qhD9SixoBBYcJEDNzmIoi3J7QkoJActVHocTVpPBCDhElAvMDK1PT/Sq3DwB/ygmyB9GNhYDH4so4Foy48kkPtZfZEv1PQTxYpyX0EI3Bu+/5krcN8fgwVdwWu2JNVNWAk+PcOOPMNdGFyAZ5Aj6gicgzNfwuHZg0HrLxBWfjSRl88fVCo/apX/IBrIvf65ZxtEoK9Bec4KZIPLe76osQns46NwW0pUPCPAyMc4A/KXOwZzFLGbAqD5xhhbgBcWfoJBAlarcCSQgdQJ+Movnih4gjZQTw51rz588y/ZgxVUEAQ8soCfX8OR26JwujCLGFAMsOjnwGrlPuQw9D/PPv8BYVR7pG/eeFtQpsLzR2KFI8SwKj9KlX++HeLOPuSBKrKeHBi7L4b+Kx184+ptAp4Trcscv69oARVYzWgaK01H1X0K3zNSmARKtxXYHvwJuT+8gLGGWgpHcWOmBeljFB2Ckg6wiAYOqfxEK3GMCAj6kIiTWdCBCXhkjUKMgJcLk271N9uLSbtvvK0S69OXAvoA5z94VsFubbmZvx4QAnXgBnJxENyQjy38wef81uPhxMpPJIQzr5ckuUTKe0wZyN57iFTWga8GvCwlh5UqvYgmaNV9XSxEVWs40kkosFwA70RgNOu8mLZfR6wDiwRa35y7j08NksqPQhcfkRBK/J8R75Iz+9C8gJpqzwiIeZII3QnYOkJWbVEI5jNuA+o2BwK82ifwnpSgHwaC+GNAdmW2VXfC+vPu6wR6lBj84C9WfvivZyUhZMJlJhjSukDlFJ3g4AvGJfC1iEpQJ/CaEd7G9wds7p71+odruKrHip/C7RdsxeVjzIxhoNkFGOW/+sk/YVAGtltfzZAIfzix8gcHhZCXpcGN2u69qWqD9OlRFAy7x2fQBhHUiETB+DocqvArYt98f+AEAXApsEmEcNLC0t2uPHCqPQIXwHYDfI4/9+8LMpchqr5HK39MJSrBXwnutNqjovjHFdq+fcHLp7YLR4mGgduW5hFpAXUoL4cTTuW5HJSkB5PC0S7A+8c+837DyoM1J9iv/po/o3BunlDqPjOSO/YbLFd+FGy9sxKFeT8b+nLNPrkAyD53FtT27yUS32yqUaEGTMBiASGcZ0FmK8nWxbvjC1q6WQC4VdWdAcBY8eFoAzIrC0b7Wt8wlPcIdE1FhUWeKU1Igv8Q/0dl4k/NnYSxdlDon8diUDeuQB4c8XVzcahRgyyZmNC+LAgeCfSVALde8/t1DCYawNoePGT83wlOpFUdOZKwxn89OsMEf0X8CxJCBN/dwKbFwkSMgx0ACJJDJD4iC1JEYh6XcEqVHpx4+J4I4UiAl26r5x64sttvSlAn3LBuQCz6edU8C+J5epBrC4YP52EFDgHrCw1B0eU9bOaTgh3wmYvQV3Oqqcf53XnVNXUBELX1xtSgFrirlII5d3HFulxBCNEfZx0h7K2f34XwdHpuYQcguN189Ow/nPXclaUcqMH5leCXjKOjbv3F0a7i2ZaRHmBe5zwnhA9S736ZC8AH8LHkg/T5znYgmES1dtuzGo92qwHIquiWX+4KgVLd8utv9Ml1BQNhEJW/FOgweiTguCUoQHkEwYhjfQIgm8eAzPKzHqAG5xGiiPyxeGRRaYetUpDVpHVC1T9bHGyaknb/TQTnuG7rDYwYCUT7/cMjtILzA+Go/FPw581F/mWeTkDuBsBCAK8ki+A29nMzPn4Rzjv6QV7xWW4fzQFUxb9jQQ1qc28kMi4mDl1NBr4usIsz5ltZqNm7AeJXfuTHd7nioLEyPBISU+8/tP1AC4Il/n+YGmjg2NiBRdl6yCw//zG5ph7bqaBuz8B4VMU/TqSsNPbwCeZA1cdxyG9SgKzRZPL+GXFOiH1/SFZ9wX8M3zUgvH8a4rMBjZj/h1W9MrwTiN6MlsCKiI4gycBzgV/xUaQGjGDHwHiYi0VIzeEAasCpNuL76AC7BIEl7i4AIxnAfoMxk35eJbZ68wWEUChs8IPz/EEE9BkUoNA4RCWSLJkY1h0Y/dG9bVCtUVPe7QRhtStXG4nOECDfUxc4Uw/Ik8JkA9o9+a83IrfHH11EdFUWc4phNgVFWkPsIHBnCvCCYBSgqEN9qtoXuwHhByYoJJA7BxIkkRwpDGgAHo+vQ3ZGOwCFJCJKUAx4MBpFZWvReeLgtBBkDDQu2OJxXa7SE/P4ZiUPHABjY1DsFIhPAaygWewiXK72hHjow/k8gCL6gKES8qcDZ7A+EhYlWCPGCX1wXIwzkQEKt8cP6iqkC0FEhFj/ZYtvXCtwuBLcDT5wXN+9H6ZEIkTwV/x/s78fXFX3siWHEKrC3tw7EFZ31Ll7ttknQyEMGgAqCaVe1bGk8r8nFWCQQR0h7CY0dsU/mIeIuA1AGCo02Q0YVXxub36sG1Qgfo0CBBUXxap+ECFEycQVyViBEBFPt14TK9rZHB9EwMG7DPXOv0OVHkdtx7OSCXfb3av4CFZGTwQBwT7/hKPHE4PzpJ4L4+FM9r1n8B+B+9R9I4Fu9brYUZgCunZWNxdQgIs8mASBQ4F8hJpEiaf4GPihk8FdAxin/kybjZjTj+mAQy6ihZ9whDvHAWB6BKrBXQr+5SBfqPaINwiz12UIwoTmbPACZY/fshBBBKNlW8ZCHwH/cVKSOZMm4Mxk4OwE9JeB+EFkn1IzcPQoiSB4vGgNeJSoik1A7m0TCmE/HrggB+/1M12C1Z18ACGoIeH1pH2IhAqFWgBq+kDFEWAvA3X8tpW0cnSD5WAOriOHhnYraF1eLTkS8P/QsHUBdtMPnOrMaANJE9AZiaKWII5Ue/8PTHn/UcCSTgIF2xN4zdmAQYIAKeBFl6FiO0aKfq5jcImHfPwTxcEdRmD3LcFoAva1Hdjm9UgGggI9YOoPkOBYLsT8HlG3nucMDGkOOJ8CkNOELdSO7D5qqAeJYBb2GpABgRi2gxLITgrOQ9C937HgB+0i7MeRx3gfPWCXLtgbLJAu/gCFBPzRX8eADJqCvA3FViC/BlOQC4LZyrBq8BdQAOUKoKjqR7v7EFfVFMojPgEoSlJesNIePyLHwW9NRgq7E6HvUN8A0yj0wyWDHRZ3J2A1jHdMyu3hCGwSDwdRir7h9VP7AKLgPoMCgKziOFLtrUm8aIFHlgxYfz8WBYUU55iAXauo+evJaIK/NTgRJM9sUcZRzcCnMdNKMJc7usnAyrpxHYkTRHK+n1HxS01LheAHqRWwKIDqLvQC0+PupHZgBawfVGsiniTVHwZHRqbUI/D4Cd+ftgyLAR1ehkIiqaKFw7MJEwUIuK5zsu4svoFYCFKgBJZACBuppOId2RDkPZas8H9kULcA9a0KTCQDGtpnzT+RMJiOGseHl4BQ1C29AWUXIIf/OIwwqoNEK3SCuA7FRiBrE9B4/PcrGJ1OQNj83F4Xbol/TgVHfMiIZLAdcaVkgh8sLrd+liNQH/FqsNTfj15m1J0X+ffZuq/gTY7QnvIfJz6UzBJLs83ItQpt3RfZz5iuGfNPajpngUm0R8DoA5jDlzsOTAwZjzsC3Jjxg7H914PjlcskGdghgx9HG4OOQH34uwQyzz61/0qiYNQjXxECuWYbGM/DrjtPH/Mw/K+gBLLSA+cEfPr4MroArzcDuybbr8Zc72i2UnzeHnTgzD4Ug78SzIvCoARVOQxaFFR3TzWnkkHUVFShEuqKxZnKz4p4YYcf8ZhYhuu8wFgSHcuuwCJagI4bgchJQK/qe9c/RT6nGcg6KGREJpb+MI0EY/b0jcsni3AJBeCQNsBOFVYoApcM2Aom4VFgIRdHpeIG8D3YaxBD+qCiQ+rBOSVnci8hzkAG1t/pgHA4uwDzmu8xFKkkkIqCfkIRs204r/hiDgutoAAcowBMZ9+KS0CcXVBOHCvJw2jMQSJyeoeExF2DuTuRcuWAo9sefyUQ6/oBaIjPtiRH1KvQKvygAHb171d+vc4GRMDPoxN/kL5pwlVh1mBQ1quQJAJ5j0TgOAis+h8d3mnC8xTKE34+8sDNjyVXE6nFMN+H39TQDmocHScENvN74LoGScGU4f7g6IG3n3C3qnG6JBS+Z5tHOOzRYQx+u7MZmAl0OSsRLAS/VIKfRAWU92+12aaVPksGDBWQuCMvgNy2M2Mt8EwqbjosZAec5xLEAmXmcFTHiOWARWglpNpjdEtBQRxJJU5VL5/7F1X86XntXgUK4q+KggsUoIIK8oA+kgy4+zLaACqQGTVOX6MBWdehL6BxHn+tlyBMDGAqufd7WOX5WTJwKYDfXJJP2GXDPk7Tj5Ed7BOG7DMFaBRAJgI/+H2Ngeb2SKb0zkoGlQBHkefDr7xMA5HZeJPtKIzyApI9gmnPgf1c3mulfhe0gFekDCdNFnrOwi4Gs6eTACNjB+Uegcgojog4V25P8bctRYY6RL8AJklE9ACFAGZdBEahd4d4CmghFhbzcwaXYH5qTlS6DY+KfNH5Avzjo2JJ0poDkSCMxLn73H/eB+ifvgvyIFCWAji7BWC8hd0qj0FziMdrS70BlVbgamIgcmotGZDNPwm0L9l5iHv7WRoAFx57ScFS2r2iwot8oKu8l+TOCOg2mZ2nFdjTgOFQENzKkJ8OjEnsE8f6AzyXwT6MNF3RDRnuj0Lwo6wTlBMDIyqaz6G+RiLJMg/KUrQV/rh9uH0tWduwoxmky0kSMQ+rnXxZsGadgnxfgk1pCnsIsGYltvfdzTOBIclIsN8MLAGcz5gBwj94AE8DuC9Molip/JGwB57nRyJiyD3pyk6q5ij+3TzRLohcqyqCEQBTepF15+WVmW8SEr5jMUUkx3oMIsrH3ndwAQganKzyMpOJNxMQooGBYwcByw7axIhgPRGEr6GSGJhkAELoQ1YRg+dPeD5IIRDIqq5PA2Jh0Rq0YcS8XBi0ghGRFpCtWTdum5+yLOsQf2EuYY8AfnbQZDgCjHxBSKwTGpt8QCIDVH3/4H5OwEvldhliINwAFLsEyyIfGKV+vm3eEehVqKTdNxtDiPoLHCRiuwTJxCECxMDqDjTvZ63KaPKvRgV2i/F3ohm88V8LN8hgJcXD5pVGIPPNn9EBqSQC0I4AMxBUcQNCkarkFgSn/oCs9GCVep4eUG5BRAOcQOCWlGSc3If0IFqRfURQGRrKewPKEJ9sLnIowKCcw+f48N6UHjqYtgInaCCkBbPSj8VEkCr2g8U43wY1xX/BNkwreQrzg+oaJghOCGTU8RBxuIp6VFOGoEXgEsBLIgV6gBgxoLSI5CgiYNT+GBHsU01GthrceiMUtv9KgAYktgVNeGrBbtiOQVi9x8WjiAW7UNUnm4Vet7WtsFgDCDYEwQ/EVL1PnQf/xCDLTowTh4c4HPRDoQaiwhKIAae4B7xgCBydI/CDPOrevK0FR4p6w3VfoXgQiB3T1N8Y1PCD0X19JqcHGfzB5WkQE4p/kdeXBcEVUXEIFqSij82lMyrWq/7c+LFHA7z5/dwOHHg8s/Y8C2CmhbmALtare+4UWLfb25BmXABKABTniC8gRAP2yvDAiUAsElnrxFzITQa/sAFecAOY7zPV/8jMQHSbWAiUPGkQNABhw85xrSCv+mMSzFR8+7mjw01A8f4F8S/td4jnDHYxpT8/OEyV3gz2+GTfdAeAszswfJNGlQhEIjB0Bls0BKn4Iw7WKu9f1gmSagmvqleEwJwnZwjO7npz1HdCJ1hS/mlBcRXyF3i/M7NxqJFoeH27z7nnJaBmpUZKHsTbGUc1ALEoIGsGYl9ixS50gjAT/VhB8IzvGTrBVfWEz1MzAkRFTtecW731VdjNQPukVdhdn0Y8d/a7WYH6i/TBPBzUFwAlHwtGHOQISrgb1AMUgDETTA3+THAdeRJhg59V/Ektofa9I8wxVICkC7QQSAd2O3cftzPzdMK6aA4iZI4ILfYRbb9RgqICt2AxVnYZ4kkBvHOBxT/zN9ybHx/f5Ql2fkGCX6ANm6F8WCfqAS+Eq5AGcHJd2IFHagTMHAAj+mWBnDXuc81CjhsAi5dL2K8QCYI1aJ/PJtSSxEFXASv7C2I3ZB9/a0j/7nDn/j1pHsz9Jr8fNpxPBUAUUYD4wz5GBlmyAiORjtAIGDFwzSUwqiNZ1d1tPiB7/Q9VeI9KeJU16/knkEeQJEALjY4rkp74fCZiMDSA/PgvT/aT2gYgp5E/P29AKBQAo6TRth5T4VesQFb0i4K7RA2MZpgyFXCEQHCOixuYMPgy2L7+45ezSSKt2oUkURlpXkEMOLSiXPuDQZjk63N5bmzOSxQdLHX7AhwUEA0BAeQPJIQzkAuFlOK/GtyLdiGDKEBdllQ7YouxV2Xdwza9So4Kp5Z0yAgUhTlJgFzSFrznIHYIwKcCu2/L3LsCg6UI1b1/CA+ApIV5/32HqOIjdQusE4azip5Wc1b0q/QGIAlaWEJbXP3r/L+AEipw/+BtkQVY9fIM2i/ZhgVEgJO6DZ1ksVtlYdoQAPhVO0oKmYBmnAYco4DRCRB3TwCziptaE0auER9/VzRqKNOEYINOQg2m1l9GpGNQAhh1v6UmxNQh2M4+LmlUzll0OTjYQOaGlZAEMCrdhmBphaMBwBADrSQQc3//He8KgFETT7p6BHnjj2X9EXsDjrgBS6ihoAmcSQVYmE4JgYWFpp1waAQRoqDzxDhU+HxSnZHz/9JEY6Y5MJA+cwoWrt99+U3Mc/9g/NQTFaigAEtwB1yBzwzucZSX7RZEILhR1d5GDCsBLVUdIQvsldZfEJt5i/MHx2hGJZFkVVyK242iFeh58oBUFqIQbkfp2DV2X0CkAYgv1sU+P+I/HmBu8nErugdRnUWhfp+A/ddlbEH3uQlBsNobUEMHasK1HOYn8BEEvCUaiuigXRIKj+sGOPA4KAWz9/s7WxcgB4+a6/fI2osEwv4yOENAiPf+wQhbc/5f0gGisWuQaRFmGoIqguARWsBQgTTocDLMT5OJUQnhqdCEig+/EShKSEgTVV0MBMnz04BcshPnLk/+OaV0/dwKzB4QUt1NB6uTDfGOP+cNm9mEsBAFiM7AQh9AKVEU75vy68jeOxrUC4mDEuYO0oLqoSdHaEF2eXYYSm0V+oEOwpLmYFOF3Z4CmAeBTIGueiIw2xoKPzDBJVBXQ5g5O8/twwA+QguIjJt3+g0NQEcDfUXgO5gsqlTBLkQLdl86K3CWneitQ8sg/5oWAUJP2C3V3RoEyji5n4b9lB4t9pz2CA+cAFn1Z9I/uzYsU/ELtEBOCHYQQqGcFejV+yeuRJX31zsKV5IGjway9z6PLDxKwNEPsBuOEiqw57jGgOtZ1Y++T50AuMFl7hPIbhskiOwsATtRoc7rS7dXrpcgrMCGJca6ELJo+Y0be0BW5ZKGcFz4y8W9BduwcDnK9iO5fagsKpp9ANnvDPxeP8THNyIVFo1AMas8Qk5v2Ytm0LCCYAXqn+wQsPTBh/5Bcnne14Os3uCQt28vsK1WUESJFviBgAW//3u9PLxusXchcCR2WsNzv/ImvgZzzkUByDUAIrjTvmSHAowpJBQE4SUlxMxnARlQbIqkArVAJ6pBBvELCCKlkyCDAP45BYfEPfcUpfMch3Vn4bheYK4E66BxAxHSVd5INgEPgU/NBCDfNQ8Ho1CoINAPQAW/QT8OCIZlNFCB84XhoDChFByHGjx35v9BLgyhmojqHYb5QYXnuAecvua0hZe6BV9f7v4ibvgvamrmAc1TmaEir0LQ9h97eYAYVoM/nWA60i8Q3Ifezha9BqaaL3zvqd6IAuwwLSCCuCLuJWch4h30giPtyiAphKEBcCu9BV5wwzkMxID8rhMwdwMhcSFgrBT3RUTQboAUg3+p+Qe1IGarOioVnazmefV3lHpwA0AcLWCahUiXwePHWJsP+GH1gnp/we5KfOhJAbsj0H/BIEb04TbrTPsAyb2LLu93KwfCvn5PLAwrOXAa72eEQRo1CNdw5IprsAZ3hApy9zlcITG2vpCihsRSYxNS+J4vdBZ6B52eqRcQ/QXmSjAWSfa/5GA5qEg4iJFtm624AqXLrSA2gx8p1Mdqcghv41S0lSp/xAYs9gakQc4Ie2RTUYwYgt748mV+FU1Xgp14eW3XYZ6cdqGTNHwHICTwEeTPl0jEZwIgP9gDEaogeg5IHWCF+1eoAhvEKPB/EAeTRsM/pSAP5wjWEUMM1/NJRhwJbpJSgK7S7zF3EOsI5jBQBK9DV80Z8Y0COzvmWzJXgDl40KEC6cqvqgi4OB5cpgLFYK/1CvDiItXqC6/S87wfAUfPtxqfGNzlYaOjlf1IsHPPvffHgDAoEeEST4ZLZUd/RSo91/BjXY5ggWgQ4In3fyj4mUqPrInHOCLKO3wUwRsfyXpt1nEIRLrqcWeTuk7bigsbid1zD4iDRQtnIdQsyIXnFCn1I9D7ADgxEhOvR5AJosoUbu1FkJyYCi9OhQERoIx+4AX/YqUXQhtYEwKN4Cy1HntLMmtaAQpqfrT/UCoLSxeswjA5UWPPi0mjajUWxMTdVusNvt/ChMdmILK5IRMFu90BMEzFYHdg2GAgeYVHMMJIBTA7EFTx/5fpgTFXz9w/en0ZjD8kCDoKPNGwlB01BmoWQbh+AxR689mBponGJOr9OwmMu3dtJ/ylW1Tik4ElUPmR9RqII+pVhD9ychABMQ51gOIZg+/G+5mGIzLB1JJC5WhzYjhJ7IWmLDpA8jzsAafUPkB2WnFBF4iSxkq1ty7f25rv/+EQLOxs2oUdTSA9HIR9swdBlCcFe9owPC3XWDDC0ISVzsEVbSCF/sWdA5Fu4HJqankp2SeQCYYrImNalfmhpVxYrGkUS4LeSUjg8dD7+D7w/ybIfy7vlB9/HJ978zr7/45Qgajzj+4EjIK/ULHPRAOlKr/aG0AFcqCyu0GcW45Igh6JMJmhA49/U+cEssHNJhtXDC1MOya3j/sAiAGcrEtqtgjBD6wEzSDc7D8o6C8rIqAZyPk+NQoNLAZ1hR64Yl1FBY648smUYKnSg1Xwk/0DyRyArByMUobyByhCcPnOaPyoegREFS4jNfYAw+IHCjdC1J2WDZBke/OyN85J24WiXwDYPoJyYuCD238ulvuzwt6KgHf0shWKsqCFFGjB/w8HU8eeTED9wAAAAABJRU5ErkJggg==";let Rr=0;const ci=h=>{if(!h.environmentBRDFTexture){const e=h.useDelayedTextureLoading;h.useDelayedTextureLoading=!1;const t=h._blockEntityCollection;h._blockEntityCollection=!1;const i=A.CreateFromBase64String(Sr,"EnvironmentBRDFTexture"+Rr++,h,!0,!1,A.BILINEAR_SAMPLINGMODE);h._blockEntityCollection=t;const r=h.getEngine().getLoadedTexturesCache(),n=r.indexOf(i.getInternalTexture());n!==-1&&r.splice(n,1),i.isRGBD=!0,i.wrapU=A.CLAMP_ADDRESSMODE,i.wrapV=A.CLAMP_ADDRESSMODE,h.environmentBRDFTexture=i,h.useDelayedTextureLoading=e,Xt.ExpandRGBDTexture(i);const s=h.getEngine().onContextRestoredObservable.add(()=>{i.isRGBD=!0;const a=()=>{i.isReady()?Xt.ExpandRGBDTexture(i):J.SetImmediate(a)};a()});h.onDisposeObservable.add(()=>{h.getEngine().onContextRestoredObservable.remove(s)})}return h.environmentBRDFTexture};class Oe{constructor(e){this._plugins=[],this._activePlugins=[],this._activePluginsForExtraEvents=[],this._material=e,this._scene=e.getScene(),this._engine=this._scene.getEngine()}_addPlugin(e){for(let r=0;r<this._plugins.length;++r)if(this._plugins[r].name===e.name)throw`Plugin "${e.name}" already added to the material "${this._material.name}"!`;if(this._material._uniformBufferLayoutBuilt)throw`The plugin "${e.name}" can't be added to the material "${this._material.name}" because this material has already been used for rendering! Please add plugins to materials before any rendering with this material occurs.`;const t=e.getClassName();Oe._MaterialPluginClassToMainDefine[t]||(Oe._MaterialPluginClassToMainDefine[t]="MATERIALPLUGIN_"+ ++Oe._MaterialPluginCounter),this._material._callbackPluginEventGeneric=this._handlePluginEvent.bind(this),this._plugins.push(e),this._plugins.sort((r,n)=>r.priority-n.priority),this._codeInjectionPoints={};const i={};i[Oe._MaterialPluginClassToMainDefine[t]]={type:"boolean",default:!0};for(const r of this._plugins)r.collectDefines(i),this._collectPointNames("vertex",r.getCustomCode("vertex")),this._collectPointNames("fragment",r.getCustomCode("fragment"));this._defineNamesFromPlugins=i}_activatePlugin(e){this._activePlugins.indexOf(e)===-1&&(this._activePlugins.push(e),this._activePlugins.sort((t,i)=>t.priority-i.priority),this._material._callbackPluginEventIsReadyForSubMesh=this._handlePluginEventIsReadyForSubMesh.bind(this),this._material._callbackPluginEventPrepareDefinesBeforeAttributes=this._handlePluginEventPrepareDefinesBeforeAttributes.bind(this),this._material._callbackPluginEventPrepareDefines=this._handlePluginEventPrepareDefines.bind(this),this._material._callbackPluginEventBindForSubMesh=this._handlePluginEventBindForSubMesh.bind(this),e.registerForExtraEvents&&(this._activePluginsForExtraEvents.push(e),this._activePluginsForExtraEvents.sort((t,i)=>t.priority-i.priority),this._material._callbackPluginEventHasRenderTargetTextures=this._handlePluginEventHasRenderTargetTextures.bind(this),this._material._callbackPluginEventFillRenderTargetTextures=this._handlePluginEventFillRenderTargetTextures.bind(this),this._material._callbackPluginEventHardBindForSubMesh=this._handlePluginEventHardBindForSubMesh.bind(this)))}getPlugin(e){for(let t=0;t<this._plugins.length;++t)if(this._plugins[t].name===e)return this._plugins[t];return null}_handlePluginEventIsReadyForSubMesh(e){let t=!0;for(const i of this._activePlugins)t=t&&i.isReadyForSubMesh(e.defines,this._scene,this._engine,e.subMesh);e.isReadyForSubMesh=t}_handlePluginEventPrepareDefinesBeforeAttributes(e){for(const t of this._activePlugins)t.prepareDefinesBeforeAttributes(e.defines,this._scene,e.mesh)}_handlePluginEventPrepareDefines(e){for(const t of this._activePlugins)t.prepareDefines(e.defines,this._scene,e.mesh)}_handlePluginEventHardBindForSubMesh(e){for(const t of this._activePluginsForExtraEvents)t.hardBindForSubMesh(this._material._uniformBuffer,this._scene,this._engine,e.subMesh)}_handlePluginEventBindForSubMesh(e){for(const t of this._activePlugins)t.bindForSubMesh(this._material._uniformBuffer,this._scene,this._engine,e.subMesh)}_handlePluginEventHasRenderTargetTextures(e){let t=!1;for(const i of this._activePluginsForExtraEvents)if(t=i.hasRenderTargetTextures(),t)break;e.hasRenderTargetTextures=t}_handlePluginEventFillRenderTargetTextures(e){for(const t of this._activePluginsForExtraEvents)t.fillRenderTargetTextures(e.renderTargets)}_handlePluginEvent(e,t){switch(e){case Ae.GetActiveTextures:{const i=t;for(const r of this._activePlugins)r.getActiveTextures(i.activeTextures);break}case Ae.GetAnimatables:{const i=t;for(const r of this._activePlugins)r.getAnimatables(i.animatables);break}case Ae.HasTexture:{const i=t;let r=!1;for(const n of this._activePlugins)if(r=n.hasTexture(i.texture),r)break;i.hasTexture=r;break}case Ae.Disposed:{const i=t;for(const r of this._plugins)r.dispose(i.forceDisposeTextures);break}case Ae.GetDefineNames:{const i=t;i.defineNames=this._defineNamesFromPlugins;break}case Ae.PrepareEffect:{const i=t;for(const r of this._activePlugins)i.fallbackRank=r.addFallbacks(i.defines,i.fallbacks,i.fallbackRank),r.getAttributes(i.attributes,this._scene,i.mesh);this._uniformList.length>0&&i.uniforms.push(...this._uniformList),this._samplerList.length>0&&i.samplers.push(...this._samplerList),this._uboList.length>0&&i.uniformBuffersNames.push(...this._uboList),i.customCode=this._injectCustomCode(i.customCode);break}case Ae.PrepareUniformBuffer:{const i=t;this._uboDeclaration="",this._vertexDeclaration="",this._fragmentDeclaration="",this._uniformList=[],this._samplerList=[],this._uboList=[];for(const r of this._plugins){const n=r.getUniforms();if(n){if(n.ubo)for(const s of n.ubo)i.ubo.addUniform(s.name,s.size),this._uboDeclaration+=`${s.type} ${s.name};\r
`,this._uniformList.push(s.name);n.vertex&&(this._vertexDeclaration+=n.vertex+`\r
`),n.fragment&&(this._fragmentDeclaration+=n.fragment+`\r
`)}r.getSamplers(this._samplerList),r.getUniformBuffersNames(this._uboList)}break}}}_collectPointNames(e,t){if(t)for(const i in t)this._codeInjectionPoints[e]||(this._codeInjectionPoints[e]={}),this._codeInjectionPoints[e][i]=!0}_injectCustomCode(e){return(t,i)=>{var r;e&&(i=e(t,i)),this._uboDeclaration&&(i=i.replace("#define ADDITIONAL_UBO_DECLARATION",this._uboDeclaration)),this._vertexDeclaration&&(i=i.replace("#define ADDITIONAL_VERTEX_DECLARATION",this._vertexDeclaration)),this._fragmentDeclaration&&(i=i.replace("#define ADDITIONAL_FRAGMENT_DECLARATION",this._fragmentDeclaration));const n=(r=this._codeInjectionPoints)===null||r===void 0?void 0:r[t];if(!n)return i;for(const s in n){let a="";for(const o of this._activePlugins){const l=o.getCustomCode(t);l!=null&&l[s]&&(a+=l[s]+`\r
`)}if(a.length>0)if(s.charAt(0)==="!"){const o=new RegExp(s.substring(1),"g");let l=o.exec(i);for(;l!==null;){let c=a;for(let f=0;f<l.length;++f)c=c.replace("$"+f,l[f]);i=i.replace(l[0],c),l=o.exec(i)}}else{const o="#define "+s;i=i.replace(o,`\r
`+a+`\r
`+o)}}return i}}}Oe._MaterialPluginClassToMainDefine={};Oe._MaterialPluginCounter=0;class Se{constructor(e,t,i,r,n=!0,s=!1){this.priority=500,this.registerForExtraEvents=!1,this._material=e,this.name=t,this.priority=i,e.pluginManager||(e.pluginManager=new Oe(e)),this._pluginDefineNames=r,this._pluginManager=e.pluginManager,n&&this._pluginManager._addPlugin(this),s&&this._enable(!0),this.markAllDefinesAsDirty=e._dirtyCallbacks[63]}_enable(e){e&&this._pluginManager._activatePlugin(this)}getClassName(){return"MaterialPluginBase"}isReadyForSubMesh(e,t,i,r){return!0}hardBindForSubMesh(e,t,i,r){}bindForSubMesh(e,t,i,r){}dispose(e){}getCustomCode(e){return null}collectDefines(e){if(this._pluginDefineNames)for(const t of Object.keys(this._pluginDefineNames)){if(t[0]==="_")continue;const i=typeof this._pluginDefineNames[t];e[t]={type:i==="number"?"number":i==="string"?"string":i==="boolean"?"boolean":"object",default:this._pluginDefineNames[t]}}}prepareDefinesBeforeAttributes(e,t,i){}prepareDefines(e,t,i){}hasTexture(e){return!1}hasRenderTargetTextures(){return!1}fillRenderTargetTextures(e){}getActiveTextures(e){}getAnimatables(e){}addFallbacks(e,t,i){return i}getSamplers(e){}getAttributes(e,t,i){}getUniformBuffersNames(e){}getUniforms(){return{}}copyTo(e){ae.Clone(()=>e,this)}serialize(){return ae.Serialize(this)}parse(e,t,i){ae.Parse(()=>this,e,t,i)}}m([E()],Se.prototype,"name",void 0);m([E()],Se.prototype,"priority",void 0);m([E()],Se.prototype,"registerForExtraEvents",void 0);class Cr extends Pe{constructor(){super(...arguments),this.BRDF_V_HEIGHT_CORRELATED=!1,this.MS_BRDF_ENERGY_CONSERVATION=!1,this.SPHERICAL_HARMONICS=!1,this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION=!1}}class se extends Se{constructor(e,t=!0){super(e,"PBRBRDF",90,new Cr,t),this._useEnergyConservation=se.DEFAULT_USE_ENERGY_CONSERVATION,this.useEnergyConservation=se.DEFAULT_USE_ENERGY_CONSERVATION,this._useSmithVisibilityHeightCorrelated=se.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED,this.useSmithVisibilityHeightCorrelated=se.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED,this._useSphericalHarmonics=se.DEFAULT_USE_SPHERICAL_HARMONICS,this.useSphericalHarmonics=se.DEFAULT_USE_SPHERICAL_HARMONICS,this._useSpecularGlossinessInputEnergyConservation=se.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION,this.useSpecularGlossinessInputEnergyConservation=se.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION,this._internalMarkAllSubMeshesAsMiscDirty=e._dirtyCallbacks[16],this._enable(!0)}_markAllSubMeshesAsMiscDirty(){this._internalMarkAllSubMeshesAsMiscDirty()}prepareDefines(e){e.BRDF_V_HEIGHT_CORRELATED=this._useSmithVisibilityHeightCorrelated,e.MS_BRDF_ENERGY_CONSERVATION=this._useEnergyConservation&&this._useSmithVisibilityHeightCorrelated,e.SPHERICAL_HARMONICS=this._useSphericalHarmonics,e.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION=this._useSpecularGlossinessInputEnergyConservation}getClassName(){return"PBRBRDFConfiguration"}}se.DEFAULT_USE_ENERGY_CONSERVATION=!0;se.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED=!0;se.DEFAULT_USE_SPHERICAL_HARMONICS=!0;se.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION=!0;m([E(),I("_markAllSubMeshesAsMiscDirty")],se.prototype,"useEnergyConservation",void 0);m([E(),I("_markAllSubMeshesAsMiscDirty")],se.prototype,"useSmithVisibilityHeightCorrelated",void 0);m([E(),I("_markAllSubMeshesAsMiscDirty")],se.prototype,"useSphericalHarmonics",void 0);m([E(),I("_markAllSubMeshesAsMiscDirty")],se.prototype,"useSpecularGlossinessInputEnergyConservation",void 0);class kt{constructor(){this.previousWorldMatrices={},this.previousBones={}}static AddUniforms(e){e.push("previousWorld","previousViewProjection","mPreviousBones")}static AddSamplers(e){}bindForSubMesh(e,t,i,r,n){if(t.prePassRenderer&&t.prePassRenderer.enabled&&t.prePassRenderer.currentRTisSceneRT&&t.prePassRenderer.getIndex(2)!==-1){this.previousWorldMatrices[i.uniqueId]||(this.previousWorldMatrices[i.uniqueId]=r.clone()),this.previousViewProjection||(this.previousViewProjection=t.getTransformMatrix().clone(),this.currentViewProjection=t.getTransformMatrix().clone());const s=t.getEngine();this.currentViewProjection.updateFlag!==t.getTransformMatrix().updateFlag?(this._lastUpdateFrameId=s.frameId,this.previousViewProjection.copyFrom(this.currentViewProjection),this.currentViewProjection.copyFrom(t.getTransformMatrix())):this._lastUpdateFrameId!==s.frameId&&(this._lastUpdateFrameId=s.frameId,this.previousViewProjection.copyFrom(this.currentViewProjection)),e.setMatrix("previousWorld",this.previousWorldMatrices[i.uniqueId]),e.setMatrix("previousViewProjection",this.previousViewProjection),this.previousWorldMatrices[i.uniqueId]=r.clone()}}}class S{static get DiffuseTextureEnabled(){return this._DiffuseTextureEnabled}static set DiffuseTextureEnabled(e){this._DiffuseTextureEnabled!==e&&(this._DiffuseTextureEnabled=e,q.MarkAllMaterialsAsDirty(1))}static get DetailTextureEnabled(){return this._DetailTextureEnabled}static set DetailTextureEnabled(e){this._DetailTextureEnabled!==e&&(this._DetailTextureEnabled=e,q.MarkAllMaterialsAsDirty(1))}static get AmbientTextureEnabled(){return this._AmbientTextureEnabled}static set AmbientTextureEnabled(e){this._AmbientTextureEnabled!==e&&(this._AmbientTextureEnabled=e,q.MarkAllMaterialsAsDirty(1))}static get OpacityTextureEnabled(){return this._OpacityTextureEnabled}static set OpacityTextureEnabled(e){this._OpacityTextureEnabled!==e&&(this._OpacityTextureEnabled=e,q.MarkAllMaterialsAsDirty(1))}static get ReflectionTextureEnabled(){return this._ReflectionTextureEnabled}static set ReflectionTextureEnabled(e){this._ReflectionTextureEnabled!==e&&(this._ReflectionTextureEnabled=e,q.MarkAllMaterialsAsDirty(1))}static get EmissiveTextureEnabled(){return this._EmissiveTextureEnabled}static set EmissiveTextureEnabled(e){this._EmissiveTextureEnabled!==e&&(this._EmissiveTextureEnabled=e,q.MarkAllMaterialsAsDirty(1))}static get SpecularTextureEnabled(){return this._SpecularTextureEnabled}static set SpecularTextureEnabled(e){this._SpecularTextureEnabled!==e&&(this._SpecularTextureEnabled=e,q.MarkAllMaterialsAsDirty(1))}static get BumpTextureEnabled(){return this._BumpTextureEnabled}static set BumpTextureEnabled(e){this._BumpTextureEnabled!==e&&(this._BumpTextureEnabled=e,q.MarkAllMaterialsAsDirty(1))}static get LightmapTextureEnabled(){return this._LightmapTextureEnabled}static set LightmapTextureEnabled(e){this._LightmapTextureEnabled!==e&&(this._LightmapTextureEnabled=e,q.MarkAllMaterialsAsDirty(1))}static get RefractionTextureEnabled(){return this._RefractionTextureEnabled}static set RefractionTextureEnabled(e){this._RefractionTextureEnabled!==e&&(this._RefractionTextureEnabled=e,q.MarkAllMaterialsAsDirty(1))}static get ColorGradingTextureEnabled(){return this._ColorGradingTextureEnabled}static set ColorGradingTextureEnabled(e){this._ColorGradingTextureEnabled!==e&&(this._ColorGradingTextureEnabled=e,q.MarkAllMaterialsAsDirty(1))}static get FresnelEnabled(){return this._FresnelEnabled}static set FresnelEnabled(e){this._FresnelEnabled!==e&&(this._FresnelEnabled=e,q.MarkAllMaterialsAsDirty(4))}static get ClearCoatTextureEnabled(){return this._ClearCoatTextureEnabled}static set ClearCoatTextureEnabled(e){this._ClearCoatTextureEnabled!==e&&(this._ClearCoatTextureEnabled=e,q.MarkAllMaterialsAsDirty(1))}static get ClearCoatBumpTextureEnabled(){return this._ClearCoatBumpTextureEnabled}static set ClearCoatBumpTextureEnabled(e){this._ClearCoatBumpTextureEnabled!==e&&(this._ClearCoatBumpTextureEnabled=e,q.MarkAllMaterialsAsDirty(1))}static get ClearCoatTintTextureEnabled(){return this._ClearCoatTintTextureEnabled}static set ClearCoatTintTextureEnabled(e){this._ClearCoatTintTextureEnabled!==e&&(this._ClearCoatTintTextureEnabled=e,q.MarkAllMaterialsAsDirty(1))}static get SheenTextureEnabled(){return this._SheenTextureEnabled}static set SheenTextureEnabled(e){this._SheenTextureEnabled!==e&&(this._SheenTextureEnabled=e,q.MarkAllMaterialsAsDirty(1))}static get AnisotropicTextureEnabled(){return this._AnisotropicTextureEnabled}static set AnisotropicTextureEnabled(e){this._AnisotropicTextureEnabled!==e&&(this._AnisotropicTextureEnabled=e,q.MarkAllMaterialsAsDirty(1))}static get ThicknessTextureEnabled(){return this._ThicknessTextureEnabled}static set ThicknessTextureEnabled(e){this._ThicknessTextureEnabled!==e&&(this._ThicknessTextureEnabled=e,q.MarkAllMaterialsAsDirty(1))}static get RefractionIntensityTextureEnabled(){return this._ThicknessTextureEnabled}static set RefractionIntensityTextureEnabled(e){this._RefractionIntensityTextureEnabled!==e&&(this._RefractionIntensityTextureEnabled=e,q.MarkAllMaterialsAsDirty(1))}static get TranslucencyIntensityTextureEnabled(){return this._ThicknessTextureEnabled}static set TranslucencyIntensityTextureEnabled(e){this._TranslucencyIntensityTextureEnabled!==e&&(this._TranslucencyIntensityTextureEnabled=e,q.MarkAllMaterialsAsDirty(1))}static get IridescenceTextureEnabled(){return this._IridescenceTextureEnabled}static set IridescenceTextureEnabled(e){this._IridescenceTextureEnabled!==e&&(this._IridescenceTextureEnabled=e,q.MarkAllMaterialsAsDirty(1))}}S._DiffuseTextureEnabled=!0;S._DetailTextureEnabled=!0;S._AmbientTextureEnabled=!0;S._OpacityTextureEnabled=!0;S._ReflectionTextureEnabled=!0;S._EmissiveTextureEnabled=!0;S._SpecularTextureEnabled=!0;S._BumpTextureEnabled=!0;S._LightmapTextureEnabled=!0;S._RefractionTextureEnabled=!0;S._ColorGradingTextureEnabled=!0;S._FresnelEnabled=!0;S._ClearCoatTextureEnabled=!0;S._ClearCoatBumpTextureEnabled=!0;S._ClearCoatTintTextureEnabled=!0;S._SheenTextureEnabled=!0;S._AnisotropicTextureEnabled=!0;S._ThicknessTextureEnabled=!0;S._RefractionIntensityTextureEnabled=!0;S._TranslucencyIntensityTextureEnabled=!0;S._IridescenceTextureEnabled=!0;const ge=[Math.sqrt(1/(4*Math.PI)),-Math.sqrt(3/(4*Math.PI)),Math.sqrt(3/(4*Math.PI)),-Math.sqrt(3/(4*Math.PI)),Math.sqrt(15/(4*Math.PI)),-Math.sqrt(15/(4*Math.PI)),Math.sqrt(5/(16*Math.PI)),-Math.sqrt(15/(4*Math.PI)),Math.sqrt(15/(16*Math.PI))],Ir=[()=>1,h=>h.y,h=>h.z,h=>h.x,h=>h.x*h.y,h=>h.y*h.z,h=>3*h.z*h.z-1,h=>h.x*h.z,h=>h.x*h.x-h.y*h.y],Ce=(h,e)=>ge[h]*Ir[h](e),Ie=[Math.PI,2*Math.PI/3,2*Math.PI/3,2*Math.PI/3,Math.PI/4,Math.PI/4,Math.PI/4,Math.PI/4,Math.PI/4];class $e{constructor(){this.preScaled=!1,this.l00=v.Zero(),this.l1_1=v.Zero(),this.l10=v.Zero(),this.l11=v.Zero(),this.l2_2=v.Zero(),this.l2_1=v.Zero(),this.l20=v.Zero(),this.l21=v.Zero(),this.l22=v.Zero()}addLight(e,t,i){P.Vector3[0].set(t.r,t.g,t.b);const r=P.Vector3[0],n=P.Vector3[1];r.scaleToRef(i,n),n.scaleToRef(Ce(0,e),P.Vector3[2]),this.l00.addInPlace(P.Vector3[2]),n.scaleToRef(Ce(1,e),P.Vector3[2]),this.l1_1.addInPlace(P.Vector3[2]),n.scaleToRef(Ce(2,e),P.Vector3[2]),this.l10.addInPlace(P.Vector3[2]),n.scaleToRef(Ce(3,e),P.Vector3[2]),this.l11.addInPlace(P.Vector3[2]),n.scaleToRef(Ce(4,e),P.Vector3[2]),this.l2_2.addInPlace(P.Vector3[2]),n.scaleToRef(Ce(5,e),P.Vector3[2]),this.l2_1.addInPlace(P.Vector3[2]),n.scaleToRef(Ce(6,e),P.Vector3[2]),this.l20.addInPlace(P.Vector3[2]),n.scaleToRef(Ce(7,e),P.Vector3[2]),this.l21.addInPlace(P.Vector3[2]),n.scaleToRef(Ce(8,e),P.Vector3[2]),this.l22.addInPlace(P.Vector3[2])}scaleInPlace(e){this.l00.scaleInPlace(e),this.l1_1.scaleInPlace(e),this.l10.scaleInPlace(e),this.l11.scaleInPlace(e),this.l2_2.scaleInPlace(e),this.l2_1.scaleInPlace(e),this.l20.scaleInPlace(e),this.l21.scaleInPlace(e),this.l22.scaleInPlace(e)}convertIncidentRadianceToIrradiance(){this.l00.scaleInPlace(Ie[0]),this.l1_1.scaleInPlace(Ie[1]),this.l10.scaleInPlace(Ie[2]),this.l11.scaleInPlace(Ie[3]),this.l2_2.scaleInPlace(Ie[4]),this.l2_1.scaleInPlace(Ie[5]),this.l20.scaleInPlace(Ie[6]),this.l21.scaleInPlace(Ie[7]),this.l22.scaleInPlace(Ie[8])}convertIrradianceToLambertianRadiance(){this.scaleInPlace(1/Math.PI)}preScaleForRendering(){this.preScaled=!0,this.l00.scaleInPlace(ge[0]),this.l1_1.scaleInPlace(ge[1]),this.l10.scaleInPlace(ge[2]),this.l11.scaleInPlace(ge[3]),this.l2_2.scaleInPlace(ge[4]),this.l2_1.scaleInPlace(ge[5]),this.l20.scaleInPlace(ge[6]),this.l21.scaleInPlace(ge[7]),this.l22.scaleInPlace(ge[8])}updateFromArray(e){return v.FromArrayToRef(e[0],0,this.l00),v.FromArrayToRef(e[1],0,this.l1_1),v.FromArrayToRef(e[2],0,this.l10),v.FromArrayToRef(e[3],0,this.l11),v.FromArrayToRef(e[4],0,this.l2_2),v.FromArrayToRef(e[5],0,this.l2_1),v.FromArrayToRef(e[6],0,this.l20),v.FromArrayToRef(e[7],0,this.l21),v.FromArrayToRef(e[8],0,this.l22),this}updateFromFloatsArray(e){return v.FromFloatsToRef(e[0],e[1],e[2],this.l00),v.FromFloatsToRef(e[3],e[4],e[5],this.l1_1),v.FromFloatsToRef(e[6],e[7],e[8],this.l10),v.FromFloatsToRef(e[9],e[10],e[11],this.l11),v.FromFloatsToRef(e[12],e[13],e[14],this.l2_2),v.FromFloatsToRef(e[15],e[16],e[17],this.l2_1),v.FromFloatsToRef(e[18],e[19],e[20],this.l20),v.FromFloatsToRef(e[21],e[22],e[23],this.l21),v.FromFloatsToRef(e[24],e[25],e[26],this.l22),this}static FromArray(e){return new $e().updateFromArray(e)}static FromPolynomial(e){const t=new $e;return t.l00=e.xx.scale(.376127).add(e.yy.scale(.376127)).add(e.zz.scale(.376126)),t.l1_1=e.y.scale(.977204),t.l10=e.z.scale(.977204),t.l11=e.x.scale(.977204),t.l2_2=e.xy.scale(1.16538),t.l2_1=e.yz.scale(1.16538),t.l20=e.zz.scale(1.34567).subtract(e.xx.scale(.672834)).subtract(e.yy.scale(.672834)),t.l21=e.zx.scale(1.16538),t.l22=e.xx.scale(1.16538).subtract(e.yy.scale(1.16538)),t.l1_1.scaleInPlace(-1),t.l11.scaleInPlace(-1),t.l2_1.scaleInPlace(-1),t.l21.scaleInPlace(-1),t.scaleInPlace(Math.PI),t}}class ht{constructor(){this.x=v.Zero(),this.y=v.Zero(),this.z=v.Zero(),this.xx=v.Zero(),this.yy=v.Zero(),this.zz=v.Zero(),this.xy=v.Zero(),this.yz=v.Zero(),this.zx=v.Zero()}get preScaledHarmonics(){return this._harmonics||(this._harmonics=$e.FromPolynomial(this)),this._harmonics.preScaled||this._harmonics.preScaleForRendering(),this._harmonics}addAmbient(e){P.Vector3[0].copyFromFloats(e.r,e.g,e.b);const t=P.Vector3[0];this.xx.addInPlace(t),this.yy.addInPlace(t),this.zz.addInPlace(t)}scaleInPlace(e){this.x.scaleInPlace(e),this.y.scaleInPlace(e),this.z.scaleInPlace(e),this.xx.scaleInPlace(e),this.yy.scaleInPlace(e),this.zz.scaleInPlace(e),this.yz.scaleInPlace(e),this.zx.scaleInPlace(e),this.xy.scaleInPlace(e)}updateFromHarmonics(e){return this._harmonics=e,this.x.copyFrom(e.l11),this.x.scaleInPlace(1.02333).scaleInPlace(-1),this.y.copyFrom(e.l1_1),this.y.scaleInPlace(1.02333).scaleInPlace(-1),this.z.copyFrom(e.l10),this.z.scaleInPlace(1.02333),this.xx.copyFrom(e.l00),P.Vector3[0].copyFrom(e.l20).scaleInPlace(.247708),P.Vector3[1].copyFrom(e.l22).scaleInPlace(.429043),this.xx.scaleInPlace(.886277).subtractInPlace(P.Vector3[0]).addInPlace(P.Vector3[1]),this.yy.copyFrom(e.l00),this.yy.scaleInPlace(.886277).subtractInPlace(P.Vector3[0]).subtractInPlace(P.Vector3[1]),this.zz.copyFrom(e.l00),P.Vector3[0].copyFrom(e.l20).scaleInPlace(.495417),this.zz.scaleInPlace(.886277).addInPlace(P.Vector3[0]),this.yz.copyFrom(e.l2_1),this.yz.scaleInPlace(.858086).scaleInPlace(-1),this.zx.copyFrom(e.l21),this.zx.scaleInPlace(.858086).scaleInPlace(-1),this.xy.copyFrom(e.l2_2),this.xy.scaleInPlace(.858086),this.scaleInPlace(1/Math.PI),this}static FromHarmonics(e){return new ht().updateFromHarmonics(e)}static FromArray(e){const t=new ht;return v.FromArrayToRef(e[0],0,t.x),v.FromArrayToRef(e[1],0,t.y),v.FromArrayToRef(e[2],0,t.z),v.FromArrayToRef(e[3],0,t.xx),v.FromArrayToRef(e[4],0,t.yy),v.FromArrayToRef(e[5],0,t.zz),v.FromArrayToRef(e[6],0,t.yz),v.FromArrayToRef(e[7],0,t.zx),v.FromArrayToRef(e[8],0,t.xy),t}}class Be{constructor(e,t,i,r){this.name=e,this.worldAxisForNormal=t,this.worldAxisForFileX=i,this.worldAxisForFileY=r}}class hi{static ConvertCubeMapTextureToSphericalPolynomial(e){var t;if(!e.isCube)return null;(t=e.getScene())===null||t===void 0||t.getEngine().flushFramebuffer();const i=e.getSize().width,r=e.readPixels(0,void 0,void 0,!1),n=e.readPixels(1,void 0,void 0,!1);let s,a;e.isRenderTarget?(s=e.readPixels(3,void 0,void 0,!1),a=e.readPixels(2,void 0,void 0,!1)):(s=e.readPixels(2,void 0,void 0,!1),a=e.readPixels(3,void 0,void 0,!1));const o=e.readPixels(4,void 0,void 0,!1),l=e.readPixels(5,void 0,void 0,!1),c=e.gammaSpace,f=5;let d=0;return(e.textureType==1||e.textureType==2)&&(d=1),new Promise(_=>{Promise.all([n,r,s,a,o,l]).then(([u,p,g,T,C,R])=>{const b={size:i,right:p,left:u,up:g,down:T,front:C,back:R,format:f,type:d,gammaSpace:c};_(this.ConvertCubeMapToSphericalPolynomial(b))})})}static _AreaElement(e,t){return Math.atan2(e*t,Math.sqrt(e*e+t*t+1))}static ConvertCubeMapToSphericalPolynomial(e){const t=new $e;let i=0;const r=2/e.size,n=r,s=.5*r,a=s-1;for(let d=0;d<6;d++){const _=this._FileFaces[d],u=e[_.name];let p=a;const g=e.format===5?4:3;for(let T=0;T<e.size;T++){let C=a;for(let R=0;R<e.size;R++){const b=_.worldAxisForFileX.scale(C).add(_.worldAxisForFileY.scale(p)).add(_.worldAxisForNormal);b.normalize();const G=this._AreaElement(C-s,p-s)-this._AreaElement(C-s,p+s)-this._AreaElement(C+s,p-s)+this._AreaElement(C+s,p+s);let X=u[T*e.size*g+R*g+0],L=u[T*e.size*g+R*g+1],O=u[T*e.size*g+R*g+2];isNaN(X)&&(X=0),isNaN(L)&&(L=0),isNaN(O)&&(O=0),e.type===0&&(X/=255,L/=255,O/=255),e.gammaSpace&&(X=Math.pow(Ne.Clamp(X),Tt),L=Math.pow(Ne.Clamp(L),Tt),O=Math.pow(Ne.Clamp(O),Tt));const D=4096;X=Ne.Clamp(X,0,D),L=Ne.Clamp(L,0,D),O=Ne.Clamp(O,0,D);const K=new Z(X,L,O);t.addLight(b,K,G),i+=G,C+=r}p+=n}}const f=4*Math.PI*6/6/i;return t.scaleInPlace(f),t.convertIncidentRadianceToIrradiance(),t.convertIrradianceToLambertianRadiance(),ht.FromHarmonics(t)}}hi._FileFaces=[new Be("right",new v(1,0,0),new v(0,0,-1),new v(0,-1,0)),new Be("left",new v(-1,0,0),new v(0,0,1),new v(0,-1,0)),new Be("up",new v(0,1,0),new v(1,0,0),new v(0,0,1)),new Be("down",new v(0,-1,0),new v(1,0,0),new v(0,0,-1)),new Be("front",new v(0,0,1),new v(1,0,0),new v(0,-1,0)),new Be("back",new v(0,0,-1),new v(-1,0,0),new v(0,-1,0))];Q.prototype.forceSphericalPolynomialsRecompute=function(){this._texture&&(this._texture._sphericalPolynomial=null,this._texture._sphericalPolynomialPromise=null,this._texture._sphericalPolynomialComputed=!1)};Object.defineProperty(Q.prototype,"sphericalPolynomial",{get:function(){if(this._texture){if(this._texture._sphericalPolynomial||this._texture._sphericalPolynomialComputed)return this._texture._sphericalPolynomial;if(this._texture.isReady)return this._texture._sphericalPolynomialPromise||(this._texture._sphericalPolynomialPromise=hi.ConvertCubeMapTextureToSphericalPolynomial(this),this._texture._sphericalPolynomialPromise===null?this._texture._sphericalPolynomialComputed=!0:this._texture._sphericalPolynomialPromise.then(h=>{this._texture._sphericalPolynomial=h,this._texture._sphericalPolynomialComputed=!0})),null}return null},set:function(h){this._texture&&(this._texture._sphericalPolynomial=h)},enumerable:!0,configurable:!0});const xr="prePassDeclaration",Mr=`#ifdef PREPASS
#extension GL_EXT_draw_buffers : require
layout(location=0) out highp vec4 glFragData[{X}];highp vec4 gl_FragColor;
#ifdef PREPASS_DEPTH
varying highp vec3 vViewPos;
#endif
#ifdef PREPASS_VELOCITY
varying highp vec4 vCurrentPosition;varying highp vec4 vPreviousPosition;
#endif
#endif
`;x.IncludesShadersStore[xr]=Mr;const br="oitDeclaration",Nr=`#ifdef ORDER_INDEPENDENT_TRANSPARENCY
#extension GL_EXT_draw_buffers : require
layout(location=0) out vec2 depth; 
layout(location=1) out vec4 frontColor;
layout(location=2) out vec4 backColor;
#define MAX_DEPTH 99999.0
highp vec4 gl_FragColor;
uniform sampler2D oitDepthSampler;
uniform sampler2D oitFrontColorSampler;
#endif
`;x.IncludesShadersStore[br]=Nr;const yr="pbrFragmentDeclaration",Or=`uniform vec4 vEyePosition;
uniform vec3 vReflectionColor;
uniform vec4 vAlbedoColor;
uniform vec4 vLightingIntensity;
uniform vec4 vReflectivityColor;
uniform vec4 vMetallicReflectanceFactors;
uniform vec3 vEmissiveColor;
uniform float visibility;
uniform vec3 vAmbientColor;
#ifdef ALBEDO
uniform vec2 vAlbedoInfos;
#endif
#ifdef AMBIENT
uniform vec4 vAmbientInfos;
#endif
#ifdef BUMP
uniform vec3 vBumpInfos;
uniform vec2 vTangentSpaceParams;
#endif
#ifdef OPACITY
uniform vec2 vOpacityInfos;
#endif
#ifdef EMISSIVE
uniform vec2 vEmissiveInfos;
#endif
#ifdef LIGHTMAP
uniform vec2 vLightmapInfos;
#endif
#ifdef REFLECTIVITY
uniform vec3 vReflectivityInfos;
#endif
#ifdef MICROSURFACEMAP
uniform vec2 vMicroSurfaceSamplerInfos;
#endif
#if defined(REFLECTIONMAP_SPHERICAL) || defined(REFLECTIONMAP_PROJECTION) || defined(SS_REFRACTION) || defined(PREPASS)
uniform mat4 view;
#endif
#ifdef REFLECTION
uniform vec2 vReflectionInfos;
#ifdef REALTIME_FILTERING
uniform vec2 vReflectionFilteringInfo;
#endif
uniform mat4 reflectionMatrix;
uniform vec3 vReflectionMicrosurfaceInfos;
#if defined(USE_LOCAL_REFLECTIONMAP_CUBIC) && defined(REFLECTIONMAP_CUBIC)
uniform vec3 vReflectionPosition;
uniform vec3 vReflectionSize; 
#endif
#endif
#if defined(SS_REFRACTION) && defined(SS_USE_LOCAL_REFRACTIONMAP_CUBIC)
uniform vec3 vRefractionPosition;
uniform vec3 vRefractionSize; 
#endif
#ifdef CLEARCOAT
uniform vec2 vClearCoatParams;
uniform vec4 vClearCoatRefractionParams;
#if defined(CLEARCOAT_TEXTURE) || defined(CLEARCOAT_TEXTURE_ROUGHNESS)
uniform vec4 vClearCoatInfos;
#endif
#ifdef CLEARCOAT_TEXTURE
uniform mat4 clearCoatMatrix;
#endif
#ifdef CLEARCOAT_TEXTURE_ROUGHNESS
uniform mat4 clearCoatRoughnessMatrix;
#endif
#ifdef CLEARCOAT_BUMP
uniform vec2 vClearCoatBumpInfos;
uniform vec2 vClearCoatTangentSpaceParams;
uniform mat4 clearCoatBumpMatrix;
#endif
#ifdef CLEARCOAT_TINT
uniform vec4 vClearCoatTintParams;
uniform float clearCoatColorAtDistance;
#ifdef CLEARCOAT_TINT_TEXTURE
uniform vec2 vClearCoatTintInfos;
uniform mat4 clearCoatTintMatrix;
#endif
#endif
#endif
#ifdef IRIDESCENCE
uniform vec4 vIridescenceParams;
#if defined(IRIDESCENCE_TEXTURE) || defined(IRIDESCENCE_THICKNESS_TEXTURE)
uniform vec4 vIridescenceInfos;
#endif
#ifdef IRIDESCENCE_TEXTURE
uniform mat4 iridescenceMatrix;
#endif
#ifdef IRIDESCENCE_THICKNESS_TEXTURE
uniform mat4 iridescenceThicknessMatrix;
#endif
#endif
#ifdef ANISOTROPIC
uniform vec3 vAnisotropy;
#ifdef ANISOTROPIC_TEXTURE
uniform vec2 vAnisotropyInfos;
uniform mat4 anisotropyMatrix;
#endif
#endif
#ifdef SHEEN
uniform vec4 vSheenColor;
#ifdef SHEEN_ROUGHNESS
uniform float vSheenRoughness;
#endif
#if defined(SHEEN_TEXTURE) || defined(SHEEN_TEXTURE_ROUGHNESS)
uniform vec4 vSheenInfos;
#endif
#ifdef SHEEN_TEXTURE
uniform mat4 sheenMatrix;
#endif
#ifdef SHEEN_TEXTURE_ROUGHNESS
uniform mat4 sheenRoughnessMatrix;
#endif
#endif
#ifdef SUBSURFACE
#ifdef SS_REFRACTION
uniform vec4 vRefractionMicrosurfaceInfos;
uniform vec4 vRefractionInfos;
uniform mat4 refractionMatrix;
#ifdef REALTIME_FILTERING
uniform vec2 vRefractionFilteringInfo;
#endif
#endif
#ifdef SS_THICKNESSANDMASK_TEXTURE
uniform vec2 vThicknessInfos;
uniform mat4 thicknessMatrix;
#endif
#ifdef SS_REFRACTIONINTENSITY_TEXTURE
uniform vec2 vRefractionIntensityInfos;
uniform mat4 refractionIntensityMatrix;
#endif
#ifdef SS_TRANSLUCENCYINTENSITY_TEXTURE
uniform vec2 vTranslucencyIntensityInfos;
uniform mat4 translucencyIntensityMatrix;
#endif
uniform vec2 vThicknessParam;
uniform vec3 vDiffusionDistance;
uniform vec4 vTintColor;
uniform vec3 vSubSurfaceIntensity;
#endif
#ifdef PREPASS
#ifdef SS_SCATTERING
uniform float scatteringDiffusionProfile;
#endif
#endif
#if DEBUGMODE>0
uniform vec2 vDebugMode;
#endif
#ifdef DETAIL
uniform vec4 vDetailInfos;
#endif
#ifdef USESPHERICALFROMREFLECTIONMAP
#ifdef SPHERICAL_HARMONICS
uniform vec3 vSphericalL00;
uniform vec3 vSphericalL1_1;
uniform vec3 vSphericalL10;
uniform vec3 vSphericalL11;
uniform vec3 vSphericalL2_2;
uniform vec3 vSphericalL2_1;
uniform vec3 vSphericalL20;
uniform vec3 vSphericalL21;
uniform vec3 vSphericalL22;
#else
uniform vec3 vSphericalX;
uniform vec3 vSphericalY;
uniform vec3 vSphericalZ;
uniform vec3 vSphericalXX_ZZ;
uniform vec3 vSphericalYY_ZZ;
uniform vec3 vSphericalZZ;
uniform vec3 vSphericalXY;
uniform vec3 vSphericalYZ;
uniform vec3 vSphericalZX;
#endif
#endif
#define ADDITIONAL_FRAGMENT_DECLARATION
`;x.IncludesShadersStore[yr]=Or;const Lr="sceneUboDeclaration",Dr=`layout(std140,column_major) uniform;
uniform Scene {
mat4 viewProjection;
#ifdef MULTIVIEW
mat4 viewProjectionR;
#endif 
mat4 view;
mat4 projection;
vec4 vEyePosition;
};
`;x.IncludesShadersStore[Lr]=Dr;const Pr="meshUboDeclaration",Fr=`#ifdef WEBGL2
uniform mat4 world;
uniform float visibility;
#else
layout(std140,column_major) uniform;
uniform Mesh
{
mat4 world;
float visibility;
};
#endif
#define WORLD_UBO
`;x.IncludesShadersStore[Pr]=Fr;const wr="pbrUboDeclaration",Ur=`layout(std140,column_major) uniform;
uniform Material {
vec2 vAlbedoInfos;
vec4 vAmbientInfos;
vec2 vOpacityInfos;
vec2 vEmissiveInfos;
vec2 vLightmapInfos;
vec3 vReflectivityInfos;
vec2 vMicroSurfaceSamplerInfos;
vec2 vReflectionInfos;
vec2 vReflectionFilteringInfo;
vec3 vReflectionPosition;
vec3 vReflectionSize;
vec3 vBumpInfos;
mat4 albedoMatrix;
mat4 ambientMatrix;
mat4 opacityMatrix;
mat4 emissiveMatrix;
mat4 lightmapMatrix;
mat4 reflectivityMatrix;
mat4 microSurfaceSamplerMatrix;
mat4 bumpMatrix;
vec2 vTangentSpaceParams;
mat4 reflectionMatrix;
vec3 vReflectionColor;
vec4 vAlbedoColor;
vec4 vLightingIntensity;
vec3 vReflectionMicrosurfaceInfos;
float pointSize;
vec4 vReflectivityColor;
vec3 vEmissiveColor;
vec3 vAmbientColor;
vec2 vDebugMode;
vec4 vMetallicReflectanceFactors;
vec2 vMetallicReflectanceInfos;
mat4 metallicReflectanceMatrix;
vec2 vReflectanceInfos;
mat4 reflectanceMatrix;
vec3 vSphericalL00;
vec3 vSphericalL1_1;
vec3 vSphericalL10;
vec3 vSphericalL11;
vec3 vSphericalL2_2;
vec3 vSphericalL2_1;
vec3 vSphericalL20;
vec3 vSphericalL21;
vec3 vSphericalL22;
vec3 vSphericalX;
vec3 vSphericalY;
vec3 vSphericalZ;
vec3 vSphericalXX_ZZ;
vec3 vSphericalYY_ZZ;
vec3 vSphericalZZ;
vec3 vSphericalXY;
vec3 vSphericalYZ;
vec3 vSphericalZX;
#define ADDITIONAL_UBO_DECLARATION
};
#include<sceneUboDeclaration>
#include<meshUboDeclaration>
`;x.IncludesShadersStore[wr]=Ur;const Br="mainUVVaryingDeclaration",Vr=`#ifdef MAINUV{X}
varying vec2 vMainUV{X};
#endif
`;x.IncludesShadersStore[Br]=Vr;const Gr="pbrFragmentExtraDeclaration",Xr=`varying vec3 vPositionW;
#if DEBUGMODE>0
varying vec4 vClipSpacePosition;
#endif
#include<mainUVVaryingDeclaration>[1..7]
#ifdef NORMAL
varying vec3 vNormalW;
#if defined(USESPHERICALFROMREFLECTIONMAP) && defined(USESPHERICALINVERTEX)
varying vec3 vEnvironmentIrradiance;
#endif
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vec4 vColor;
#endif
`;x.IncludesShadersStore[Gr]=Xr;const kr="lightFragmentDeclaration",Hr=`#ifdef LIGHT{X}
uniform vec4 vLightData{X};
uniform vec4 vLightDiffuse{X};
#ifdef SPECULARTERM
uniform vec4 vLightSpecular{X};
#else
vec4 vLightSpecular{X}=vec4(0.);
#endif
#ifdef SHADOW{X}
#ifdef SHADOWCSM{X}
uniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{X}];
uniform float viewFrustumZ{X}[SHADOWCSMNUM_CASCADES{X}];
uniform float frustumLengths{X}[SHADOWCSMNUM_CASCADES{X}];
uniform float cascadeBlendFactor{X};
varying vec4 vPositionFromLight{X}[SHADOWCSMNUM_CASCADES{X}];
varying float vDepthMetric{X}[SHADOWCSMNUM_CASCADES{X}];
varying vec4 vPositionFromCamera{X};
#if defined(SHADOWPCSS{X})
uniform highp sampler2DArrayShadow shadowSampler{X};
uniform highp sampler2DArray depthSampler{X};
uniform vec2 lightSizeUVCorrection{X}[SHADOWCSMNUM_CASCADES{X}];
uniform float depthCorrection{X}[SHADOWCSMNUM_CASCADES{X}];
uniform float penumbraDarkness{X};
#elif defined(SHADOWPCF{X})
uniform highp sampler2DArrayShadow shadowSampler{X};
#else
uniform highp sampler2DArray shadowSampler{X};
#endif
#ifdef SHADOWCSMDEBUG{X}
const vec3 vCascadeColorsMultiplier{X}[8]=vec3[8]
(
vec3 ( 1.5,0.0,0.0 ),
vec3 ( 0.0,1.5,0.0 ),
vec3 ( 0.0,0.0,5.5 ),
vec3 ( 1.5,0.0,5.5 ),
vec3 ( 1.5,1.5,0.0 ),
vec3 ( 1.0,1.0,1.0 ),
vec3 ( 0.0,1.0,5.5 ),
vec3 ( 0.5,3.5,0.75 )
);
vec3 shadowDebug{X};
#endif
#ifdef SHADOWCSMUSESHADOWMAXZ{X}
int index{X}=-1;
#else
int index{X}=SHADOWCSMNUM_CASCADES{X}-1;
#endif
float diff{X}=0.;
#elif defined(SHADOWCUBE{X})
uniform samplerCube shadowSampler{X};
#else
varying vec4 vPositionFromLight{X};
varying float vDepthMetric{X};
#if defined(SHADOWPCSS{X})
uniform highp sampler2DShadow shadowSampler{X};
uniform highp sampler2D depthSampler{X};
#elif defined(SHADOWPCF{X})
uniform highp sampler2DShadow shadowSampler{X};
#else
uniform sampler2D shadowSampler{X};
#endif
uniform mat4 lightMatrix{X};
#endif
uniform vec4 shadowsInfo{X};
uniform vec2 depthValues{X};
#endif
#ifdef SPOTLIGHT{X}
uniform vec4 vLightDirection{X};
uniform vec4 vLightFalloff{X};
#elif defined(POINTLIGHT{X})
uniform vec4 vLightFalloff{X};
#elif defined(HEMILIGHT{X})
uniform vec3 vLightGround{X};
#endif
#ifdef PROJECTEDLIGHTTEXTURE{X}
uniform mat4 textureProjectionMatrix{X};
uniform sampler2D projectionLightSampler{X};
#endif
#endif
`;x.IncludesShadersStore[kr]=Hr;const zr="lightUboDeclaration",Wr=`#ifdef LIGHT{X}
uniform Light{X}
{
vec4 vLightData;
vec4 vLightDiffuse;
vec4 vLightSpecular;
#ifdef SPOTLIGHT{X}
vec4 vLightDirection;
vec4 vLightFalloff;
#elif defined(POINTLIGHT{X})
vec4 vLightFalloff;
#elif defined(HEMILIGHT{X})
vec3 vLightGround;
#endif
vec4 shadowsInfo;
vec2 depthValues;
} light{X};
#ifdef PROJECTEDLIGHTTEXTURE{X}
uniform mat4 textureProjectionMatrix{X};
uniform sampler2D projectionLightSampler{X};
#endif
#ifdef SHADOW{X}
#ifdef SHADOWCSM{X}
uniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{X}];
uniform float viewFrustumZ{X}[SHADOWCSMNUM_CASCADES{X}];
uniform float frustumLengths{X}[SHADOWCSMNUM_CASCADES{X}];
uniform float cascadeBlendFactor{X};
varying vec4 vPositionFromLight{X}[SHADOWCSMNUM_CASCADES{X}];
varying float vDepthMetric{X}[SHADOWCSMNUM_CASCADES{X}];
varying vec4 vPositionFromCamera{X};
#if defined(SHADOWPCSS{X})
uniform highp sampler2DArrayShadow shadowSampler{X};
uniform highp sampler2DArray depthSampler{X};
uniform vec2 lightSizeUVCorrection{X}[SHADOWCSMNUM_CASCADES{X}];
uniform float depthCorrection{X}[SHADOWCSMNUM_CASCADES{X}];
uniform float penumbraDarkness{X};
#elif defined(SHADOWPCF{X})
uniform highp sampler2DArrayShadow shadowSampler{X};
#else
uniform highp sampler2DArray shadowSampler{X};
#endif
#ifdef SHADOWCSMDEBUG{X}
const vec3 vCascadeColorsMultiplier{X}[8]=vec3[8]
(
vec3 ( 1.5,0.0,0.0 ),
vec3 ( 0.0,1.5,0.0 ),
vec3 ( 0.0,0.0,5.5 ),
vec3 ( 1.5,0.0,5.5 ),
vec3 ( 1.5,1.5,0.0 ),
vec3 ( 1.0,1.0,1.0 ),
vec3 ( 0.0,1.0,5.5 ),
vec3 ( 0.5,3.5,0.75 )
);
vec3 shadowDebug{X};
#endif
#ifdef SHADOWCSMUSESHADOWMAXZ{X}
int index{X}=-1;
#else
int index{X}=SHADOWCSMNUM_CASCADES{X}-1;
#endif
float diff{X}=0.;
#elif defined(SHADOWCUBE{X})
uniform samplerCube shadowSampler{X}; 
#else
varying vec4 vPositionFromLight{X};
varying float vDepthMetric{X};
#if defined(SHADOWPCSS{X})
uniform highp sampler2DShadow shadowSampler{X};
uniform highp sampler2D depthSampler{X};
#elif defined(SHADOWPCF{X})
uniform highp sampler2DShadow shadowSampler{X};
#else
uniform sampler2D shadowSampler{X};
#endif
uniform mat4 lightMatrix{X};
#endif
#endif
#endif
`;x.IncludesShadersStore[zr]=Wr;const Yr="samplerFragmentDeclaration",Qr=`#ifdef _DEFINENAME_
#if _DEFINENAME_DIRECTUV==1
#define v_VARYINGNAME_UV vMainUV1
#elif _DEFINENAME_DIRECTUV==2
#define v_VARYINGNAME_UV vMainUV2
#elif _DEFINENAME_DIRECTUV==3
#define v_VARYINGNAME_UV vMainUV3
#elif _DEFINENAME_DIRECTUV==4
#define v_VARYINGNAME_UV vMainUV4
#elif _DEFINENAME_DIRECTUV==5
#define v_VARYINGNAME_UV vMainUV5
#elif _DEFINENAME_DIRECTUV==6
#define v_VARYINGNAME_UV vMainUV6
#else
varying vec2 v_VARYINGNAME_UV;
#endif
uniform sampler2D _SAMPLERNAME_Sampler;
#endif
`;x.IncludesShadersStore[Yr]=Qr;const Kr="samplerFragmentAlternateDeclaration",qr=`#ifdef _DEFINENAME_
#if _DEFINENAME_DIRECTUV==1
#define v_VARYINGNAME_UV vMainUV1
#elif _DEFINENAME_DIRECTUV==2
#define v_VARYINGNAME_UV vMainUV2
#elif _DEFINENAME_DIRECTUV==3
#define v_VARYINGNAME_UV vMainUV3
#elif _DEFINENAME_DIRECTUV==4
#define v_VARYINGNAME_UV vMainUV4
#elif _DEFINENAME_DIRECTUV==5
#define v_VARYINGNAME_UV vMainUV5
#elif _DEFINENAME_DIRECTUV==6
#define v_VARYINGNAME_UV vMainUV6
#else
varying vec2 v_VARYINGNAME_UV;
#endif
#endif
`;x.IncludesShadersStore[Kr]=qr;const jr="pbrFragmentSamplersDeclaration",Zr=`#include<samplerFragmentDeclaration>(_DEFINENAME_,ALBEDO,_VARYINGNAME_,Albedo,_SAMPLERNAME_,albedo)
#include<samplerFragmentDeclaration>(_DEFINENAME_,AMBIENT,_VARYINGNAME_,Ambient,_SAMPLERNAME_,ambient)
#include<samplerFragmentDeclaration>(_DEFINENAME_,OPACITY,_VARYINGNAME_,Opacity,_SAMPLERNAME_,opacity)
#include<samplerFragmentDeclaration>(_DEFINENAME_,EMISSIVE,_VARYINGNAME_,Emissive,_SAMPLERNAME_,emissive)
#include<samplerFragmentDeclaration>(_DEFINENAME_,LIGHTMAP,_VARYINGNAME_,Lightmap,_SAMPLERNAME_,lightmap)
#include<samplerFragmentDeclaration>(_DEFINENAME_,REFLECTIVITY,_VARYINGNAME_,Reflectivity,_SAMPLERNAME_,reflectivity)
#include<samplerFragmentDeclaration>(_DEFINENAME_,MICROSURFACEMAP,_VARYINGNAME_,MicroSurfaceSampler,_SAMPLERNAME_,microSurface)
#include<samplerFragmentDeclaration>(_DEFINENAME_,METALLIC_REFLECTANCE,_VARYINGNAME_,MetallicReflectance,_SAMPLERNAME_,metallicReflectance)
#include<samplerFragmentDeclaration>(_DEFINENAME_,REFLECTANCE,_VARYINGNAME_,Reflectance,_SAMPLERNAME_,reflectance)
#ifdef CLEARCOAT
#include<samplerFragmentDeclaration>(_DEFINENAME_,CLEARCOAT_TEXTURE,_VARYINGNAME_,ClearCoat,_SAMPLERNAME_,clearCoat)
#include<samplerFragmentAlternateDeclaration>(_DEFINENAME_,CLEARCOAT_TEXTURE_ROUGHNESS,_VARYINGNAME_,ClearCoatRoughness)
#if defined(CLEARCOAT_TEXTURE_ROUGHNESS) && !defined(CLEARCOAT_TEXTURE_ROUGHNESS_IDENTICAL)
uniform sampler2D clearCoatRoughnessSampler;
#endif
#include<samplerFragmentDeclaration>(_DEFINENAME_,CLEARCOAT_BUMP,_VARYINGNAME_,ClearCoatBump,_SAMPLERNAME_,clearCoatBump)
#include<samplerFragmentDeclaration>(_DEFINENAME_,CLEARCOAT_TINT_TEXTURE,_VARYINGNAME_,ClearCoatTint,_SAMPLERNAME_,clearCoatTint)
#endif
#ifdef IRIDESCENCE
#include<samplerFragmentDeclaration>(_DEFINENAME_,IRIDESCENCE_TEXTURE,_VARYINGNAME_,Iridescence,_SAMPLERNAME_,iridescence)
#include<samplerFragmentDeclaration>(_DEFINENAME_,IRIDESCENCE_THICKNESS_TEXTURE,_VARYINGNAME_,IridescenceThickness,_SAMPLERNAME_,iridescenceThickness)
#endif
#ifdef SHEEN
#include<samplerFragmentDeclaration>(_DEFINENAME_,SHEEN_TEXTURE,_VARYINGNAME_,Sheen,_SAMPLERNAME_,sheen)
#include<samplerFragmentAlternateDeclaration>(_DEFINENAME_,SHEEN_TEXTURE_ROUGHNESS,_VARYINGNAME_,SheenRoughness)
#if defined(SHEEN_ROUGHNESS) && defined(SHEEN_TEXTURE_ROUGHNESS) && !defined(SHEEN_TEXTURE_ROUGHNESS_IDENTICAL)
uniform sampler2D sheenRoughnessSampler;
#endif
#endif
#ifdef ANISOTROPIC
#include<samplerFragmentDeclaration>(_DEFINENAME_,ANISOTROPIC_TEXTURE,_VARYINGNAME_,Anisotropy,_SAMPLERNAME_,anisotropy)
#endif
#ifdef REFLECTION
#ifdef REFLECTIONMAP_3D
#define sampleReflection(s,c) textureCube(s,c)
uniform samplerCube reflectionSampler;
#ifdef LODBASEDMICROSFURACE
#define sampleReflectionLod(s,c,l) textureCubeLodEXT(s,c,l)
#else
uniform samplerCube reflectionSamplerLow;
uniform samplerCube reflectionSamplerHigh;
#endif
#ifdef USEIRRADIANCEMAP
uniform samplerCube irradianceSampler;
#endif
#else
#define sampleReflection(s,c) texture2D(s,c)
uniform sampler2D reflectionSampler;
#ifdef LODBASEDMICROSFURACE
#define sampleReflectionLod(s,c,l) texture2DLodEXT(s,c,l)
#else
uniform sampler2D reflectionSamplerLow;
uniform sampler2D reflectionSamplerHigh;
#endif
#ifdef USEIRRADIANCEMAP
uniform sampler2D irradianceSampler;
#endif
#endif
#ifdef REFLECTIONMAP_SKYBOX
varying vec3 vPositionUVW;
#else
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
varying vec3 vDirectionW;
#endif
#endif
#endif
#ifdef ENVIRONMENTBRDF
uniform sampler2D environmentBrdfSampler;
#endif
#ifdef SUBSURFACE
#ifdef SS_REFRACTION
#ifdef SS_REFRACTIONMAP_3D
#define sampleRefraction(s,c) textureCube(s,c)
uniform samplerCube refractionSampler;
#ifdef LODBASEDMICROSFURACE
#define sampleRefractionLod(s,c,l) textureCubeLodEXT(s,c,l)
#else
uniform samplerCube refractionSamplerLow;
uniform samplerCube refractionSamplerHigh;
#endif
#else
#define sampleRefraction(s,c) texture2D(s,c)
uniform sampler2D refractionSampler;
#ifdef LODBASEDMICROSFURACE
#define sampleRefractionLod(s,c,l) texture2DLodEXT(s,c,l)
#else
uniform sampler2D refractionSamplerLow;
uniform sampler2D refractionSamplerHigh;
#endif
#endif
#endif
#include<samplerFragmentDeclaration>(_DEFINENAME_,SS_THICKNESSANDMASK_TEXTURE,_VARYINGNAME_,Thickness,_SAMPLERNAME_,thickness)
#include<samplerFragmentDeclaration>(_DEFINENAME_,SS_REFRACTIONINTENSITY_TEXTURE,_VARYINGNAME_,RefractionIntensity,_SAMPLERNAME_,refractionIntensity)
#include<samplerFragmentDeclaration>(_DEFINENAME_,SS_TRANSLUCENCYINTENSITY_TEXTURE,_VARYINGNAME_,TranslucencyIntensity,_SAMPLERNAME_,translucencyIntensity)
#endif
`;x.IncludesShadersStore[jr]=Zr;const Jr="imageProcessingDeclaration",$r=`#ifdef EXPOSURE
uniform float exposureLinear;
#endif
#ifdef CONTRAST
uniform float contrast;
#endif
#if defined(VIGNETTE) || defined(DITHER)
uniform vec2 vInverseScreenSize;
#endif
#ifdef VIGNETTE
uniform vec4 vignetteSettings1;
uniform vec4 vignetteSettings2;
#endif
#ifdef COLORCURVES
uniform vec4 vCameraColorCurveNegative;
uniform vec4 vCameraColorCurveNeutral;
uniform vec4 vCameraColorCurvePositive;
#endif
#ifdef COLORGRADING
#ifdef COLORGRADING3D
uniform highp sampler3D txColorTransform;
#else
uniform sampler2D txColorTransform;
#endif
uniform vec4 colorTransformSettings;
#endif
#ifdef DITHER
uniform float ditherIntensity;
#endif
`;x.IncludesShadersStore[Jr]=$r;const en="clipPlaneFragmentDeclaration",tn=`#ifdef CLIPPLANE
varying float fClipDistance;
#endif
#ifdef CLIPPLANE2
varying float fClipDistance2;
#endif
#ifdef CLIPPLANE3
varying float fClipDistance3;
#endif
#ifdef CLIPPLANE4
varying float fClipDistance4;
#endif
#ifdef CLIPPLANE5
varying float fClipDistance5;
#endif
#ifdef CLIPPLANE6
varying float fClipDistance6;
#endif
`;x.IncludesShadersStore[en]=tn;const rn="logDepthDeclaration",nn=`#ifdef LOGARITHMICDEPTH
uniform float logarithmicDepthConstant;
varying float vFragmentDepth;
#endif
`;x.IncludesShadersStore[rn]=nn;const sn="fogFragmentDeclaration",an=`#ifdef FOG
#define FOGMODE_NONE 0.
#define FOGMODE_EXP 1.
#define FOGMODE_EXP2 2.
#define FOGMODE_LINEAR 3.
#define E 2.71828
uniform vec4 vFogInfos;
uniform vec3 vFogColor;
varying vec3 vFogDistance;
float CalcFogFactor()
{
float fogCoeff=1.0;
float fogStart=vFogInfos.y;
float fogEnd=vFogInfos.z;
float fogDensity=vFogInfos.w;
float fogDistance=length(vFogDistance);
if (FOGMODE_LINEAR==vFogInfos.x)
{
fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);
}
else if (FOGMODE_EXP==vFogInfos.x)
{
fogCoeff=1.0/pow(E,fogDistance*fogDensity);
}
else if (FOGMODE_EXP2==vFogInfos.x)
{
fogCoeff=1.0/pow(E,fogDistance*fogDistance*fogDensity*fogDensity);
}
return clamp(fogCoeff,0.0,1.0);
}
#endif
`;x.IncludesShadersStore[sn]=an;const on="subSurfaceScatteringFunctions",ln=`bool testLightingForSSS(float diffusionProfile)
{
return diffusionProfile<1.;
}`;x.IncludesShadersStore[on]=ln;const fn="importanceSampling",cn=`vec3 hemisphereCosSample(vec2 u) {
float phi=2.*PI*u.x;
float cosTheta2=1.-u.y;
float cosTheta=sqrt(cosTheta2);
float sinTheta=sqrt(1.-cosTheta2);
return vec3(sinTheta*cos(phi),sinTheta*sin(phi),cosTheta);
}
vec3 hemisphereImportanceSampleDggx(vec2 u,float a) {
float phi=2.*PI*u.x;
float cosTheta2=(1.-u.y)/(1.+(a+1.)*((a-1.)*u.y));
float cosTheta=sqrt(cosTheta2);
float sinTheta=sqrt(1.-cosTheta2);
return vec3(sinTheta*cos(phi),sinTheta*sin(phi),cosTheta);
}
vec3 hemisphereImportanceSampleDCharlie(vec2 u,float a) { 
float phi=2.*PI*u.x;
float sinTheta=pow(u.y,a/(2.*a+1.));
float cosTheta=sqrt(1.-sinTheta*sinTheta);
return vec3(sinTheta*cos(phi),sinTheta*sin(phi),cosTheta);
}`;x.IncludesShadersStore[fn]=cn;const hn="pbrHelperFunctions",dn=`#define RECIPROCAL_PI2 0.15915494
#define RECIPROCAL_PI 0.31830988618
#define MINIMUMVARIANCE 0.0005
float convertRoughnessToAverageSlope(float roughness)
{
return square(roughness)+MINIMUMVARIANCE;
}
float fresnelGrazingReflectance(float reflectance0) {
float reflectance90=saturate(reflectance0*25.0);
return reflectance90;
}
vec2 getAARoughnessFactors(vec3 normalVector) {
#ifdef SPECULARAA
vec3 nDfdx=dFdx(normalVector.xyz);
vec3 nDfdy=dFdy(normalVector.xyz);
float slopeSquare=max(dot(nDfdx,nDfdx),dot(nDfdy,nDfdy));
float geometricRoughnessFactor=pow(saturate(slopeSquare),0.333);
float geometricAlphaGFactor=sqrt(slopeSquare);
geometricAlphaGFactor*=0.75;
return vec2(geometricRoughnessFactor,geometricAlphaGFactor);
#else
return vec2(0.);
#endif
}
#ifdef ANISOTROPIC
vec2 getAnisotropicRoughness(float alphaG,float anisotropy) {
float alphaT=max(alphaG*(1.0+anisotropy),MINIMUMVARIANCE);
float alphaB=max(alphaG*(1.0-anisotropy),MINIMUMVARIANCE);
return vec2(alphaT,alphaB);
}
vec3 getAnisotropicBentNormals(const vec3 T,const vec3 B,const vec3 N,const vec3 V,float anisotropy) {
vec3 anisotropicFrameDirection=anisotropy>=0.0 ? B : T;
vec3 anisotropicFrameTangent=cross(normalize(anisotropicFrameDirection),V);
vec3 anisotropicFrameNormal=cross(anisotropicFrameTangent,anisotropicFrameDirection);
vec3 anisotropicNormal=normalize(mix(N,anisotropicFrameNormal,abs(anisotropy)));
return anisotropicNormal;
}
#endif
#if defined(CLEARCOAT) || defined(SS_REFRACTION)
vec3 cocaLambert(vec3 alpha,float distance) {
return exp(-alpha*distance);
}
vec3 cocaLambert(float NdotVRefract,float NdotLRefract,vec3 alpha,float thickness) {
return cocaLambert(alpha,(thickness*((NdotLRefract+NdotVRefract)/(NdotLRefract*NdotVRefract))));
}
vec3 computeColorAtDistanceInMedia(vec3 color,float distance) {
return -log(color)/distance;
}
vec3 computeClearCoatAbsorption(float NdotVRefract,float NdotLRefract,vec3 clearCoatColor,float clearCoatThickness,float clearCoatIntensity) {
vec3 clearCoatAbsorption=mix(vec3(1.0),
cocaLambert(NdotVRefract,NdotLRefract,clearCoatColor,clearCoatThickness),
clearCoatIntensity);
return clearCoatAbsorption;
}
#endif
#ifdef MICROSURFACEAUTOMATIC
float computeDefaultMicroSurface(float microSurface,vec3 reflectivityColor)
{
const float kReflectivityNoAlphaWorkflow_SmoothnessMax=0.95;
float reflectivityLuminance=getLuminance(reflectivityColor);
float reflectivityLuma=sqrt(reflectivityLuminance);
microSurface=reflectivityLuma*kReflectivityNoAlphaWorkflow_SmoothnessMax;
return microSurface;
}
#endif
`;x.IncludesShadersStore[hn]=dn;const un="imageProcessingFunctions",_n=`#if defined(COLORGRADING) && !defined(COLORGRADING3D)
/** 
* Polyfill for SAMPLE_TEXTURE_3D,which is unsupported in WebGL.
* sampler3dSetting.x=textureOffset (0.5/textureSize).
* sampler3dSetting.y=textureSize.
*/
#define inline
vec3 sampleTexture3D(sampler2D colorTransform,vec3 color,vec2 sampler3dSetting)
{
float sliceSize=2.0*sampler3dSetting.x; 
#ifdef SAMPLER3DGREENDEPTH
float sliceContinuous=(color.g-sampler3dSetting.x)*sampler3dSetting.y;
#else
float sliceContinuous=(color.b-sampler3dSetting.x)*sampler3dSetting.y;
#endif
float sliceInteger=floor(sliceContinuous);
float sliceFraction=sliceContinuous-sliceInteger;
#ifdef SAMPLER3DGREENDEPTH
vec2 sliceUV=color.rb;
#else
vec2 sliceUV=color.rg;
#endif
sliceUV.x*=sliceSize;
sliceUV.x+=sliceInteger*sliceSize;
sliceUV=saturate(sliceUV);
vec4 slice0Color=texture2D(colorTransform,sliceUV);
sliceUV.x+=sliceSize;
sliceUV=saturate(sliceUV);
vec4 slice1Color=texture2D(colorTransform,sliceUV);
vec3 result=mix(slice0Color.rgb,slice1Color.rgb,sliceFraction);
#ifdef SAMPLER3DBGRMAP
color.rgb=result.rgb;
#else
color.rgb=result.bgr;
#endif
return color;
}
#endif
#ifdef TONEMAPPING_ACES
const mat3 ACESInputMat=mat3(
vec3(0.59719,0.07600,0.02840),
vec3(0.35458,0.90834,0.13383),
vec3(0.04823,0.01566,0.83777)
);
const mat3 ACESOutputMat=mat3(
vec3( 1.60475,-0.10208,-0.00327),
vec3(-0.53108, 1.10813,-0.07276),
vec3(-0.07367,-0.00605, 1.07602)
);
vec3 RRTAndODTFit(vec3 v)
{
vec3 a=v*(v+0.0245786)-0.000090537;
vec3 b=v*(0.983729*v+0.4329510)+0.238081;
return a/b;
}
vec3 ACESFitted(vec3 color)
{
color=ACESInputMat*color;
color=RRTAndODTFit(color);
color=ACESOutputMat*color;
color=saturate(color);
return color;
}
#endif
#define CUSTOM_IMAGEPROCESSINGFUNCTIONS_DEFINITIONS
vec4 applyImageProcessing(vec4 result) {
#define CUSTOM_IMAGEPROCESSINGFUNCTIONS_UPDATERESULT_ATSTART
#ifdef EXPOSURE
result.rgb*=exposureLinear;
#endif
#ifdef VIGNETTE
vec2 viewportXY=gl_FragCoord.xy*vInverseScreenSize;
viewportXY=viewportXY*2.0-1.0;
vec3 vignetteXY1=vec3(viewportXY*vignetteSettings1.xy+vignetteSettings1.zw,1.0);
float vignetteTerm=dot(vignetteXY1,vignetteXY1);
float vignette=pow(vignetteTerm,vignetteSettings2.w);
vec3 vignetteColor=vignetteSettings2.rgb;
#ifdef VIGNETTEBLENDMODEMULTIPLY
vec3 vignetteColorMultiplier=mix(vignetteColor,vec3(1,1,1),vignette);
result.rgb*=vignetteColorMultiplier;
#endif
#ifdef VIGNETTEBLENDMODEOPAQUE
result.rgb=mix(vignetteColor,result.rgb,vignette);
#endif
#endif
#ifdef TONEMAPPING
#ifdef TONEMAPPING_ACES
result.rgb=ACESFitted(result.rgb);
#else
const float tonemappingCalibration=1.590579;
result.rgb=1.0-exp2(-tonemappingCalibration*result.rgb);
#endif
#endif
result.rgb=toGammaSpace(result.rgb);
result.rgb=saturate(result.rgb);
#ifdef CONTRAST
vec3 resultHighContrast=result.rgb*result.rgb*(3.0-2.0*result.rgb);
if (contrast<1.0) {
result.rgb=mix(vec3(0.5,0.5,0.5),result.rgb,contrast);
} else {
result.rgb=mix(result.rgb,resultHighContrast,contrast-1.0);
}
#endif
#ifdef COLORGRADING
vec3 colorTransformInput=result.rgb*colorTransformSettings.xxx+colorTransformSettings.yyy;
#ifdef COLORGRADING3D
vec3 colorTransformOutput=texture(txColorTransform,colorTransformInput).rgb;
#else
vec3 colorTransformOutput=sampleTexture3D(txColorTransform,colorTransformInput,colorTransformSettings.yz).rgb;
#endif
result.rgb=mix(result.rgb,colorTransformOutput,colorTransformSettings.www);
#endif
#ifdef COLORCURVES
float luma=getLuminance(result.rgb);
vec2 curveMix=clamp(vec2(luma*3.0-1.5,luma*-3.0+1.5),vec2(0.0),vec2(1.0));
vec4 colorCurve=vCameraColorCurveNeutral+curveMix.x*vCameraColorCurvePositive-curveMix.y*vCameraColorCurveNegative;
result.rgb*=colorCurve.rgb;
result.rgb=mix(vec3(luma),result.rgb,colorCurve.a);
#endif
#ifdef DITHER
float rand=getRand(gl_FragCoord.xy*vInverseScreenSize);
float dither=mix(-ditherIntensity,ditherIntensity,rand);
result.rgb=saturate(result.rgb+vec3(dither));
#endif
#define CUSTOM_IMAGEPROCESSINGFUNCTIONS_UPDATERESULT_ATEND
return result;
}`;x.IncludesShadersStore[un]=_n;const mn="shadowsFragmentFunctions",pn=`#ifdef SHADOWS
#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)
#define TEXTUREFUNC(s,c,l) texture2DLodEXT(s,c,l)
#else
#define TEXTUREFUNC(s,c,b) texture2D(s,c,b)
#endif
#ifndef SHADOWFLOAT
float unpack(vec4 color)
{
const vec4 bit_shift=vec4(1.0/(255.0*255.0*255.0),1.0/(255.0*255.0),1.0/255.0,1.0);
return dot(color,bit_shift);
}
#endif
float computeFallOff(float value,vec2 clipSpace,float frustumEdgeFalloff)
{
float mask=smoothstep(1.0-frustumEdgeFalloff,1.00000012,clamp(dot(clipSpace,clipSpace),0.,1.));
return mix(value,1.0,mask);
}
#define inline
float computeShadowCube(vec3 lightPosition,samplerCube shadowSampler,float darkness,vec2 depthValues)
{
vec3 directionToLight=vPositionW-lightPosition;
float depth=length(directionToLight);
depth=(depth+depthValues.x)/(depthValues.y);
depth=clamp(depth,0.,1.0);
directionToLight=normalize(directionToLight);
directionToLight.y=-directionToLight.y;
#ifndef SHADOWFLOAT
float shadow=unpack(textureCube(shadowSampler,directionToLight));
#else
float shadow=textureCube(shadowSampler,directionToLight).x;
#endif
return depth>shadow ? darkness : 1.0;
}
#define inline
float computeShadowWithPoissonSamplingCube(vec3 lightPosition,samplerCube shadowSampler,float mapSize,float darkness,vec2 depthValues)
{
vec3 directionToLight=vPositionW-lightPosition;
float depth=length(directionToLight);
depth=(depth+depthValues.x)/(depthValues.y);
depth=clamp(depth,0.,1.0);
directionToLight=normalize(directionToLight);
directionToLight.y=-directionToLight.y;
float visibility=1.;
vec3 poissonDisk[4];
poissonDisk[0]=vec3(-1.0,1.0,-1.0);
poissonDisk[1]=vec3(1.0,-1.0,-1.0);
poissonDisk[2]=vec3(-1.0,-1.0,-1.0);
poissonDisk[3]=vec3(1.0,-1.0,1.0);
#ifndef SHADOWFLOAT
if (unpack(textureCube(shadowSampler,directionToLight+poissonDisk[0]*mapSize))<depth) visibility-=0.25;
if (unpack(textureCube(shadowSampler,directionToLight+poissonDisk[1]*mapSize))<depth) visibility-=0.25;
if (unpack(textureCube(shadowSampler,directionToLight+poissonDisk[2]*mapSize))<depth) visibility-=0.25;
if (unpack(textureCube(shadowSampler,directionToLight+poissonDisk[3]*mapSize))<depth) visibility-=0.25;
#else
if (textureCube(shadowSampler,directionToLight+poissonDisk[0]*mapSize).x<depth) visibility-=0.25;
if (textureCube(shadowSampler,directionToLight+poissonDisk[1]*mapSize).x<depth) visibility-=0.25;
if (textureCube(shadowSampler,directionToLight+poissonDisk[2]*mapSize).x<depth) visibility-=0.25;
if (textureCube(shadowSampler,directionToLight+poissonDisk[3]*mapSize).x<depth) visibility-=0.25;
#endif
return min(1.0,visibility+darkness);
}
#define inline
float computeShadowWithESMCube(vec3 lightPosition,samplerCube shadowSampler,float darkness,float depthScale,vec2 depthValues)
{
vec3 directionToLight=vPositionW-lightPosition;
float depth=length(directionToLight);
depth=(depth+depthValues.x)/(depthValues.y);
float shadowPixelDepth=clamp(depth,0.,1.0);
directionToLight=normalize(directionToLight);
directionToLight.y=-directionToLight.y;
#ifndef SHADOWFLOAT
float shadowMapSample=unpack(textureCube(shadowSampler,directionToLight));
#else
float shadowMapSample=textureCube(shadowSampler,directionToLight).x;
#endif
float esm=1.0-clamp(exp(min(87.,depthScale*shadowPixelDepth))*shadowMapSample,0.,1.-darkness); 
return esm;
}
#define inline
float computeShadowWithCloseESMCube(vec3 lightPosition,samplerCube shadowSampler,float darkness,float depthScale,vec2 depthValues)
{
vec3 directionToLight=vPositionW-lightPosition;
float depth=length(directionToLight);
depth=(depth+depthValues.x)/(depthValues.y);
float shadowPixelDepth=clamp(depth,0.,1.0);
directionToLight=normalize(directionToLight);
directionToLight.y=-directionToLight.y;
#ifndef SHADOWFLOAT
float shadowMapSample=unpack(textureCube(shadowSampler,directionToLight));
#else
float shadowMapSample=textureCube(shadowSampler,directionToLight).x;
#endif
float esm=clamp(exp(min(87.,-depthScale*(shadowPixelDepth-shadowMapSample))),darkness,1.);
return esm;
}
#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)
#define inline
float computeShadowCSM(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArray shadowSampler,float darkness,float frustumEdgeFalloff)
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec2 uv=0.5*clipSpace.xy+vec2(0.5);
vec3 uvLayer=vec3(uv.x,uv.y,layer);
float shadowPixelDepth=clamp(depthMetric,0.,1.0);
#ifndef SHADOWFLOAT
float shadow=unpack(texture2D(shadowSampler,uvLayer));
#else
float shadow=texture2D(shadowSampler,uvLayer).x;
#endif
return shadowPixelDepth>shadow ? computeFallOff(darkness,clipSpace.xy,frustumEdgeFalloff) : 1.;
}
#endif
#define inline
float computeShadow(vec4 vPositionFromLight,float depthMetric,sampler2D shadowSampler,float darkness,float frustumEdgeFalloff)
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec2 uv=0.5*clipSpace.xy+vec2(0.5);
if (uv.x<0. || uv.x>1.0 || uv.y<0. || uv.y>1.0)
{
return 1.0;
}
else
{
float shadowPixelDepth=clamp(depthMetric,0.,1.0);
#ifndef SHADOWFLOAT
float shadow=unpack(TEXTUREFUNC(shadowSampler,uv,0.));
#else
float shadow=TEXTUREFUNC(shadowSampler,uv,0.).x;
#endif
return shadowPixelDepth>shadow ? computeFallOff(darkness,clipSpace.xy,frustumEdgeFalloff) : 1.;
}
}
#define inline
float computeShadowWithPoissonSampling(vec4 vPositionFromLight,float depthMetric,sampler2D shadowSampler,float mapSize,float darkness,float frustumEdgeFalloff)
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec2 uv=0.5*clipSpace.xy+vec2(0.5);
if (uv.x<0. || uv.x>1.0 || uv.y<0. || uv.y>1.0)
{
return 1.0;
}
else
{
float shadowPixelDepth=clamp(depthMetric,0.,1.0);
float visibility=1.;
vec2 poissonDisk[4];
poissonDisk[0]=vec2(-0.94201624,-0.39906216);
poissonDisk[1]=vec2(0.94558609,-0.76890725);
poissonDisk[2]=vec2(-0.094184101,-0.92938870);
poissonDisk[3]=vec2(0.34495938,0.29387760);
#ifndef SHADOWFLOAT
if (unpack(TEXTUREFUNC(shadowSampler,uv+poissonDisk[0]*mapSize,0.))<shadowPixelDepth) visibility-=0.25;
if (unpack(TEXTUREFUNC(shadowSampler,uv+poissonDisk[1]*mapSize,0.))<shadowPixelDepth) visibility-=0.25;
if (unpack(TEXTUREFUNC(shadowSampler,uv+poissonDisk[2]*mapSize,0.))<shadowPixelDepth) visibility-=0.25;
if (unpack(TEXTUREFUNC(shadowSampler,uv+poissonDisk[3]*mapSize,0.))<shadowPixelDepth) visibility-=0.25;
#else
if (TEXTUREFUNC(shadowSampler,uv+poissonDisk[0]*mapSize,0.).x<shadowPixelDepth) visibility-=0.25;
if (TEXTUREFUNC(shadowSampler,uv+poissonDisk[1]*mapSize,0.).x<shadowPixelDepth) visibility-=0.25;
if (TEXTUREFUNC(shadowSampler,uv+poissonDisk[2]*mapSize,0.).x<shadowPixelDepth) visibility-=0.25;
if (TEXTUREFUNC(shadowSampler,uv+poissonDisk[3]*mapSize,0.).x<shadowPixelDepth) visibility-=0.25;
#endif
return computeFallOff(min(1.0,visibility+darkness),clipSpace.xy,frustumEdgeFalloff);
}
}
#define inline
float computeShadowWithESM(vec4 vPositionFromLight,float depthMetric,sampler2D shadowSampler,float darkness,float depthScale,float frustumEdgeFalloff)
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec2 uv=0.5*clipSpace.xy+vec2(0.5);
if (uv.x<0. || uv.x>1.0 || uv.y<0. || uv.y>1.0)
{
return 1.0;
}
else
{
float shadowPixelDepth=clamp(depthMetric,0.,1.0);
#ifndef SHADOWFLOAT
float shadowMapSample=unpack(TEXTUREFUNC(shadowSampler,uv,0.));
#else
float shadowMapSample=TEXTUREFUNC(shadowSampler,uv,0.).x;
#endif
float esm=1.0-clamp(exp(min(87.,depthScale*shadowPixelDepth))*shadowMapSample,0.,1.-darkness);
return computeFallOff(esm,clipSpace.xy,frustumEdgeFalloff);
}
}
#define inline
float computeShadowWithCloseESM(vec4 vPositionFromLight,float depthMetric,sampler2D shadowSampler,float darkness,float depthScale,float frustumEdgeFalloff)
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec2 uv=0.5*clipSpace.xy+vec2(0.5);
if (uv.x<0. || uv.x>1.0 || uv.y<0. || uv.y>1.0)
{
return 1.0;
}
else
{
float shadowPixelDepth=clamp(depthMetric,0.,1.0); 
#ifndef SHADOWFLOAT
float shadowMapSample=unpack(TEXTUREFUNC(shadowSampler,uv,0.));
#else
float shadowMapSample=TEXTUREFUNC(shadowSampler,uv,0.).x;
#endif
float esm=clamp(exp(min(87.,-depthScale*(shadowPixelDepth-shadowMapSample))),darkness,1.);
return computeFallOff(esm,clipSpace.xy,frustumEdgeFalloff);
}
}
#ifdef IS_NDC_HALF_ZRANGE
#define ZINCLIP clipSpace.z
#else
#define ZINCLIP uvDepth.z
#endif
#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)
#define GREATEST_LESS_THAN_ONE 0.99999994
#define inline
float computeShadowWithCSMPCF1(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArrayShadow shadowSampler,float darkness,float frustumEdgeFalloff)
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));
uvDepth.z=clamp(ZINCLIP,0.,GREATEST_LESS_THAN_ONE);
vec4 uvDepthLayer=vec4(uvDepth.x,uvDepth.y,layer,uvDepth.z);
float shadow=texture2D(shadowSampler,uvDepthLayer);
shadow=mix(darkness,1.,shadow);
return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);
}
#define inline
float computeShadowWithCSMPCF3(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArrayShadow shadowSampler,vec2 shadowMapSizeAndInverse,float darkness,float frustumEdgeFalloff)
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));
uvDepth.z=clamp(ZINCLIP,0.,GREATEST_LESS_THAN_ONE);
vec2 uv=uvDepth.xy*shadowMapSizeAndInverse.x; 
uv+=0.5; 
vec2 st=fract(uv); 
vec2 base_uv=floor(uv)-0.5; 
base_uv*=shadowMapSizeAndInverse.y; 
vec2 uvw0=3.-2.*st;
vec2 uvw1=1.+2.*st;
vec2 u=vec2((2.-st.x)/uvw0.x-1.,st.x/uvw1.x+1.)*shadowMapSizeAndInverse.y;
vec2 v=vec2((2.-st.y)/uvw0.y-1.,st.y/uvw1.y+1.)*shadowMapSizeAndInverse.y;
float shadow=0.;
shadow+=uvw0.x*uvw0.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[0],v[0]),layer,uvDepth.z));
shadow+=uvw1.x*uvw0.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[1],v[0]),layer,uvDepth.z));
shadow+=uvw0.x*uvw1.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[0],v[1]),layer,uvDepth.z));
shadow+=uvw1.x*uvw1.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[1],v[1]),layer,uvDepth.z));
shadow=shadow/16.;
shadow=mix(darkness,1.,shadow);
return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);
}
#define inline
float computeShadowWithCSMPCF5(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArrayShadow shadowSampler,vec2 shadowMapSizeAndInverse,float darkness,float frustumEdgeFalloff)
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));
uvDepth.z=clamp(ZINCLIP,0.,GREATEST_LESS_THAN_ONE);
vec2 uv=uvDepth.xy*shadowMapSizeAndInverse.x; 
uv+=0.5; 
vec2 st=fract(uv); 
vec2 base_uv=floor(uv)-0.5; 
base_uv*=shadowMapSizeAndInverse.y; 
vec2 uvw0=4.-3.*st;
vec2 uvw1=vec2(7.);
vec2 uvw2=1.+3.*st;
vec3 u=vec3((3.-2.*st.x)/uvw0.x-2.,(3.+st.x)/uvw1.x,st.x/uvw2.x+2.)*shadowMapSizeAndInverse.y;
vec3 v=vec3((3.-2.*st.y)/uvw0.y-2.,(3.+st.y)/uvw1.y,st.y/uvw2.y+2.)*shadowMapSizeAndInverse.y;
float shadow=0.;
shadow+=uvw0.x*uvw0.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[0],v[0]),layer,uvDepth.z));
shadow+=uvw1.x*uvw0.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[1],v[0]),layer,uvDepth.z));
shadow+=uvw2.x*uvw0.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[2],v[0]),layer,uvDepth.z));
shadow+=uvw0.x*uvw1.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[0],v[1]),layer,uvDepth.z));
shadow+=uvw1.x*uvw1.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[1],v[1]),layer,uvDepth.z));
shadow+=uvw2.x*uvw1.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[2],v[1]),layer,uvDepth.z));
shadow+=uvw0.x*uvw2.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[0],v[2]),layer,uvDepth.z));
shadow+=uvw1.x*uvw2.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[1],v[2]),layer,uvDepth.z));
shadow+=uvw2.x*uvw2.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[2],v[2]),layer,uvDepth.z));
shadow=shadow/144.;
shadow=mix(darkness,1.,shadow);
return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);
}
#define inline
float computeShadowWithPCF1(vec4 vPositionFromLight,float depthMetric,highp sampler2DShadow shadowSampler,float darkness,float frustumEdgeFalloff)
{
if (depthMetric>1.0 || depthMetric<0.0) {
return 1.0;
}
else
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));
uvDepth.z=ZINCLIP;
float shadow=TEXTUREFUNC(shadowSampler,uvDepth,0.);
shadow=mix(darkness,1.,shadow);
return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);
}
}
#define inline
float computeShadowWithPCF3(vec4 vPositionFromLight,float depthMetric,highp sampler2DShadow shadowSampler,vec2 shadowMapSizeAndInverse,float darkness,float frustumEdgeFalloff)
{
if (depthMetric>1.0 || depthMetric<0.0) {
return 1.0;
}
else
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));
uvDepth.z=ZINCLIP;
vec2 uv=uvDepth.xy*shadowMapSizeAndInverse.x; 
uv+=0.5; 
vec2 st=fract(uv); 
vec2 base_uv=floor(uv)-0.5; 
base_uv*=shadowMapSizeAndInverse.y; 
vec2 uvw0=3.-2.*st;
vec2 uvw1=1.+2.*st;
vec2 u=vec2((2.-st.x)/uvw0.x-1.,st.x/uvw1.x+1.)*shadowMapSizeAndInverse.y;
vec2 v=vec2((2.-st.y)/uvw0.y-1.,st.y/uvw1.y+1.)*shadowMapSizeAndInverse.y;
float shadow=0.;
shadow+=uvw0.x*uvw0.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[0],v[0]),uvDepth.z),0.);
shadow+=uvw1.x*uvw0.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[1],v[0]),uvDepth.z),0.);
shadow+=uvw0.x*uvw1.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[0],v[1]),uvDepth.z),0.);
shadow+=uvw1.x*uvw1.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[1],v[1]),uvDepth.z),0.);
shadow=shadow/16.;
shadow=mix(darkness,1.,shadow);
return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);
}
}
#define inline
float computeShadowWithPCF5(vec4 vPositionFromLight,float depthMetric,highp sampler2DShadow shadowSampler,vec2 shadowMapSizeAndInverse,float darkness,float frustumEdgeFalloff)
{
if (depthMetric>1.0 || depthMetric<0.0) {
return 1.0;
}
else
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));
uvDepth.z=ZINCLIP;
vec2 uv=uvDepth.xy*shadowMapSizeAndInverse.x; 
uv+=0.5; 
vec2 st=fract(uv); 
vec2 base_uv=floor(uv)-0.5; 
base_uv*=shadowMapSizeAndInverse.y; 
vec2 uvw0=4.-3.*st;
vec2 uvw1=vec2(7.);
vec2 uvw2=1.+3.*st;
vec3 u=vec3((3.-2.*st.x)/uvw0.x-2.,(3.+st.x)/uvw1.x,st.x/uvw2.x+2.)*shadowMapSizeAndInverse.y;
vec3 v=vec3((3.-2.*st.y)/uvw0.y-2.,(3.+st.y)/uvw1.y,st.y/uvw2.y+2.)*shadowMapSizeAndInverse.y;
float shadow=0.;
shadow+=uvw0.x*uvw0.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[0],v[0]),uvDepth.z),0.);
shadow+=uvw1.x*uvw0.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[1],v[0]),uvDepth.z),0.);
shadow+=uvw2.x*uvw0.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[2],v[0]),uvDepth.z),0.);
shadow+=uvw0.x*uvw1.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[0],v[1]),uvDepth.z),0.);
shadow+=uvw1.x*uvw1.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[1],v[1]),uvDepth.z),0.);
shadow+=uvw2.x*uvw1.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[2],v[1]),uvDepth.z),0.);
shadow+=uvw0.x*uvw2.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[0],v[2]),uvDepth.z),0.);
shadow+=uvw1.x*uvw2.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[1],v[2]),uvDepth.z),0.);
shadow+=uvw2.x*uvw2.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[2],v[2]),uvDepth.z),0.);
shadow=shadow/144.;
shadow=mix(darkness,1.,shadow);
return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);
}
}
const vec3 PoissonSamplers32[64]=vec3[64](
vec3(0.06407013,0.05409927,0.),
vec3(0.7366577,0.5789394,0.),
vec3(-0.6270542,-0.5320278,0.),
vec3(-0.4096107,0.8411095,0.),
vec3(0.6849564,-0.4990818,0.),
vec3(-0.874181,-0.04579735,0.),
vec3(0.9989998,0.0009880066,0.),
vec3(-0.004920578,-0.9151649,0.),
vec3(0.1805763,0.9747483,0.),
vec3(-0.2138451,0.2635818,0.),
vec3(0.109845,0.3884785,0.),
vec3(0.06876755,-0.3581074,0.),
vec3(0.374073,-0.7661266,0.),
vec3(0.3079132,-0.1216763,0.),
vec3(-0.3794335,-0.8271583,0.),
vec3(-0.203878,-0.07715034,0.),
vec3(0.5912697,0.1469799,0.),
vec3(-0.88069,0.3031784,0.),
vec3(0.5040108,0.8283722,0.),
vec3(-0.5844124,0.5494877,0.),
vec3(0.6017799,-0.1726654,0.),
vec3(-0.5554981,0.1559997,0.),
vec3(-0.3016369,-0.3900928,0.),
vec3(-0.5550632,-0.1723762,0.),
vec3(0.925029,0.2995041,0.),
vec3(-0.2473137,0.5538505,0.),
vec3(0.9183037,-0.2862392,0.),
vec3(0.2469421,0.6718712,0.),
vec3(0.3916397,-0.4328209,0.),
vec3(-0.03576927,-0.6220032,0.),
vec3(-0.04661255,0.7995201,0.),
vec3(0.4402924,0.3640312,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.),
vec3(0.,0.,0.)
);
const vec3 PoissonSamplers64[64]=vec3[64](
vec3(-0.613392,0.617481,0.),
vec3(0.170019,-0.040254,0.),
vec3(-0.299417,0.791925,0.),
vec3(0.645680,0.493210,0.),
vec3(-0.651784,0.717887,0.),
vec3(0.421003,0.027070,0.),
vec3(-0.817194,-0.271096,0.),
vec3(-0.705374,-0.668203,0.),
vec3(0.977050,-0.108615,0.),
vec3(0.063326,0.142369,0.),
vec3(0.203528,0.214331,0.),
vec3(-0.667531,0.326090,0.),
vec3(-0.098422,-0.295755,0.),
vec3(-0.885922,0.215369,0.),
vec3(0.566637,0.605213,0.),
vec3(0.039766,-0.396100,0.),
vec3(0.751946,0.453352,0.),
vec3(0.078707,-0.715323,0.),
vec3(-0.075838,-0.529344,0.),
vec3(0.724479,-0.580798,0.),
vec3(0.222999,-0.215125,0.),
vec3(-0.467574,-0.405438,0.),
vec3(-0.248268,-0.814753,0.),
vec3(0.354411,-0.887570,0.),
vec3(0.175817,0.382366,0.),
vec3(0.487472,-0.063082,0.),
vec3(-0.084078,0.898312,0.),
vec3(0.488876,-0.783441,0.),
vec3(0.470016,0.217933,0.),
vec3(-0.696890,-0.549791,0.),
vec3(-0.149693,0.605762,0.),
vec3(0.034211,0.979980,0.),
vec3(0.503098,-0.308878,0.),
vec3(-0.016205,-0.872921,0.),
vec3(0.385784,-0.393902,0.),
vec3(-0.146886,-0.859249,0.),
vec3(0.643361,0.164098,0.),
vec3(0.634388,-0.049471,0.),
vec3(-0.688894,0.007843,0.),
vec3(0.464034,-0.188818,0.),
vec3(-0.440840,0.137486,0.),
vec3(0.364483,0.511704,0.),
vec3(0.034028,0.325968,0.),
vec3(0.099094,-0.308023,0.),
vec3(0.693960,-0.366253,0.),
vec3(0.678884,-0.204688,0.),
vec3(0.001801,0.780328,0.),
vec3(0.145177,-0.898984,0.),
vec3(0.062655,-0.611866,0.),
vec3(0.315226,-0.604297,0.),
vec3(-0.780145,0.486251,0.),
vec3(-0.371868,0.882138,0.),
vec3(0.200476,0.494430,0.),
vec3(-0.494552,-0.711051,0.),
vec3(0.612476,0.705252,0.),
vec3(-0.578845,-0.768792,0.),
vec3(-0.772454,-0.090976,0.),
vec3(0.504440,0.372295,0.),
vec3(0.155736,0.065157,0.),
vec3(0.391522,0.849605,0.),
vec3(-0.620106,-0.328104,0.),
vec3(0.789239,-0.419965,0.),
vec3(-0.545396,0.538133,0.),
vec3(-0.178564,-0.596057,0.)
);
#define inline
float computeShadowWithCSMPCSS(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArray depthSampler,highp sampler2DArrayShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff,int searchTapCount,int pcfTapCount,vec3[64] poissonSamplers,vec2 lightSizeUVCorrection,float depthCorrection,float penumbraDarkness)
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));
uvDepth.z=clamp(ZINCLIP,0.,GREATEST_LESS_THAN_ONE);
vec4 uvDepthLayer=vec4(uvDepth.x,uvDepth.y,layer,uvDepth.z);
float blockerDepth=0.0;
float sumBlockerDepth=0.0;
float numBlocker=0.0;
for (int i=0; i<searchTapCount; i ++) {
blockerDepth=texture2D(depthSampler,vec3(uvDepth.xy+(lightSizeUV*lightSizeUVCorrection*shadowMapSizeInverse*PoissonSamplers32[i].xy),layer)).r;
if (blockerDepth<depthMetric) {
sumBlockerDepth+=blockerDepth;
numBlocker++;
}
}
float avgBlockerDepth=sumBlockerDepth/numBlocker;
float AAOffset=shadowMapSizeInverse*10.;
float penumbraRatio=((depthMetric-avgBlockerDepth)*depthCorrection+AAOffset);
vec4 filterRadius=vec4(penumbraRatio*lightSizeUV*lightSizeUVCorrection*shadowMapSizeInverse,0.,0.);
float random=getRand(vPositionFromLight.xy);
float rotationAngle=random*3.1415926;
vec2 rotationVector=vec2(cos(rotationAngle),sin(rotationAngle));
float shadow=0.;
for (int i=0; i<pcfTapCount; i++) {
vec4 offset=vec4(poissonSamplers[i],0.);
offset=vec4(offset.x*rotationVector.x-offset.y*rotationVector.y,offset.y*rotationVector.x+offset.x*rotationVector.y,0.,0.);
shadow+=texture2D(shadowSampler,uvDepthLayer+offset*filterRadius);
}
shadow/=float(pcfTapCount);
shadow=mix(shadow,1.,min((depthMetric-avgBlockerDepth)*depthCorrection*penumbraDarkness,1.));
shadow=mix(darkness,1.,shadow);
if (numBlocker<1.0) {
return 1.0;
}
else
{
return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);
}
}
#define inline
float computeShadowWithPCSS(vec4 vPositionFromLight,float depthMetric,sampler2D depthSampler,highp sampler2DShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff,int searchTapCount,int pcfTapCount,vec3[64] poissonSamplers)
{
if (depthMetric>1.0 || depthMetric<0.0) {
return 1.0;
}
else
{
vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;
vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));
uvDepth.z=ZINCLIP;
float blockerDepth=0.0;
float sumBlockerDepth=0.0;
float numBlocker=0.0;
for (int i=0; i<searchTapCount; i ++) {
blockerDepth=TEXTUREFUNC(depthSampler,uvDepth.xy+(lightSizeUV*shadowMapSizeInverse*PoissonSamplers32[i].xy),0.).r;
if (blockerDepth<depthMetric) {
sumBlockerDepth+=blockerDepth;
numBlocker++;
}
}
if (numBlocker<1.0) {
return 1.0;
}
else
{
float avgBlockerDepth=sumBlockerDepth/numBlocker;
float AAOffset=shadowMapSizeInverse*10.;
float penumbraRatio=((depthMetric-avgBlockerDepth)+AAOffset);
float filterRadius=penumbraRatio*lightSizeUV*shadowMapSizeInverse;
float random=getRand(vPositionFromLight.xy);
float rotationAngle=random*3.1415926;
vec2 rotationVector=vec2(cos(rotationAngle),sin(rotationAngle));
float shadow=0.;
for (int i=0; i<pcfTapCount; i++) {
vec3 offset=poissonSamplers[i];
offset=vec3(offset.x*rotationVector.x-offset.y*rotationVector.y,offset.y*rotationVector.x+offset.x*rotationVector.y,0.);
shadow+=TEXTUREFUNC(shadowSampler,uvDepth+offset*filterRadius,0.);
}
shadow/=float(pcfTapCount);
shadow=mix(shadow,1.,depthMetric-avgBlockerDepth);
shadow=mix(darkness,1.,shadow);
return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);
}
}
}
#define inline
float computeShadowWithPCSS16(vec4 vPositionFromLight,float depthMetric,sampler2D depthSampler,highp sampler2DShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff)
{
return computeShadowWithPCSS(vPositionFromLight,depthMetric,depthSampler,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,16,16,PoissonSamplers32);
}
#define inline
float computeShadowWithPCSS32(vec4 vPositionFromLight,float depthMetric,sampler2D depthSampler,highp sampler2DShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff)
{
return computeShadowWithPCSS(vPositionFromLight,depthMetric,depthSampler,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,16,32,PoissonSamplers32);
}
#define inline
float computeShadowWithPCSS64(vec4 vPositionFromLight,float depthMetric,sampler2D depthSampler,highp sampler2DShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff)
{
return computeShadowWithPCSS(vPositionFromLight,depthMetric,depthSampler,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,32,64,PoissonSamplers64);
}
#define inline
float computeShadowWithCSMPCSS16(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArray depthSampler,highp sampler2DArrayShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff,vec2 lightSizeUVCorrection,float depthCorrection,float penumbraDarkness)
{
return computeShadowWithCSMPCSS(layer,vPositionFromLight,depthMetric,depthSampler,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,16,16,PoissonSamplers32,lightSizeUVCorrection,depthCorrection,penumbraDarkness);
}
#define inline
float computeShadowWithCSMPCSS32(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArray depthSampler,highp sampler2DArrayShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff,vec2 lightSizeUVCorrection,float depthCorrection,float penumbraDarkness)
{
return computeShadowWithCSMPCSS(layer,vPositionFromLight,depthMetric,depthSampler,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,16,32,PoissonSamplers32,lightSizeUVCorrection,depthCorrection,penumbraDarkness);
}
#define inline
float computeShadowWithCSMPCSS64(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArray depthSampler,highp sampler2DArrayShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff,vec2 lightSizeUVCorrection,float depthCorrection,float penumbraDarkness)
{
return computeShadowWithCSMPCSS(layer,vPositionFromLight,depthMetric,depthSampler,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,32,64,PoissonSamplers64,lightSizeUVCorrection,depthCorrection,penumbraDarkness);
}
#endif
#endif
`;x.IncludesShadersStore[mn]=pn;const En="harmonicsFunctions",gn=`#ifdef USESPHERICALFROMREFLECTIONMAP
#ifdef SPHERICAL_HARMONICS
vec3 computeEnvironmentIrradiance(vec3 normal) {
return vSphericalL00
+ vSphericalL1_1*(normal.y)
+ vSphericalL10*(normal.z)
+ vSphericalL11*(normal.x)
+ vSphericalL2_2*(normal.y*normal.x)
+ vSphericalL2_1*(normal.y*normal.z)
+ vSphericalL20*((3.0*normal.z*normal.z)-1.0)
+ vSphericalL21*(normal.z*normal.x)
+ vSphericalL22*(normal.x*normal.x-(normal.y*normal.y));
}
#else
vec3 computeEnvironmentIrradiance(vec3 normal) {
float Nx=normal.x;
float Ny=normal.y;
float Nz=normal.z;
vec3 C1=vSphericalZZ.rgb;
vec3 Cx=vSphericalX.rgb;
vec3 Cy=vSphericalY.rgb;
vec3 Cz=vSphericalZ.rgb;
vec3 Cxx_zz=vSphericalXX_ZZ.rgb;
vec3 Cyy_zz=vSphericalYY_ZZ.rgb;
vec3 Cxy=vSphericalXY.rgb;
vec3 Cyz=vSphericalYZ.rgb;
vec3 Czx=vSphericalZX.rgb;
vec3 a1=Cyy_zz*Ny+Cy;
vec3 a2=Cyz*Nz+a1;
vec3 b1=Czx*Nz+Cx;
vec3 b2=Cxy*Ny+b1;
vec3 b3=Cxx_zz*Nx+b2;
vec3 t1=Cz *Nz+C1;
vec3 t2=a2 *Ny+t1;
vec3 t3=b3 *Nx+t2;
return t3;
}
#endif
#endif
`;x.IncludesShadersStore[En]=gn;const An="pbrDirectLightingSetupFunctions",Tn=`struct preLightingInfo
{
vec3 lightOffset;
float lightDistanceSquared;
float lightDistance;
float attenuation;
vec3 L;
vec3 H;
float NdotV;
float NdotLUnclamped;
float NdotL;
float VdotH;
float roughness;
#ifdef IRIDESCENCE
float iridescenceIntensity;
#endif
};
preLightingInfo computePointAndSpotPreLightingInfo(vec4 lightData,vec3 V,vec3 N) {
preLightingInfo result;
result.lightOffset=lightData.xyz-vPositionW;
result.lightDistanceSquared=dot(result.lightOffset,result.lightOffset);
result.lightDistance=sqrt(result.lightDistanceSquared);
result.L=normalize(result.lightOffset);
result.H=normalize(V+result.L);
result.VdotH=saturate(dot(V,result.H));
result.NdotLUnclamped=dot(N,result.L);
result.NdotL=saturateEps(result.NdotLUnclamped);
return result;
}
preLightingInfo computeDirectionalPreLightingInfo(vec4 lightData,vec3 V,vec3 N) {
preLightingInfo result;
result.lightDistance=length(-lightData.xyz);
result.L=normalize(-lightData.xyz);
result.H=normalize(V+result.L);
result.VdotH=saturate(dot(V,result.H));
result.NdotLUnclamped=dot(N,result.L);
result.NdotL=saturateEps(result.NdotLUnclamped);
return result;
}
preLightingInfo computeHemisphericPreLightingInfo(vec4 lightData,vec3 V,vec3 N) {
preLightingInfo result;
result.NdotL=dot(N,lightData.xyz)*0.5+0.5;
result.NdotL=saturateEps(result.NdotL);
result.NdotLUnclamped=result.NdotL;
#ifdef SPECULARTERM
result.L=normalize(lightData.xyz);
result.H=normalize(V+result.L);
result.VdotH=saturate(dot(V,result.H));
#endif
return result;
}`;x.IncludesShadersStore[An]=Tn;const vn="pbrDirectLightingFalloffFunctions",Sn=`float computeDistanceLightFalloff_Standard(vec3 lightOffset,float range)
{
return max(0.,1.0-length(lightOffset)/range);
}
float computeDistanceLightFalloff_Physical(float lightDistanceSquared)
{
return 1.0/maxEps(lightDistanceSquared);
}
float computeDistanceLightFalloff_GLTF(float lightDistanceSquared,float inverseSquaredRange)
{
float lightDistanceFalloff=1.0/maxEps(lightDistanceSquared);
float factor=lightDistanceSquared*inverseSquaredRange;
float attenuation=saturate(1.0-factor*factor);
attenuation*=attenuation;
lightDistanceFalloff*=attenuation;
return lightDistanceFalloff;
}
float computeDistanceLightFalloff(vec3 lightOffset,float lightDistanceSquared,float range,float inverseSquaredRange)
{
#ifdef USEPHYSICALLIGHTFALLOFF
return computeDistanceLightFalloff_Physical(lightDistanceSquared);
#elif defined(USEGLTFLIGHTFALLOFF)
return computeDistanceLightFalloff_GLTF(lightDistanceSquared,inverseSquaredRange);
#else
return computeDistanceLightFalloff_Standard(lightOffset,range);
#endif
}
float computeDirectionalLightFalloff_Standard(vec3 lightDirection,vec3 directionToLightCenterW,float cosHalfAngle,float exponent)
{
float falloff=0.0;
float cosAngle=maxEps(dot(-lightDirection,directionToLightCenterW));
if (cosAngle>=cosHalfAngle)
{
falloff=max(0.,pow(cosAngle,exponent));
}
return falloff;
}
float computeDirectionalLightFalloff_Physical(vec3 lightDirection,vec3 directionToLightCenterW,float cosHalfAngle)
{
const float kMinusLog2ConeAngleIntensityRatio=6.64385618977; 
float concentrationKappa=kMinusLog2ConeAngleIntensityRatio/(1.0-cosHalfAngle);
vec4 lightDirectionSpreadSG=vec4(-lightDirection*concentrationKappa,-concentrationKappa);
float falloff=exp2(dot(vec4(directionToLightCenterW,1.0),lightDirectionSpreadSG));
return falloff;
}
float computeDirectionalLightFalloff_GLTF(vec3 lightDirection,vec3 directionToLightCenterW,float lightAngleScale,float lightAngleOffset)
{
float cd=dot(-lightDirection,directionToLightCenterW);
float falloff=saturate(cd*lightAngleScale+lightAngleOffset);
falloff*=falloff;
return falloff;
}
float computeDirectionalLightFalloff(vec3 lightDirection,vec3 directionToLightCenterW,float cosHalfAngle,float exponent,float lightAngleScale,float lightAngleOffset)
{
#ifdef USEPHYSICALLIGHTFALLOFF
return computeDirectionalLightFalloff_Physical(lightDirection,directionToLightCenterW,cosHalfAngle);
#elif defined(USEGLTFLIGHTFALLOFF)
return computeDirectionalLightFalloff_GLTF(lightDirection,directionToLightCenterW,lightAngleScale,lightAngleOffset);
#else
return computeDirectionalLightFalloff_Standard(lightDirection,directionToLightCenterW,cosHalfAngle,exponent);
#endif
}`;x.IncludesShadersStore[vn]=Sn;const Rn="pbrBRDFFunctions",Cn=`#define FRESNEL_MAXIMUM_ON_ROUGH 0.25
#ifdef MS_BRDF_ENERGY_CONSERVATION
vec3 getEnergyConservationFactor(const vec3 specularEnvironmentR0,const vec3 environmentBrdf) {
return 1.0+specularEnvironmentR0*(1.0/environmentBrdf.y-1.0);
}
#endif
#ifdef ENVIRONMENTBRDF
vec3 getBRDFLookup(float NdotV,float perceptualRoughness) {
vec2 UV=vec2(NdotV,perceptualRoughness);
vec4 brdfLookup=texture2D(environmentBrdfSampler,UV);
#ifdef ENVIRONMENTBRDF_RGBD
brdfLookup.rgb=fromRGBD(brdfLookup.rgba);
#endif
return brdfLookup.rgb;
}
vec3 getReflectanceFromBRDFLookup(const vec3 specularEnvironmentR0,const vec3 specularEnvironmentR90,const vec3 environmentBrdf) {
#ifdef BRDF_V_HEIGHT_CORRELATED
vec3 reflectance=(specularEnvironmentR90-specularEnvironmentR0)*environmentBrdf.x+specularEnvironmentR0*environmentBrdf.y;
#else
vec3 reflectance=specularEnvironmentR0*environmentBrdf.x+specularEnvironmentR90*environmentBrdf.y;
#endif
return reflectance;
}
vec3 getReflectanceFromBRDFLookup(const vec3 specularEnvironmentR0,const vec3 environmentBrdf) {
#ifdef BRDF_V_HEIGHT_CORRELATED
vec3 reflectance=mix(environmentBrdf.xxx,environmentBrdf.yyy,specularEnvironmentR0);
#else
vec3 reflectance=specularEnvironmentR0*environmentBrdf.x+environmentBrdf.y;
#endif
return reflectance;
}
#endif
/* NOT USED
#if defined(SHEEN) && defined(SHEEN_SOFTER)
float getBRDFLookupCharlieSheen(float NdotV,float perceptualRoughness)
{
float c=1.0-NdotV;
float c3=c*c*c;
return 0.65584461*c3+1.0/(4.16526551+exp(-7.97291361*perceptualRoughness+6.33516894));
}
#endif
*/
#if !defined(ENVIRONMENTBRDF) || defined(REFLECTIONMAP_SKYBOX) || defined(ALPHAFRESNEL)
vec3 getReflectanceFromAnalyticalBRDFLookup_Jones(float VdotN,vec3 reflectance0,vec3 reflectance90,float smoothness)
{
float weight=mix(FRESNEL_MAXIMUM_ON_ROUGH,1.0,smoothness);
return reflectance0+weight*(reflectance90-reflectance0)*pow5(saturate(1.0-VdotN));
}
#endif
#if defined(SHEEN) && defined(ENVIRONMENTBRDF)
/**
* The sheen BRDF not containing F can be easily stored in the blue channel of the BRDF texture.
* The blue channel contains DCharlie*VAshikhmin*NdotL as a lokkup table
*/
vec3 getSheenReflectanceFromBRDFLookup(const vec3 reflectance0,const vec3 environmentBrdf) {
vec3 sheenEnvironmentReflectance=reflectance0*environmentBrdf.b;
return sheenEnvironmentReflectance;
}
#endif
vec3 fresnelSchlickGGX(float VdotH,vec3 reflectance0,vec3 reflectance90)
{
return reflectance0+(reflectance90-reflectance0)*pow5(1.0-VdotH);
}
float fresnelSchlickGGX(float VdotH,float reflectance0,float reflectance90)
{
return reflectance0+(reflectance90-reflectance0)*pow5(1.0-VdotH);
}
#ifdef CLEARCOAT
vec3 getR0RemappedForClearCoat(vec3 f0) {
#ifdef CLEARCOAT_DEFAULTIOR
#ifdef MOBILE
return saturate(f0*(f0*0.526868+0.529324)-0.0482256);
#else
return saturate(f0*(f0*(0.941892-0.263008*f0)+0.346479)-0.0285998);
#endif
#else
vec3 s=sqrt(f0);
vec3 t=(vClearCoatRefractionParams.z+vClearCoatRefractionParams.w*s)/(vClearCoatRefractionParams.w+vClearCoatRefractionParams.z*s);
return square(t);
#endif
}
#endif
#ifdef IRIDESCENCE
const mat3 XYZ_TO_REC709=mat3(
3.2404542,-0.9692660, 0.0556434,
-1.5371385, 1.8760108,-0.2040259,
-0.4985314, 0.0415560, 1.0572252
);
vec3 getIORTfromAirToSurfaceR0(vec3 f0) {
vec3 sqrtF0=sqrt(f0);
return (1.+sqrtF0)/(1.-sqrtF0);
}
vec3 getR0fromIORs(vec3 iorT,float iorI) {
return square((iorT-vec3(iorI))/(iorT+vec3(iorI)));
}
float getR0fromIORs(float iorT,float iorI) {
return square((iorT-iorI)/(iorT+iorI));
}
vec3 evalSensitivity(float opd,vec3 shift) {
float phase=2.0*PI*opd*1.0e-9;
const vec3 val=vec3(5.4856e-13,4.4201e-13,5.2481e-13);
const vec3 pos=vec3(1.6810e+06,1.7953e+06,2.2084e+06);
const vec3 var=vec3(4.3278e+09,9.3046e+09,6.6121e+09);
vec3 xyz=val*sqrt(2.0*PI*var)*cos(pos*phase+shift)*exp(-square(phase)*var);
xyz.x+=9.7470e-14*sqrt(2.0*PI*4.5282e+09)*cos(2.2399e+06*phase+shift[0])*exp(-4.5282e+09*square(phase));
xyz/=1.0685e-7;
vec3 srgb=XYZ_TO_REC709*xyz;
return srgb;
}
vec3 evalIridescence(float outsideIOR,float eta2,float cosTheta1,float thinFilmThickness,vec3 baseF0) {
vec3 I=vec3(1.0);
float iridescenceIOR=mix(outsideIOR,eta2,smoothstep(0.0,0.03,thinFilmThickness));
float sinTheta2Sq=square(outsideIOR/iridescenceIOR)*(1.0-square(cosTheta1));
float cosTheta2Sq=1.0-sinTheta2Sq;
if (cosTheta2Sq<0.0) {
return I;
}
float cosTheta2=sqrt(cosTheta2Sq);
float R0=getR0fromIORs(iridescenceIOR,outsideIOR);
float R12=fresnelSchlickGGX(cosTheta1,R0,1.);
float R21=R12;
float T121=1.0-R12;
float phi12=0.0;
if (iridescenceIOR<outsideIOR) phi12=PI;
float phi21=PI-phi12;
vec3 baseIOR=getIORTfromAirToSurfaceR0(clamp(baseF0,0.0,0.9999)); 
vec3 R1=getR0fromIORs(baseIOR,iridescenceIOR);
vec3 R23=fresnelSchlickGGX(cosTheta2,R1,vec3(1.));
vec3 phi23=vec3(0.0);
if (baseIOR[0]<iridescenceIOR) phi23[0]=PI;
if (baseIOR[1]<iridescenceIOR) phi23[1]=PI;
if (baseIOR[2]<iridescenceIOR) phi23[2]=PI;
float opd=2.0*iridescenceIOR*thinFilmThickness*cosTheta2;
vec3 phi=vec3(phi21)+phi23;
vec3 R123=clamp(R12*R23,1e-5,0.9999);
vec3 r123=sqrt(R123);
vec3 Rs=square(T121)*R23/(vec3(1.0)-R123);
vec3 C0=R12+Rs;
I=C0;
vec3 Cm=Rs-T121;
for (int m=1; m<=2; ++m)
{
Cm*=r123;
vec3 Sm=2.0*evalSensitivity(float(m)*opd,float(m)*phi);
I+=Cm*Sm;
}
return max(I,vec3(0.0));
}
#endif
float normalDistributionFunction_TrowbridgeReitzGGX(float NdotH,float alphaG)
{
float a2=square(alphaG);
float d=NdotH*NdotH*(a2-1.0)+1.0;
return a2/(PI*d*d);
}
#ifdef SHEEN
float normalDistributionFunction_CharlieSheen(float NdotH,float alphaG)
{
float invR=1./alphaG;
float cos2h=NdotH*NdotH;
float sin2h=1.-cos2h;
return (2.+invR)*pow(sin2h,invR*.5)/(2.*PI);
}
#endif
#ifdef ANISOTROPIC
float normalDistributionFunction_BurleyGGX_Anisotropic(float NdotH,float TdotH,float BdotH,const vec2 alphaTB) {
float a2=alphaTB.x*alphaTB.y;
vec3 v=vec3(alphaTB.y*TdotH,alphaTB.x *BdotH,a2*NdotH);
float v2=dot(v,v);
float w2=a2/v2;
return a2*w2*w2*RECIPROCAL_PI;
}
#endif
#ifdef BRDF_V_HEIGHT_CORRELATED
float smithVisibility_GGXCorrelated(float NdotL,float NdotV,float alphaG) {
#ifdef MOBILE
float GGXV=NdotL*(NdotV*(1.0-alphaG)+alphaG);
float GGXL=NdotV*(NdotL*(1.0-alphaG)+alphaG);
return 0.5/(GGXV+GGXL);
#else
float a2=alphaG*alphaG;
float GGXV=NdotL*sqrt(NdotV*(NdotV-a2*NdotV)+a2);
float GGXL=NdotV*sqrt(NdotL*(NdotL-a2*NdotL)+a2);
return 0.5/(GGXV+GGXL);
#endif
}
#else
float smithVisibilityG1_TrowbridgeReitzGGXFast(float dot,float alphaG)
{
#ifdef MOBILE
return 1.0/(dot+alphaG+(1.0-alphaG)*dot ));
#else
float alphaSquared=alphaG*alphaG;
return 1.0/(dot+sqrt(alphaSquared+(1.0-alphaSquared)*dot*dot));
#endif
}
float smithVisibility_TrowbridgeReitzGGXFast(float NdotL,float NdotV,float alphaG)
{
float visibility=smithVisibilityG1_TrowbridgeReitzGGXFast(NdotL,alphaG)*smithVisibilityG1_TrowbridgeReitzGGXFast(NdotV,alphaG);
return visibility;
}
#endif
#ifdef ANISOTROPIC
float smithVisibility_GGXCorrelated_Anisotropic(float NdotL,float NdotV,float TdotV,float BdotV,float TdotL,float BdotL,const vec2 alphaTB) {
float lambdaV=NdotL*length(vec3(alphaTB.x*TdotV,alphaTB.y*BdotV,NdotV));
float lambdaL=NdotV*length(vec3(alphaTB.x*TdotL,alphaTB.y*BdotL,NdotL));
float v=0.5/(lambdaV+lambdaL);
return v;
}
#endif
#ifdef CLEARCOAT
float visibility_Kelemen(float VdotH) {
return 0.25/(VdotH*VdotH); 
}
#endif
#ifdef SHEEN
float visibility_Ashikhmin(float NdotL,float NdotV)
{
return 1./(4.*(NdotL+NdotV-NdotL*NdotV));
}
/* NOT USED
#ifdef SHEEN_SOFTER
float l(float x,float alphaG)
{
float oneMinusAlphaSq=(1.0-alphaG)*(1.0-alphaG);
float a=mix(21.5473,25.3245,oneMinusAlphaSq);
float b=mix(3.82987,3.32435,oneMinusAlphaSq);
float c=mix(0.19823,0.16801,oneMinusAlphaSq);
float d=mix(-1.97760,-1.27393,oneMinusAlphaSq);
float e=mix(-4.32054,-4.85967,oneMinusAlphaSq);
return a/(1.0+b*pow(x,c))+d*x+e;
}
float lambdaSheen(float cosTheta,float alphaG)
{
return abs(cosTheta)<0.5 ? exp(l(cosTheta,alphaG)) : exp(2.0*l(0.5,alphaG)-l(1.0-cosTheta,alphaG));
}
float visibility_CharlieSheen(float NdotL,float NdotV,float alphaG)
{
float G=1.0/(1.0+lambdaSheen(NdotV,alphaG)+lambdaSheen(NdotL,alphaG));
return G/(4.0*NdotV*NdotL);
}
#endif
*/
#endif
float diffuseBRDF_Burley(float NdotL,float NdotV,float VdotH,float roughness) {
float diffuseFresnelNV=pow5(saturateEps(1.0-NdotL));
float diffuseFresnelNL=pow5(saturateEps(1.0-NdotV));
float diffuseFresnel90=0.5+2.0*VdotH*VdotH*roughness;
float fresnel =
(1.0+(diffuseFresnel90-1.0)*diffuseFresnelNL) *
(1.0+(diffuseFresnel90-1.0)*diffuseFresnelNV);
return fresnel/PI;
}
#ifdef SS_TRANSLUCENCY
vec3 transmittanceBRDF_Burley(const vec3 tintColor,const vec3 diffusionDistance,float thickness) {
vec3 S=1./maxEps(diffusionDistance);
vec3 temp=exp((-0.333333333*thickness)*S);
return tintColor.rgb*0.25*(temp*temp*temp+3.0*temp);
}
float computeWrappedDiffuseNdotL(float NdotL,float w) {
float t=1.0+w;
float invt2=1.0/square(t);
return saturate((NdotL+w)*invt2);
}
#endif
`;x.IncludesShadersStore[Rn]=Cn;const In="hdrFilteringFunctions",xn=`#ifdef NUM_SAMPLES
#if NUM_SAMPLES>0
#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)
float radicalInverse_VdC(uint bits) 
{
bits=(bits<<16u) | (bits>>16u);
bits=((bits & 0x55555555u)<<1u) | ((bits & 0xAAAAAAAAu)>>1u);
bits=((bits & 0x33333333u)<<2u) | ((bits & 0xCCCCCCCCu)>>2u);
bits=((bits & 0x0F0F0F0Fu)<<4u) | ((bits & 0xF0F0F0F0u)>>4u);
bits=((bits & 0x00FF00FFu)<<8u) | ((bits & 0xFF00FF00u)>>8u);
return float(bits)*2.3283064365386963e-10; 
}
vec2 hammersley(uint i,uint N)
{
return vec2(float(i)/float(N),radicalInverse_VdC(i));
}
#else
float vanDerCorpus(int n,int base)
{
float invBase=1.0/float(base);
float denom =1.0;
float result =0.0;
for(int i=0; i<32; ++i)
{
if(n>0)
{
denom =mod(float(n),2.0);
result+=denom*invBase;
invBase=invBase/2.0;
n =int(float(n)/2.0);
}
}
return result;
}
vec2 hammersley(int i,int N)
{
return vec2(float(i)/float(N),vanDerCorpus(i,2));
}
#endif
float log4(float x) {
return log2(x)/2.;
}
const float NUM_SAMPLES_FLOAT=float(NUM_SAMPLES);
const float NUM_SAMPLES_FLOAT_INVERSED=1./NUM_SAMPLES_FLOAT;
const float K=4.;
#define inline
vec3 irradiance(samplerCube inputTexture,vec3 inputN,vec2 filteringInfo)
{
vec3 n=normalize(inputN);
vec3 result=vec3(0.0);
vec3 tangent=abs(n.z)<0.999 ? vec3(0.,0.,1.) : vec3(1.,0.,0.);
tangent=normalize(cross(tangent,n));
vec3 bitangent=cross(n,tangent);
mat3 tbn=mat3(tangent,bitangent,n);
float maxLevel=filteringInfo.y;
float dim0=filteringInfo.x;
float omegaP=(4.*PI)/(6.*dim0*dim0);
#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)
for(uint i=0u; i<NUM_SAMPLES; ++i)
#else
for(int i=0; i<NUM_SAMPLES; ++i)
#endif
{
vec2 Xi=hammersley(i,NUM_SAMPLES);
vec3 Ls=hemisphereCosSample(Xi);
Ls=normalize(Ls);
vec3 Ns=vec3(0.,0.,1.);
float NoL=dot(Ns,Ls);
if (NoL>0.) {
float pdf_inversed=PI/NoL;
float omegaS=NUM_SAMPLES_FLOAT_INVERSED*pdf_inversed;
float l=log4(omegaS)-log4(omegaP)+log4(K);
float mipLevel=clamp(l,0.0,maxLevel);
vec3 c=textureCubeLodEXT(inputTexture,tbn*Ls,mipLevel).rgb;
#ifdef GAMMA_INPUT
c=toLinearSpace(c);
#endif
result+=c;
}
}
result=result*NUM_SAMPLES_FLOAT_INVERSED;
return result;
}
#define inline
vec3 radiance(float alphaG,samplerCube inputTexture,vec3 inputN,vec2 filteringInfo)
{
vec3 n=normalize(inputN);
if (alphaG==0.) {
vec3 c=textureCube(inputTexture,n).rgb;
#ifdef GAMMA_INPUT
c=toLinearSpace(c);
#endif
return c;
} else {
vec3 result=vec3(0.);
vec3 tangent=abs(n.z)<0.999 ? vec3(0.,0.,1.) : vec3(1.,0.,0.);
tangent=normalize(cross(tangent,n));
vec3 bitangent=cross(n,tangent);
mat3 tbn=mat3(tangent,bitangent,n);
float maxLevel=filteringInfo.y;
float dim0=filteringInfo.x;
float omegaP=(4.*PI)/(6.*dim0*dim0);
float weight=0.;
#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)
for(uint i=0u; i<NUM_SAMPLES; ++i)
#else
for(int i=0; i<NUM_SAMPLES; ++i)
#endif
{
vec2 Xi=hammersley(i,NUM_SAMPLES);
vec3 H=hemisphereImportanceSampleDggx(Xi,alphaG);
float NoV=1.;
float NoH=H.z;
float NoH2=H.z*H.z;
float NoL=2.*NoH2-1.;
vec3 L=vec3(2.*NoH*H.x,2.*NoH*H.y,NoL);
L=normalize(L);
if (NoL>0.) {
float pdf_inversed=4./normalDistributionFunction_TrowbridgeReitzGGX(NoH,alphaG);
float omegaS=NUM_SAMPLES_FLOAT_INVERSED*pdf_inversed;
float l=log4(omegaS)-log4(omegaP)+log4(K);
float mipLevel=clamp(float(l),0.0,maxLevel);
weight+=NoL;
vec3 c=textureCubeLodEXT(inputTexture,tbn*L,mipLevel).rgb;
#ifdef GAMMA_INPUT
c=toLinearSpace(c);
#endif
result+=c*NoL;
}
}
result=result/weight;
return result;
}
}
#endif
#endif
`;x.IncludesShadersStore[In]=xn;const Mn="pbrDirectLightingFunctions",bn=`#define CLEARCOATREFLECTANCE90 1.0
struct lightingInfo
{
vec3 diffuse;
#ifdef SPECULARTERM
vec3 specular;
#endif
#ifdef CLEARCOAT
vec4 clearCoat;
#endif
#ifdef SHEEN
vec3 sheen;
#endif
};
float adjustRoughnessFromLightProperties(float roughness,float lightRadius,float lightDistance) {
#if defined(USEPHYSICALLIGHTFALLOFF) || defined(USEGLTFLIGHTFALLOFF)
float lightRoughness=lightRadius/lightDistance;
float totalRoughness=saturate(lightRoughness+roughness);
return totalRoughness;
#else
return roughness;
#endif
}
vec3 computeHemisphericDiffuseLighting(preLightingInfo info,vec3 lightColor,vec3 groundColor) {
return mix(groundColor,lightColor,info.NdotL);
}
vec3 computeDiffuseLighting(preLightingInfo info,vec3 lightColor) {
float diffuseTerm=diffuseBRDF_Burley(info.NdotL,info.NdotV,info.VdotH,info.roughness);
return diffuseTerm*info.attenuation*info.NdotL*lightColor;
}
#define inline
vec3 computeProjectionTextureDiffuseLighting(sampler2D projectionLightSampler,mat4 textureProjectionMatrix){
vec4 strq=textureProjectionMatrix*vec4(vPositionW,1.0);
strq/=strq.w;
vec3 textureColor=texture2D(projectionLightSampler,strq.xy).rgb;
return toLinearSpace(textureColor);
}
#ifdef SS_TRANSLUCENCY
vec3 computeDiffuseAndTransmittedLighting(preLightingInfo info,vec3 lightColor,vec3 transmittance) {
float NdotL=absEps(info.NdotLUnclamped);
float wrapNdotL=computeWrappedDiffuseNdotL(NdotL,0.02);
float trAdapt=step(0.,info.NdotLUnclamped);
vec3 transmittanceNdotL=mix(transmittance*wrapNdotL,vec3(wrapNdotL),trAdapt);
float diffuseTerm=diffuseBRDF_Burley(NdotL,info.NdotV,info.VdotH,info.roughness);
return diffuseTerm*transmittanceNdotL*info.attenuation*lightColor;
}
#endif
#ifdef SPECULARTERM
vec3 computeSpecularLighting(preLightingInfo info,vec3 N,vec3 reflectance0,vec3 reflectance90,float geometricRoughnessFactor,vec3 lightColor) {
float NdotH=saturateEps(dot(N,info.H));
float roughness=max(info.roughness,geometricRoughnessFactor);
float alphaG=convertRoughnessToAverageSlope(roughness);
vec3 fresnel=fresnelSchlickGGX(info.VdotH,reflectance0,reflectance90);
#ifdef IRIDESCENCE
fresnel=mix(fresnel,reflectance0,info.iridescenceIntensity);
#endif
float distribution=normalDistributionFunction_TrowbridgeReitzGGX(NdotH,alphaG);
#ifdef BRDF_V_HEIGHT_CORRELATED
float smithVisibility=smithVisibility_GGXCorrelated(info.NdotL,info.NdotV,alphaG);
#else
float smithVisibility=smithVisibility_TrowbridgeReitzGGXFast(info.NdotL,info.NdotV,alphaG);
#endif
vec3 specTerm=fresnel*distribution*smithVisibility;
return specTerm*info.attenuation*info.NdotL*lightColor;
}
#endif
#ifdef ANISOTROPIC
vec3 computeAnisotropicSpecularLighting(preLightingInfo info,vec3 V,vec3 N,vec3 T,vec3 B,float anisotropy,vec3 reflectance0,vec3 reflectance90,float geometricRoughnessFactor,vec3 lightColor) {
float NdotH=saturateEps(dot(N,info.H));
float TdotH=dot(T,info.H);
float BdotH=dot(B,info.H);
float TdotV=dot(T,V);
float BdotV=dot(B,V);
float TdotL=dot(T,info.L);
float BdotL=dot(B,info.L);
float alphaG=convertRoughnessToAverageSlope(info.roughness);
vec2 alphaTB=getAnisotropicRoughness(alphaG,anisotropy);
alphaTB=max(alphaTB,square(geometricRoughnessFactor));
vec3 fresnel=fresnelSchlickGGX(info.VdotH,reflectance0,reflectance90);
#ifdef IRIDESCENCE
fresnel=mix(fresnel,reflectance0,info.iridescenceIntensity);
#endif
float distribution=normalDistributionFunction_BurleyGGX_Anisotropic(NdotH,TdotH,BdotH,alphaTB);
float smithVisibility=smithVisibility_GGXCorrelated_Anisotropic(info.NdotL,info.NdotV,TdotV,BdotV,TdotL,BdotL,alphaTB);
vec3 specTerm=fresnel*distribution*smithVisibility;
return specTerm*info.attenuation*info.NdotL*lightColor;
}
#endif
#ifdef CLEARCOAT
vec4 computeClearCoatLighting(preLightingInfo info,vec3 Ncc,float geometricRoughnessFactor,float clearCoatIntensity,vec3 lightColor) {
float NccdotL=saturateEps(dot(Ncc,info.L));
float NccdotH=saturateEps(dot(Ncc,info.H));
float clearCoatRoughness=max(info.roughness,geometricRoughnessFactor);
float alphaG=convertRoughnessToAverageSlope(clearCoatRoughness);
float fresnel=fresnelSchlickGGX(info.VdotH,vClearCoatRefractionParams.x,CLEARCOATREFLECTANCE90);
fresnel*=clearCoatIntensity;
float distribution=normalDistributionFunction_TrowbridgeReitzGGX(NccdotH,alphaG);
float kelemenVisibility=visibility_Kelemen(info.VdotH);
float clearCoatTerm=fresnel*distribution*kelemenVisibility;
return vec4(
clearCoatTerm*info.attenuation*NccdotL*lightColor,
1.0-fresnel
);
}
vec3 computeClearCoatLightingAbsorption(float NdotVRefract,vec3 L,vec3 Ncc,vec3 clearCoatColor,float clearCoatThickness,float clearCoatIntensity) {
vec3 LRefract=-refract(L,Ncc,vClearCoatRefractionParams.y);
float NdotLRefract=saturateEps(dot(Ncc,LRefract));
vec3 absorption=computeClearCoatAbsorption(NdotVRefract,NdotLRefract,clearCoatColor,clearCoatThickness,clearCoatIntensity);
return absorption;
}
#endif
#ifdef SHEEN
vec3 computeSheenLighting(preLightingInfo info,vec3 N,vec3 reflectance0,vec3 reflectance90,float geometricRoughnessFactor,vec3 lightColor) {
float NdotH=saturateEps(dot(N,info.H));
float roughness=max(info.roughness,geometricRoughnessFactor);
float alphaG=convertRoughnessToAverageSlope(roughness);
float fresnel=1.;
float distribution=normalDistributionFunction_CharlieSheen(NdotH,alphaG);
/*#ifdef SHEEN_SOFTER
float visibility=visibility_CharlieSheen(info.NdotL,info.NdotV,alphaG);
#else */
float visibility=visibility_Ashikhmin(info.NdotL,info.NdotV);
/* #endif */
float sheenTerm=fresnel*distribution*visibility;
return sheenTerm*info.attenuation*info.NdotL*lightColor;
}
#endif
`;x.IncludesShadersStore[Mn]=bn;const Nn="pbrIBLFunctions",yn=`#if defined(REFLECTION) || defined(SS_REFRACTION)
float getLodFromAlphaG(float cubeMapDimensionPixels,float microsurfaceAverageSlope) {
float microsurfaceAverageSlopeTexels=cubeMapDimensionPixels*microsurfaceAverageSlope;
float lod=log2(microsurfaceAverageSlopeTexels);
return lod;
}
float getLinearLodFromRoughness(float cubeMapDimensionPixels,float roughness) {
float lod=log2(cubeMapDimensionPixels)*roughness;
return lod;
}
#endif
#if defined(ENVIRONMENTBRDF) && defined(RADIANCEOCCLUSION)
float environmentRadianceOcclusion(float ambientOcclusion,float NdotVUnclamped) {
float temp=NdotVUnclamped+ambientOcclusion;
return saturate(square(temp)-1.0+ambientOcclusion);
}
#endif
#if defined(ENVIRONMENTBRDF) && defined(HORIZONOCCLUSION)
float environmentHorizonOcclusion(vec3 view,vec3 normal,vec3 geometricNormal) {
vec3 reflection=reflect(view,normal);
float temp=saturate(1.0+1.1*dot(reflection,geometricNormal));
return square(temp);
}
#endif
#if defined(LODINREFLECTIONALPHA) || defined(SS_LODINREFRACTIONALPHA)
#define UNPACK_LOD(x) (1.0-x)*255.0
float getLodFromAlphaG(float cubeMapDimensionPixels,float alphaG,float NdotV) {
float microsurfaceAverageSlope=alphaG;
microsurfaceAverageSlope*=sqrt(abs(NdotV));
return getLodFromAlphaG(cubeMapDimensionPixels,microsurfaceAverageSlope);
}
#endif
`;x.IncludesShadersStore[Nn]=yn;const On="bumpFragmentMainFunctions",Ln=`#if defined(BUMP) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(DETAIL)
#if defined(TANGENT) && defined(NORMAL) 
varying mat3 vTBN;
#endif
#ifdef OBJECTSPACE_NORMALMAP
uniform mat4 normalMatrix;
#endif
vec3 perturbNormalBase(mat3 cotangentFrame,vec3 normal,float scale)
{
#ifdef NORMALXYSCALE
normal=normalize(normal*vec3(scale,scale,1.0));
#endif
return normalize(cotangentFrame*normal);
}
vec3 perturbNormal(mat3 cotangentFrame,vec3 textureSample,float scale)
{
return perturbNormalBase(cotangentFrame,textureSample*2.0-1.0,scale);
}
mat3 cotangent_frame(vec3 normal,vec3 p,vec2 uv,vec2 tangentSpaceParams)
{
vec3 dp1=dFdx(p);
vec3 dp2=dFdy(p);
vec2 duv1=dFdx(uv);
vec2 duv2=dFdy(uv);
vec3 dp2perp=cross(dp2,normal);
vec3 dp1perp=cross(normal,dp1);
vec3 tangent=dp2perp*duv1.x+dp1perp*duv2.x;
vec3 bitangent=dp2perp*duv1.y+dp1perp*duv2.y;
tangent*=tangentSpaceParams.x;
bitangent*=tangentSpaceParams.y;
float det=max(dot(tangent,tangent),dot(bitangent,bitangent));
float invmax=det==0.0 ? 0.0 : inversesqrt(det);
return mat3(tangent*invmax,bitangent*invmax,normal);
}
#endif
`;x.IncludesShadersStore[On]=Ln;const Dn="bumpFragmentFunctions",Pn=`#if defined(BUMP)
#include<samplerFragmentDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_SAMPLERNAME_,bump)
#endif
#if defined(DETAIL)
#include<samplerFragmentDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_SAMPLERNAME_,detail)
#endif
#if defined(BUMP) && defined(PARALLAX)
const float minSamples=4.;
const float maxSamples=15.;
const int iMaxSamples=15;
vec2 parallaxOcclusion(vec3 vViewDirCoT,vec3 vNormalCoT,vec2 texCoord,float parallaxScale) {
float parallaxLimit=length(vViewDirCoT.xy)/vViewDirCoT.z;
parallaxLimit*=parallaxScale;
vec2 vOffsetDir=normalize(vViewDirCoT.xy);
vec2 vMaxOffset=vOffsetDir*parallaxLimit;
float numSamples=maxSamples+(dot(vViewDirCoT,vNormalCoT)*(minSamples-maxSamples));
float stepSize=1.0/numSamples;
float currRayHeight=1.0;
vec2 vCurrOffset=vec2(0,0);
vec2 vLastOffset=vec2(0,0);
float lastSampledHeight=1.0;
float currSampledHeight=1.0;
bool keepWorking=true;
for (int i=0; i<iMaxSamples; i++)
{
currSampledHeight=texture2D(bumpSampler,texCoord+vCurrOffset).w;
if (!keepWorking)
{
}
else if (currSampledHeight>currRayHeight)
{
float delta1=currSampledHeight-currRayHeight;
float delta2=(currRayHeight+stepSize)-lastSampledHeight;
float ratio=delta1/(delta1+delta2);
vCurrOffset=(ratio)* vLastOffset+(1.0-ratio)*vCurrOffset;
keepWorking=false;
}
else
{
currRayHeight-=stepSize;
vLastOffset=vCurrOffset;
vCurrOffset+=stepSize*vMaxOffset;
lastSampledHeight=currSampledHeight;
}
}
return vCurrOffset;
}
vec2 parallaxOffset(vec3 viewDir,float heightScale)
{
float height=texture2D(bumpSampler,vBumpUV).w;
vec2 texCoordOffset=heightScale*viewDir.xy*height;
return -texCoordOffset;
}
#endif
`;x.IncludesShadersStore[Dn]=Pn;const Fn="reflectionFunction",wn=`vec3 computeFixedEquirectangularCoords(vec4 worldPos,vec3 worldNormal,vec3 direction)
{
float lon=atan(direction.z,direction.x);
float lat=acos(direction.y);
vec2 sphereCoords=vec2(lon,lat)*RECIPROCAL_PI2*2.0;
float s=sphereCoords.x*0.5+0.5;
float t=sphereCoords.y;
return vec3(s,t,0); 
}
vec3 computeMirroredFixedEquirectangularCoords(vec4 worldPos,vec3 worldNormal,vec3 direction)
{
float lon=atan(direction.z,direction.x);
float lat=acos(direction.y);
vec2 sphereCoords=vec2(lon,lat)*RECIPROCAL_PI2*2.0;
float s=sphereCoords.x*0.5+0.5;
float t=sphereCoords.y;
return vec3(1.0-s,t,0); 
}
vec3 computeEquirectangularCoords(vec4 worldPos,vec3 worldNormal,vec3 eyePosition,mat4 reflectionMatrix)
{
vec3 cameraToVertex=normalize(worldPos.xyz-eyePosition);
vec3 r=normalize(reflect(cameraToVertex,worldNormal));
r=vec3(reflectionMatrix*vec4(r,0));
float lon=atan(r.z,r.x);
float lat=acos(r.y);
vec2 sphereCoords=vec2(lon,lat)*RECIPROCAL_PI2*2.0;
float s=sphereCoords.x*0.5+0.5;
float t=sphereCoords.y;
return vec3(s,t,0);
}
vec3 computeSphericalCoords(vec4 worldPos,vec3 worldNormal,mat4 view,mat4 reflectionMatrix)
{
vec3 viewDir=normalize(vec3(view*worldPos));
vec3 viewNormal=normalize(vec3(view*vec4(worldNormal,0.0)));
vec3 r=reflect(viewDir,viewNormal);
r=vec3(reflectionMatrix*vec4(r,0));
r.z=r.z-1.0;
float m=2.0*length(r);
return vec3(r.x/m+0.5,1.0-r.y/m-0.5,0);
}
vec3 computePlanarCoords(vec4 worldPos,vec3 worldNormal,vec3 eyePosition,mat4 reflectionMatrix)
{
vec3 viewDir=worldPos.xyz-eyePosition;
vec3 coords=normalize(reflect(viewDir,worldNormal));
return vec3(reflectionMatrix*vec4(coords,1));
}
vec3 computeCubicCoords(vec4 worldPos,vec3 worldNormal,vec3 eyePosition,mat4 reflectionMatrix)
{
vec3 viewDir=normalize(worldPos.xyz-eyePosition);
vec3 coords=reflect(viewDir,worldNormal);
coords=vec3(reflectionMatrix*vec4(coords,0));
#ifdef INVERTCUBICMAP
coords.y*=-1.0;
#endif
return coords;
}
vec3 computeCubicLocalCoords(vec4 worldPos,vec3 worldNormal,vec3 eyePosition,mat4 reflectionMatrix,vec3 reflectionSize,vec3 reflectionPosition)
{
vec3 viewDir=normalize(worldPos.xyz-eyePosition);
vec3 coords=reflect(viewDir,worldNormal);
coords=parallaxCorrectNormal(worldPos.xyz,coords,reflectionSize,reflectionPosition);
coords=vec3(reflectionMatrix*vec4(coords,0));
#ifdef INVERTCUBICMAP
coords.y*=-1.0;
#endif
return coords;
}
vec3 computeProjectionCoords(vec4 worldPos,mat4 view,mat4 reflectionMatrix)
{
return vec3(reflectionMatrix*(view*worldPos));
}
vec3 computeSkyBoxCoords(vec3 positionW,mat4 reflectionMatrix)
{
return vec3(reflectionMatrix*vec4(positionW,1.));
}
#ifdef REFLECTION
vec3 computeReflectionCoords(vec4 worldPos,vec3 worldNormal)
{
#ifdef REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED
vec3 direction=normalize(vDirectionW);
return computeMirroredFixedEquirectangularCoords(worldPos,worldNormal,direction);
#endif
#ifdef REFLECTIONMAP_EQUIRECTANGULAR_FIXED
vec3 direction=normalize(vDirectionW);
return computeFixedEquirectangularCoords(worldPos,worldNormal,direction);
#endif
#ifdef REFLECTIONMAP_EQUIRECTANGULAR
return computeEquirectangularCoords(worldPos,worldNormal,vEyePosition.xyz,reflectionMatrix);
#endif
#ifdef REFLECTIONMAP_SPHERICAL
return computeSphericalCoords(worldPos,worldNormal,view,reflectionMatrix);
#endif
#ifdef REFLECTIONMAP_PLANAR
return computePlanarCoords(worldPos,worldNormal,vEyePosition.xyz,reflectionMatrix);
#endif
#ifdef REFLECTIONMAP_CUBIC
#ifdef USE_LOCAL_REFLECTIONMAP_CUBIC
return computeCubicLocalCoords(worldPos,worldNormal,vEyePosition.xyz,reflectionMatrix,vReflectionSize,vReflectionPosition);
#else
return computeCubicCoords(worldPos,worldNormal,vEyePosition.xyz,reflectionMatrix);
#endif
#endif
#ifdef REFLECTIONMAP_PROJECTION
return computeProjectionCoords(worldPos,view,reflectionMatrix);
#endif
#ifdef REFLECTIONMAP_SKYBOX
return computeSkyBoxCoords(vPositionUVW,reflectionMatrix);
#endif
#ifdef REFLECTIONMAP_EXPLICIT
return vec3(0,0,0);
#endif
}
#endif
`;x.IncludesShadersStore[Fn]=wn;const Un="pbrBlockAlbedoOpacity",Bn=`struct albedoOpacityOutParams
{
vec3 surfaceAlbedo;
float alpha;
};
#define pbr_inline
void albedoOpacityBlock(
in vec4 vAlbedoColor,
#ifdef ALBEDO
in vec4 albedoTexture,
in vec2 albedoInfos,
#endif
#ifdef OPACITY
in vec4 opacityMap,
in vec2 vOpacityInfos,
#endif
#ifdef DETAIL
in vec4 detailColor,
in vec4 vDetailInfos,
#endif
out albedoOpacityOutParams outParams
)
{
vec3 surfaceAlbedo=vAlbedoColor.rgb;
float alpha=vAlbedoColor.a;
#ifdef ALBEDO
#if defined(ALPHAFROMALBEDO) || defined(ALPHATEST)
alpha*=albedoTexture.a;
#endif
#ifdef GAMMAALBEDO
surfaceAlbedo*=toLinearSpace(albedoTexture.rgb);
#else
surfaceAlbedo*=albedoTexture.rgb;
#endif
surfaceAlbedo*=albedoInfos.y;
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
surfaceAlbedo*=vColor.rgb;
#endif
#ifdef DETAIL
float detailAlbedo=2.0*mix(0.5,detailColor.r,vDetailInfos.y);
surfaceAlbedo.rgb=surfaceAlbedo.rgb*detailAlbedo*detailAlbedo; 
#endif
#define CUSTOM_FRAGMENT_UPDATE_ALBEDO
#ifdef OPACITY
#ifdef OPACITYRGB
alpha=getLuminance(opacityMap.rgb);
#else
alpha*=opacityMap.a;
#endif
alpha*=vOpacityInfos.y;
#endif
#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)
alpha*=vColor.a;
#endif
#if !defined(SS_LINKREFRACTIONTOTRANSPARENCY) && !defined(ALPHAFRESNEL)
#ifdef ALPHATEST
if (alpha<ALPHATESTVALUE)
discard;
#ifndef ALPHABLEND
alpha=1.0;
#endif
#endif
#endif
outParams.surfaceAlbedo=surfaceAlbedo;
outParams.alpha=alpha;
}
`;x.IncludesShadersStore[Un]=Bn;const Vn="pbrBlockReflectivity",Gn=`struct reflectivityOutParams
{
float microSurface;
float roughness;
vec3 surfaceReflectivityColor;
#ifdef METALLICWORKFLOW
vec3 surfaceAlbedo;
#endif
#if defined(METALLICWORKFLOW) && defined(REFLECTIVITY) && defined(AOSTOREINMETALMAPRED)
vec3 ambientOcclusionColor;
#endif
#if DEBUGMODE>0
vec4 surfaceMetallicColorMap;
vec4 surfaceReflectivityColorMap;
vec2 metallicRoughness;
vec3 metallicF0;
#endif
};
#define pbr_inline
void reflectivityBlock(
in vec4 vReflectivityColor,
#ifdef METALLICWORKFLOW
in vec3 surfaceAlbedo,
in vec4 metallicReflectanceFactors,
#endif
#ifdef REFLECTIVITY
in vec3 reflectivityInfos,
in vec4 surfaceMetallicOrReflectivityColorMap,
#endif
#if defined(METALLICWORKFLOW) && defined(REFLECTIVITY) && defined(AOSTOREINMETALMAPRED)
in vec3 ambientOcclusionColorIn,
#endif
#ifdef MICROSURFACEMAP
in vec4 microSurfaceTexel,
#endif
#ifdef DETAIL
in vec4 detailColor,
in vec4 vDetailInfos,
#endif
out reflectivityOutParams outParams
)
{
float microSurface=vReflectivityColor.a;
vec3 surfaceReflectivityColor=vReflectivityColor.rgb;
#ifdef METALLICWORKFLOW
vec2 metallicRoughness=surfaceReflectivityColor.rg;
#ifdef REFLECTIVITY
#if DEBUGMODE>0
outParams.surfaceMetallicColorMap=surfaceMetallicOrReflectivityColorMap;
#endif
#ifdef AOSTOREINMETALMAPRED
vec3 aoStoreInMetalMap=vec3(surfaceMetallicOrReflectivityColorMap.r,surfaceMetallicOrReflectivityColorMap.r,surfaceMetallicOrReflectivityColorMap.r);
outParams.ambientOcclusionColor=mix(ambientOcclusionColorIn,aoStoreInMetalMap,reflectivityInfos.z);
#endif
#ifdef METALLNESSSTOREINMETALMAPBLUE
metallicRoughness.r*=surfaceMetallicOrReflectivityColorMap.b;
#else
metallicRoughness.r*=surfaceMetallicOrReflectivityColorMap.r;
#endif
#ifdef ROUGHNESSSTOREINMETALMAPALPHA
metallicRoughness.g*=surfaceMetallicOrReflectivityColorMap.a;
#else
#ifdef ROUGHNESSSTOREINMETALMAPGREEN
metallicRoughness.g*=surfaceMetallicOrReflectivityColorMap.g;
#endif
#endif
#endif
#ifdef DETAIL
float detailRoughness=mix(0.5,detailColor.b,vDetailInfos.w);
float loLerp=mix(0.,metallicRoughness.g,detailRoughness*2.);
float hiLerp=mix(metallicRoughness.g,1.,(detailRoughness-0.5)*2.);
metallicRoughness.g=mix(loLerp,hiLerp,step(detailRoughness,0.5));
#endif
#ifdef MICROSURFACEMAP
metallicRoughness.g*=microSurfaceTexel.r;
#endif
#if DEBUGMODE>0
outParams.metallicRoughness=metallicRoughness;
#endif
#define CUSTOM_FRAGMENT_UPDATE_METALLICROUGHNESS
microSurface=1.0-metallicRoughness.g;
vec3 baseColor=surfaceAlbedo;
#ifdef FROSTBITE_REFLECTANCE
outParams.surfaceAlbedo=baseColor.rgb*(1.0-metallicRoughness.r);
surfaceReflectivityColor=mix(0.16*reflectance*reflectance,baseColor,metallicRoughness.r);
#else
vec3 metallicF0=metallicReflectanceFactors.rgb;
#if DEBUGMODE>0
outParams.metallicF0=metallicF0;
#endif
outParams.surfaceAlbedo=mix(baseColor.rgb*(1.0-metallicF0),vec3(0.,0.,0.),metallicRoughness.r);
surfaceReflectivityColor=mix(metallicF0,baseColor,metallicRoughness.r);
#endif
#else
#ifdef REFLECTIVITY
surfaceReflectivityColor*=surfaceMetallicOrReflectivityColorMap.rgb;
#if DEBUGMODE>0
outParams.surfaceReflectivityColorMap=surfaceMetallicOrReflectivityColorMap;
#endif
#ifdef MICROSURFACEFROMREFLECTIVITYMAP
microSurface*=surfaceMetallicOrReflectivityColorMap.a;
microSurface*=reflectivityInfos.z;
#else
#ifdef MICROSURFACEAUTOMATIC
microSurface*=computeDefaultMicroSurface(microSurface,surfaceReflectivityColor);
#endif
#ifdef MICROSURFACEMAP
microSurface*=microSurfaceTexel.r;
#endif
#define CUSTOM_FRAGMENT_UPDATE_MICROSURFACE
#endif
#endif
#endif
microSurface=saturate(microSurface);
float roughness=1.-microSurface;
outParams.microSurface=microSurface;
outParams.roughness=roughness;
outParams.surfaceReflectivityColor=surfaceReflectivityColor;
}
`;x.IncludesShadersStore[Vn]=Gn;const Xn="pbrBlockAmbientOcclusion",kn=`struct ambientOcclusionOutParams
{
vec3 ambientOcclusionColor;
#if DEBUGMODE>0
vec3 ambientOcclusionColorMap;
#endif
};
#define pbr_inline
void ambientOcclusionBlock(
#ifdef AMBIENT
in vec3 ambientOcclusionColorMap_,
in vec4 vAmbientInfos,
#endif
out ambientOcclusionOutParams outParams
)
{
vec3 ambientOcclusionColor=vec3(1.,1.,1.);
#ifdef AMBIENT
vec3 ambientOcclusionColorMap=ambientOcclusionColorMap_*vAmbientInfos.y;
#ifdef AMBIENTINGRAYSCALE
ambientOcclusionColorMap=vec3(ambientOcclusionColorMap.r,ambientOcclusionColorMap.r,ambientOcclusionColorMap.r);
#endif
ambientOcclusionColor=mix(ambientOcclusionColor,ambientOcclusionColorMap,vAmbientInfos.z);
#if DEBUGMODE>0
outParams.ambientOcclusionColorMap=ambientOcclusionColorMap;
#endif
#endif
outParams.ambientOcclusionColor=ambientOcclusionColor;
}
`;x.IncludesShadersStore[Xn]=kn;const Hn="pbrBlockAlphaFresnel",zn=`#ifdef ALPHAFRESNEL
#if defined(ALPHATEST) || defined(ALPHABLEND)
struct alphaFresnelOutParams
{
float alpha;
};
#define pbr_inline
void alphaFresnelBlock(
in vec3 normalW,
in vec3 viewDirectionW,
in float alpha,
in float microSurface,
out alphaFresnelOutParams outParams
)
{
float opacityPerceptual=alpha;
#ifdef LINEARALPHAFRESNEL
float opacity0=opacityPerceptual;
#else
float opacity0=opacityPerceptual*opacityPerceptual;
#endif
float opacity90=fresnelGrazingReflectance(opacity0);
vec3 normalForward=faceforward(normalW,-viewDirectionW,normalW);
outParams.alpha=getReflectanceFromAnalyticalBRDFLookup_Jones(saturate(dot(viewDirectionW,normalForward)),vec3(opacity0),vec3(opacity90),sqrt(microSurface)).x;
#ifdef ALPHATEST
if (outParams.alpha<ALPHATESTVALUE)
discard;
#ifndef ALPHABLEND
outParams.alpha=1.0;
#endif
#endif
}
#endif
#endif
`;x.IncludesShadersStore[Hn]=zn;const Wn="pbrBlockAnisotropic",Yn=`#ifdef ANISOTROPIC
struct anisotropicOutParams
{
float anisotropy;
vec3 anisotropicTangent;
vec3 anisotropicBitangent;
vec3 anisotropicNormal;
#if DEBUGMODE>0
vec3 anisotropyMapData;
#endif
};
#define pbr_inline
void anisotropicBlock(
in vec3 vAnisotropy,
#ifdef ANISOTROPIC_TEXTURE
in vec3 anisotropyMapData,
#endif
in mat3 TBN,
in vec3 normalW,
in vec3 viewDirectionW,
out anisotropicOutParams outParams
)
{
float anisotropy=vAnisotropy.b;
vec3 anisotropyDirection=vec3(vAnisotropy.xy,0.);
#ifdef ANISOTROPIC_TEXTURE
anisotropy*=anisotropyMapData.b;
anisotropyDirection.rg*=anisotropyMapData.rg*2.0-1.0;
#if DEBUGMODE>0
outParams.anisotropyMapData=anisotropyMapData;
#endif
#endif
mat3 anisoTBN=mat3(normalize(TBN[0]),normalize(TBN[1]),normalize(TBN[2]));
vec3 anisotropicTangent=normalize(anisoTBN*anisotropyDirection);
vec3 anisotropicBitangent=normalize(cross(anisoTBN[2],anisotropicTangent));
outParams.anisotropy=anisotropy;
outParams.anisotropicTangent=anisotropicTangent;
outParams.anisotropicBitangent=anisotropicBitangent;
outParams.anisotropicNormal=getAnisotropicBentNormals(anisotropicTangent,anisotropicBitangent,normalW,viewDirectionW,anisotropy);
}
#endif
`;x.IncludesShadersStore[Wn]=Yn;const Qn="pbrBlockReflection",Kn=`#ifdef REFLECTION
struct reflectionOutParams
{
vec4 environmentRadiance;
vec3 environmentIrradiance;
#ifdef REFLECTIONMAP_3D
vec3 reflectionCoords;
#else
vec2 reflectionCoords;
#endif
#ifdef SS_TRANSLUCENCY
#ifdef USESPHERICALFROMREFLECTIONMAP
#if !defined(NORMAL) || !defined(USESPHERICALINVERTEX)
vec3 irradianceVector;
#endif
#endif
#endif
};
#define pbr_inline
void createReflectionCoords(
in vec3 vPositionW,
in vec3 normalW,
#ifdef ANISOTROPIC
in anisotropicOutParams anisotropicOut,
#endif
#ifdef REFLECTIONMAP_3D
out vec3 reflectionCoords
#else
out vec2 reflectionCoords
#endif
)
{
#ifdef ANISOTROPIC
vec3 reflectionVector=computeReflectionCoords(vec4(vPositionW,1.0),anisotropicOut.anisotropicNormal);
#else
vec3 reflectionVector=computeReflectionCoords(vec4(vPositionW,1.0),normalW);
#endif
#ifdef REFLECTIONMAP_OPPOSITEZ
reflectionVector.z*=-1.0;
#endif
#ifdef REFLECTIONMAP_3D
reflectionCoords=reflectionVector;
#else
reflectionCoords=reflectionVector.xy;
#ifdef REFLECTIONMAP_PROJECTION
reflectionCoords/=reflectionVector.z;
#endif
reflectionCoords.y=1.0-reflectionCoords.y;
#endif
}
#define pbr_inline
#define inline
void sampleReflectionTexture(
in float alphaG,
in vec3 vReflectionMicrosurfaceInfos,
in vec2 vReflectionInfos,
in vec3 vReflectionColor,
#if defined(LODINREFLECTIONALPHA) && !defined(REFLECTIONMAP_SKYBOX)
in float NdotVUnclamped,
#endif
#ifdef LINEARSPECULARREFLECTION
in float roughness,
#endif
#ifdef REFLECTIONMAP_3D
in samplerCube reflectionSampler,
const vec3 reflectionCoords,
#else
in sampler2D reflectionSampler,
const vec2 reflectionCoords,
#endif
#ifndef LODBASEDMICROSFURACE
#ifdef REFLECTIONMAP_3D
in samplerCube reflectionSamplerLow,
in samplerCube reflectionSamplerHigh,
#else
in sampler2D reflectionSamplerLow,
in sampler2D reflectionSamplerHigh,
#endif
#endif
#ifdef REALTIME_FILTERING
in vec2 vReflectionFilteringInfo,
#endif
out vec4 environmentRadiance
)
{
#if defined(LODINREFLECTIONALPHA) && !defined(REFLECTIONMAP_SKYBOX)
float reflectionLOD=getLodFromAlphaG(vReflectionMicrosurfaceInfos.x,alphaG,NdotVUnclamped);
#elif defined(LINEARSPECULARREFLECTION)
float reflectionLOD=getLinearLodFromRoughness(vReflectionMicrosurfaceInfos.x,roughness);
#else
float reflectionLOD=getLodFromAlphaG(vReflectionMicrosurfaceInfos.x,alphaG);
#endif
#ifdef LODBASEDMICROSFURACE
reflectionLOD=reflectionLOD*vReflectionMicrosurfaceInfos.y+vReflectionMicrosurfaceInfos.z;
#ifdef LODINREFLECTIONALPHA
float automaticReflectionLOD=UNPACK_LOD(sampleReflection(reflectionSampler,reflectionCoords).a);
float requestedReflectionLOD=max(automaticReflectionLOD,reflectionLOD);
#else
float requestedReflectionLOD=reflectionLOD;
#endif
#ifdef REALTIME_FILTERING
environmentRadiance=vec4(radiance(alphaG,reflectionSampler,reflectionCoords,vReflectionFilteringInfo),1.0);
#else
environmentRadiance=sampleReflectionLod(reflectionSampler,reflectionCoords,reflectionLOD);
#endif
#else
float lodReflectionNormalized=saturate(reflectionLOD/log2(vReflectionMicrosurfaceInfos.x));
float lodReflectionNormalizedDoubled=lodReflectionNormalized*2.0;
vec4 environmentMid=sampleReflection(reflectionSampler,reflectionCoords);
if (lodReflectionNormalizedDoubled<1.0){
environmentRadiance=mix(
sampleReflection(reflectionSamplerHigh,reflectionCoords),
environmentMid,
lodReflectionNormalizedDoubled
);
} else {
environmentRadiance=mix(
environmentMid,
sampleReflection(reflectionSamplerLow,reflectionCoords),
lodReflectionNormalizedDoubled-1.0
);
}
#endif
#ifdef RGBDREFLECTION
environmentRadiance.rgb=fromRGBD(environmentRadiance);
#endif
#ifdef GAMMAREFLECTION
environmentRadiance.rgb=toLinearSpace(environmentRadiance.rgb);
#endif
environmentRadiance.rgb*=vReflectionInfos.x;
environmentRadiance.rgb*=vReflectionColor.rgb;
}
#define pbr_inline
#define inline
void reflectionBlock(
in vec3 vPositionW,
in vec3 normalW,
in float alphaG,
in vec3 vReflectionMicrosurfaceInfos,
in vec2 vReflectionInfos,
in vec3 vReflectionColor,
#ifdef ANISOTROPIC
in anisotropicOutParams anisotropicOut,
#endif
#if defined(LODINREFLECTIONALPHA) && !defined(REFLECTIONMAP_SKYBOX)
in float NdotVUnclamped,
#endif
#ifdef LINEARSPECULARREFLECTION
in float roughness,
#endif
#ifdef REFLECTIONMAP_3D
in samplerCube reflectionSampler,
#else
in sampler2D reflectionSampler,
#endif
#if defined(NORMAL) && defined(USESPHERICALINVERTEX)
in vec3 vEnvironmentIrradiance,
#endif
#ifdef USESPHERICALFROMREFLECTIONMAP
#if !defined(NORMAL) || !defined(USESPHERICALINVERTEX)
in mat4 reflectionMatrix,
#endif
#endif
#ifdef USEIRRADIANCEMAP
#ifdef REFLECTIONMAP_3D
in samplerCube irradianceSampler,
#else
in sampler2D irradianceSampler,
#endif
#endif
#ifndef LODBASEDMICROSFURACE
#ifdef REFLECTIONMAP_3D
in samplerCube reflectionSamplerLow,
in samplerCube reflectionSamplerHigh,
#else
in sampler2D reflectionSamplerLow,
in sampler2D reflectionSamplerHigh,
#endif
#endif
#ifdef REALTIME_FILTERING
in vec2 vReflectionFilteringInfo,
#endif
out reflectionOutParams outParams
)
{
vec4 environmentRadiance=vec4(0.,0.,0.,0.);
#ifdef REFLECTIONMAP_3D
vec3 reflectionCoords=vec3(0.);
#else
vec2 reflectionCoords=vec2(0.);
#endif
createReflectionCoords(
vPositionW,
normalW,
#ifdef ANISOTROPIC
anisotropicOut,
#endif
reflectionCoords
);
sampleReflectionTexture(
alphaG,
vReflectionMicrosurfaceInfos,
vReflectionInfos,
vReflectionColor,
#if defined(LODINREFLECTIONALPHA) && !defined(REFLECTIONMAP_SKYBOX)
NdotVUnclamped,
#endif
#ifdef LINEARSPECULARREFLECTION
roughness,
#endif
#ifdef REFLECTIONMAP_3D
reflectionSampler,
reflectionCoords,
#else
reflectionSampler,
reflectionCoords,
#endif
#ifndef LODBASEDMICROSFURACE
reflectionSamplerLow,
reflectionSamplerHigh,
#endif
#ifdef REALTIME_FILTERING
vReflectionFilteringInfo,
#endif
environmentRadiance
);
vec3 environmentIrradiance=vec3(0.,0.,0.);
#ifdef USESPHERICALFROMREFLECTIONMAP
#if defined(NORMAL) && defined(USESPHERICALINVERTEX)
environmentIrradiance=vEnvironmentIrradiance;
#else
#ifdef ANISOTROPIC
vec3 irradianceVector=vec3(reflectionMatrix*vec4(anisotropicOut.anisotropicNormal,0)).xyz;
#else
vec3 irradianceVector=vec3(reflectionMatrix*vec4(normalW,0)).xyz;
#endif
#ifdef REFLECTIONMAP_OPPOSITEZ
irradianceVector.z*=-1.0;
#endif
#ifdef INVERTCUBICMAP
irradianceVector.y*=-1.0;
#endif
#if defined(REALTIME_FILTERING)
environmentIrradiance=irradiance(reflectionSampler,irradianceVector,vReflectionFilteringInfo);
#else
environmentIrradiance=computeEnvironmentIrradiance(irradianceVector);
#endif
#ifdef SS_TRANSLUCENCY
outParams.irradianceVector=irradianceVector;
#endif
#endif
#elif defined(USEIRRADIANCEMAP)
vec4 environmentIrradiance4=sampleReflection(irradianceSampler,reflectionCoords);
environmentIrradiance=environmentIrradiance4.rgb;
#ifdef RGBDREFLECTION
environmentIrradiance.rgb=fromRGBD(environmentIrradiance4);
#endif
#ifdef GAMMAREFLECTION
environmentIrradiance.rgb=toLinearSpace(environmentIrradiance.rgb);
#endif
#endif
environmentIrradiance*=vReflectionColor.rgb;
outParams.environmentRadiance=environmentRadiance;
outParams.environmentIrradiance=environmentIrradiance;
outParams.reflectionCoords=reflectionCoords;
}
#endif
`;x.IncludesShadersStore[Qn]=Kn;const qn="pbrBlockSheen",jn=`#ifdef SHEEN
struct sheenOutParams
{
float sheenIntensity;
vec3 sheenColor;
float sheenRoughness;
#ifdef SHEEN_LINKWITHALBEDO
vec3 surfaceAlbedo;
#endif
#if defined(ENVIRONMENTBRDF) && defined(SHEEN_ALBEDOSCALING)
float sheenAlbedoScaling;
#endif
#if defined(REFLECTION) && defined(ENVIRONMENTBRDF)
vec3 finalSheenRadianceScaled;
#endif
#if DEBUGMODE>0
vec4 sheenMapData;
vec3 sheenEnvironmentReflectance;
#endif
};
#define pbr_inline
#define inline
void sheenBlock(
in vec4 vSheenColor,
#ifdef SHEEN_ROUGHNESS
in float vSheenRoughness,
#if defined(SHEEN_TEXTURE_ROUGHNESS) && !defined(SHEEN_TEXTURE_ROUGHNESS_IDENTICAL) && !defined(SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE)
in vec4 sheenMapRoughnessData,
#endif
#endif
in float roughness,
#ifdef SHEEN_TEXTURE
in vec4 sheenMapData,
in float sheenMapLevel,
#endif
in float reflectance,
#ifdef SHEEN_LINKWITHALBEDO
in vec3 baseColor,
in vec3 surfaceAlbedo,
#endif
#ifdef ENVIRONMENTBRDF
in float NdotV,
in vec3 environmentBrdf,
#endif
#if defined(REFLECTION) && defined(ENVIRONMENTBRDF)
in vec2 AARoughnessFactors,
in vec3 vReflectionMicrosurfaceInfos,
in vec2 vReflectionInfos,
in vec3 vReflectionColor,
in vec4 vLightingIntensity,
#ifdef REFLECTIONMAP_3D
in samplerCube reflectionSampler,
in vec3 reflectionCoords,
#else
in sampler2D reflectionSampler,
in vec2 reflectionCoords,
#endif
in float NdotVUnclamped,
#ifndef LODBASEDMICROSFURACE
#ifdef REFLECTIONMAP_3D
in samplerCube reflectionSamplerLow,
in samplerCube reflectionSamplerHigh,
#else
in sampler2D reflectionSamplerLow,
in sampler2D reflectionSamplerHigh,
#endif
#endif
#ifdef REALTIME_FILTERING
in vec2 vReflectionFilteringInfo,
#endif
#if !defined(REFLECTIONMAP_SKYBOX) && defined(RADIANCEOCCLUSION)
in float seo,
#endif
#if !defined(REFLECTIONMAP_SKYBOX) && defined(HORIZONOCCLUSION) && defined(BUMP) && defined(REFLECTIONMAP_3D)
in float eho,
#endif
#endif
out sheenOutParams outParams
)
{
float sheenIntensity=vSheenColor.a;
#ifdef SHEEN_TEXTURE
#if DEBUGMODE>0
outParams.sheenMapData=sheenMapData;
#endif
#endif
#ifdef SHEEN_LINKWITHALBEDO
float sheenFactor=pow5(1.0-sheenIntensity);
vec3 sheenColor=baseColor.rgb*(1.0-sheenFactor);
float sheenRoughness=sheenIntensity;
outParams.surfaceAlbedo=surfaceAlbedo*sheenFactor;
#ifdef SHEEN_TEXTURE
sheenIntensity*=sheenMapData.a;
#endif
#else
vec3 sheenColor=vSheenColor.rgb;
#ifdef SHEEN_TEXTURE
#ifdef SHEEN_GAMMATEXTURE
sheenColor.rgb*=toLinearSpace(sheenMapData.rgb);
#else
sheenColor.rgb*=sheenMapData.rgb;
#endif
sheenColor.rgb*=sheenMapLevel;
#endif
#ifdef SHEEN_ROUGHNESS
float sheenRoughness=vSheenRoughness;
#ifdef SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE
#if defined(SHEEN_TEXTURE)
sheenRoughness*=sheenMapData.a;
#endif
#elif defined(SHEEN_TEXTURE_ROUGHNESS)
#ifdef SHEEN_TEXTURE_ROUGHNESS_IDENTICAL
sheenRoughness*=sheenMapData.a;
#else
sheenRoughness*=sheenMapRoughnessData.a;
#endif
#endif
#else
float sheenRoughness=roughness;
#ifdef SHEEN_TEXTURE
sheenIntensity*=sheenMapData.a;
#endif
#endif
#if !defined(SHEEN_ALBEDOSCALING)
sheenIntensity*=(1.-reflectance);
#endif
sheenColor*=sheenIntensity;
#endif
#ifdef ENVIRONMENTBRDF
/*#ifdef SHEEN_SOFTER
vec3 environmentSheenBrdf=vec3(0.,0.,getBRDFLookupCharlieSheen(NdotV,sheenRoughness));
#else*/
#ifdef SHEEN_ROUGHNESS
vec3 environmentSheenBrdf=getBRDFLookup(NdotV,sheenRoughness);
#else
vec3 environmentSheenBrdf=environmentBrdf;
#endif
/*#endif*/
#endif
#if defined(REFLECTION) && defined(ENVIRONMENTBRDF)
float sheenAlphaG=convertRoughnessToAverageSlope(sheenRoughness);
#ifdef SPECULARAA
sheenAlphaG+=AARoughnessFactors.y;
#endif
vec4 environmentSheenRadiance=vec4(0.,0.,0.,0.);
sampleReflectionTexture(
sheenAlphaG,
vReflectionMicrosurfaceInfos,
vReflectionInfos,
vReflectionColor,
#if defined(LODINREFLECTIONALPHA) && !defined(REFLECTIONMAP_SKYBOX)
NdotVUnclamped,
#endif
#ifdef LINEARSPECULARREFLECTION
sheenRoughness,
#endif
reflectionSampler,
reflectionCoords,
#ifndef LODBASEDMICROSFURACE
reflectionSamplerLow,
reflectionSamplerHigh,
#endif
#ifdef REALTIME_FILTERING
vReflectionFilteringInfo,
#endif
environmentSheenRadiance
);
vec3 sheenEnvironmentReflectance=getSheenReflectanceFromBRDFLookup(sheenColor,environmentSheenBrdf);
#if !defined(REFLECTIONMAP_SKYBOX) && defined(RADIANCEOCCLUSION)
sheenEnvironmentReflectance*=seo;
#endif
#if !defined(REFLECTIONMAP_SKYBOX) && defined(HORIZONOCCLUSION) && defined(BUMP) && defined(REFLECTIONMAP_3D)
sheenEnvironmentReflectance*=eho;
#endif
#if DEBUGMODE>0
outParams.sheenEnvironmentReflectance=sheenEnvironmentReflectance;
#endif
outParams.finalSheenRadianceScaled=
environmentSheenRadiance.rgb *
sheenEnvironmentReflectance *
vLightingIntensity.z;
#endif
#if defined(ENVIRONMENTBRDF) && defined(SHEEN_ALBEDOSCALING)
outParams.sheenAlbedoScaling=1.0-sheenIntensity*max(max(sheenColor.r,sheenColor.g),sheenColor.b)*environmentSheenBrdf.b;
#endif
outParams.sheenIntensity=sheenIntensity;
outParams.sheenColor=sheenColor;
outParams.sheenRoughness=sheenRoughness;
}
#endif
`;x.IncludesShadersStore[qn]=jn;const Zn="pbrBlockClearcoat",Jn=`struct clearcoatOutParams
{
vec3 specularEnvironmentR0;
float conservationFactor;
vec3 clearCoatNormalW;
vec2 clearCoatAARoughnessFactors;
float clearCoatIntensity;
float clearCoatRoughness;
#ifdef REFLECTION
vec3 finalClearCoatRadianceScaled;
#endif
#ifdef CLEARCOAT_TINT
vec3 absorption;
float clearCoatNdotVRefract;
vec3 clearCoatColor;
float clearCoatThickness;
#endif
#if defined(ENVIRONMENTBRDF) && defined(MS_BRDF_ENERGY_CONSERVATION)
vec3 energyConservationFactorClearCoat;
#endif
#if DEBUGMODE>0
mat3 TBNClearCoat;
vec2 clearCoatMapData;
vec4 clearCoatTintMapData;
vec4 environmentClearCoatRadiance;
float clearCoatNdotV;
vec3 clearCoatEnvironmentReflectance;
#endif
};
#ifdef CLEARCOAT
#define pbr_inline
#define inline
void clearcoatBlock(
in vec3 vPositionW,
in vec3 geometricNormalW,
in vec3 viewDirectionW,
in vec2 vClearCoatParams,
#if defined(CLEARCOAT_TEXTURE_ROUGHNESS) && !defined(CLEARCOAT_TEXTURE_ROUGHNESS_IDENTICAL) && !defined(CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE)
in vec4 clearCoatMapRoughnessData,
#endif
in vec3 specularEnvironmentR0,
#ifdef CLEARCOAT_TEXTURE
in vec2 clearCoatMapData,
#endif
#ifdef CLEARCOAT_TINT
in vec4 vClearCoatTintParams,
in float clearCoatColorAtDistance,
in vec4 vClearCoatRefractionParams,
#ifdef CLEARCOAT_TINT_TEXTURE
in vec4 clearCoatTintMapData,
#endif
#endif
#ifdef CLEARCOAT_BUMP
in vec2 vClearCoatBumpInfos,
in vec4 clearCoatBumpMapData,
in vec2 vClearCoatBumpUV,
#if defined(TANGENT) && defined(NORMAL)
in mat3 vTBN,
#else
in vec2 vClearCoatTangentSpaceParams,
#endif
#ifdef OBJECTSPACE_NORMALMAP
in mat4 normalMatrix,
#endif
#endif
#if defined(FORCENORMALFORWARD) && defined(NORMAL)
in vec3 faceNormal,
#endif
#ifdef REFLECTION
in vec3 vReflectionMicrosurfaceInfos,
in vec2 vReflectionInfos,
in vec3 vReflectionColor,
in vec4 vLightingIntensity,
#ifdef REFLECTIONMAP_3D
in samplerCube reflectionSampler,
#else
in sampler2D reflectionSampler,
#endif
#ifndef LODBASEDMICROSFURACE
#ifdef REFLECTIONMAP_3D
in samplerCube reflectionSamplerLow,
in samplerCube reflectionSamplerHigh,
#else
in sampler2D reflectionSamplerLow,
in sampler2D reflectionSamplerHigh,
#endif
#endif
#ifdef REALTIME_FILTERING
in vec2 vReflectionFilteringInfo,
#endif
#endif
#if defined(ENVIRONMENTBRDF) && !defined(REFLECTIONMAP_SKYBOX)
#ifdef RADIANCEOCCLUSION
in float ambientMonochrome,
#endif
#endif
#if defined(CLEARCOAT_BUMP) || defined(TWOSIDEDLIGHTING)
in float frontFacingMultiplier,
#endif
out clearcoatOutParams outParams
)
{
float clearCoatIntensity=vClearCoatParams.x;
float clearCoatRoughness=vClearCoatParams.y;
#ifdef CLEARCOAT_TEXTURE
clearCoatIntensity*=clearCoatMapData.x;
#ifdef CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE
clearCoatRoughness*=clearCoatMapData.y;
#endif
#if DEBUGMODE>0
outParams.clearCoatMapData=clearCoatMapData;
#endif
#endif
#if defined(CLEARCOAT_TEXTURE_ROUGHNESS) && !defined(CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE)
#ifdef CLEARCOAT_TEXTURE_ROUGHNESS_IDENTICAL
clearCoatRoughness*=clearCoatMapData.y;
#else
clearCoatRoughness*=clearCoatMapRoughnessData.y;
#endif
#endif
outParams.clearCoatIntensity=clearCoatIntensity;
outParams.clearCoatRoughness=clearCoatRoughness;
#ifdef CLEARCOAT_TINT
vec3 clearCoatColor=vClearCoatTintParams.rgb;
float clearCoatThickness=vClearCoatTintParams.a;
#ifdef CLEARCOAT_TINT_TEXTURE
#ifdef CLEARCOAT_TINT_GAMMATEXTURE
clearCoatColor*=toLinearSpace(clearCoatTintMapData.rgb);
#else
clearCoatColor*=clearCoatTintMapData.rgb;
#endif
clearCoatThickness*=clearCoatTintMapData.a;
#if DEBUGMODE>0
outParams.clearCoatTintMapData=clearCoatTintMapData;
#endif
#endif
outParams.clearCoatColor=computeColorAtDistanceInMedia(clearCoatColor,clearCoatColorAtDistance);
outParams.clearCoatThickness=clearCoatThickness;
#endif
#ifdef CLEARCOAT_REMAP_F0
vec3 specularEnvironmentR0Updated=getR0RemappedForClearCoat(specularEnvironmentR0);
#else
vec3 specularEnvironmentR0Updated=specularEnvironmentR0;
#endif
outParams.specularEnvironmentR0=mix(specularEnvironmentR0,specularEnvironmentR0Updated,clearCoatIntensity);
vec3 clearCoatNormalW=geometricNormalW;
#ifdef CLEARCOAT_BUMP
#ifdef NORMALXYSCALE
float clearCoatNormalScale=1.0;
#else
float clearCoatNormalScale=vClearCoatBumpInfos.y;
#endif
#if defined(TANGENT) && defined(NORMAL)
mat3 TBNClearCoat=vTBN;
#else
vec2 TBNClearCoatUV=vClearCoatBumpUV*frontFacingMultiplier;
mat3 TBNClearCoat=cotangent_frame(clearCoatNormalW*clearCoatNormalScale,vPositionW,TBNClearCoatUV,vClearCoatTangentSpaceParams);
#endif
#if DEBUGMODE>0
outParams.TBNClearCoat=TBNClearCoat;
#endif
#ifdef OBJECTSPACE_NORMALMAP
clearCoatNormalW=normalize(clearCoatBumpMapData.xyz *2.0-1.0);
clearCoatNormalW=normalize(mat3(normalMatrix)*clearCoatNormalW);
#else
clearCoatNormalW=perturbNormal(TBNClearCoat,clearCoatBumpMapData.xyz,vClearCoatBumpInfos.y);
#endif
#endif
#if defined(FORCENORMALFORWARD) && defined(NORMAL)
clearCoatNormalW*=sign(dot(clearCoatNormalW,faceNormal));
#endif
#if defined(TWOSIDEDLIGHTING) && defined(NORMAL)
clearCoatNormalW=clearCoatNormalW*frontFacingMultiplier;
#endif
outParams.clearCoatNormalW=clearCoatNormalW;
outParams.clearCoatAARoughnessFactors=getAARoughnessFactors(clearCoatNormalW.xyz);
float clearCoatNdotVUnclamped=dot(clearCoatNormalW,viewDirectionW);
float clearCoatNdotV=absEps(clearCoatNdotVUnclamped);
#if DEBUGMODE>0
outParams.clearCoatNdotV=clearCoatNdotV;
#endif
#ifdef CLEARCOAT_TINT
vec3 clearCoatVRefract=refract(-viewDirectionW,clearCoatNormalW,vClearCoatRefractionParams.y);
outParams.clearCoatNdotVRefract=absEps(dot(clearCoatNormalW,clearCoatVRefract));
#endif
#if defined(ENVIRONMENTBRDF) && (!defined(REFLECTIONMAP_SKYBOX) || defined(MS_BRDF_ENERGY_CONSERVATION))
vec3 environmentClearCoatBrdf=getBRDFLookup(clearCoatNdotV,clearCoatRoughness);
#endif
#if defined(REFLECTION)
float clearCoatAlphaG=convertRoughnessToAverageSlope(clearCoatRoughness);
#ifdef SPECULARAA
clearCoatAlphaG+=outParams.clearCoatAARoughnessFactors.y;
#endif
vec4 environmentClearCoatRadiance=vec4(0.,0.,0.,0.);
vec3 clearCoatReflectionVector=computeReflectionCoords(vec4(vPositionW,1.0),clearCoatNormalW);
#ifdef REFLECTIONMAP_OPPOSITEZ
clearCoatReflectionVector.z*=-1.0;
#endif
#ifdef REFLECTIONMAP_3D
vec3 clearCoatReflectionCoords=clearCoatReflectionVector;
#else
vec2 clearCoatReflectionCoords=clearCoatReflectionVector.xy;
#ifdef REFLECTIONMAP_PROJECTION
clearCoatReflectionCoords/=clearCoatReflectionVector.z;
#endif
clearCoatReflectionCoords.y=1.0-clearCoatReflectionCoords.y;
#endif
sampleReflectionTexture(
clearCoatAlphaG,
vReflectionMicrosurfaceInfos,
vReflectionInfos,
vReflectionColor,
#if defined(LODINREFLECTIONALPHA) && !defined(REFLECTIONMAP_SKYBOX)
clearCoatNdotVUnclamped,
#endif
#ifdef LINEARSPECULARREFLECTION
clearCoatRoughness,
#endif
reflectionSampler,
clearCoatReflectionCoords,
#ifndef LODBASEDMICROSFURACE
reflectionSamplerLow,
reflectionSamplerHigh,
#endif
#ifdef REALTIME_FILTERING
vReflectionFilteringInfo,
#endif
environmentClearCoatRadiance
);
#if DEBUGMODE>0
outParams.environmentClearCoatRadiance=environmentClearCoatRadiance;
#endif
#if defined(ENVIRONMENTBRDF) && !defined(REFLECTIONMAP_SKYBOX)
vec3 clearCoatEnvironmentReflectance=getReflectanceFromBRDFLookup(vec3(vClearCoatRefractionParams.x),environmentClearCoatBrdf);
#ifdef RADIANCEOCCLUSION
float clearCoatSeo=environmentRadianceOcclusion(ambientMonochrome,clearCoatNdotVUnclamped);
clearCoatEnvironmentReflectance*=clearCoatSeo;
#endif
#ifdef HORIZONOCCLUSION
#ifdef BUMP
#ifdef REFLECTIONMAP_3D
float clearCoatEho=environmentHorizonOcclusion(-viewDirectionW,clearCoatNormalW,geometricNormalW);
clearCoatEnvironmentReflectance*=clearCoatEho;
#endif
#endif
#endif
#else
vec3 clearCoatEnvironmentReflectance=getReflectanceFromAnalyticalBRDFLookup_Jones(clearCoatNdotV,vec3(1.),vec3(1.),sqrt(1.-clearCoatRoughness));
#endif
clearCoatEnvironmentReflectance*=clearCoatIntensity;
#if DEBUGMODE>0
outParams.clearCoatEnvironmentReflectance=clearCoatEnvironmentReflectance;
#endif
outParams.finalClearCoatRadianceScaled=
environmentClearCoatRadiance.rgb *
clearCoatEnvironmentReflectance *
vLightingIntensity.z;
#endif
#if defined(CLEARCOAT_TINT)
outParams.absorption=computeClearCoatAbsorption(outParams.clearCoatNdotVRefract,outParams.clearCoatNdotVRefract,outParams.clearCoatColor,clearCoatThickness,clearCoatIntensity);
#endif
float fresnelIBLClearCoat=fresnelSchlickGGX(clearCoatNdotV,vClearCoatRefractionParams.x,CLEARCOATREFLECTANCE90);
fresnelIBLClearCoat*=clearCoatIntensity;
outParams.conservationFactor=(1.-fresnelIBLClearCoat);
#if defined(ENVIRONMENTBRDF) && defined(MS_BRDF_ENERGY_CONSERVATION)
outParams.energyConservationFactorClearCoat=getEnergyConservationFactor(outParams.specularEnvironmentR0,environmentClearCoatBrdf);
#endif
}
#endif
`;x.IncludesShadersStore[Zn]=Jn;const $n="pbrBlockIridescence",es=`struct iridescenceOutParams
{
float iridescenceIntensity;
float iridescenceIOR;
float iridescenceThickness;
vec3 specularEnvironmentR0;
};
#ifdef IRIDESCENCE
#define pbr_inline
#define inline
void iridescenceBlock(
in vec4 vIridescenceParams,
in float viewAngle,
in vec3 specularEnvironmentR0,
#ifdef IRIDESCENCE_TEXTURE
in vec2 iridescenceMapData,
#endif
#ifdef IRIDESCENCE_THICKNESS_TEXTURE
in vec2 iridescenceThicknessMapData,
#endif
#ifdef CLEARCOAT
in float NdotVUnclamped,
#ifdef CLEARCOAT_TEXTURE
in vec2 clearCoatMapData,
#endif
#endif
out iridescenceOutParams outParams
)
{
float iridescenceIntensity=vIridescenceParams.x;
float iridescenceIOR=vIridescenceParams.y;
float iridescenceThicknessMin=vIridescenceParams.z;
float iridescenceThicknessMax=vIridescenceParams.w;
float iridescenceThicknessWeight=1.;
#ifdef IRIDESCENCE_TEXTURE
iridescenceIntensity*=iridescenceMapData.x;
#ifdef IRIDESCENCE_USE_THICKNESS_FROM_MAINTEXTURE
iridescenceThicknessWeight=iridescenceMapData.g;
#endif
#endif
#if defined(IRIDESCENCE_THICKNESS_TEXTURE)
iridescenceThicknessWeight=iridescenceThicknessMapData.g;
#endif
float iridescenceThickness=mix(iridescenceThicknessMin,iridescenceThicknessMax,iridescenceThicknessWeight);
float topIor=1.; 
#ifdef CLEARCOAT
float clearCoatIntensity=vClearCoatParams.x;
#ifdef CLEARCOAT_TEXTURE
clearCoatIntensity*=clearCoatMapData.x;
#endif
topIor=mix(1.0,vClearCoatRefractionParams.w-1.,clearCoatIntensity);
viewAngle=sqrt(1.0+square(1.0/topIor)*(square(NdotVUnclamped)-1.0));
#endif
vec3 iridescenceFresnel=evalIridescence(topIor,iridescenceIOR,viewAngle,iridescenceThickness,specularEnvironmentR0);
outParams.specularEnvironmentR0=mix(specularEnvironmentR0,iridescenceFresnel,iridescenceIntensity);
outParams.iridescenceIntensity=iridescenceIntensity;
outParams.iridescenceThickness=iridescenceThickness;
outParams.iridescenceIOR=iridescenceIOR;
}
#endif
`;x.IncludesShadersStore[$n]=es;const ts="pbrBlockSubSurface",is=`struct subSurfaceOutParams
{
vec3 specularEnvironmentReflectance;
#ifdef SS_REFRACTION
vec3 finalRefraction;
vec3 surfaceAlbedo;
#ifdef SS_LINKREFRACTIONTOTRANSPARENCY
float alpha;
#endif
#ifdef REFLECTION
float refractionFactorForIrradiance;
#endif
#endif
#ifdef SS_TRANSLUCENCY
vec3 transmittance;
float translucencyIntensity;
#ifdef REFLECTION
vec3 refractionIrradiance;
#endif
#endif
#if DEBUGMODE>0
vec4 thicknessMap;
vec4 environmentRefraction;
vec3 refractionTransmittance;
#endif
};
#ifdef SUBSURFACE
#define pbr_inline
#define inline
void subSurfaceBlock(
in vec3 vSubSurfaceIntensity,
in vec2 vThicknessParam,
in vec4 vTintColor,
in vec3 normalW,
in vec3 specularEnvironmentReflectance,
#ifdef SS_THICKNESSANDMASK_TEXTURE
in vec4 thicknessMap,
#endif
#ifdef SS_REFRACTIONINTENSITY_TEXTURE
in vec4 refractionIntensityMap,
#endif
#ifdef SS_TRANSLUCENCYINTENSITY_TEXTURE
in vec4 translucencyIntensityMap,
#endif
#ifdef REFLECTION
#ifdef SS_TRANSLUCENCY
in mat4 reflectionMatrix,
#ifdef USESPHERICALFROMREFLECTIONMAP
#if !defined(NORMAL) || !defined(USESPHERICALINVERTEX)
in vec3 irradianceVector_,
#endif
#if defined(REALTIME_FILTERING)
in samplerCube reflectionSampler,
in vec2 vReflectionFilteringInfo,
#endif
#endif
#ifdef USEIRRADIANCEMAP
#ifdef REFLECTIONMAP_3D
in samplerCube irradianceSampler,
#else
in sampler2D irradianceSampler,
#endif
#endif
#endif
#endif
#if defined(SS_REFRACTION) || defined(SS_TRANSLUCENCY)
in vec3 surfaceAlbedo,
#endif
#ifdef SS_REFRACTION
in vec3 vPositionW,
in vec3 viewDirectionW,
in mat4 view,
in vec4 vRefractionInfos,
in mat4 refractionMatrix,
in vec4 vRefractionMicrosurfaceInfos,
in vec4 vLightingIntensity,
#ifdef SS_LINKREFRACTIONTOTRANSPARENCY
in float alpha,
#endif
#ifdef SS_LODINREFRACTIONALPHA
in float NdotVUnclamped,
#endif
#ifdef SS_LINEARSPECULARREFRACTION
in float roughness,
#endif
in float alphaG,
#ifdef SS_REFRACTIONMAP_3D
in samplerCube refractionSampler,
#ifndef LODBASEDMICROSFURACE
in samplerCube refractionSamplerLow,
in samplerCube refractionSamplerHigh,
#endif
#else
in sampler2D refractionSampler,
#ifndef LODBASEDMICROSFURACE
in sampler2D refractionSamplerLow,
in sampler2D refractionSamplerHigh,
#endif
#endif
#ifdef ANISOTROPIC
in anisotropicOutParams anisotropicOut,
#endif
#ifdef REALTIME_FILTERING
in vec2 vRefractionFilteringInfo,
#endif
#ifdef SS_USE_LOCAL_REFRACTIONMAP_CUBIC
in vec3 refractionPosition,
in vec3 refractionSize,
#endif
#endif
#ifdef SS_TRANSLUCENCY
in vec3 vDiffusionDistance,
#endif
out subSurfaceOutParams outParams
)
{
outParams.specularEnvironmentReflectance=specularEnvironmentReflectance;
#ifdef SS_REFRACTION
float refractionIntensity=vSubSurfaceIntensity.x;
#ifdef SS_LINKREFRACTIONTOTRANSPARENCY
refractionIntensity*=(1.0-alpha);
outParams.alpha=1.0;
#endif
#endif
#ifdef SS_TRANSLUCENCY
float translucencyIntensity=vSubSurfaceIntensity.y;
#endif
#ifdef SS_THICKNESSANDMASK_TEXTURE
#if defined(SS_USE_GLTF_TEXTURES)
float thickness=thicknessMap.g*vThicknessParam.y+vThicknessParam.x;
#else
float thickness=thicknessMap.r*vThicknessParam.y+vThicknessParam.x;
#endif
#if DEBUGMODE>0
outParams.thicknessMap=thicknessMap;
#endif
#ifdef SS_MASK_FROM_THICKNESS_TEXTURE
#if defined(SS_REFRACTION) && defined(SS_REFRACTION_USE_INTENSITY_FROM_TEXTURE)
#if defined(SS_USE_GLTF_TEXTURES)
refractionIntensity*=thicknessMap.r;
#else
refractionIntensity*=thicknessMap.g;
#endif
#endif
#if defined(SS_TRANSLUCENCY) && defined(SS_TRANSLUCENCY_USE_INTENSITY_FROM_TEXTURE)
translucencyIntensity*=thicknessMap.b;
#endif
#endif
#else
float thickness=vThicknessParam.y;
#endif
#ifdef SS_REFRACTIONINTENSITY_TEXTURE
#ifdef SS_USE_GLTF_TEXTURES
refractionIntensity*=refractionIntensityMap.r;
#else
refractionIntensity*=refractionIntensityMap.g;
#endif
#endif
#ifdef SS_TRANSLUCENCYINTENSITY_TEXTURE
translucencyIntensity*=translucencyIntensityMap.b;
#endif
#ifdef SS_TRANSLUCENCY
thickness=maxEps(thickness);
vec3 transmittance=transmittanceBRDF_Burley(vTintColor.rgb,vDiffusionDistance,thickness);
transmittance*=translucencyIntensity;
outParams.transmittance=transmittance;
outParams.translucencyIntensity=translucencyIntensity;
#endif
#ifdef SS_REFRACTION
vec4 environmentRefraction=vec4(0.,0.,0.,0.);
#ifdef ANISOTROPIC
vec3 refractionVector=refract(-viewDirectionW,anisotropicOut.anisotropicNormal,vRefractionInfos.y);
#else
vec3 refractionVector=refract(-viewDirectionW,normalW,vRefractionInfos.y);
#endif
#ifdef SS_REFRACTIONMAP_OPPOSITEZ
refractionVector.z*=-1.0;
#endif
#ifdef SS_REFRACTIONMAP_3D
#ifdef SS_USE_LOCAL_REFRACTIONMAP_CUBIC
refractionVector=parallaxCorrectNormal(vPositionW,refractionVector,refractionSize,refractionPosition);
#endif
refractionVector.y=refractionVector.y*vRefractionInfos.w;
vec3 refractionCoords=refractionVector;
refractionCoords=vec3(refractionMatrix*vec4(refractionCoords,0));
#else
#ifdef SS_USE_THICKNESS_AS_DEPTH
vec3 vRefractionUVW=vec3(refractionMatrix*(view*vec4(vPositionW+refractionVector*thickness,1.0)));
#else
vec3 vRefractionUVW=vec3(refractionMatrix*(view*vec4(vPositionW+refractionVector*vRefractionInfos.z,1.0)));
#endif
vec2 refractionCoords=vRefractionUVW.xy/vRefractionUVW.z;
refractionCoords.y=1.0-refractionCoords.y;
#endif
#ifdef SS_HAS_THICKNESS
float ior=vRefractionInfos.y;
#else
float ior=vRefractionMicrosurfaceInfos.w;
#endif
#ifdef SS_LODINREFRACTIONALPHA
float refractionAlphaG=alphaG;
refractionAlphaG=mix(alphaG,0.0,clamp(ior*3.0-2.0,0.0,1.0));
float refractionLOD=getLodFromAlphaG(vRefractionMicrosurfaceInfos.x,refractionAlphaG,NdotVUnclamped);
#elif defined(SS_LINEARSPECULARREFRACTION)
float refractionRoughness=alphaG;
refractionRoughness=mix(alphaG,0.0,clamp(ior*3.0-2.0,0.0,1.0));
float refractionLOD=getLinearLodFromRoughness(vRefractionMicrosurfaceInfos.x,refractionRoughness);
#else
float refractionAlphaG=alphaG;
refractionAlphaG=mix(alphaG,0.0,clamp(ior*3.0-2.0,0.0,1.0));
float refractionLOD=getLodFromAlphaG(vRefractionMicrosurfaceInfos.x,refractionAlphaG);
#endif
#ifdef LODBASEDMICROSFURACE
refractionLOD=refractionLOD*vRefractionMicrosurfaceInfos.y+vRefractionMicrosurfaceInfos.z;
#ifdef SS_LODINREFRACTIONALPHA
float automaticRefractionLOD=UNPACK_LOD(sampleRefraction(refractionSampler,refractionCoords).a);
float requestedRefractionLOD=max(automaticRefractionLOD,refractionLOD);
#else
float requestedRefractionLOD=refractionLOD;
#endif
#ifdef REALTIME_FILTERING
environmentRefraction=vec4(radiance(alphaG,refractionSampler,refractionCoords,vRefractionFilteringInfo),1.0);
#else
environmentRefraction=sampleRefractionLod(refractionSampler,refractionCoords,requestedRefractionLOD);
#endif
#else
float lodRefractionNormalized=saturate(refractionLOD/log2(vRefractionMicrosurfaceInfos.x));
float lodRefractionNormalizedDoubled=lodRefractionNormalized*2.0;
vec4 environmentRefractionMid=sampleRefraction(refractionSampler,refractionCoords);
if (lodRefractionNormalizedDoubled<1.0){
environmentRefraction=mix(
sampleRefraction(refractionSamplerHigh,refractionCoords),
environmentRefractionMid,
lodRefractionNormalizedDoubled
);
} else {
environmentRefraction=mix(
environmentRefractionMid,
sampleRefraction(refractionSamplerLow,refractionCoords),
lodRefractionNormalizedDoubled-1.0
);
}
#endif
#ifdef SS_RGBDREFRACTION
environmentRefraction.rgb=fromRGBD(environmentRefraction);
#endif
#ifdef SS_GAMMAREFRACTION
environmentRefraction.rgb=toLinearSpace(environmentRefraction.rgb);
#endif
environmentRefraction.rgb*=vRefractionInfos.x;
#endif
#ifdef SS_REFRACTION
vec3 refractionTransmittance=vec3(refractionIntensity);
#ifdef SS_THICKNESSANDMASK_TEXTURE
vec3 volumeAlbedo=computeColorAtDistanceInMedia(vTintColor.rgb,vTintColor.w);
refractionTransmittance*=cocaLambert(volumeAlbedo,thickness);
#elif defined(SS_LINKREFRACTIONTOTRANSPARENCY)
float maxChannel=max(max(surfaceAlbedo.r,surfaceAlbedo.g),surfaceAlbedo.b);
vec3 volumeAlbedo=saturate(maxChannel*surfaceAlbedo);
environmentRefraction.rgb*=volumeAlbedo;
#else
vec3 volumeAlbedo=computeColorAtDistanceInMedia(vTintColor.rgb,vTintColor.w);
refractionTransmittance*=cocaLambert(volumeAlbedo,vThicknessParam.y);
#endif
#ifdef SS_ALBEDOFORREFRACTIONTINT
environmentRefraction.rgb*=surfaceAlbedo.rgb;
#endif
outParams.surfaceAlbedo=surfaceAlbedo*(1.-refractionIntensity);
#ifdef REFLECTION
outParams.refractionFactorForIrradiance=(1.-refractionIntensity);
#endif
#ifdef UNUSED_MULTIPLEBOUNCES
vec3 bounceSpecularEnvironmentReflectance=(2.0*specularEnvironmentReflectance)/(1.0+specularEnvironmentReflectance);
outParams.specularEnvironmentReflectance=mix(bounceSpecularEnvironmentReflectance,specularEnvironmentReflectance,refractionIntensity);
#endif
refractionTransmittance*=1.0-outParams.specularEnvironmentReflectance;
#if DEBUGMODE>0
outParams.refractionTransmittance=refractionTransmittance;
#endif
outParams.finalRefraction=environmentRefraction.rgb*refractionTransmittance*vLightingIntensity.z;
#if DEBUGMODE>0
outParams.environmentRefraction=environmentRefraction;
#endif
#endif
#if defined(REFLECTION) && defined(SS_TRANSLUCENCY)
#if defined(NORMAL) && defined(USESPHERICALINVERTEX) || !defined(USESPHERICALFROMREFLECTIONMAP)
vec3 irradianceVector=vec3(reflectionMatrix*vec4(normalW,0)).xyz;
#ifdef REFLECTIONMAP_OPPOSITEZ
irradianceVector.z*=-1.0;
#endif
#ifdef INVERTCUBICMAP
irradianceVector.y*=-1.0;
#endif
#else
vec3 irradianceVector=irradianceVector_;
#endif
#if defined(USESPHERICALFROMREFLECTIONMAP)
#if defined(REALTIME_FILTERING)
vec3 refractionIrradiance=irradiance(reflectionSampler,-irradianceVector,vReflectionFilteringInfo);
#else
vec3 refractionIrradiance=computeEnvironmentIrradiance(-irradianceVector);
#endif
#elif defined(USEIRRADIANCEMAP)
#ifdef REFLECTIONMAP_3D
vec3 irradianceCoords=irradianceVector;
#else
vec2 irradianceCoords=irradianceVector.xy;
#ifdef REFLECTIONMAP_PROJECTION
irradianceCoords/=irradianceVector.z;
#endif
irradianceCoords.y=1.0-irradianceCoords.y;
#endif
vec4 refractionIrradiance=sampleReflection(irradianceSampler,-irradianceCoords);
#ifdef RGBDREFLECTION
refractionIrradiance.rgb=fromRGBD(refractionIrradiance);
#endif
#ifdef GAMMAREFLECTION
refractionIrradiance.rgb=toLinearSpace(refractionIrradiance.rgb);
#endif
#else
vec4 refractionIrradiance=vec4(0.);
#endif
refractionIrradiance.rgb*=transmittance;
#ifdef SS_ALBEDOFORTRANSLUCENCYTINT
refractionIrradiance.rgb*=surfaceAlbedo.rgb;
#endif
outParams.refractionIrradiance=refractionIrradiance.rgb;
#endif
}
#endif
`;x.IncludesShadersStore[ts]=is;const rs="clipPlaneFragment",ns=`#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)
if (false) {}
#endif
#ifdef CLIPPLANE
else if (fClipDistance>0.0)
{
discard;
}
#endif
#ifdef CLIPPLANE2
else if (fClipDistance2>0.0)
{
discard;
}
#endif
#ifdef CLIPPLANE3
else if (fClipDistance3>0.0)
{
discard;
}
#endif
#ifdef CLIPPLANE4
else if (fClipDistance4>0.0)
{
discard;
}
#endif
#ifdef CLIPPLANE5
else if (fClipDistance5>0.0)
{
discard;
}
#endif
#ifdef CLIPPLANE6
else if (fClipDistance6>0.0)
{
discard;
}
#endif
`;x.IncludesShadersStore[rs]=ns;const ss="pbrBlockNormalGeometric",as=`vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);
#ifdef NORMAL
vec3 normalW=normalize(vNormalW);
#else
vec3 normalW=normalize(cross(dFdx(vPositionW),dFdy(vPositionW)))*vEyePosition.w;
#endif
vec3 geometricNormalW=normalW;
#if defined(TWOSIDEDLIGHTING) && defined(NORMAL)
geometricNormalW=gl_FrontFacing ? geometricNormalW : -geometricNormalW;
#endif
`;x.IncludesShadersStore[ss]=as;const os="bumpFragment",ls=`vec2 uvOffset=vec2(0.0,0.0);
#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)
#ifdef NORMALXYSCALE
float normalScale=1.0;
#elif defined(BUMP)
float normalScale=vBumpInfos.y;
#else
float normalScale=1.0;
#endif
#if defined(TANGENT) && defined(NORMAL)
mat3 TBN=vTBN;
#elif defined(BUMP)
vec2 TBNUV=gl_FrontFacing ? vBumpUV : -vBumpUV;
mat3 TBN=cotangent_frame(normalW*normalScale,vPositionW,TBNUV,vTangentSpaceParams);
#else
vec2 TBNUV=gl_FrontFacing ? vDetailUV : -vDetailUV;
mat3 TBN=cotangent_frame(normalW*normalScale,vPositionW,TBNUV,vec2(1.,1.));
#endif
#elif defined(ANISOTROPIC)
#if defined(TANGENT) && defined(NORMAL)
mat3 TBN=vTBN;
#else
vec2 TBNUV=gl_FrontFacing ? vMainUV1 : -vMainUV1;
mat3 TBN=cotangent_frame(normalW,vPositionW,TBNUV,vec2(1.,1.));
#endif
#endif
#ifdef PARALLAX
mat3 invTBN=transposeMat3(TBN);
#ifdef PARALLAXOCCLUSION
uvOffset=parallaxOcclusion(invTBN*-viewDirectionW,invTBN*normalW,vBumpUV,vBumpInfos.z);
#else
uvOffset=parallaxOffset(invTBN*viewDirectionW,vBumpInfos.z);
#endif
#endif
#ifdef DETAIL
vec4 detailColor=texture2D(detailSampler,vDetailUV+uvOffset);
vec2 detailNormalRG=detailColor.wy*2.0-1.0;
float detailNormalB=sqrt(1.-saturate(dot(detailNormalRG,detailNormalRG)));
vec3 detailNormal=vec3(detailNormalRG,detailNormalB);
#endif
#ifdef BUMP
#ifdef OBJECTSPACE_NORMALMAP
normalW=normalize(texture2D(bumpSampler,vBumpUV).xyz *2.0-1.0);
normalW=normalize(mat3(normalMatrix)*normalW);
#elif !defined(DETAIL)
normalW=perturbNormal(TBN,texture2D(bumpSampler,vBumpUV+uvOffset).xyz,vBumpInfos.y);
#else
vec3 bumpNormal=texture2D(bumpSampler,vBumpUV+uvOffset).xyz*2.0-1.0;
#if DETAIL_NORMALBLENDMETHOD==0 
detailNormal.xy*=vDetailInfos.z;
vec3 blendedNormal=normalize(vec3(bumpNormal.xy+detailNormal.xy,bumpNormal.z*detailNormal.z));
#elif DETAIL_NORMALBLENDMETHOD==1 
detailNormal.xy*=vDetailInfos.z;
bumpNormal+=vec3(0.0,0.0,1.0);
detailNormal*=vec3(-1.0,-1.0,1.0);
vec3 blendedNormal=bumpNormal*dot(bumpNormal,detailNormal)/bumpNormal.z-detailNormal;
#endif
normalW=perturbNormalBase(TBN,blendedNormal,vBumpInfos.y);
#endif
#elif defined(DETAIL)
detailNormal.xy*=vDetailInfos.z;
normalW=perturbNormalBase(TBN,detailNormal,vDetailInfos.z);
#endif
`;x.IncludesShadersStore[os]=ls;const fs="pbrBlockNormalFinal",cs=`#if defined(FORCENORMALFORWARD) && defined(NORMAL)
vec3 faceNormal=normalize(cross(dFdx(vPositionW),dFdy(vPositionW)))*vEyePosition.w;
#if defined(TWOSIDEDLIGHTING)
faceNormal=gl_FrontFacing ? faceNormal : -faceNormal;
#endif
normalW*=sign(dot(normalW,faceNormal));
#endif
#if defined(TWOSIDEDLIGHTING) && defined(NORMAL)
normalW=gl_FrontFacing ? normalW : -normalW;
#endif
`;x.IncludesShadersStore[fs]=cs;const hs="depthPrePass",ds=`#ifdef DEPTHPREPASS
gl_FragColor=vec4(0.,0.,0.,1.0);
return;
#endif
`;x.IncludesShadersStore[hs]=ds;const us="pbrBlockLightmapInit",_s=`#ifdef LIGHTMAP
vec4 lightmapColor=texture2D(lightmapSampler,vLightmapUV+uvOffset);
#ifdef RGBDLIGHTMAP
lightmapColor.rgb=fromRGBD(lightmapColor);
#endif
#ifdef GAMMALIGHTMAP
lightmapColor.rgb=toLinearSpace(lightmapColor.rgb);
#endif
lightmapColor.rgb*=vLightmapInfos.y;
#endif
`;x.IncludesShadersStore[us]=_s;const ms="pbrBlockGeometryInfo",ps=`float NdotVUnclamped=dot(normalW,viewDirectionW);
float NdotV=absEps(NdotVUnclamped);
float alphaG=convertRoughnessToAverageSlope(roughness);
vec2 AARoughnessFactors=getAARoughnessFactors(normalW.xyz);
#ifdef SPECULARAA
alphaG+=AARoughnessFactors.y;
#endif
#if defined(ENVIRONMENTBRDF)
vec3 environmentBrdf=getBRDFLookup(NdotV,roughness);
#endif
#if defined(ENVIRONMENTBRDF) && !defined(REFLECTIONMAP_SKYBOX)
#ifdef RADIANCEOCCLUSION
#ifdef AMBIENTINGRAYSCALE
float ambientMonochrome=aoOut.ambientOcclusionColor.r;
#else
float ambientMonochrome=getLuminance(aoOut.ambientOcclusionColor);
#endif
float seo=environmentRadianceOcclusion(ambientMonochrome,NdotVUnclamped);
#endif
#ifdef HORIZONOCCLUSION
#ifdef BUMP
#ifdef REFLECTIONMAP_3D
float eho=environmentHorizonOcclusion(-viewDirectionW,normalW,geometricNormalW);
#endif
#endif
#endif
#endif
`;x.IncludesShadersStore[ms]=ps;const Es="pbrBlockReflectance0",gs=`float reflectance=max(max(reflectivityOut.surfaceReflectivityColor.r,reflectivityOut.surfaceReflectivityColor.g),reflectivityOut.surfaceReflectivityColor.b);
vec3 specularEnvironmentR0=reflectivityOut.surfaceReflectivityColor.rgb;
#ifdef METALLICWORKFLOW
vec3 specularEnvironmentR90=vec3(metallicReflectanceFactors.a);
#else 
vec3 specularEnvironmentR90=vec3(1.0,1.0,1.0);
#endif
#ifdef ALPHAFRESNEL
float reflectance90=fresnelGrazingReflectance(reflectance);
specularEnvironmentR90=specularEnvironmentR90*reflectance90;
#endif
`;x.IncludesShadersStore[Es]=gs;const As="pbrBlockReflectance",Ts=`#if defined(ENVIRONMENTBRDF) && !defined(REFLECTIONMAP_SKYBOX)
vec3 specularEnvironmentReflectance=getReflectanceFromBRDFLookup(clearcoatOut.specularEnvironmentR0,specularEnvironmentR90,environmentBrdf);
#ifdef RADIANCEOCCLUSION
specularEnvironmentReflectance*=seo;
#endif
#ifdef HORIZONOCCLUSION
#ifdef BUMP
#ifdef REFLECTIONMAP_3D
specularEnvironmentReflectance*=eho;
#endif
#endif
#endif
#else
vec3 specularEnvironmentReflectance=getReflectanceFromAnalyticalBRDFLookup_Jones(NdotV,clearcoatOut.specularEnvironmentR0,specularEnvironmentR90,sqrt(microSurface));
#endif
#ifdef CLEARCOAT
specularEnvironmentReflectance*=clearcoatOut.conservationFactor;
#if defined(CLEARCOAT_TINT)
specularEnvironmentReflectance*=clearcoatOut.absorption;
#endif
#endif
`;x.IncludesShadersStore[As]=Ts;const vs="pbrBlockDirectLighting",Ss=`vec3 diffuseBase=vec3(0.,0.,0.);
#ifdef SPECULARTERM
vec3 specularBase=vec3(0.,0.,0.);
#endif
#ifdef CLEARCOAT
vec3 clearCoatBase=vec3(0.,0.,0.);
#endif
#ifdef SHEEN
vec3 sheenBase=vec3(0.,0.,0.);
#endif
preLightingInfo preInfo;
lightingInfo info;
float shadow=1.; 
#if defined(CLEARCOAT) && defined(CLEARCOAT_TINT)
vec3 absorption=vec3(0.);
#endif
`;x.IncludesShadersStore[vs]=Ss;const Rs="lightFragment",Cs=`#ifdef LIGHT{X}
#if defined(SHADOWONLY) || defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X}) && defined(LIGHTMAPNOSPECULAR{X})
#else
#ifdef PBR
#ifdef SPOTLIGHT{X}
preInfo=computePointAndSpotPreLightingInfo(light{X}.vLightData,viewDirectionW,normalW);
#elif defined(POINTLIGHT{X})
preInfo=computePointAndSpotPreLightingInfo(light{X}.vLightData,viewDirectionW,normalW);
#elif defined(HEMILIGHT{X})
preInfo=computeHemisphericPreLightingInfo(light{X}.vLightData,viewDirectionW,normalW);
#elif defined(DIRLIGHT{X})
preInfo=computeDirectionalPreLightingInfo(light{X}.vLightData,viewDirectionW,normalW);
#endif
preInfo.NdotV=NdotV;
#ifdef SPOTLIGHT{X}
#ifdef LIGHT_FALLOFF_GLTF{X}
preInfo.attenuation=computeDistanceLightFalloff_GLTF(preInfo.lightDistanceSquared,light{X}.vLightFalloff.y);
preInfo.attenuation*=computeDirectionalLightFalloff_GLTF(light{X}.vLightDirection.xyz,preInfo.L,light{X}.vLightFalloff.z,light{X}.vLightFalloff.w);
#elif defined(LIGHT_FALLOFF_PHYSICAL{X})
preInfo.attenuation=computeDistanceLightFalloff_Physical(preInfo.lightDistanceSquared);
preInfo.attenuation*=computeDirectionalLightFalloff_Physical(light{X}.vLightDirection.xyz,preInfo.L,light{X}.vLightDirection.w);
#elif defined(LIGHT_FALLOFF_STANDARD{X})
preInfo.attenuation=computeDistanceLightFalloff_Standard(preInfo.lightOffset,light{X}.vLightFalloff.x);
preInfo.attenuation*=computeDirectionalLightFalloff_Standard(light{X}.vLightDirection.xyz,preInfo.L,light{X}.vLightDirection.w,light{X}.vLightData.w);
#else
preInfo.attenuation=computeDistanceLightFalloff(preInfo.lightOffset,preInfo.lightDistanceSquared,light{X}.vLightFalloff.x,light{X}.vLightFalloff.y);
preInfo.attenuation*=computeDirectionalLightFalloff(light{X}.vLightDirection.xyz,preInfo.L,light{X}.vLightDirection.w,light{X}.vLightData.w,light{X}.vLightFalloff.z,light{X}.vLightFalloff.w);
#endif
#elif defined(POINTLIGHT{X})
#ifdef LIGHT_FALLOFF_GLTF{X}
preInfo.attenuation=computeDistanceLightFalloff_GLTF(preInfo.lightDistanceSquared,light{X}.vLightFalloff.y);
#elif defined(LIGHT_FALLOFF_PHYSICAL{X})
preInfo.attenuation=computeDistanceLightFalloff_Physical(preInfo.lightDistanceSquared);
#elif defined(LIGHT_FALLOFF_STANDARD{X})
preInfo.attenuation=computeDistanceLightFalloff_Standard(preInfo.lightOffset,light{X}.vLightFalloff.x);
#else
preInfo.attenuation=computeDistanceLightFalloff(preInfo.lightOffset,preInfo.lightDistanceSquared,light{X}.vLightFalloff.x,light{X}.vLightFalloff.y);
#endif
#else
preInfo.attenuation=1.0;
#endif
#ifdef HEMILIGHT{X}
preInfo.roughness=roughness;
#else
preInfo.roughness=adjustRoughnessFromLightProperties(roughness,light{X}.vLightSpecular.a,preInfo.lightDistance);
#endif
#ifdef IRIDESCENCE
preInfo.iridescenceIntensity=iridescenceIntensity;
#endif
#ifdef HEMILIGHT{X}
info.diffuse=computeHemisphericDiffuseLighting(preInfo,light{X}.vLightDiffuse.rgb,light{X}.vLightGround);
#elif defined(SS_TRANSLUCENCY)
info.diffuse=computeDiffuseAndTransmittedLighting(preInfo,light{X}.vLightDiffuse.rgb,subSurfaceOut.transmittance);
#else
info.diffuse=computeDiffuseLighting(preInfo,light{X}.vLightDiffuse.rgb);
#endif
#ifdef SPECULARTERM
#ifdef ANISOTROPIC
info.specular=computeAnisotropicSpecularLighting(preInfo,viewDirectionW,normalW,anisotropicOut.anisotropicTangent,anisotropicOut.anisotropicBitangent,anisotropicOut.anisotropy,clearcoatOut.specularEnvironmentR0,specularEnvironmentR90,AARoughnessFactors.x,light{X}.vLightDiffuse.rgb);
#else
info.specular=computeSpecularLighting(preInfo,normalW,clearcoatOut.specularEnvironmentR0,specularEnvironmentR90,AARoughnessFactors.x,light{X}.vLightDiffuse.rgb);
#endif
#endif
#ifdef SHEEN
#ifdef SHEEN_LINKWITHALBEDO
preInfo.roughness=sheenOut.sheenIntensity;
#else
#ifdef HEMILIGHT{X}
preInfo.roughness=sheenOut.sheenRoughness;
#else
preInfo.roughness=adjustRoughnessFromLightProperties(sheenOut.sheenRoughness,light{X}.vLightSpecular.a,preInfo.lightDistance);
#endif
#endif
info.sheen=computeSheenLighting(preInfo,normalW,sheenOut.sheenColor,specularEnvironmentR90,AARoughnessFactors.x,light{X}.vLightDiffuse.rgb);
#endif
#ifdef CLEARCOAT
#ifdef HEMILIGHT{X}
preInfo.roughness=clearcoatOut.clearCoatRoughness;
#else
preInfo.roughness=adjustRoughnessFromLightProperties(clearcoatOut.clearCoatRoughness,light{X}.vLightSpecular.a,preInfo.lightDistance);
#endif
info.clearCoat=computeClearCoatLighting(preInfo,clearcoatOut.clearCoatNormalW,clearcoatOut.clearCoatAARoughnessFactors.x,clearcoatOut.clearCoatIntensity,light{X}.vLightDiffuse.rgb);
#ifdef CLEARCOAT_TINT
absorption=computeClearCoatLightingAbsorption(clearcoatOut.clearCoatNdotVRefract,preInfo.L,clearcoatOut.clearCoatNormalW,clearcoatOut.clearCoatColor,clearcoatOut.clearCoatThickness,clearcoatOut.clearCoatIntensity);
info.diffuse*=absorption;
#ifdef SPECULARTERM
info.specular*=absorption;
#endif
#endif
info.diffuse*=info.clearCoat.w;
#ifdef SPECULARTERM
info.specular*=info.clearCoat.w;
#endif
#ifdef SHEEN
info.sheen*=info.clearCoat.w;
#endif
#endif
#else
#ifdef SPOTLIGHT{X}
info=computeSpotLighting(viewDirectionW,normalW,light{X}.vLightData,light{X}.vLightDirection,light{X}.vLightDiffuse.rgb,light{X}.vLightSpecular.rgb,light{X}.vLightDiffuse.a,glossiness);
#elif defined(HEMILIGHT{X})
info=computeHemisphericLighting(viewDirectionW,normalW,light{X}.vLightData,light{X}.vLightDiffuse.rgb,light{X}.vLightSpecular.rgb,light{X}.vLightGround,glossiness);
#elif defined(POINTLIGHT{X}) || defined(DIRLIGHT{X})
info=computeLighting(viewDirectionW,normalW,light{X}.vLightData,light{X}.vLightDiffuse.rgb,light{X}.vLightSpecular.rgb,light{X}.vLightDiffuse.a,glossiness);
#endif
#endif
#ifdef PROJECTEDLIGHTTEXTURE{X}
info.diffuse*=computeProjectionTextureDiffuseLighting(projectionLightSampler{X},textureProjectionMatrix{X});
#endif
#endif
#ifdef SHADOW{X}
#ifdef SHADOWCSM{X}
for (int i=0; i<SHADOWCSMNUM_CASCADES{X}; i++) 
{
#ifdef SHADOWCSM_RIGHTHANDED{X}
diff{X}=viewFrustumZ{X}[i]+vPositionFromCamera{X}.z;
#else
diff{X}=viewFrustumZ{X}[i]-vPositionFromCamera{X}.z;
#endif
if (diff{X}>=0.) {
index{X}=i;
break;
}
}
#ifdef SHADOWCSMUSESHADOWMAXZ{X}
if (index{X}>=0)
#endif
{
#if defined(SHADOWPCF{X})
#if defined(SHADOWLOWQUALITY{X})
shadow=computeShadowWithCSMPCF1(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowSampler{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#elif defined(SHADOWMEDIUMQUALITY{X})
shadow=computeShadowWithCSMPCF3(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowSampler{X},light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#else
shadow=computeShadowWithCSMPCF5(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowSampler{X},light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWPCSS{X})
#if defined(SHADOWLOWQUALITY{X})
shadow=computeShadowWithCSMPCSS16(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthSampler{X},shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,lightSizeUVCorrection{X}[index{X}],depthCorrection{X}[index{X}],penumbraDarkness{X});
#elif defined(SHADOWMEDIUMQUALITY{X})
shadow=computeShadowWithCSMPCSS32(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthSampler{X},shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,lightSizeUVCorrection{X}[index{X}],depthCorrection{X}[index{X}],penumbraDarkness{X});
#else
shadow=computeShadowWithCSMPCSS64(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthSampler{X},shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,lightSizeUVCorrection{X}[index{X}],depthCorrection{X}[index{X}],penumbraDarkness{X});
#endif
#else
shadow=computeShadowCSM(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowSampler{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#ifdef SHADOWCSMDEBUG{X}
shadowDebug{X}=vec3(shadow)*vCascadeColorsMultiplier{X}[index{X}];
#endif
#ifndef SHADOWCSMNOBLEND{X}
float frustumLength=frustumLengths{X}[index{X}];
float diffRatio=clamp(diff{X}/frustumLength,0.,1.)*cascadeBlendFactor{X};
if (index{X}<(SHADOWCSMNUM_CASCADES{X}-1) && diffRatio<1.)
{
index{X}+=1;
float nextShadow=0.;
#if defined(SHADOWPCF{X})
#if defined(SHADOWLOWQUALITY{X})
nextShadow=computeShadowWithCSMPCF1(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowSampler{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#elif defined(SHADOWMEDIUMQUALITY{X})
nextShadow=computeShadowWithCSMPCF3(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowSampler{X},light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#else
nextShadow=computeShadowWithCSMPCF5(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowSampler{X},light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWPCSS{X})
#if defined(SHADOWLOWQUALITY{X})
nextShadow=computeShadowWithCSMPCSS16(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthSampler{X},shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,lightSizeUVCorrection{X}[index{X}],depthCorrection{X}[index{X}],penumbraDarkness{X});
#elif defined(SHADOWMEDIUMQUALITY{X})
nextShadow=computeShadowWithCSMPCSS32(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthSampler{X},shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,lightSizeUVCorrection{X}[index{X}],depthCorrection{X}[index{X}],penumbraDarkness{X});
#else
nextShadow=computeShadowWithCSMPCSS64(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthSampler{X},shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,lightSizeUVCorrection{X}[index{X}],depthCorrection{X}[index{X}],penumbraDarkness{X});
#endif
#else
nextShadow=computeShadowCSM(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowSampler{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
shadow=mix(nextShadow,shadow,diffRatio);
#ifdef SHADOWCSMDEBUG{X}
shadowDebug{X}=mix(vec3(nextShadow)*vCascadeColorsMultiplier{X}[index{X}],shadowDebug{X},diffRatio);
#endif
}
#endif
}
#elif defined(SHADOWCLOSEESM{X})
#if defined(SHADOWCUBE{X})
shadow=computeShadowWithCloseESMCube(light{X}.vLightData.xyz,shadowSampler{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.z,light{X}.depthValues);
#else
shadow=computeShadowWithCloseESM(vPositionFromLight{X},vDepthMetric{X},shadowSampler{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.z,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWESM{X})
#if defined(SHADOWCUBE{X})
shadow=computeShadowWithESMCube(light{X}.vLightData.xyz,shadowSampler{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.z,light{X}.depthValues);
#else
shadow=computeShadowWithESM(vPositionFromLight{X},vDepthMetric{X},shadowSampler{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.z,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWPOISSON{X})
#if defined(SHADOWCUBE{X})
shadow=computeShadowWithPoissonSamplingCube(light{X}.vLightData.xyz,shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.x,light{X}.depthValues);
#else
shadow=computeShadowWithPoissonSampling(vPositionFromLight{X},vDepthMetric{X},shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWPCF{X})
#if defined(SHADOWLOWQUALITY{X})
shadow=computeShadowWithPCF1(vPositionFromLight{X},vDepthMetric{X},shadowSampler{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#elif defined(SHADOWMEDIUMQUALITY{X})
shadow=computeShadowWithPCF3(vPositionFromLight{X},vDepthMetric{X},shadowSampler{X},light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#else
shadow=computeShadowWithPCF5(vPositionFromLight{X},vDepthMetric{X},shadowSampler{X},light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWPCSS{X})
#if defined(SHADOWLOWQUALITY{X})
shadow=computeShadowWithPCSS16(vPositionFromLight{X},vDepthMetric{X},depthSampler{X},shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#elif defined(SHADOWMEDIUMQUALITY{X})
shadow=computeShadowWithPCSS32(vPositionFromLight{X},vDepthMetric{X},depthSampler{X},shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#else
shadow=computeShadowWithPCSS64(vPositionFromLight{X},vDepthMetric{X},depthSampler{X},shadowSampler{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#else
#if defined(SHADOWCUBE{X})
shadow=computeShadowCube(light{X}.vLightData.xyz,shadowSampler{X},light{X}.shadowsInfo.x,light{X}.depthValues);
#else
shadow=computeShadow(vPositionFromLight{X},vDepthMetric{X},shadowSampler{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#endif
#ifdef SHADOWONLY
#ifndef SHADOWINUSE
#define SHADOWINUSE
#endif
globalShadow+=shadow;
shadowLightCount+=1.0;
#endif
#else
shadow=1.;
#endif
#ifndef SHADOWONLY
#ifdef CUSTOMUSERLIGHTING
diffuseBase+=computeCustomDiffuseLighting(info,diffuseBase,shadow);
#ifdef SPECULARTERM
specularBase+=computeCustomSpecularLighting(info,specularBase,shadow);
#endif
#elif defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X})
diffuseBase+=lightmapColor.rgb*shadow;
#ifdef SPECULARTERM
#ifndef LIGHTMAPNOSPECULAR{X}
specularBase+=info.specular*shadow*lightmapColor.rgb;
#endif
#endif
#ifdef CLEARCOAT
#ifndef LIGHTMAPNOSPECULAR{X}
clearCoatBase+=info.clearCoat.rgb*shadow*lightmapColor.rgb;
#endif
#endif
#ifdef SHEEN
#ifndef LIGHTMAPNOSPECULAR{X}
sheenBase+=info.sheen.rgb*shadow;
#endif
#endif
#else
#ifdef SHADOWCSMDEBUG{X}
diffuseBase+=info.diffuse*shadowDebug{X};
#else 
diffuseBase+=info.diffuse*shadow;
#endif
#ifdef SPECULARTERM
specularBase+=info.specular*shadow;
#endif
#ifdef CLEARCOAT
clearCoatBase+=info.clearCoat.rgb*shadow;
#endif
#ifdef SHEEN
sheenBase+=info.sheen.rgb*shadow;
#endif
#endif
#endif
#endif
`;x.IncludesShadersStore[Rs]=Cs;const Is="pbrBlockFinalLitComponents",xs=`#if defined(ENVIRONMENTBRDF)
#ifdef MS_BRDF_ENERGY_CONSERVATION
vec3 energyConservationFactor=getEnergyConservationFactor(clearcoatOut.specularEnvironmentR0,environmentBrdf);
#endif
#endif
#ifndef METALLICWORKFLOW
#ifdef SPECULAR_GLOSSINESS_ENERGY_CONSERVATION
surfaceAlbedo.rgb=(1.-reflectance)*surfaceAlbedo.rgb;
#endif
#endif
#if defined(SHEEN) && defined(SHEEN_ALBEDOSCALING) && defined(ENVIRONMENTBRDF)
surfaceAlbedo.rgb=sheenOut.sheenAlbedoScaling*surfaceAlbedo.rgb;
#endif
#ifdef REFLECTION
vec3 finalIrradiance=reflectionOut.environmentIrradiance;
#if defined(CLEARCOAT)
finalIrradiance*=clearcoatOut.conservationFactor;
#if defined(CLEARCOAT_TINT)
finalIrradiance*=clearcoatOut.absorption;
#endif
#endif
#if defined(SS_REFRACTION)
finalIrradiance*=subSurfaceOut.refractionFactorForIrradiance;
#endif
#if defined(SS_TRANSLUCENCY)
finalIrradiance*=(1.0-subSurfaceOut.translucencyIntensity);
finalIrradiance+=subSurfaceOut.refractionIrradiance;
#endif
finalIrradiance*=surfaceAlbedo.rgb;
finalIrradiance*=vLightingIntensity.z;
finalIrradiance*=aoOut.ambientOcclusionColor;
#endif
#ifdef SPECULARTERM
vec3 finalSpecular=specularBase;
finalSpecular=max(finalSpecular,0.0);
vec3 finalSpecularScaled=finalSpecular*vLightingIntensity.x*vLightingIntensity.w;
#if defined(ENVIRONMENTBRDF) && defined(MS_BRDF_ENERGY_CONSERVATION)
finalSpecularScaled*=energyConservationFactor;
#endif
#if defined(SHEEN) && defined(ENVIRONMENTBRDF) && defined(SHEEN_ALBEDOSCALING)
finalSpecularScaled*=sheenOut.sheenAlbedoScaling;
#endif
#endif
#ifdef REFLECTION
vec3 finalRadiance=reflectionOut.environmentRadiance.rgb;
finalRadiance*=subSurfaceOut.specularEnvironmentReflectance;
vec3 finalRadianceScaled=finalRadiance*vLightingIntensity.z;
#if defined(ENVIRONMENTBRDF) && defined(MS_BRDF_ENERGY_CONSERVATION)
finalRadianceScaled*=energyConservationFactor;
#endif
#if defined(SHEEN) && defined(ENVIRONMENTBRDF) && defined(SHEEN_ALBEDOSCALING)
finalRadianceScaled*=sheenOut.sheenAlbedoScaling;
#endif
#endif
#ifdef SHEEN
vec3 finalSheen=sheenBase*sheenOut.sheenColor;
finalSheen=max(finalSheen,0.0);
vec3 finalSheenScaled=finalSheen*vLightingIntensity.x*vLightingIntensity.w;
#if defined(CLEARCOAT) && defined(REFLECTION) && defined(ENVIRONMENTBRDF)
sheenOut.finalSheenRadianceScaled*=clearcoatOut.conservationFactor;
#if defined(CLEARCOAT_TINT)
sheenOut.finalSheenRadianceScaled*=clearcoatOut.absorption;
#endif
#endif
#endif
#ifdef CLEARCOAT
vec3 finalClearCoat=clearCoatBase;
finalClearCoat=max(finalClearCoat,0.0);
vec3 finalClearCoatScaled=finalClearCoat*vLightingIntensity.x*vLightingIntensity.w;
#if defined(ENVIRONMENTBRDF) && defined(MS_BRDF_ENERGY_CONSERVATION)
finalClearCoatScaled*=clearcoatOut.energyConservationFactorClearCoat;
#endif
#ifdef SS_REFRACTION
subSurfaceOut.finalRefraction*=clearcoatOut.conservationFactor;
#ifdef CLEARCOAT_TINT
subSurfaceOut.finalRefraction*=clearcoatOut.absorption;
#endif
#endif
#endif
#ifdef ALPHABLEND
float luminanceOverAlpha=0.0;
#if defined(REFLECTION) && defined(RADIANCEOVERALPHA)
luminanceOverAlpha+=getLuminance(finalRadianceScaled);
#if defined(CLEARCOAT)
luminanceOverAlpha+=getLuminance(clearcoatOut.finalClearCoatRadianceScaled);
#endif
#endif
#if defined(SPECULARTERM) && defined(SPECULAROVERALPHA)
luminanceOverAlpha+=getLuminance(finalSpecularScaled);
#endif
#if defined(CLEARCOAT) && defined(CLEARCOATOVERALPHA)
luminanceOverAlpha+=getLuminance(finalClearCoatScaled);
#endif
#if defined(RADIANCEOVERALPHA) || defined(SPECULAROVERALPHA) || defined(CLEARCOATOVERALPHA)
alpha=saturate(alpha+luminanceOverAlpha*luminanceOverAlpha);
#endif
#endif
`;x.IncludesShadersStore[Is]=xs;const Ms="pbrBlockFinalUnlitComponents",bs=`vec3 finalDiffuse=diffuseBase;
finalDiffuse*=surfaceAlbedo.rgb;
finalDiffuse=max(finalDiffuse,0.0);
finalDiffuse*=vLightingIntensity.x;
vec3 finalAmbient=vAmbientColor;
finalAmbient*=surfaceAlbedo.rgb;
vec3 finalEmissive=vEmissiveColor;
#ifdef EMISSIVE
vec3 emissiveColorTex=texture2D(emissiveSampler,vEmissiveUV+uvOffset).rgb;
#ifdef GAMMAEMISSIVE
finalEmissive*=toLinearSpace(emissiveColorTex.rgb);
#else
finalEmissive*=emissiveColorTex.rgb;
#endif
finalEmissive*= vEmissiveInfos.y;
#endif
finalEmissive*=vLightingIntensity.y;
#ifdef AMBIENT
vec3 ambientOcclusionForDirectDiffuse=mix(vec3(1.),aoOut.ambientOcclusionColor,vAmbientInfos.w);
#else
vec3 ambientOcclusionForDirectDiffuse=aoOut.ambientOcclusionColor;
#endif
finalAmbient*=aoOut.ambientOcclusionColor;
finalDiffuse*=ambientOcclusionForDirectDiffuse;
`;x.IncludesShadersStore[Ms]=bs;const Ns="pbrBlockFinalColorComposition",ys=`vec4 finalColor=vec4(
finalAmbient +
finalDiffuse +
#ifndef UNLIT
#ifdef REFLECTION
finalIrradiance +
#endif
#ifdef SPECULARTERM
finalSpecularScaled +
#endif
#ifdef SHEEN
finalSheenScaled +
#endif
#ifdef CLEARCOAT
finalClearCoatScaled +
#endif
#ifdef REFLECTION
finalRadianceScaled +
#if defined(SHEEN) && defined(ENVIRONMENTBRDF)
sheenOut.finalSheenRadianceScaled +
#endif
#ifdef CLEARCOAT
clearcoatOut.finalClearCoatRadianceScaled +
#endif
#endif
#ifdef SS_REFRACTION
subSurfaceOut.finalRefraction +
#endif
#endif
finalEmissive,
alpha);
#ifdef LIGHTMAP
#ifndef LIGHTMAPEXCLUDED
#ifdef USELIGHTMAPASSHADOWMAP
finalColor.rgb*=lightmapColor.rgb;
#else
finalColor.rgb+=lightmapColor.rgb;
#endif
#endif
#endif
#define CUSTOM_FRAGMENT_BEFORE_FOG
finalColor=max(finalColor,0.0);
`;x.IncludesShadersStore[Ns]=ys;const Os="logDepthFragment",Ls=`#ifdef LOGARITHMICDEPTH
gl_FragDepthEXT=log2(vFragmentDepth)*logarithmicDepthConstant*0.5;
#endif
`;x.IncludesShadersStore[Os]=Ls;const Ds="fogFragment",Ps=`#ifdef FOG
float fog=CalcFogFactor();
#ifdef PBR
fog=toLinearSpace(fog);
#endif
color.rgb=mix(vFogColor,color.rgb,fog);
#endif
`;x.IncludesShadersStore[Ds]=Ps;const Fs="pbrBlockImageProcessing",ws=`#if defined(IMAGEPROCESSINGPOSTPROCESS) || defined(SS_SCATTERING)
#if !defined(SKIPFINALCOLORCLAMP)
finalColor.rgb=clamp(finalColor.rgb,0.,30.0);
#endif
#else
finalColor=applyImageProcessing(finalColor);
#endif
finalColor.a*=visibility;
#ifdef PREMULTIPLYALPHA
finalColor.rgb*=finalColor.a;
#endif
`;x.IncludesShadersStore[Fs]=ws;const Us="oitFragment",Bs=`#ifdef ORDER_INDEPENDENT_TRANSPARENCY
float fragDepth=gl_FragCoord.z; 
#ifdef ORDER_INDEPENDENT_TRANSPARENCY_16BITS
uint halfFloat=packHalf2x16(vec2(fragDepth));
vec2 full=unpackHalf2x16(halfFloat);
fragDepth=full.x;
#endif
ivec2 fragCoord=ivec2(gl_FragCoord.xy);
vec2 lastDepth=texelFetch(oitDepthSampler,fragCoord,0).rg;
vec4 lastFrontColor=texelFetch(oitFrontColorSampler,fragCoord,0);
depth.rg=vec2(-MAX_DEPTH);
frontColor=lastFrontColor;
backColor=vec4(0.0);
#ifdef USE_REVERSE_DEPTHBUFFER
float furthestDepth=-lastDepth.x;
float nearestDepth=lastDepth.y;
#else
float nearestDepth=-lastDepth.x;
float furthestDepth=lastDepth.y;
#endif
float alphaMultiplier=1.0-lastFrontColor.a;
#ifdef USE_REVERSE_DEPTHBUFFER
if (fragDepth>nearestDepth || fragDepth<furthestDepth) {
#else
if (fragDepth<nearestDepth || fragDepth>furthestDepth) {
#endif
return;
}
#ifdef USE_REVERSE_DEPTHBUFFER
if (fragDepth<nearestDepth && fragDepth>furthestDepth) {
#else
if (fragDepth>nearestDepth && fragDepth<furthestDepth) {
#endif
depth.rg=vec2(-fragDepth,fragDepth);
return;
}
#endif
`;x.IncludesShadersStore[Us]=Bs;const Vs="pbrDebug",Gs=`#if DEBUGMODE>0
if (vClipSpacePosition.x/vClipSpacePosition.w>=vDebugMode.x) {
#if DEBUGMODE==1
gl_FragColor.rgb=vPositionW.rgb;
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==2 && defined(NORMAL)
gl_FragColor.rgb=vNormalW.rgb;
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==3 && defined(BUMP) || DEBUGMODE==3 && defined(PARALLAX) || DEBUGMODE==3 && defined(ANISOTROPIC)
gl_FragColor.rgb=TBN[0];
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==4 && defined(BUMP) || DEBUGMODE==4 && defined(PARALLAX) || DEBUGMODE==4 && defined(ANISOTROPIC)
gl_FragColor.rgb=TBN[1];
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==5
gl_FragColor.rgb=normalW;
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==6 && defined(MAINUV1)
gl_FragColor.rgb=vec3(vMainUV1,0.0);
#elif DEBUGMODE==7 && defined(MAINUV2)
gl_FragColor.rgb=vec3(vMainUV2,0.0);
#elif DEBUGMODE==8 && defined(CLEARCOAT) && defined(CLEARCOAT_BUMP)
gl_FragColor.rgb=clearcoatOut.TBNClearCoat[0];
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==9 && defined(CLEARCOAT) && defined(CLEARCOAT_BUMP)
gl_FragColor.rgb=clearcoatOut.TBNClearCoat[1];
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==10 && defined(CLEARCOAT)
gl_FragColor.rgb=clearcoatOut.clearCoatNormalW;
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==11 && defined(ANISOTROPIC)
gl_FragColor.rgb=anisotropicOut.anisotropicNormal;
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==12 && defined(ANISOTROPIC)
gl_FragColor.rgb=anisotropicOut.anisotropicTangent;
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==13 && defined(ANISOTROPIC)
gl_FragColor.rgb=anisotropicOut.anisotropicBitangent;
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==20 && defined(ALBEDO)
gl_FragColor.rgb=albedoTexture.rgb;
#elif DEBUGMODE==21 && defined(AMBIENT)
gl_FragColor.rgb=aoOut.ambientOcclusionColorMap.rgb;
#elif DEBUGMODE==22 && defined(OPACITY)
gl_FragColor.rgb=opacityMap.rgb;
#elif DEBUGMODE==23 && defined(EMISSIVE)
gl_FragColor.rgb=emissiveColorTex.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==24 && defined(LIGHTMAP)
gl_FragColor.rgb=lightmapColor.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==25 && defined(REFLECTIVITY) && defined(METALLICWORKFLOW)
gl_FragColor.rgb=reflectivityOut.surfaceMetallicColorMap.rgb;
#elif DEBUGMODE==26 && defined(REFLECTIVITY) && !defined(METALLICWORKFLOW)
gl_FragColor.rgb=reflectivityOut.surfaceReflectivityColorMap.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==27 && defined(CLEARCOAT) && defined(CLEARCOAT_TEXTURE)
gl_FragColor.rgb=vec3(clearcoatOut.clearCoatMapData.rg,0.0);
#elif DEBUGMODE==28 && defined(CLEARCOAT) && defined(CLEARCOAT_TINT) && defined(CLEARCOAT_TINT_TEXTURE)
gl_FragColor.rgb=clearcoatOut.clearCoatTintMapData.rgb;
#elif DEBUGMODE==29 && defined(SHEEN) && defined(SHEEN_TEXTURE)
gl_FragColor.rgb=sheenOut.sheenMapData.rgb;
#elif DEBUGMODE==30 && defined(ANISOTROPIC) && defined(ANISOTROPIC_TEXTURE)
gl_FragColor.rgb=anisotropicOut.anisotropyMapData.rgb;
#elif DEBUGMODE==31 && defined(SUBSURFACE) && defined(SS_THICKNESSANDMASK_TEXTURE)
gl_FragColor.rgb=subSurfaceOut.thicknessMap.rgb;
#elif DEBUGMODE==40 && defined(SS_REFRACTION)
gl_FragColor.rgb=subSurfaceOut.environmentRefraction.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==41 && defined(REFLECTION)
gl_FragColor.rgb=reflectionOut.environmentRadiance.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==42 && defined(CLEARCOAT) && defined(REFLECTION)
gl_FragColor.rgb=clearcoatOut.environmentClearCoatRadiance.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==50
gl_FragColor.rgb=diffuseBase.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==51 && defined(SPECULARTERM)
gl_FragColor.rgb=specularBase.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==52 && defined(CLEARCOAT)
gl_FragColor.rgb=clearCoatBase.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==53 && defined(SHEEN)
gl_FragColor.rgb=sheenBase.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==54 && defined(REFLECTION)
gl_FragColor.rgb=reflectionOut.environmentIrradiance.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==60
gl_FragColor.rgb=surfaceAlbedo.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==61
gl_FragColor.rgb=clearcoatOut.specularEnvironmentR0;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==62 && defined(METALLICWORKFLOW)
gl_FragColor.rgb=vec3(reflectivityOut.metallicRoughness.r);
#elif DEBUGMODE==71 && defined(METALLICWORKFLOW)
gl_FragColor.rgb=reflectivityOut.metallicF0;
#elif DEBUGMODE==63
gl_FragColor.rgb=vec3(roughness);
#elif DEBUGMODE==64
gl_FragColor.rgb=vec3(alphaG);
#elif DEBUGMODE==65
gl_FragColor.rgb=vec3(NdotV);
#elif DEBUGMODE==66 && defined(CLEARCOAT) && defined(CLEARCOAT_TINT)
gl_FragColor.rgb=clearcoatOut.clearCoatColor.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==67 && defined(CLEARCOAT)
gl_FragColor.rgb=vec3(clearcoatOut.clearCoatRoughness);
#elif DEBUGMODE==68 && defined(CLEARCOAT)
gl_FragColor.rgb=vec3(clearcoatOut.clearCoatNdotV);
#elif DEBUGMODE==69 && defined(SUBSURFACE) && defined(SS_TRANSLUCENCY)
gl_FragColor.rgb=subSurfaceOut.transmittance;
#elif DEBUGMODE==70 && defined(SUBSURFACE) && defined(SS_REFRACTION)
gl_FragColor.rgb=subSurfaceOut.refractionTransmittance;
#elif DEBUGMODE==80 && defined(RADIANCEOCCLUSION)
gl_FragColor.rgb=vec3(seo);
#elif DEBUGMODE==81 && defined(HORIZONOCCLUSION)
gl_FragColor.rgb=vec3(eho);
#elif DEBUGMODE==82 && defined(MS_BRDF_ENERGY_CONSERVATION)
gl_FragColor.rgb=vec3(energyConservationFactor);
#elif DEBUGMODE==83 && defined(ENVIRONMENTBRDF) && !defined(REFLECTIONMAP_SKYBOX)
gl_FragColor.rgb=specularEnvironmentReflectance;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==84 && defined(CLEARCOAT) && defined(ENVIRONMENTBRDF) && !defined(REFLECTIONMAP_SKYBOX)
gl_FragColor.rgb=clearcoatOut.clearCoatEnvironmentReflectance;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==85 && defined(SHEEN) && defined(REFLECTION)
gl_FragColor.rgb=sheenOut.sheenEnvironmentReflectance;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==86 && defined(ALPHABLEND)
gl_FragColor.rgb=vec3(luminanceOverAlpha);
#elif DEBUGMODE==87
gl_FragColor.rgb=vec3(alpha);
#endif
gl_FragColor.rgb*=vDebugMode.y;
#ifdef DEBUGMODE_NORMALIZE
gl_FragColor.rgb=normalize(gl_FragColor.rgb)*0.5+0.5;
#endif
#ifdef DEBUGMODE_GAMMA
gl_FragColor.rgb=toGammaSpace(gl_FragColor.rgb);
#endif
gl_FragColor.a=1.0;
#ifdef PREPASS
gl_FragData[0]=toLinearSpace(gl_FragColor); 
gl_FragData[1]=vec4(0.,0.,0.,0.); 
#endif
return;
}
#endif
`;x.IncludesShadersStore[Vs]=Gs;const Xs="pbrPixelShader",ks=`#if defined(BUMP) || !defined(NORMAL) || defined(FORCENORMALFORWARD) || defined(SPECULARAA) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)
#extension GL_OES_standard_derivatives : enable
#endif
#ifdef LODBASEDMICROSFURACE
#extension GL_EXT_shader_texture_lod : enable
#endif
#define CUSTOM_FRAGMENT_BEGIN
#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
#include<prePassDeclaration>[SCENE_MRT_COUNT]
precision highp float;
#include<oitDeclaration>
#ifndef FROMLINEARSPACE
#define FROMLINEARSPACE
#endif
#include<__decl__pbrFragment>
#include<pbrFragmentExtraDeclaration>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#include<pbrFragmentSamplersDeclaration>
#include<imageProcessingDeclaration>
#include<clipPlaneFragmentDeclaration>
#include<logDepthDeclaration>
#include<fogFragmentDeclaration>
#include<helperFunctions>
#include<subSurfaceScatteringFunctions>
#include<importanceSampling>
#include<pbrHelperFunctions>
#include<imageProcessingFunctions>
#include<shadowsFragmentFunctions>
#include<harmonicsFunctions>
#include<pbrDirectLightingSetupFunctions>
#include<pbrDirectLightingFalloffFunctions>
#include<pbrBRDFFunctions>
#include<hdrFilteringFunctions>
#include<pbrDirectLightingFunctions>
#include<pbrIBLFunctions>
#include<bumpFragmentMainFunctions>
#include<bumpFragmentFunctions>
#ifdef REFLECTION
#include<reflectionFunction>
#endif
#define CUSTOM_FRAGMENT_DEFINITIONS
#include<pbrBlockAlbedoOpacity>
#include<pbrBlockReflectivity>
#include<pbrBlockAmbientOcclusion>
#include<pbrBlockAlphaFresnel>
#include<pbrBlockAnisotropic>
#include<pbrBlockReflection>
#include<pbrBlockSheen>
#include<pbrBlockClearcoat>
#include<pbrBlockIridescence>
#include<pbrBlockSubSurface>
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
#include<pbrBlockNormalGeometric>
#include<bumpFragment>
#include<pbrBlockNormalFinal>
albedoOpacityOutParams albedoOpacityOut;
#ifdef ALBEDO
vec4 albedoTexture=texture2D(albedoSampler,vAlbedoUV+uvOffset);
#endif
#ifdef OPACITY
vec4 opacityMap=texture2D(opacitySampler,vOpacityUV+uvOffset);
#endif
albedoOpacityBlock(
vAlbedoColor,
#ifdef ALBEDO
albedoTexture,
vAlbedoInfos,
#endif
#ifdef OPACITY
opacityMap,
vOpacityInfos,
#endif
#ifdef DETAIL
detailColor,
vDetailInfos,
#endif
albedoOpacityOut
);
vec3 surfaceAlbedo=albedoOpacityOut.surfaceAlbedo;
float alpha=albedoOpacityOut.alpha;
#define CUSTOM_FRAGMENT_UPDATE_ALPHA
#include<depthPrePass>
#define CUSTOM_FRAGMENT_BEFORE_LIGHTS
ambientOcclusionOutParams aoOut;
#ifdef AMBIENT
vec3 ambientOcclusionColorMap=texture2D(ambientSampler,vAmbientUV+uvOffset).rgb;
#endif
ambientOcclusionBlock(
#ifdef AMBIENT
ambientOcclusionColorMap,
vAmbientInfos,
#endif
aoOut
);
#include<pbrBlockLightmapInit>
#ifdef UNLIT
vec3 diffuseBase=vec3(1.,1.,1.);
#else
vec3 baseColor=surfaceAlbedo;
reflectivityOutParams reflectivityOut;
#if defined(REFLECTIVITY)
vec4 surfaceMetallicOrReflectivityColorMap=texture2D(reflectivitySampler,vReflectivityUV+uvOffset);
vec4 baseReflectivity=surfaceMetallicOrReflectivityColorMap;
#ifndef METALLICWORKFLOW
#ifdef REFLECTIVITY_GAMMA
surfaceMetallicOrReflectivityColorMap=toLinearSpace(surfaceMetallicOrReflectivityColorMap);
#endif
surfaceMetallicOrReflectivityColorMap.rgb*=vReflectivityInfos.y;
#endif
#endif
#if defined(MICROSURFACEMAP)
vec4 microSurfaceTexel=texture2D(microSurfaceSampler,vMicroSurfaceSamplerUV+uvOffset)*vMicroSurfaceSamplerInfos.y;
#endif
#ifdef METALLICWORKFLOW
vec4 metallicReflectanceFactors=vMetallicReflectanceFactors;
#ifdef REFLECTANCE
vec4 reflectanceFactorsMap=texture2D(reflectanceSampler,vReflectanceUV+uvOffset);
#ifdef REFLECTANCE_GAMMA
reflectanceFactorsMap=toLinearSpace(reflectanceFactorsMap);
#endif
metallicReflectanceFactors.rgb*=reflectanceFactorsMap.rgb;
#endif
#ifdef METALLIC_REFLECTANCE
vec4 metallicReflectanceFactorsMap=texture2D(metallicReflectanceSampler,vMetallicReflectanceUV+uvOffset);
#ifdef METALLIC_REFLECTANCE_GAMMA
metallicReflectanceFactorsMap=toLinearSpace(metallicReflectanceFactorsMap);
#endif
#ifndef METALLIC_REFLECTANCE_USE_ALPHA_ONLY
metallicReflectanceFactors.rgb*=metallicReflectanceFactorsMap.rgb;
#endif
metallicReflectanceFactors*=metallicReflectanceFactorsMap.a;
#endif
#endif
reflectivityBlock(
vReflectivityColor,
#ifdef METALLICWORKFLOW
surfaceAlbedo,
metallicReflectanceFactors,
#endif
#ifdef REFLECTIVITY
vReflectivityInfos,
surfaceMetallicOrReflectivityColorMap,
#endif
#if defined(METALLICWORKFLOW) && defined(REFLECTIVITY) && defined(AOSTOREINMETALMAPRED)
aoOut.ambientOcclusionColor,
#endif
#ifdef MICROSURFACEMAP
microSurfaceTexel,
#endif
#ifdef DETAIL
detailColor,
vDetailInfos,
#endif
reflectivityOut
);
float microSurface=reflectivityOut.microSurface;
float roughness=reflectivityOut.roughness;
#ifdef METALLICWORKFLOW
surfaceAlbedo=reflectivityOut.surfaceAlbedo;
#endif
#if defined(METALLICWORKFLOW) && defined(REFLECTIVITY) && defined(AOSTOREINMETALMAPRED)
aoOut.ambientOcclusionColor=reflectivityOut.ambientOcclusionColor;
#endif
#ifdef ALPHAFRESNEL
#if defined(ALPHATEST) || defined(ALPHABLEND)
alphaFresnelOutParams alphaFresnelOut;
alphaFresnelBlock(
normalW,
viewDirectionW,
alpha,
microSurface,
alphaFresnelOut
);
alpha=alphaFresnelOut.alpha;
#endif
#endif
#include<pbrBlockGeometryInfo>
#ifdef ANISOTROPIC
anisotropicOutParams anisotropicOut;
#ifdef ANISOTROPIC_TEXTURE
vec3 anisotropyMapData=texture2D(anisotropySampler,vAnisotropyUV+uvOffset).rgb*vAnisotropyInfos.y;
#endif
anisotropicBlock(
vAnisotropy,
#ifdef ANISOTROPIC_TEXTURE
anisotropyMapData,
#endif
TBN,
normalW,
viewDirectionW,
anisotropicOut
);
#endif
#ifdef REFLECTION
reflectionOutParams reflectionOut;
#ifndef USE_CUSTOM_REFLECTION
reflectionBlock(
vPositionW,
normalW,
alphaG,
vReflectionMicrosurfaceInfos,
vReflectionInfos,
vReflectionColor,
#ifdef ANISOTROPIC
anisotropicOut,
#endif
#if defined(LODINREFLECTIONALPHA) && !defined(REFLECTIONMAP_SKYBOX)
NdotVUnclamped,
#endif
#ifdef LINEARSPECULARREFLECTION
roughness,
#endif
reflectionSampler,
#if defined(NORMAL) && defined(USESPHERICALINVERTEX)
vEnvironmentIrradiance,
#endif
#ifdef USESPHERICALFROMREFLECTIONMAP
#if !defined(NORMAL) || !defined(USESPHERICALINVERTEX)
reflectionMatrix,
#endif
#endif
#ifdef USEIRRADIANCEMAP
irradianceSampler,
#endif
#ifndef LODBASEDMICROSFURACE
reflectionSamplerLow,
reflectionSamplerHigh,
#endif
#ifdef REALTIME_FILTERING
vReflectionFilteringInfo,
#endif
reflectionOut
);
#else
#define CUSTOM_REFLECTION
#endif
#endif
#include<pbrBlockReflectance0>
#ifdef SHEEN
sheenOutParams sheenOut;
#ifdef SHEEN_TEXTURE
vec4 sheenMapData=texture2D(sheenSampler,vSheenUV+uvOffset);
#endif
#if defined(SHEEN_ROUGHNESS) && defined(SHEEN_TEXTURE_ROUGHNESS) && !defined(SHEEN_TEXTURE_ROUGHNESS_IDENTICAL) && !defined(SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE)
vec4 sheenMapRoughnessData=texture2D(sheenRoughnessSampler,vSheenRoughnessUV+uvOffset)*vSheenInfos.w;
#endif
sheenBlock(
vSheenColor,
#ifdef SHEEN_ROUGHNESS
vSheenRoughness,
#if defined(SHEEN_TEXTURE_ROUGHNESS) && !defined(SHEEN_TEXTURE_ROUGHNESS_IDENTICAL) && !defined(SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE)
sheenMapRoughnessData,
#endif
#endif
roughness,
#ifdef SHEEN_TEXTURE
sheenMapData,
vSheenInfos.y,
#endif
reflectance,
#ifdef SHEEN_LINKWITHALBEDO
baseColor,
surfaceAlbedo,
#endif
#ifdef ENVIRONMENTBRDF
NdotV,
environmentBrdf,
#endif
#if defined(REFLECTION) && defined(ENVIRONMENTBRDF)
AARoughnessFactors,
vReflectionMicrosurfaceInfos,
vReflectionInfos,
vReflectionColor,
vLightingIntensity,
reflectionSampler,
reflectionOut.reflectionCoords,
NdotVUnclamped,
#ifndef LODBASEDMICROSFURACE
reflectionSamplerLow,
reflectionSamplerHigh,
#endif
#ifdef REALTIME_FILTERING
vReflectionFilteringInfo,
#endif
#if !defined(REFLECTIONMAP_SKYBOX) && defined(RADIANCEOCCLUSION)
seo,
#endif
#if !defined(REFLECTIONMAP_SKYBOX) && defined(HORIZONOCCLUSION) && defined(BUMP) && defined(REFLECTIONMAP_3D)
eho,
#endif
#endif
sheenOut
);
#ifdef SHEEN_LINKWITHALBEDO
surfaceAlbedo=sheenOut.surfaceAlbedo;
#endif
#endif
#ifdef CLEARCOAT
#ifdef CLEARCOAT_TEXTURE
vec2 clearCoatMapData=texture2D(clearCoatSampler,vClearCoatUV+uvOffset).rg*vClearCoatInfos.y;
#endif
#endif
#ifdef IRIDESCENCE
iridescenceOutParams iridescenceOut;
#ifdef IRIDESCENCE_TEXTURE
vec2 iridescenceMapData=texture2D(iridescenceSampler,vIridescenceUV+uvOffset).rg*vIridescenceInfos.y;
#endif
#ifdef IRIDESCENCE_THICKNESS_TEXTURE
vec2 iridescenceThicknessMapData=texture2D(iridescenceThicknessSampler,vIridescenceThicknessUV+uvOffset).rg*vIridescenceInfos.w;
#endif
iridescenceBlock(
vIridescenceParams,
NdotV,
specularEnvironmentR0,
#ifdef IRIDESCENCE_TEXTURE
iridescenceMapData,
#endif
#ifdef IRIDESCENCE_THICKNESS_TEXTURE
iridescenceThicknessMapData,
#endif
#ifdef CLEARCOAT
NdotVUnclamped,
#ifdef CLEARCOAT_TEXTURE
clearCoatMapData,
#endif
#endif
iridescenceOut
);
float iridescenceIntensity=iridescenceOut.iridescenceIntensity;
specularEnvironmentR0=iridescenceOut.specularEnvironmentR0;
#endif
clearcoatOutParams clearcoatOut;
#ifdef CLEARCOAT
#if defined(CLEARCOAT_TEXTURE_ROUGHNESS) && !defined(CLEARCOAT_TEXTURE_ROUGHNESS_IDENTICAL) && !defined(CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE)
vec4 clearCoatMapRoughnessData=texture2D(clearCoatRoughnessSampler,vClearCoatRoughnessUV+uvOffset)*vClearCoatInfos.w;
#endif
#if defined(CLEARCOAT_TINT) && defined(CLEARCOAT_TINT_TEXTURE)
vec4 clearCoatTintMapData=texture2D(clearCoatTintSampler,vClearCoatTintUV+uvOffset);
#endif
#ifdef CLEARCOAT_BUMP
vec4 clearCoatBumpMapData=texture2D(clearCoatBumpSampler,vClearCoatBumpUV+uvOffset);
#endif
clearcoatBlock(
vPositionW,
geometricNormalW,
viewDirectionW,
vClearCoatParams,
#if defined(CLEARCOAT_TEXTURE_ROUGHNESS) && !defined(CLEARCOAT_TEXTURE_ROUGHNESS_IDENTICAL) && !defined(CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE)
clearCoatMapRoughnessData,
#endif
specularEnvironmentR0,
#ifdef CLEARCOAT_TEXTURE
clearCoatMapData,
#endif
#ifdef CLEARCOAT_TINT
vClearCoatTintParams,
clearCoatColorAtDistance,
vClearCoatRefractionParams,
#ifdef CLEARCOAT_TINT_TEXTURE
clearCoatTintMapData,
#endif
#endif
#ifdef CLEARCOAT_BUMP
vClearCoatBumpInfos,
clearCoatBumpMapData,
vClearCoatBumpUV,
#if defined(TANGENT) && defined(NORMAL)
vTBN,
#else
vClearCoatTangentSpaceParams,
#endif
#ifdef OBJECTSPACE_NORMALMAP
normalMatrix,
#endif
#endif
#if defined(FORCENORMALFORWARD) && defined(NORMAL)
faceNormal,
#endif
#ifdef REFLECTION
vReflectionMicrosurfaceInfos,
vReflectionInfos,
vReflectionColor,
vLightingIntensity,
reflectionSampler,
#ifndef LODBASEDMICROSFURACE
reflectionSamplerLow,
reflectionSamplerHigh,
#endif
#ifdef REALTIME_FILTERING
vReflectionFilteringInfo,
#endif
#endif
#if defined(ENVIRONMENTBRDF) && !defined(REFLECTIONMAP_SKYBOX)
#ifdef RADIANCEOCCLUSION
ambientMonochrome,
#endif
#endif
#if defined(CLEARCOAT_BUMP) || defined(TWOSIDEDLIGHTING)
(gl_FrontFacing ? 1. : -1.),
#endif
clearcoatOut
);
#else
clearcoatOut.specularEnvironmentR0=specularEnvironmentR0;
#endif
#include<pbrBlockReflectance>
subSurfaceOutParams subSurfaceOut;
#ifdef SUBSURFACE
#ifdef SS_THICKNESSANDMASK_TEXTURE
vec4 thicknessMap=texture2D(thicknessSampler,vThicknessUV+uvOffset);
#endif
#ifdef SS_REFRACTIONINTENSITY_TEXTURE
vec4 refractionIntensityMap=texture2D(refractionIntensitySampler,vRefractionIntensityUV+uvOffset);
#endif
#ifdef SS_TRANSLUCENCYINTENSITY_TEXTURE
vec4 translucencyIntensityMap=texture2D(translucencyIntensitySampler,vTranslucencyIntensityUV+uvOffset);
#endif
subSurfaceBlock(
vSubSurfaceIntensity,
vThicknessParam,
vTintColor,
normalW,
specularEnvironmentReflectance,
#ifdef SS_THICKNESSANDMASK_TEXTURE
thicknessMap,
#endif
#ifdef SS_REFRACTIONINTENSITY_TEXTURE
refractionIntensityMap,
#endif
#ifdef SS_TRANSLUCENCYINTENSITY_TEXTURE
translucencyIntensityMap,
#endif
#ifdef REFLECTION
#ifdef SS_TRANSLUCENCY
reflectionMatrix,
#ifdef USESPHERICALFROMREFLECTIONMAP
#if !defined(NORMAL) || !defined(USESPHERICALINVERTEX)
reflectionOut.irradianceVector,
#endif
#if defined(REALTIME_FILTERING)
reflectionSampler,
vReflectionFilteringInfo,
#endif
#endif
#ifdef USEIRRADIANCEMAP
irradianceSampler,
#endif
#endif
#endif
#if defined(SS_REFRACTION) || defined(SS_TRANSLUCENCY)
surfaceAlbedo,
#endif
#ifdef SS_REFRACTION
vPositionW,
viewDirectionW,
view,
vRefractionInfos,
refractionMatrix,
vRefractionMicrosurfaceInfos,
vLightingIntensity,
#ifdef SS_LINKREFRACTIONTOTRANSPARENCY
alpha,
#endif
#ifdef SS_LODINREFRACTIONALPHA
NdotVUnclamped,
#endif
#ifdef SS_LINEARSPECULARREFRACTION
roughness,
#endif
alphaG,
refractionSampler,
#ifndef LODBASEDMICROSFURACE
refractionSamplerLow,
refractionSamplerHigh,
#endif
#ifdef ANISOTROPIC
anisotropicOut,
#endif
#ifdef REALTIME_FILTERING
vRefractionFilteringInfo,
#endif
#ifdef SS_USE_LOCAL_REFRACTIONMAP_CUBIC
vRefractionPosition,
vRefractionSize,
#endif
#endif
#ifdef SS_TRANSLUCENCY
vDiffusionDistance,
#endif
subSurfaceOut
);
#ifdef SS_REFRACTION
surfaceAlbedo=subSurfaceOut.surfaceAlbedo;
#ifdef SS_LINKREFRACTIONTOTRANSPARENCY
alpha=subSurfaceOut.alpha;
#endif
#endif
#else
subSurfaceOut.specularEnvironmentReflectance=specularEnvironmentReflectance;
#endif
#include<pbrBlockDirectLighting>
#include<lightFragment>[0..maxSimultaneousLights]
#include<pbrBlockFinalLitComponents>
#endif 
#include<pbrBlockFinalUnlitComponents>
#define CUSTOM_FRAGMENT_BEFORE_FINALCOLORCOMPOSITION
#include<pbrBlockFinalColorComposition>
#include<logDepthFragment>
#include<fogFragment>(color,finalColor)
#include<pbrBlockImageProcessing>
#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR
#ifdef PREPASS
float writeGeometryInfo=finalColor.a>0.4 ? 1.0 : 0.0;
#ifdef PREPASS_POSITION
gl_FragData[PREPASS_POSITION_INDEX]=vec4(vPositionW,writeGeometryInfo);
#endif
#ifdef PREPASS_VELOCITY
vec2 a=(vCurrentPosition.xy/vCurrentPosition.w)*0.5+0.5;
vec2 b=(vPreviousPosition.xy/vPreviousPosition.w)*0.5+0.5;
vec2 velocity=abs(a-b);
velocity=vec2(pow(velocity.x,1.0/3.0),pow(velocity.y,1.0/3.0))*sign(a-b)*0.5+0.5;
gl_FragData[PREPASS_VELOCITY_INDEX]=vec4(velocity,0.0,writeGeometryInfo);
#endif
#ifdef PREPASS_ALBEDO_SQRT
vec3 sqAlbedo=sqrt(surfaceAlbedo); 
#endif
#ifdef PREPASS_IRRADIANCE
vec3 irradiance=finalDiffuse;
#ifndef UNLIT
#ifdef REFLECTION
irradiance+=finalIrradiance;
#endif
#endif
#ifdef SS_SCATTERING
gl_FragData[0]=vec4(finalColor.rgb-irradiance,finalColor.a); 
irradiance/=sqAlbedo;
#else
gl_FragData[0]=finalColor; 
float scatteringDiffusionProfile=255.;
#endif
gl_FragData[PREPASS_IRRADIANCE_INDEX]=vec4(clamp(irradiance,vec3(0.),vec3(1.)),writeGeometryInfo*scatteringDiffusionProfile/255.); 
#else
gl_FragData[0]=vec4(finalColor.rgb,finalColor.a);
#endif
#ifdef PREPASS_DEPTH
gl_FragData[PREPASS_DEPTH_INDEX]=vec4(vViewPos.z,0.0,0.0,writeGeometryInfo); 
#endif
#ifdef PREPASS_NORMAL
gl_FragData[PREPASS_NORMAL_INDEX]=vec4((view*vec4(normalW,0.0)).rgb,writeGeometryInfo); 
#endif
#ifdef PREPASS_ALBEDO_SQRT
gl_FragData[PREPASS_ALBEDO_SQRT_INDEX]=vec4(sqAlbedo,writeGeometryInfo); 
#endif
#ifdef PREPASS_REFLECTIVITY
#ifndef UNLIT
gl_FragData[PREPASS_REFLECTIVITY_INDEX]=vec4(toGammaSpace(specularEnvironmentR0),microSurface)*writeGeometryInfo;
#else
gl_FragData[PREPASS_REFLECTIVITY_INDEX]=vec4( 0.0,0.0,0.0,1.0 )*writeGeometryInfo;
#endif
#endif
#endif
#if !defined(PREPASS) || defined(WEBGL2)
gl_FragColor=finalColor;
#endif
#include<oitFragment>
#if ORDER_INDEPENDENT_TRANSPARENCY
if (fragDepth==nearestDepth) {
frontColor.rgb+=finalColor.rgb*finalColor.a*alphaMultiplier;
frontColor.a=1.0-alphaMultiplier*(1.0-finalColor.a);
} else {
backColor+=finalColor;
}
#endif
#include<pbrDebug>
#define CUSTOM_FRAGMENT_MAIN_END
}
`;x.ShadersStore[Xs]=ks;const Hs="pbrVertexDeclaration",zs=`uniform mat4 view;
uniform mat4 viewProjection;
#ifdef ALBEDO
uniform mat4 albedoMatrix;
uniform vec2 vAlbedoInfos;
#endif
#ifdef AMBIENT
uniform mat4 ambientMatrix;
uniform vec4 vAmbientInfos;
#endif
#ifdef OPACITY
uniform mat4 opacityMatrix;
uniform vec2 vOpacityInfos;
#endif
#ifdef EMISSIVE
uniform vec2 vEmissiveInfos;
uniform mat4 emissiveMatrix;
#endif
#ifdef LIGHTMAP
uniform vec2 vLightmapInfos;
uniform mat4 lightmapMatrix;
#endif
#ifdef REFLECTIVITY 
uniform vec3 vReflectivityInfos;
uniform mat4 reflectivityMatrix;
#endif
#ifdef METALLIC_REFLECTANCE
uniform vec2 vMetallicReflectanceInfos;
uniform mat4 metallicReflectanceMatrix;
#endif
#ifdef REFLECTANCE
uniform vec2 vReflectanceInfos;
uniform mat4 reflectanceMatrix;
#endif
#ifdef MICROSURFACEMAP
uniform vec2 vMicroSurfaceSamplerInfos;
uniform mat4 microSurfaceSamplerMatrix;
#endif
#ifdef BUMP
uniform vec3 vBumpInfos;
uniform mat4 bumpMatrix;
#endif
#ifdef POINTSIZE
uniform float pointSize;
#endif
#ifdef REFLECTION
uniform vec2 vReflectionInfos;
uniform mat4 reflectionMatrix;
#endif
#ifdef CLEARCOAT
#if defined(CLEARCOAT_TEXTURE) || defined(CLEARCOAT_TEXTURE_ROUGHNESS)
uniform vec4 vClearCoatInfos;
#endif
#ifdef CLEARCOAT_TEXTURE
uniform mat4 clearCoatMatrix;
#endif
#ifdef CLEARCOAT_TEXTURE_ROUGHNESS
uniform mat4 clearCoatRoughnessMatrix;
#endif
#ifdef CLEARCOAT_BUMP
uniform vec2 vClearCoatBumpInfos;
uniform mat4 clearCoatBumpMatrix;
#endif
#ifdef CLEARCOAT_TINT_TEXTURE
uniform vec2 vClearCoatTintInfos;
uniform mat4 clearCoatTintMatrix;
#endif
#endif
#ifdef IRIDESCENCE
#if defined(IRIDESCENCE_TEXTURE) || defined(IRIDESCENCE_THICKNESS_TEXTURE)
uniform vec4 vIridescenceInfos;
#endif
#ifdef IRIDESCENCE_TEXTURE
uniform mat4 iridescenceMatrix;
#endif
#ifdef IRIDESCENCE_THICKNESS_TEXTURE
uniform mat4 iridescenceThicknessMatrix;
#endif
#endif
#ifdef ANISOTROPIC
#ifdef ANISOTROPIC_TEXTURE
uniform vec2 vAnisotropyInfos;
uniform mat4 anisotropyMatrix;
#endif
#endif
#ifdef SHEEN
#if defined(SHEEN_TEXTURE) || defined(SHEEN_TEXTURE_ROUGHNESS)
uniform vec4 vSheenInfos;
#endif
#ifdef SHEEN_TEXTURE
uniform mat4 sheenMatrix;
#endif
#ifdef SHEEN_TEXTURE_ROUGHNESS
uniform mat4 sheenRoughnessMatrix;
#endif
#endif
#ifdef SUBSURFACE
#ifdef SS_REFRACTION
uniform vec4 vRefractionInfos;
uniform mat4 refractionMatrix;
#endif
#ifdef SS_THICKNESSANDMASK_TEXTURE
uniform vec2 vThicknessInfos;
uniform mat4 thicknessMatrix;
#endif
#ifdef SS_REFRACTIONINTENSITY_TEXTURE
uniform vec2 vRefractionIntensityInfos;
uniform mat4 refractionIntensityMatrix;
#endif
#ifdef SS_TRANSLUCENCYINTENSITY_TEXTURE
uniform vec2 vTranslucencyIntensityInfos;
uniform mat4 translucencyIntensityMatrix;
#endif
#endif
#ifdef NORMAL
#if defined(USESPHERICALFROMREFLECTIONMAP) && defined(USESPHERICALINVERTEX)
#ifdef USESPHERICALFROMREFLECTIONMAP
#ifdef SPHERICAL_HARMONICS
uniform vec3 vSphericalL00;
uniform vec3 vSphericalL1_1;
uniform vec3 vSphericalL10;
uniform vec3 vSphericalL11;
uniform vec3 vSphericalL2_2;
uniform vec3 vSphericalL2_1;
uniform vec3 vSphericalL20;
uniform vec3 vSphericalL21;
uniform vec3 vSphericalL22;
#else
uniform vec3 vSphericalX;
uniform vec3 vSphericalY;
uniform vec3 vSphericalZ;
uniform vec3 vSphericalXX_ZZ;
uniform vec3 vSphericalYY_ZZ;
uniform vec3 vSphericalZZ;
uniform vec3 vSphericalXY;
uniform vec3 vSphericalYZ;
uniform vec3 vSphericalZX;
#endif
#endif
#endif
#endif
#ifdef DETAIL
uniform vec4 vDetailInfos;
uniform mat4 detailMatrix;
#endif
#define ADDITIONAL_VERTEX_DECLARATION
`;x.IncludesShadersStore[Hs]=zs;const Ws="uvAttributeDeclaration",Ys=`#ifdef UV{X}
attribute vec2 uv{X};
#endif
`;x.IncludesShadersStore[Ws]=Ys;const Qs="bonesDeclaration",Ks=`#if NUM_BONE_INFLUENCERS>0
attribute vec4 matricesIndices;
attribute vec4 matricesWeights;
#if NUM_BONE_INFLUENCERS>4
attribute vec4 matricesIndicesExtra;
attribute vec4 matricesWeightsExtra;
#endif
#ifndef BAKED_VERTEX_ANIMATION_TEXTURE
#ifdef BONETEXTURE
uniform sampler2D boneSampler;
uniform float boneTextureWidth;
#else
uniform mat4 mBones[BonesPerMesh];
#ifdef BONES_VELOCITY_ENABLED
uniform mat4 mPreviousBones[BonesPerMesh];
#endif
#endif
#ifdef BONETEXTURE
#define inline
mat4 readMatrixFromRawSampler(sampler2D smp,float index)
{
float offset=index *4.0;
float dx=1.0/boneTextureWidth;
vec4 m0=texture2D(smp,vec2(dx*(offset+0.5),0.));
vec4 m1=texture2D(smp,vec2(dx*(offset+1.5),0.));
vec4 m2=texture2D(smp,vec2(dx*(offset+2.5),0.));
vec4 m3=texture2D(smp,vec2(dx*(offset+3.5),0.));
return mat4(m0,m1,m2,m3);
}
#endif
#endif
#endif
`;x.IncludesShadersStore[Qs]=Ks;const qs="bakedVertexAnimationDeclaration",js=`#ifdef BAKED_VERTEX_ANIMATION_TEXTURE
uniform float bakedVertexAnimationTime;
uniform vec2 bakedVertexAnimationTextureSizeInverted;
uniform vec4 bakedVertexAnimationSettings;
uniform sampler2D bakedVertexAnimationTexture;
#ifdef INSTANCES
attribute vec4 bakedVertexAnimationSettingsInstanced;
#endif
#define inline
mat4 readMatrixFromRawSamplerVAT(sampler2D smp,float index,float frame)
{
float offset=index*4.0;
float frameUV=(frame+0.5)*bakedVertexAnimationTextureSizeInverted.y;
float dx=bakedVertexAnimationTextureSizeInverted.x;
vec4 m0=texture2D(smp,vec2(dx*(offset+0.5),frameUV));
vec4 m1=texture2D(smp,vec2(dx*(offset+1.5),frameUV));
vec4 m2=texture2D(smp,vec2(dx*(offset+2.5),frameUV));
vec4 m3=texture2D(smp,vec2(dx*(offset+3.5),frameUV));
return mat4(m0,m1,m2,m3);
}
#endif
`;x.IncludesShadersStore[qs]=js;const Zs="instancesDeclaration",Js=`#ifdef INSTANCES
attribute vec4 world0;
attribute vec4 world1;
attribute vec4 world2;
attribute vec4 world3;
#ifdef INSTANCESCOLOR
attribute vec4 instanceColor;
#endif
#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)
uniform mat4 world;
#endif
#if defined(VELOCITY) || defined(PREPASS_VELOCITY)
attribute vec4 previousWorld0;
attribute vec4 previousWorld1;
attribute vec4 previousWorld2;
attribute vec4 previousWorld3;
#ifdef THIN_INSTANCES
uniform mat4 previousWorld;
#endif
#endif
#else
#if !defined(WORLD_UBO)
uniform mat4 world;
#endif
#if defined(VELOCITY) || defined(PREPASS_VELOCITY)
uniform mat4 previousWorld;
#endif
#endif
`;x.IncludesShadersStore[Zs]=Js;const $s="prePassVertexDeclaration",ea=`#ifdef PREPASS
#ifdef PREPASS_DEPTH
varying vec3 vViewPos;
#endif
#ifdef PREPASS_VELOCITY
uniform mat4 previousViewProjection;
varying vec4 vCurrentPosition;
varying vec4 vPreviousPosition;
#endif
#endif
`;x.IncludesShadersStore[$s]=ea;const ta="samplerVertexDeclaration",ia=`#if defined(_DEFINENAME_) && _DEFINENAME_DIRECTUV==0
varying vec2 v_VARYINGNAME_UV;
#endif
`;x.IncludesShadersStore[ta]=ia;const ra="bumpVertexDeclaration",na=`#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)
#if defined(TANGENT) && defined(NORMAL) 
varying mat3 vTBN;
#endif
#endif
`;x.IncludesShadersStore[ra]=na;const sa="clipPlaneVertexDeclaration",aa=`#ifdef CLIPPLANE
uniform vec4 vClipPlane;
varying float fClipDistance;
#endif
#ifdef CLIPPLANE2
uniform vec4 vClipPlane2;
varying float fClipDistance2;
#endif
#ifdef CLIPPLANE3
uniform vec4 vClipPlane3;
varying float fClipDistance3;
#endif
#ifdef CLIPPLANE4
uniform vec4 vClipPlane4;
varying float fClipDistance4;
#endif
#ifdef CLIPPLANE5
uniform vec4 vClipPlane5;
varying float fClipDistance5;
#endif
#ifdef CLIPPLANE6
uniform vec4 vClipPlane6;
varying float fClipDistance6;
#endif
`;x.IncludesShadersStore[sa]=aa;const oa="fogVertexDeclaration",la=`#ifdef FOG
varying vec3 vFogDistance;
#endif
`;x.IncludesShadersStore[oa]=la;const fa="lightVxFragmentDeclaration",ca=`#ifdef LIGHT{X}
uniform vec4 vLightData{X};
uniform vec4 vLightDiffuse{X};
#ifdef SPECULARTERM
uniform vec4 vLightSpecular{X};
#else
vec4 vLightSpecular{X}=vec4(0.);
#endif
#ifdef SHADOW{X}
#ifdef SHADOWCSM{X}
uniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{X}];
varying vec4 vPositionFromLight{X}[SHADOWCSMNUM_CASCADES{X}];
varying float vDepthMetric{X}[SHADOWCSMNUM_CASCADES{X}];
varying vec4 vPositionFromCamera{X};
#elif defined(SHADOWCUBE{X})
#else
varying vec4 vPositionFromLight{X};
varying float vDepthMetric{X};
uniform mat4 lightMatrix{X};
#endif
uniform vec4 shadowsInfo{X};
uniform vec2 depthValues{X};
#endif
#ifdef SPOTLIGHT{X}
uniform vec4 vLightDirection{X};
uniform vec4 vLightFalloff{X};
#elif defined(POINTLIGHT{X})
uniform vec4 vLightFalloff{X};
#elif defined(HEMILIGHT{X})
uniform vec3 vLightGround{X};
#endif
#endif
`;x.IncludesShadersStore[fa]=ca;const ha="lightVxUboDeclaration",da=`#ifdef LIGHT{X}
uniform Light{X}
{
vec4 vLightData;
vec4 vLightDiffuse;
vec4 vLightSpecular;
#ifdef SPOTLIGHT{X}
vec4 vLightDirection;
vec4 vLightFalloff;
#elif defined(POINTLIGHT{X})
vec4 vLightFalloff;
#elif defined(HEMILIGHT{X})
vec3 vLightGround;
#endif
vec4 shadowsInfo;
vec2 depthValues;
} light{X};
#ifdef SHADOW{X}
#ifdef SHADOWCSM{X}
uniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{X}];
varying vec4 vPositionFromLight{X}[SHADOWCSMNUM_CASCADES{X}];
varying float vDepthMetric{X}[SHADOWCSMNUM_CASCADES{X}];
varying vec4 vPositionFromCamera{X};
#elif defined(SHADOWCUBE{X})
#else
varying vec4 vPositionFromLight{X};
varying float vDepthMetric{X};
uniform mat4 lightMatrix{X};
#endif
#endif
#endif
`;x.IncludesShadersStore[ha]=da;const ua="morphTargetsVertexGlobalDeclaration",_a=`#ifdef MORPHTARGETS
uniform float morphTargetInfluences[NUM_MORPH_INFLUENCERS];
#ifdef MORPHTARGETS_TEXTURE 
precision mediump sampler2DArray; 
uniform float morphTargetTextureIndices[NUM_MORPH_INFLUENCERS];
uniform vec3 morphTargetTextureInfo;
uniform sampler2DArray morphTargets;
vec3 readVector3FromRawSampler(int targetIndex,float vertexIndex)
{ 
float y=floor(vertexIndex/morphTargetTextureInfo.y);
float x=vertexIndex-y*morphTargetTextureInfo.y;
vec3 textureUV=vec3((x+0.5)/morphTargetTextureInfo.y,(y+0.5)/morphTargetTextureInfo.z,morphTargetTextureIndices[targetIndex]);
return texture(morphTargets,textureUV).xyz;
}
#endif
#endif
`;x.IncludesShadersStore[ua]=_a;const ma="morphTargetsVertexDeclaration",pa=`#ifdef MORPHTARGETS
#ifndef MORPHTARGETS_TEXTURE
attribute vec3 position{X};
#ifdef MORPHTARGETS_NORMAL
attribute vec3 normal{X};
#endif
#ifdef MORPHTARGETS_TANGENT
attribute vec3 tangent{X};
#endif
#ifdef MORPHTARGETS_UV
attribute vec2 uv_{X};
#endif
#endif
#endif
`;x.IncludesShadersStore[ma]=pa;const Ea="morphTargetsVertexGlobal",ga=`#ifdef MORPHTARGETS
#ifdef MORPHTARGETS_TEXTURE
float vertexID;
#endif
#endif
`;x.IncludesShadersStore[Ea]=ga;const Aa="morphTargetsVertex",Ta=`#ifdef MORPHTARGETS
#ifdef MORPHTARGETS_TEXTURE 
vertexID=float(gl_VertexID)*morphTargetTextureInfo.x;
positionUpdated+=(readVector3FromRawSampler({X},vertexID)-position)*morphTargetInfluences[{X}];
vertexID+=1.0;
#ifdef MORPHTARGETS_NORMAL
normalUpdated+=(readVector3FromRawSampler({X},vertexID) -normal)*morphTargetInfluences[{X}];
vertexID+=1.0;
#endif
#ifdef MORPHTARGETS_UV
uvUpdated+=(readVector3FromRawSampler({X},vertexID).xy-uv)*morphTargetInfluences[{X}];
vertexID+=1.0;
#endif
#ifdef MORPHTARGETS_TANGENT
tangentUpdated.xyz+=(readVector3FromRawSampler({X},vertexID) -tangent.xyz)*morphTargetInfluences[{X}];
#endif
#else
positionUpdated+=(position{X}-position)*morphTargetInfluences[{X}];
#ifdef MORPHTARGETS_NORMAL
normalUpdated+=(normal{X}-normal)*morphTargetInfluences[{X}];
#endif
#ifdef MORPHTARGETS_TANGENT
tangentUpdated.xyz+=(tangent{X}-tangent.xyz)*morphTargetInfluences[{X}];
#endif
#ifdef MORPHTARGETS_UV
uvUpdated+=(uv_{X}-uv)*morphTargetInfluences[{X}];
#endif
#endif
#endif
`;x.IncludesShadersStore[Aa]=Ta;const va="instancesVertex",Sa=`#ifdef INSTANCES
mat4 finalWorld=mat4(world0,world1,world2,world3);
#if defined(PREPASS_VELOCITY) || defined(VELOCITY)
mat4 finalPreviousWorld=mat4(previousWorld0,previousWorld1,previousWorld2,previousWorld3);
#endif
#ifdef THIN_INSTANCES
finalWorld=world*finalWorld;
#if defined(PREPASS_VELOCITY) || defined(VELOCITY)
finalPreviousWorld=previousWorld*finalPreviousWorld;
#endif
#endif
#else
mat4 finalWorld=world;
#if defined(PREPASS_VELOCITY) || defined(VELOCITY)
mat4 finalPreviousWorld=previousWorld;
#endif
#endif
`;x.IncludesShadersStore[va]=Sa;const Ra="bonesVertex",Ca=`#ifndef BAKED_VERTEX_ANIMATION_TEXTURE
#if NUM_BONE_INFLUENCERS>0
mat4 influence;
#ifdef BONETEXTURE
influence=readMatrixFromRawSampler(boneSampler,matricesIndices[0])*matricesWeights[0];
#if NUM_BONE_INFLUENCERS>1
influence+=readMatrixFromRawSampler(boneSampler,matricesIndices[1])*matricesWeights[1];
#endif
#if NUM_BONE_INFLUENCERS>2
influence+=readMatrixFromRawSampler(boneSampler,matricesIndices[2])*matricesWeights[2];
#endif
#if NUM_BONE_INFLUENCERS>3
influence+=readMatrixFromRawSampler(boneSampler,matricesIndices[3])*matricesWeights[3];
#endif
#if NUM_BONE_INFLUENCERS>4
influence+=readMatrixFromRawSampler(boneSampler,matricesIndicesExtra[0])*matricesWeightsExtra[0];
#endif
#if NUM_BONE_INFLUENCERS>5
influence+=readMatrixFromRawSampler(boneSampler,matricesIndicesExtra[1])*matricesWeightsExtra[1];
#endif
#if NUM_BONE_INFLUENCERS>6
influence+=readMatrixFromRawSampler(boneSampler,matricesIndicesExtra[2])*matricesWeightsExtra[2];
#endif
#if NUM_BONE_INFLUENCERS>7
influence+=readMatrixFromRawSampler(boneSampler,matricesIndicesExtra[3])*matricesWeightsExtra[3];
#endif
#else
influence=mBones[int(matricesIndices[0])]*matricesWeights[0];
#if NUM_BONE_INFLUENCERS>1
influence+=mBones[int(matricesIndices[1])]*matricesWeights[1];
#endif
#if NUM_BONE_INFLUENCERS>2
influence+=mBones[int(matricesIndices[2])]*matricesWeights[2];
#endif
#if NUM_BONE_INFLUENCERS>3
influence+=mBones[int(matricesIndices[3])]*matricesWeights[3];
#endif
#if NUM_BONE_INFLUENCERS>4
influence+=mBones[int(matricesIndicesExtra[0])]*matricesWeightsExtra[0];
#endif
#if NUM_BONE_INFLUENCERS>5
influence+=mBones[int(matricesIndicesExtra[1])]*matricesWeightsExtra[1];
#endif
#if NUM_BONE_INFLUENCERS>6
influence+=mBones[int(matricesIndicesExtra[2])]*matricesWeightsExtra[2];
#endif
#if NUM_BONE_INFLUENCERS>7
influence+=mBones[int(matricesIndicesExtra[3])]*matricesWeightsExtra[3];
#endif
#endif
finalWorld=finalWorld*influence;
#endif
#endif
`;x.IncludesShadersStore[Ra]=Ca;const Ia="bakedVertexAnimation",xa=`#ifdef BAKED_VERTEX_ANIMATION_TEXTURE
{
#ifdef INSTANCES
#define BVASNAME bakedVertexAnimationSettingsInstanced
#else
#define BVASNAME bakedVertexAnimationSettings
#endif
float VATStartFrame=BVASNAME.x;
float VATEndFrame=BVASNAME.y;
float VATOffsetFrame=BVASNAME.z;
float VATSpeed=BVASNAME.w;
float totalFrames=VATEndFrame-VATStartFrame+1.0;
float time=bakedVertexAnimationTime*VATSpeed/totalFrames;
float frameCorrection=time<1.0 ? 0.0 : 1.0;
float numOfFrames=totalFrames-frameCorrection;
float VATFrameNum=fract(time)*numOfFrames;
VATFrameNum=mod(VATFrameNum+VATOffsetFrame,numOfFrames);
VATFrameNum=floor(VATFrameNum);
VATFrameNum+=VATStartFrame+frameCorrection;
mat4 VATInfluence;
VATInfluence=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndices[0],VATFrameNum)*matricesWeights[0];
#if NUM_BONE_INFLUENCERS>1
VATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndices[1],VATFrameNum)*matricesWeights[1];
#endif
#if NUM_BONE_INFLUENCERS>2
VATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndices[2],VATFrameNum)*matricesWeights[2];
#endif
#if NUM_BONE_INFLUENCERS>3
VATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndices[3],VATFrameNum)*matricesWeights[3];
#endif
#if NUM_BONE_INFLUENCERS>4
VATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndicesExtra[0],VATFrameNum)*matricesWeightsExtra[0];
#endif
#if NUM_BONE_INFLUENCERS>5
VATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndicesExtra[1],VATFrameNum)*matricesWeightsExtra[1];
#endif
#if NUM_BONE_INFLUENCERS>6
VATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndicesExtra[2],VATFrameNum)*matricesWeightsExtra[2];
#endif
#if NUM_BONE_INFLUENCERS>7
VATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndicesExtra[3],VATFrameNum)*matricesWeightsExtra[3];
#endif
finalWorld=finalWorld*VATInfluence;
}
#endif
`;x.IncludesShadersStore[Ia]=xa;const Ma="prePassVertex",ba=`#ifdef PREPASS_DEPTH
vViewPos=(view*worldPos).rgb;
#endif
#if defined(PREPASS_VELOCITY) && defined(BONES_VELOCITY_ENABLED)
vCurrentPosition=viewProjection*worldPos;
#if NUM_BONE_INFLUENCERS>0
mat4 previousInfluence;
previousInfluence=mPreviousBones[int(matricesIndices[0])]*matricesWeights[0];
#if NUM_BONE_INFLUENCERS>1
previousInfluence+=mPreviousBones[int(matricesIndices[1])]*matricesWeights[1];
#endif 
#if NUM_BONE_INFLUENCERS>2
previousInfluence+=mPreviousBones[int(matricesIndices[2])]*matricesWeights[2];
#endif 
#if NUM_BONE_INFLUENCERS>3
previousInfluence+=mPreviousBones[int(matricesIndices[3])]*matricesWeights[3];
#endif
#if NUM_BONE_INFLUENCERS>4
previousInfluence+=mPreviousBones[int(matricesIndicesExtra[0])]*matricesWeightsExtra[0];
#endif 
#if NUM_BONE_INFLUENCERS>5
previousInfluence+=mPreviousBones[int(matricesIndicesExtra[1])]*matricesWeightsExtra[1];
#endif 
#if NUM_BONE_INFLUENCERS>6
previousInfluence+=mPreviousBones[int(matricesIndicesExtra[2])]*matricesWeightsExtra[2];
#endif 
#if NUM_BONE_INFLUENCERS>7
previousInfluence+=mPreviousBones[int(matricesIndicesExtra[3])]*matricesWeightsExtra[3];
#endif
vPreviousPosition=previousViewProjection*finalPreviousWorld*previousInfluence*vec4(positionUpdated,1.0);
#else
vPreviousPosition=previousViewProjection*finalPreviousWorld*vec4(positionUpdated,1.0);
#endif
#endif
`;x.IncludesShadersStore[Ma]=ba;const Na="uvVariableDeclaration",ya=`#if !defined(UV{X}) && defined(MAINUV{X})
vec2 uv{X}=vec2(0.,0.);
#endif
#ifdef MAINUV{X}
vMainUV{X}=uv{X};
#endif
`;x.IncludesShadersStore[Na]=ya;const Oa="samplerVertexImplementation",La=`#if defined(_DEFINENAME_) && _DEFINENAME_DIRECTUV==0
if (v_INFONAME_==0.)
{
v_VARYINGNAME_UV=vec2(_MATRIXNAME_Matrix*vec4(uvUpdated,1.0,0.0));
}
#ifdef UV2
else if (v_INFONAME_==1.)
{
v_VARYINGNAME_UV=vec2(_MATRIXNAME_Matrix*vec4(uv2,1.0,0.0));
}
#endif
#ifdef UV3
else if (v_INFONAME_==2.)
{
v_VARYINGNAME_UV=vec2(_MATRIXNAME_Matrix*vec4(uv3,1.0,0.0));
}
#endif
#ifdef UV4
else if (v_INFONAME_==3.)
{
v_VARYINGNAME_UV=vec2(_MATRIXNAME_Matrix*vec4(uv4,1.0,0.0));
}
#endif
#ifdef UV5
else if (v_INFONAME_==4.)
{
v_VARYINGNAME_UV=vec2(_MATRIXNAME_Matrix*vec4(uv5,1.0,0.0));
}
#endif
#ifdef UV6
else if (v_INFONAME_==5.)
{
v_VARYINGNAME_UV=vec2(_MATRIXNAME_Matrix*vec4(uv6,1.0,0.0));
}
#endif
#endif
`;x.IncludesShadersStore[Oa]=La;const Da="bumpVertex",Pa=`#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)
#if defined(TANGENT) && defined(NORMAL)
vec3 tbnNormal=normalize(normalUpdated);
vec3 tbnTangent=normalize(tangentUpdated.xyz);
vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tangentUpdated.w;
vTBN=mat3(finalWorld)*mat3(tbnTangent,tbnBitangent,tbnNormal);
#endif
#endif
`;x.IncludesShadersStore[Da]=Pa;const Fa="clipPlaneVertex",wa=`#ifdef CLIPPLANE
fClipDistance=dot(worldPos,vClipPlane);
#endif
#ifdef CLIPPLANE2
fClipDistance2=dot(worldPos,vClipPlane2);
#endif
#ifdef CLIPPLANE3
fClipDistance3=dot(worldPos,vClipPlane3);
#endif
#ifdef CLIPPLANE4
fClipDistance4=dot(worldPos,vClipPlane4);
#endif
#ifdef CLIPPLANE5
fClipDistance5=dot(worldPos,vClipPlane5);
#endif
#ifdef CLIPPLANE6
fClipDistance6=dot(worldPos,vClipPlane6);
#endif
`;x.IncludesShadersStore[Fa]=wa;const Ua="fogVertex",Ba=`#ifdef FOG
vFogDistance=(view*worldPos).xyz;
#endif
`;x.IncludesShadersStore[Ua]=Ba;const Va="shadowsVertex",Ga=`#ifdef SHADOWS
#if defined(SHADOWCSM{X})
vPositionFromCamera{X}=view*worldPos;
for (int i=0; i<SHADOWCSMNUM_CASCADES{X}; i++) {
vPositionFromLight{X}[i]=lightMatrix{X}[i]*worldPos;
#ifdef USE_REVERSE_DEPTHBUFFER
vDepthMetric{X}[i]=(-vPositionFromLight{X}[i].z+light{X}.depthValues.x)/light{X}.depthValues.y;
#else
vDepthMetric{X}[i]=(vPositionFromLight{X}[i].z+light{X}.depthValues.x)/light{X}.depthValues.y;
#endif
}
#elif defined(SHADOW{X}) && !defined(SHADOWCUBE{X})
vPositionFromLight{X}=lightMatrix{X}*worldPos;
#ifdef USE_REVERSE_DEPTHBUFFER
vDepthMetric{X}=(-vPositionFromLight{X}.z+light{X}.depthValues.x)/light{X}.depthValues.y;
#else
vDepthMetric{X}=(vPositionFromLight{X}.z+light{X}.depthValues.x)/light{X}.depthValues.y;
#endif
#endif
#endif
`;x.IncludesShadersStore[Va]=Ga;const Xa="vertexColorMixing",ka=`#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
vColor=vec4(1.0);
#ifdef VERTEXCOLOR
#ifdef VERTEXALPHA
vColor*=color;
#else
vColor.rgb*=color.rgb;
#endif
#endif
#ifdef INSTANCESCOLOR
vColor*=instanceColor;
#endif
#endif
`;x.IncludesShadersStore[Xa]=ka;const Ha="logDepthVertex",za=`#ifdef LOGARITHMICDEPTH
vFragmentDepth=1.0+gl_Position.w;
gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;
#endif
`;x.IncludesShadersStore[Ha]=za;const Wa="pbrVertexShader",Ya=`precision highp float;
#include<__decl__pbrVertex>
#define CUSTOM_VERTEX_BEGIN
attribute vec3 position;
#ifdef NORMAL
attribute vec3 normal;
#endif
#ifdef TANGENT
attribute vec4 tangent;
#endif
#ifdef UV1
attribute vec2 uv;
#endif
#include<uvAttributeDeclaration>[2..7]
#include<mainUVVaryingDeclaration>[1..7]
#ifdef VERTEXCOLOR
attribute vec4 color;
#endif
#include<helperFunctions>
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
#include<prePassVertexDeclaration>
#include<samplerVertexDeclaration>(_DEFINENAME_,ALBEDO,_VARYINGNAME_,Albedo)
#include<samplerVertexDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail)
#include<samplerVertexDeclaration>(_DEFINENAME_,AMBIENT,_VARYINGNAME_,Ambient)
#include<samplerVertexDeclaration>(_DEFINENAME_,OPACITY,_VARYINGNAME_,Opacity)
#include<samplerVertexDeclaration>(_DEFINENAME_,EMISSIVE,_VARYINGNAME_,Emissive)
#include<samplerVertexDeclaration>(_DEFINENAME_,LIGHTMAP,_VARYINGNAME_,Lightmap)
#include<samplerVertexDeclaration>(_DEFINENAME_,REFLECTIVITY,_VARYINGNAME_,Reflectivity)
#include<samplerVertexDeclaration>(_DEFINENAME_,MICROSURFACEMAP,_VARYINGNAME_,MicroSurfaceSampler)
#include<samplerVertexDeclaration>(_DEFINENAME_,METALLIC_REFLECTANCE,_VARYINGNAME_,MetallicReflectance)
#include<samplerVertexDeclaration>(_DEFINENAME_,REFLECTANCE,_VARYINGNAME_,Reflectance)
#include<samplerVertexDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump)
#ifdef CLEARCOAT
#include<samplerVertexDeclaration>(_DEFINENAME_,CLEARCOAT_TEXTURE,_VARYINGNAME_,ClearCoat)
#include<samplerVertexDeclaration>(_DEFINENAME_,CLEARCOAT_TEXTURE_ROUGHNESS,_VARYINGNAME_,ClearCoatRoughness)
#include<samplerVertexDeclaration>(_DEFINENAME_,CLEARCOAT_BUMP,_VARYINGNAME_,ClearCoatBump)
#include<samplerVertexDeclaration>(_DEFINENAME_,CLEARCOAT_TINT_TEXTURE,_VARYINGNAME_,ClearCoatTint)
#endif
#ifdef IRIDESCENCE
#include<samplerVertexDeclaration>(_DEFINENAME_,IRIDESCENCE_TEXTURE,_VARYINGNAME_,Iridescence)
#include<samplerVertexDeclaration>(_DEFINENAME_,IRIDESCENCE_THICKNESS_TEXTURE,_VARYINGNAME_,IridescenceThickness)
#endif
#ifdef SHEEN
#include<samplerVertexDeclaration>(_DEFINENAME_,SHEEN_TEXTURE,_VARYINGNAME_,Sheen)
#include<samplerVertexDeclaration>(_DEFINENAME_,SHEEN_TEXTURE_ROUGHNESS,_VARYINGNAME_,SheenRoughness)
#endif
#ifdef ANISOTROPIC
#include<samplerVertexDeclaration>(_DEFINENAME_,ANISOTROPIC_TEXTURE,_VARYINGNAME_,Anisotropy)
#endif
#ifdef SUBSURFACE
#include<samplerVertexDeclaration>(_DEFINENAME_,SS_THICKNESSANDMASK_TEXTURE,_VARYINGNAME_,Thickness)
#include<samplerVertexDeclaration>(_DEFINENAME_,SS_REFRACTIONINTENSITY_TEXTURE,_VARYINGNAME_,RefractionIntensity)
#include<samplerVertexDeclaration>(_DEFINENAME_,SS_TRANSLUCENCYINTENSITY_TEXTURE,_VARYINGNAME_,TranslucencyIntensity)
#endif
varying vec3 vPositionW;
#if DEBUGMODE>0
varying vec4 vClipSpacePosition;
#endif
#ifdef NORMAL
varying vec3 vNormalW;
#if defined(USESPHERICALFROMREFLECTIONMAP) && defined(USESPHERICALINVERTEX)
varying vec3 vEnvironmentIrradiance;
#include<harmonicsFunctions>
#endif
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vec4 vColor;
#endif
#include<bumpVertexDeclaration>
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#include<__decl__lightVxFragment>[0..maxSimultaneousLights]
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#ifdef REFLECTIONMAP_SKYBOX
varying vec3 vPositionUVW;
#endif
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
varying vec3 vDirectionW;
#endif
#include<logDepthDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
vec3 positionUpdated=position;
#ifdef NORMAL
vec3 normalUpdated=normal;
#endif
#ifdef TANGENT
vec4 tangentUpdated=tangent;
#endif
#ifdef UV1
vec2 uvUpdated=uv;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#ifdef REFLECTIONMAP_SKYBOX
vPositionUVW=positionUpdated;
#endif
#define CUSTOM_VERTEX_UPDATE_POSITION
#define CUSTOM_VERTEX_UPDATE_NORMAL
#include<instancesVertex>
#if defined(PREPASS) && defined(PREPASS_VELOCITY) && !defined(BONES_VELOCITY_ENABLED)
vCurrentPosition=viewProjection*finalWorld*vec4(positionUpdated,1.0);
vPreviousPosition=previousViewProjection*finalPreviousWorld*vec4(positionUpdated,1.0);
#endif
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(positionUpdated,1.0);
vPositionW=vec3(worldPos);
#include<prePassVertex>
#ifdef NORMAL
mat3 normalWorld=mat3(finalWorld);
#if defined(INSTANCES) && defined(THIN_INSTANCES)
vNormalW=normalUpdated/vec3(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));
vNormalW=normalize(normalWorld*vNormalW);
#else
#ifdef NONUNIFORMSCALING
normalWorld=transposeMat3(inverseMat3(normalWorld));
#endif
vNormalW=normalize(normalWorld*normalUpdated);
#endif
#if defined(USESPHERICALFROMREFLECTIONMAP) && defined(USESPHERICALINVERTEX)
vec3 reflectionVector=vec3(reflectionMatrix*vec4(vNormalW,0)).xyz;
#ifdef REFLECTIONMAP_OPPOSITEZ
reflectionVector.z*=-1.0;
#endif
vEnvironmentIrradiance=computeEnvironmentIrradiance(reflectionVector);
#endif
#endif
#define CUSTOM_VERTEX_UPDATE_WORLDPOS
#ifdef MULTIVIEW
if (gl_ViewID_OVR==0u) {
gl_Position=viewProjection*worldPos;
} else {
gl_Position=viewProjectionR*worldPos;
}
#else
gl_Position=viewProjection*worldPos;
#endif
#if DEBUGMODE>0
vClipSpacePosition=gl_Position;
#endif
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
vDirectionW=normalize(vec3(finalWorld*vec4(positionUpdated,0.0)));
#endif
#ifndef UV1
vec2 uvUpdated=vec2(0.,0.);
#endif
#ifdef MAINUV1
vMainUV1=uvUpdated;
#endif
#include<uvVariableDeclaration>[2..7]
#include<samplerVertexImplementation>(_DEFINENAME_,ALBEDO,_VARYINGNAME_,Albedo,_MATRIXNAME_,albedo,_INFONAME_,AlbedoInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_MATRIXNAME_,detail,_INFONAME_,DetailInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,AMBIENT,_VARYINGNAME_,Ambient,_MATRIXNAME_,ambient,_INFONAME_,AmbientInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,OPACITY,_VARYINGNAME_,Opacity,_MATRIXNAME_,opacity,_INFONAME_,OpacityInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,EMISSIVE,_VARYINGNAME_,Emissive,_MATRIXNAME_,emissive,_INFONAME_,EmissiveInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,LIGHTMAP,_VARYINGNAME_,Lightmap,_MATRIXNAME_,lightmap,_INFONAME_,LightmapInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,REFLECTIVITY,_VARYINGNAME_,Reflectivity,_MATRIXNAME_,reflectivity,_INFONAME_,ReflectivityInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,MICROSURFACEMAP,_VARYINGNAME_,MicroSurfaceSampler,_MATRIXNAME_,microSurfaceSampler,_INFONAME_,MicroSurfaceSamplerInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,METALLIC_REFLECTANCE,_VARYINGNAME_,MetallicReflectance,_MATRIXNAME_,metallicReflectance,_INFONAME_,MetallicReflectanceInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,REFLECTANCE,_VARYINGNAME_,Reflectance,_MATRIXNAME_,reflectance,_INFONAME_,ReflectanceInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_MATRIXNAME_,bump,_INFONAME_,BumpInfos.x)
#ifdef CLEARCOAT
#include<samplerVertexImplementation>(_DEFINENAME_,CLEARCOAT_TEXTURE,_VARYINGNAME_,ClearCoat,_MATRIXNAME_,clearCoat,_INFONAME_,ClearCoatInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,CLEARCOAT_TEXTURE_ROUGHNESS,_VARYINGNAME_,ClearCoatRoughness,_MATRIXNAME_,clearCoatRoughness,_INFONAME_,ClearCoatInfos.z)
#include<samplerVertexImplementation>(_DEFINENAME_,CLEARCOAT_BUMP,_VARYINGNAME_,ClearCoatBump,_MATRIXNAME_,clearCoatBump,_INFONAME_,ClearCoatBumpInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,CLEARCOAT_TINT_TEXTURE,_VARYINGNAME_,ClearCoatTint,_MATRIXNAME_,clearCoatTint,_INFONAME_,ClearCoatTintInfos.x)
#endif
#ifdef IRIDESCENCE
#include<samplerVertexImplementation>(_DEFINENAME_,IRIDESCENCE_TEXTURE,_VARYINGNAME_,Iridescence,_MATRIXNAME_,iridescence,_INFONAME_,IridescenceInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,IRIDESCENCE_THICKNESS_TEXTURE,_VARYINGNAME_,IridescenceThickness,_MATRIXNAME_,iridescenceThickness,_INFONAME_,IridescenceInfos.z)
#endif
#ifdef SHEEN
#include<samplerVertexImplementation>(_DEFINENAME_,SHEEN_TEXTURE,_VARYINGNAME_,Sheen,_MATRIXNAME_,sheen,_INFONAME_,SheenInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,SHEEN_TEXTURE_ROUGHNESS,_VARYINGNAME_,SheenRoughness,_MATRIXNAME_,sheen,_INFONAME_,SheenInfos.z)
#endif
#ifdef ANISOTROPIC
#include<samplerVertexImplementation>(_DEFINENAME_,ANISOTROPIC_TEXTURE,_VARYINGNAME_,Anisotropy,_MATRIXNAME_,anisotropy,_INFONAME_,AnisotropyInfos.x)
#endif
#ifdef SUBSURFACE
#include<samplerVertexImplementation>(_DEFINENAME_,SS_THICKNESSANDMASK_TEXTURE,_VARYINGNAME_,Thickness,_MATRIXNAME_,thickness,_INFONAME_,ThicknessInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,SS_REFRACTIONINTENSITY_TEXTURE,_VARYINGNAME_,RefractionIntensity,_MATRIXNAME_,refractionIntensity,_INFONAME_,RefractionIntensityInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,SS_TRANSLUCENCYINTENSITY_TEXTURE,_VARYINGNAME_,TranslucencyIntensity,_MATRIXNAME_,translucencyIntensity,_INFONAME_,TranslucencyIntensityInfos.x)
#endif
#include<bumpVertex>
#include<clipPlaneVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#include<vertexColorMixing>
#if defined(POINTSIZE) && !defined(WEBGPU)
gl_PointSize=pointSize;
#endif
#include<logDepthVertex>
#define CUSTOM_VERTEX_MAIN_END
}`;x.ShadersStore[Wa]=Ya;class Qa extends Pe{constructor(){super(...arguments),this.CLEARCOAT=!1,this.CLEARCOAT_DEFAULTIOR=!1,this.CLEARCOAT_TEXTURE=!1,this.CLEARCOAT_TEXTURE_ROUGHNESS=!1,this.CLEARCOAT_TEXTUREDIRECTUV=0,this.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV=0,this.CLEARCOAT_BUMP=!1,this.CLEARCOAT_BUMPDIRECTUV=0,this.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE=!1,this.CLEARCOAT_TEXTURE_ROUGHNESS_IDENTICAL=!1,this.CLEARCOAT_REMAP_F0=!1,this.CLEARCOAT_TINT=!1,this.CLEARCOAT_TINT_TEXTURE=!1,this.CLEARCOAT_TINT_TEXTUREDIRECTUV=0,this.CLEARCOAT_TINT_GAMMATEXTURE=!1}}class ie extends Se{constructor(e,t=!0){super(e,"PBRClearCoat",100,new Qa,t),this._isEnabled=!1,this.isEnabled=!1,this.intensity=1,this.roughness=0,this._indexOfRefraction=ie._DefaultIndexOfRefraction,this.indexOfRefraction=ie._DefaultIndexOfRefraction,this._texture=null,this.texture=null,this._useRoughnessFromMainTexture=!0,this.useRoughnessFromMainTexture=!0,this._textureRoughness=null,this.textureRoughness=null,this._remapF0OnInterfaceChange=!0,this.remapF0OnInterfaceChange=!0,this._bumpTexture=null,this.bumpTexture=null,this._isTintEnabled=!1,this.isTintEnabled=!1,this.tintColor=Z.White(),this.tintColorAtDistance=1,this.tintThickness=1,this._tintTexture=null,this.tintTexture=null,this._internalMarkAllSubMeshesAsTexturesDirty=e._dirtyCallbacks[1]}_markAllSubMeshesAsTexturesDirty(){this._enable(this._isEnabled),this._internalMarkAllSubMeshesAsTexturesDirty()}isReadyForSubMesh(e,t,i){if(!this._isEnabled)return!0;const r=this._material._disableBumpMap;return!(e._areTexturesDirty&&t.texturesEnabled&&(this._texture&&S.ClearCoatTextureEnabled&&!this._texture.isReadyOrNotBlocking()||this._textureRoughness&&S.ClearCoatTextureEnabled&&!this._textureRoughness.isReadyOrNotBlocking()||i.getCaps().standardDerivatives&&this._bumpTexture&&S.ClearCoatBumpTextureEnabled&&!r&&!this._bumpTexture.isReady()||this._isTintEnabled&&this._tintTexture&&S.ClearCoatTintTextureEnabled&&!this._tintTexture.isReadyOrNotBlocking()))}prepareDefinesBeforeAttributes(e,t){var i;this._isEnabled?(e.CLEARCOAT=!0,e.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE=this._useRoughnessFromMainTexture,e.CLEARCOAT_TEXTURE_ROUGHNESS_IDENTICAL=this._texture!==null&&this._texture._texture===((i=this._textureRoughness)===null||i===void 0?void 0:i._texture)&&this._texture.checkTransformsAreIdentical(this._textureRoughness),e.CLEARCOAT_REMAP_F0=this._remapF0OnInterfaceChange,e._areTexturesDirty&&t.texturesEnabled&&(this._texture&&S.ClearCoatTextureEnabled?N.PrepareDefinesForMergedUV(this._texture,e,"CLEARCOAT_TEXTURE"):e.CLEARCOAT_TEXTURE=!1,this._textureRoughness&&S.ClearCoatTextureEnabled?N.PrepareDefinesForMergedUV(this._textureRoughness,e,"CLEARCOAT_TEXTURE_ROUGHNESS"):e.CLEARCOAT_TEXTURE_ROUGHNESS=!1,this._bumpTexture&&S.ClearCoatBumpTextureEnabled?N.PrepareDefinesForMergedUV(this._bumpTexture,e,"CLEARCOAT_BUMP"):e.CLEARCOAT_BUMP=!1,e.CLEARCOAT_DEFAULTIOR=this._indexOfRefraction===ie._DefaultIndexOfRefraction,this._isTintEnabled?(e.CLEARCOAT_TINT=!0,this._tintTexture&&S.ClearCoatTintTextureEnabled?(N.PrepareDefinesForMergedUV(this._tintTexture,e,"CLEARCOAT_TINT_TEXTURE"),e.CLEARCOAT_TINT_GAMMATEXTURE=this._tintTexture.gammaSpace):e.CLEARCOAT_TINT_TEXTURE=!1):(e.CLEARCOAT_TINT=!1,e.CLEARCOAT_TINT_TEXTURE=!1))):(e.CLEARCOAT=!1,e.CLEARCOAT_TEXTURE=!1,e.CLEARCOAT_TEXTURE_ROUGHNESS=!1,e.CLEARCOAT_BUMP=!1,e.CLEARCOAT_TINT=!1,e.CLEARCOAT_TINT_TEXTURE=!1,e.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE=!1,e.CLEARCOAT_TEXTURE_ROUGHNESS_IDENTICAL=!1,e.CLEARCOAT_DEFAULTIOR=!1,e.CLEARCOAT_TEXTUREDIRECTUV=0,e.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV=0,e.CLEARCOAT_BUMPDIRECTUV=0,e.CLEARCOAT_REMAP_F0=!1,e.CLEARCOAT_TINT_TEXTUREDIRECTUV=0,e.CLEARCOAT_TINT_GAMMATEXTURE=!1)}bindForSubMesh(e,t,i,r){var n,s,a,o,l,c,f,d;if(!this._isEnabled)return;const _=r.materialDefines,u=this._material.isFrozen,p=this._material._disableBumpMap,g=this._material._invertNormalMapX,T=this._material._invertNormalMapY,C=_.CLEARCOAT_TEXTURE_ROUGHNESS_IDENTICAL;if(!e.useUbo||!u||!e.isSync){C&&S.ClearCoatTextureEnabled?(e.updateFloat4("vClearCoatInfos",this._texture.coordinatesIndex,this._texture.level,-1,-1),N.BindTextureMatrix(this._texture,e,"clearCoat")):(this._texture||this._textureRoughness)&&S.ClearCoatTextureEnabled&&(e.updateFloat4("vClearCoatInfos",(s=(n=this._texture)===null||n===void 0?void 0:n.coordinatesIndex)!==null&&s!==void 0?s:0,(o=(a=this._texture)===null||a===void 0?void 0:a.level)!==null&&o!==void 0?o:0,(c=(l=this._textureRoughness)===null||l===void 0?void 0:l.coordinatesIndex)!==null&&c!==void 0?c:0,(d=(f=this._textureRoughness)===null||f===void 0?void 0:f.level)!==null&&d!==void 0?d:0),this._texture&&N.BindTextureMatrix(this._texture,e,"clearCoat"),this._textureRoughness&&!C&&!_.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE&&N.BindTextureMatrix(this._textureRoughness,e,"clearCoatRoughness")),this._bumpTexture&&i.getCaps().standardDerivatives&&S.ClearCoatTextureEnabled&&!p&&(e.updateFloat2("vClearCoatBumpInfos",this._bumpTexture.coordinatesIndex,this._bumpTexture.level),N.BindTextureMatrix(this._bumpTexture,e,"clearCoatBump"),t._mirroredCameraPosition?e.updateFloat2("vClearCoatTangentSpaceParams",g?1:-1,T?1:-1):e.updateFloat2("vClearCoatTangentSpaceParams",g?-1:1,T?-1:1)),this._tintTexture&&S.ClearCoatTintTextureEnabled&&(e.updateFloat2("vClearCoatTintInfos",this._tintTexture.coordinatesIndex,this._tintTexture.level),N.BindTextureMatrix(this._tintTexture,e,"clearCoatTint")),e.updateFloat2("vClearCoatParams",this.intensity,this.roughness);const R=1-this._indexOfRefraction,b=1+this._indexOfRefraction,G=Math.pow(-R/b,2),X=1/this._indexOfRefraction;e.updateFloat4("vClearCoatRefractionParams",G,X,R,b),this._isTintEnabled&&(e.updateFloat4("vClearCoatTintParams",this.tintColor.r,this.tintColor.g,this.tintColor.b,Math.max(1e-5,this.tintThickness)),e.updateFloat("clearCoatColorAtDistance",Math.max(1e-5,this.tintColorAtDistance)))}t.texturesEnabled&&(this._texture&&S.ClearCoatTextureEnabled&&e.setTexture("clearCoatSampler",this._texture),this._textureRoughness&&!C&&!_.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE&&S.ClearCoatTextureEnabled&&e.setTexture("clearCoatRoughnessSampler",this._textureRoughness),this._bumpTexture&&i.getCaps().standardDerivatives&&S.ClearCoatBumpTextureEnabled&&!p&&e.setTexture("clearCoatBumpSampler",this._bumpTexture),this._isTintEnabled&&this._tintTexture&&S.ClearCoatTintTextureEnabled&&e.setTexture("clearCoatTintSampler",this._tintTexture))}hasTexture(e){return this._texture===e||this._textureRoughness===e||this._bumpTexture===e||this._tintTexture===e}getActiveTextures(e){this._texture&&e.push(this._texture),this._textureRoughness&&e.push(this._textureRoughness),this._bumpTexture&&e.push(this._bumpTexture),this._tintTexture&&e.push(this._tintTexture)}getAnimatables(e){this._texture&&this._texture.animations&&this._texture.animations.length>0&&e.push(this._texture),this._textureRoughness&&this._textureRoughness.animations&&this._textureRoughness.animations.length>0&&e.push(this._textureRoughness),this._bumpTexture&&this._bumpTexture.animations&&this._bumpTexture.animations.length>0&&e.push(this._bumpTexture),this._tintTexture&&this._tintTexture.animations&&this._tintTexture.animations.length>0&&e.push(this._tintTexture)}dispose(e){var t,i,r,n;e&&((t=this._texture)===null||t===void 0||t.dispose(),(i=this._textureRoughness)===null||i===void 0||i.dispose(),(r=this._bumpTexture)===null||r===void 0||r.dispose(),(n=this._tintTexture)===null||n===void 0||n.dispose())}getClassName(){return"PBRClearCoatConfiguration"}addFallbacks(e,t,i){return e.CLEARCOAT_BUMP&&t.addFallback(i++,"CLEARCOAT_BUMP"),e.CLEARCOAT_TINT&&t.addFallback(i++,"CLEARCOAT_TINT"),e.CLEARCOAT&&t.addFallback(i++,"CLEARCOAT"),i}getSamplers(e){e.push("clearCoatSampler","clearCoatRoughnessSampler","clearCoatBumpSampler","clearCoatTintSampler")}getUniforms(){return{ubo:[{name:"vClearCoatParams",size:2,type:"vec2"},{name:"vClearCoatRefractionParams",size:4,type:"vec4"},{name:"vClearCoatInfos",size:4,type:"vec4"},{name:"clearCoatMatrix",size:16,type:"mat4"},{name:"clearCoatRoughnessMatrix",size:16,type:"mat4"},{name:"vClearCoatBumpInfos",size:2,type:"vec2"},{name:"vClearCoatTangentSpaceParams",size:2,type:"vec2"},{name:"clearCoatBumpMatrix",size:16,type:"mat4"},{name:"vClearCoatTintParams",size:4,type:"vec4"},{name:"clearCoatColorAtDistance",size:1,type:"float"},{name:"vClearCoatTintInfos",size:2,type:"vec2"},{name:"clearCoatTintMatrix",size:16,type:"mat4"}]}}}ie._DefaultIndexOfRefraction=1.5;m([E(),I("_markAllSubMeshesAsTexturesDirty")],ie.prototype,"isEnabled",void 0);m([E()],ie.prototype,"intensity",void 0);m([E()],ie.prototype,"roughness",void 0);m([E(),I("_markAllSubMeshesAsTexturesDirty")],ie.prototype,"indexOfRefraction",void 0);m([$(),I("_markAllSubMeshesAsTexturesDirty")],ie.prototype,"texture",void 0);m([E(),I("_markAllSubMeshesAsTexturesDirty")],ie.prototype,"useRoughnessFromMainTexture",void 0);m([$(),I("_markAllSubMeshesAsTexturesDirty")],ie.prototype,"textureRoughness",void 0);m([E(),I("_markAllSubMeshesAsTexturesDirty")],ie.prototype,"remapF0OnInterfaceChange",void 0);m([$(),I("_markAllSubMeshesAsTexturesDirty")],ie.prototype,"bumpTexture",void 0);m([E(),I("_markAllSubMeshesAsTexturesDirty")],ie.prototype,"isTintEnabled",void 0);m([ve()],ie.prototype,"tintColor",void 0);m([E()],ie.prototype,"tintColorAtDistance",void 0);m([E()],ie.prototype,"tintThickness",void 0);m([$(),I("_markAllSubMeshesAsTexturesDirty")],ie.prototype,"tintTexture",void 0);class Ka extends Pe{constructor(){super(...arguments),this.IRIDESCENCE=!1,this.IRIDESCENCE_TEXTURE=!1,this.IRIDESCENCE_TEXTUREDIRECTUV=0,this.IRIDESCENCE_THICKNESS_TEXTURE=!1,this.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV=0,this.IRIDESCENCE_USE_THICKNESS_FROM_MAINTEXTURE=!1}}class he extends Se{constructor(e,t=!0){super(e,"PBRIridescence",110,new Ka,t),this._isEnabled=!1,this.isEnabled=!1,this.intensity=1,this.minimumThickness=he._DefaultMinimumThickness,this.maximumThickness=he._DefaultMaximumThickness,this.indexOfRefraction=he._DefaultIndexOfRefraction,this._texture=null,this.texture=null,this._thicknessTexture=null,this.thicknessTexture=null,this._internalMarkAllSubMeshesAsTexturesDirty=e._dirtyCallbacks[1]}_markAllSubMeshesAsTexturesDirty(){this._enable(this._isEnabled),this._internalMarkAllSubMeshesAsTexturesDirty()}isReadyForSubMesh(e,t){return this._isEnabled?!(e._areTexturesDirty&&t.texturesEnabled&&(this._texture&&S.IridescenceTextureEnabled&&!this._texture.isReadyOrNotBlocking()||this._thicknessTexture&&S.IridescenceTextureEnabled&&!this._thicknessTexture.isReadyOrNotBlocking())):!0}prepareDefinesBeforeAttributes(e,t){var i;this._isEnabled?(e.IRIDESCENCE=!0,e.IRIDESCENCE_USE_THICKNESS_FROM_MAINTEXTURE=this._texture!==null&&this._texture._texture===((i=this._thicknessTexture)===null||i===void 0?void 0:i._texture)&&this._texture.checkTransformsAreIdentical(this._thicknessTexture),e._areTexturesDirty&&t.texturesEnabled&&(this._texture&&S.IridescenceTextureEnabled?N.PrepareDefinesForMergedUV(this._texture,e,"IRIDESCENCE_TEXTURE"):e.IRIDESCENCE_TEXTURE=!1,!e.IRIDESCENCE_USE_THICKNESS_FROM_MAINTEXTURE&&this._thicknessTexture&&S.IridescenceTextureEnabled?N.PrepareDefinesForMergedUV(this._thicknessTexture,e,"IRIDESCENCE_THICKNESS_TEXTURE"):e.IRIDESCENCE_THICKNESS_TEXTURE=!1)):(e.IRIDESCENCE=!1,e.IRIDESCENCE_TEXTURE=!1,e.IRIDESCENCE_THICKNESS_TEXTURE=!1,e.IRIDESCENCE_USE_THICKNESS_FROM_MAINTEXTURE=!1,e.IRIDESCENCE_TEXTUREDIRECTUV=0,e.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV=0)}bindForSubMesh(e,t,i,r){var n,s,a,o,l,c,f,d;if(!this._isEnabled)return;const _=r.materialDefines,u=this._material.isFrozen,p=_.IRIDESCENCE_USE_THICKNESS_FROM_MAINTEXTURE;(!e.useUbo||!u||!e.isSync)&&(p&&S.IridescenceTextureEnabled?(e.updateFloat4("vIridescenceInfos",this._texture.coordinatesIndex,this._texture.level,-1,-1),N.BindTextureMatrix(this._texture,e,"iridescence")):(this._texture||this._thicknessTexture)&&S.IridescenceTextureEnabled&&(e.updateFloat4("vIridescenceInfos",(s=(n=this._texture)===null||n===void 0?void 0:n.coordinatesIndex)!==null&&s!==void 0?s:0,(o=(a=this._texture)===null||a===void 0?void 0:a.level)!==null&&o!==void 0?o:0,(c=(l=this._thicknessTexture)===null||l===void 0?void 0:l.coordinatesIndex)!==null&&c!==void 0?c:0,(d=(f=this._thicknessTexture)===null||f===void 0?void 0:f.level)!==null&&d!==void 0?d:0),this._texture&&N.BindTextureMatrix(this._texture,e,"iridescence"),this._thicknessTexture&&!p&&!_.IRIDESCENCE_USE_THICKNESS_FROM_MAINTEXTURE&&N.BindTextureMatrix(this._thicknessTexture,e,"iridescenceThickness")),e.updateFloat4("vIridescenceParams",this.intensity,this.indexOfRefraction,this.minimumThickness,this.maximumThickness)),t.texturesEnabled&&(this._texture&&S.IridescenceTextureEnabled&&e.setTexture("iridescenceSampler",this._texture),this._thicknessTexture&&!p&&!_.IRIDESCENCE_USE_THICKNESS_FROM_MAINTEXTURE&&S.IridescenceTextureEnabled&&e.setTexture("iridescenceThicknessSampler",this._thicknessTexture))}hasTexture(e){return this._texture===e||this._thicknessTexture===e}getActiveTextures(e){this._texture&&e.push(this._texture),this._thicknessTexture&&e.push(this._thicknessTexture)}getAnimatables(e){this._texture&&this._texture.animations&&this._texture.animations.length>0&&e.push(this._texture),this._thicknessTexture&&this._thicknessTexture.animations&&this._thicknessTexture.animations.length>0&&e.push(this._thicknessTexture)}dispose(e){var t,i;e&&((t=this._texture)===null||t===void 0||t.dispose(),(i=this._thicknessTexture)===null||i===void 0||i.dispose())}getClassName(){return"PBRIridescenceConfiguration"}addFallbacks(e,t,i){return e.IRIDESCENCE&&t.addFallback(i++,"IRIDESCENCE"),i}getSamplers(e){e.push("iridescenceSampler","iridescenceThicknessSampler")}getUniforms(){return{ubo:[{name:"vIridescenceParams",size:4,type:"vec4"},{name:"vIridescenceInfos",size:4,type:"vec4"},{name:"iridescenceMatrix",size:16,type:"mat4"},{name:"iridescenceThicknessMatrix",size:16,type:"mat4"}]}}}he._DefaultMinimumThickness=100;he._DefaultMaximumThickness=400;he._DefaultIndexOfRefraction=1.3;m([E(),I("_markAllSubMeshesAsTexturesDirty")],he.prototype,"isEnabled",void 0);m([E()],he.prototype,"intensity",void 0);m([E()],he.prototype,"minimumThickness",void 0);m([E()],he.prototype,"maximumThickness",void 0);m([E()],he.prototype,"indexOfRefraction",void 0);m([$(),I("_markAllSubMeshesAsTexturesDirty")],he.prototype,"texture",void 0);m([$(),I("_markAllSubMeshesAsTexturesDirty")],he.prototype,"thicknessTexture",void 0);class qa extends Pe{constructor(){super(...arguments),this.ANISOTROPIC=!1,this.ANISOTROPIC_TEXTURE=!1,this.ANISOTROPIC_TEXTUREDIRECTUV=0,this.MAINUV1=!1}}class nt extends Se{constructor(e,t=!0){super(e,"PBRAnisotropic",110,new qa,t),this._isEnabled=!1,this.isEnabled=!1,this.intensity=1,this.direction=new Ze(1,0),this._texture=null,this.texture=null,this._internalMarkAllSubMeshesAsTexturesDirty=e._dirtyCallbacks[1]}_markAllSubMeshesAsTexturesDirty(){this._enable(this._isEnabled),this._internalMarkAllSubMeshesAsTexturesDirty()}isReadyForSubMesh(e,t){return this._isEnabled?!(e._areTexturesDirty&&t.texturesEnabled&&this._texture&&S.AnisotropicTextureEnabled&&!this._texture.isReadyOrNotBlocking()):!0}prepareDefinesBeforeAttributes(e,t,i){this._isEnabled?(e.ANISOTROPIC=this._isEnabled,this._isEnabled&&!i.isVerticesDataPresent(y.TangentKind)&&(e._needUVs=!0,e.MAINUV1=!0),e._areTexturesDirty&&t.texturesEnabled&&(this._texture&&S.AnisotropicTextureEnabled?N.PrepareDefinesForMergedUV(this._texture,e,"ANISOTROPIC_TEXTURE"):e.ANISOTROPIC_TEXTURE=!1)):(e.ANISOTROPIC=!1,e.ANISOTROPIC_TEXTURE=!1,e.ANISOTROPIC_TEXTUREDIRECTUV=0,e.MAINUV1=!1)}bindForSubMesh(e,t){if(!this._isEnabled)return;const i=this._material.isFrozen;(!e.useUbo||!i||!e.isSync)&&(this._texture&&S.AnisotropicTextureEnabled&&(e.updateFloat2("vAnisotropyInfos",this._texture.coordinatesIndex,this._texture.level),N.BindTextureMatrix(this._texture,e,"anisotropy")),e.updateFloat3("vAnisotropy",this.direction.x,this.direction.y,this.intensity)),t.texturesEnabled&&this._texture&&S.AnisotropicTextureEnabled&&e.setTexture("anisotropySampler",this._texture)}hasTexture(e){return this._texture===e}getActiveTextures(e){this._texture&&e.push(this._texture)}getAnimatables(e){this._texture&&this._texture.animations&&this._texture.animations.length>0&&e.push(this._texture)}dispose(e){e&&this._texture&&this._texture.dispose()}getClassName(){return"PBRAnisotropicConfiguration"}addFallbacks(e,t,i){return e.ANISOTROPIC&&t.addFallback(i++,"ANISOTROPIC"),i}getSamplers(e){e.push("anisotropySampler")}getUniforms(){return{ubo:[{name:"vAnisotropy",size:3,type:"vec3"},{name:"vAnisotropyInfos",size:2,type:"vec2"},{name:"anisotropyMatrix",size:16,type:"mat4"}]}}}m([E(),I("_markAllSubMeshesAsTexturesDirty")],nt.prototype,"isEnabled",void 0);m([E()],nt.prototype,"intensity",void 0);m([Pi()],nt.prototype,"direction",void 0);m([$(),I("_markAllSubMeshesAsTexturesDirty")],nt.prototype,"texture",void 0);class ja extends Pe{constructor(){super(...arguments),this.SHEEN=!1,this.SHEEN_TEXTURE=!1,this.SHEEN_GAMMATEXTURE=!1,this.SHEEN_TEXTURE_ROUGHNESS=!1,this.SHEEN_TEXTUREDIRECTUV=0,this.SHEEN_TEXTURE_ROUGHNESSDIRECTUV=0,this.SHEEN_LINKWITHALBEDO=!1,this.SHEEN_ROUGHNESS=!1,this.SHEEN_ALBEDOSCALING=!1,this.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE=!1,this.SHEEN_TEXTURE_ROUGHNESS_IDENTICAL=!1}}class Re extends Se{constructor(e,t=!0){super(e,"Sheen",120,new ja,t),this._isEnabled=!1,this.isEnabled=!1,this._linkSheenWithAlbedo=!1,this.linkSheenWithAlbedo=!1,this.intensity=1,this.color=Z.White(),this._texture=null,this.texture=null,this._useRoughnessFromMainTexture=!0,this.useRoughnessFromMainTexture=!0,this._roughness=null,this.roughness=null,this._textureRoughness=null,this.textureRoughness=null,this._albedoScaling=!1,this.albedoScaling=!1,this._internalMarkAllSubMeshesAsTexturesDirty=e._dirtyCallbacks[1]}_markAllSubMeshesAsTexturesDirty(){this._enable(this._isEnabled),this._internalMarkAllSubMeshesAsTexturesDirty()}isReadyForSubMesh(e,t){return this._isEnabled?!(e._areTexturesDirty&&t.texturesEnabled&&(this._texture&&S.SheenTextureEnabled&&!this._texture.isReadyOrNotBlocking()||this._textureRoughness&&S.SheenTextureEnabled&&!this._textureRoughness.isReadyOrNotBlocking())):!0}prepareDefinesBeforeAttributes(e,t){var i;this._isEnabled?(e.SHEEN=!0,e.SHEEN_LINKWITHALBEDO=this._linkSheenWithAlbedo,e.SHEEN_ROUGHNESS=this._roughness!==null,e.SHEEN_ALBEDOSCALING=this._albedoScaling,e.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE=this._useRoughnessFromMainTexture,e.SHEEN_TEXTURE_ROUGHNESS_IDENTICAL=this._texture!==null&&this._texture._texture===((i=this._textureRoughness)===null||i===void 0?void 0:i._texture)&&this._texture.checkTransformsAreIdentical(this._textureRoughness),e._areTexturesDirty&&t.texturesEnabled&&(this._texture&&S.SheenTextureEnabled?(N.PrepareDefinesForMergedUV(this._texture,e,"SHEEN_TEXTURE"),e.SHEEN_GAMMATEXTURE=this._texture.gammaSpace):e.SHEEN_TEXTURE=!1,this._textureRoughness&&S.SheenTextureEnabled?N.PrepareDefinesForMergedUV(this._textureRoughness,e,"SHEEN_TEXTURE_ROUGHNESS"):e.SHEEN_TEXTURE_ROUGHNESS=!1)):(e.SHEEN=!1,e.SHEEN_TEXTURE=!1,e.SHEEN_TEXTURE_ROUGHNESS=!1,e.SHEEN_LINKWITHALBEDO=!1,e.SHEEN_ROUGHNESS=!1,e.SHEEN_ALBEDOSCALING=!1,e.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE=!1,e.SHEEN_TEXTURE_ROUGHNESS_IDENTICAL=!1,e.SHEEN_GAMMATEXTURE=!1,e.SHEEN_TEXTUREDIRECTUV=0,e.SHEEN_TEXTURE_ROUGHNESSDIRECTUV=0)}bindForSubMesh(e,t,i,r){var n,s,a,o,l,c,f,d;if(!this._isEnabled)return;const _=r.materialDefines,u=this._material.isFrozen,p=_.SHEEN_TEXTURE_ROUGHNESS_IDENTICAL;(!e.useUbo||!u||!e.isSync)&&(p&&S.SheenTextureEnabled?(e.updateFloat4("vSheenInfos",this._texture.coordinatesIndex,this._texture.level,-1,-1),N.BindTextureMatrix(this._texture,e,"sheen")):(this._texture||this._textureRoughness)&&S.SheenTextureEnabled&&(e.updateFloat4("vSheenInfos",(s=(n=this._texture)===null||n===void 0?void 0:n.coordinatesIndex)!==null&&s!==void 0?s:0,(o=(a=this._texture)===null||a===void 0?void 0:a.level)!==null&&o!==void 0?o:0,(c=(l=this._textureRoughness)===null||l===void 0?void 0:l.coordinatesIndex)!==null&&c!==void 0?c:0,(d=(f=this._textureRoughness)===null||f===void 0?void 0:f.level)!==null&&d!==void 0?d:0),this._texture&&N.BindTextureMatrix(this._texture,e,"sheen"),this._textureRoughness&&!p&&!_.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE&&N.BindTextureMatrix(this._textureRoughness,e,"sheenRoughness")),e.updateFloat4("vSheenColor",this.color.r,this.color.g,this.color.b,this.intensity),this._roughness!==null&&e.updateFloat("vSheenRoughness",this._roughness)),t.texturesEnabled&&(this._texture&&S.SheenTextureEnabled&&e.setTexture("sheenSampler",this._texture),this._textureRoughness&&!p&&!_.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE&&S.SheenTextureEnabled&&e.setTexture("sheenRoughnessSampler",this._textureRoughness))}hasTexture(e){return this._texture===e||this._textureRoughness===e}getActiveTextures(e){this._texture&&e.push(this._texture),this._textureRoughness&&e.push(this._textureRoughness)}getAnimatables(e){this._texture&&this._texture.animations&&this._texture.animations.length>0&&e.push(this._texture),this._textureRoughness&&this._textureRoughness.animations&&this._textureRoughness.animations.length>0&&e.push(this._textureRoughness)}dispose(e){var t,i;e&&((t=this._texture)===null||t===void 0||t.dispose(),(i=this._textureRoughness)===null||i===void 0||i.dispose())}getClassName(){return"PBRSheenConfiguration"}addFallbacks(e,t,i){return e.SHEEN&&t.addFallback(i++,"SHEEN"),i}getSamplers(e){e.push("sheenSampler","sheenRoughnessSampler")}getUniforms(){return{ubo:[{name:"vSheenColor",size:4,type:"vec4"},{name:"vSheenRoughness",size:1,type:"float"},{name:"vSheenInfos",size:4,type:"vec4"},{name:"sheenMatrix",size:16,type:"mat4"},{name:"sheenRoughnessMatrix",size:16,type:"mat4"}]}}}m([E(),I("_markAllSubMeshesAsTexturesDirty")],Re.prototype,"isEnabled",void 0);m([E(),I("_markAllSubMeshesAsTexturesDirty")],Re.prototype,"linkSheenWithAlbedo",void 0);m([E()],Re.prototype,"intensity",void 0);m([ve()],Re.prototype,"color",void 0);m([$(),I("_markAllSubMeshesAsTexturesDirty")],Re.prototype,"texture",void 0);m([E(),I("_markAllSubMeshesAsTexturesDirty")],Re.prototype,"useRoughnessFromMainTexture",void 0);m([E(),I("_markAllSubMeshesAsTexturesDirty")],Re.prototype,"roughness",void 0);m([$(),I("_markAllSubMeshesAsTexturesDirty")],Re.prototype,"textureRoughness",void 0);m([E(),I("_markAllSubMeshesAsTexturesDirty")],Re.prototype,"albedoScaling",void 0);class Za extends Pe{constructor(){super(...arguments),this.SUBSURFACE=!1,this.SS_REFRACTION=!1,this.SS_REFRACTION_USE_INTENSITY_FROM_TEXTURE=!1,this.SS_TRANSLUCENCY=!1,this.SS_TRANSLUCENCY_USE_INTENSITY_FROM_TEXTURE=!1,this.SS_SCATTERING=!1,this.SS_THICKNESSANDMASK_TEXTURE=!1,this.SS_THICKNESSANDMASK_TEXTUREDIRECTUV=0,this.SS_HAS_THICKNESS=!1,this.SS_REFRACTIONINTENSITY_TEXTURE=!1,this.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV=0,this.SS_TRANSLUCENCYINTENSITY_TEXTURE=!1,this.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV=0,this.SS_REFRACTIONMAP_3D=!1,this.SS_REFRACTIONMAP_OPPOSITEZ=!1,this.SS_LODINREFRACTIONALPHA=!1,this.SS_GAMMAREFRACTION=!1,this.SS_RGBDREFRACTION=!1,this.SS_LINEARSPECULARREFRACTION=!1,this.SS_LINKREFRACTIONTOTRANSPARENCY=!1,this.SS_ALBEDOFORREFRACTIONTINT=!1,this.SS_ALBEDOFORTRANSLUCENCYTINT=!1,this.SS_USE_LOCAL_REFRACTIONMAP_CUBIC=!1,this.SS_USE_THICKNESS_AS_DEPTH=!1,this.SS_MASK_FROM_THICKNESS_TEXTURE=!1,this.SS_USE_GLTF_TEXTURES=!1}}class ee extends Se{constructor(e,t=!0){super(e,"PBRSubSurface",130,new Za,t),this._isRefractionEnabled=!1,this.isRefractionEnabled=!1,this._isTranslucencyEnabled=!1,this.isTranslucencyEnabled=!1,this._isScatteringEnabled=!1,this.isScatteringEnabled=!1,this._scatteringDiffusionProfileIndex=0,this.refractionIntensity=1,this.translucencyIntensity=1,this.useAlbedoToTintRefraction=!1,this.useAlbedoToTintTranslucency=!1,this._thicknessTexture=null,this.thicknessTexture=null,this._refractionTexture=null,this.refractionTexture=null,this._indexOfRefraction=1.5,this.indexOfRefraction=1.5,this._volumeIndexOfRefraction=-1,this._invertRefractionY=!1,this.invertRefractionY=!1,this._linkRefractionWithTransparency=!1,this.linkRefractionWithTransparency=!1,this.minimumThickness=0,this.maximumThickness=1,this.useThicknessAsDepth=!1,this.tintColor=Z.White(),this.tintColorAtDistance=1,this.diffusionDistance=Z.White(),this._useMaskFromThicknessTexture=!1,this.useMaskFromThicknessTexture=!1,this._refractionIntensityTexture=null,this.refractionIntensityTexture=null,this._translucencyIntensityTexture=null,this.translucencyIntensityTexture=null,this._useGltfStyleTextures=!1,this.useGltfStyleTextures=!1,this._scene=e.getScene(),this.registerForExtraEvents=!0,this._internalMarkAllSubMeshesAsTexturesDirty=e._dirtyCallbacks[1],this._internalMarkScenePrePassDirty=e._dirtyCallbacks[32]}get scatteringDiffusionProfile(){return this._scene.subSurfaceConfiguration?this._scene.subSurfaceConfiguration.ssDiffusionProfileColors[this._scatteringDiffusionProfileIndex]:null}set scatteringDiffusionProfile(e){this._scene.enableSubSurfaceForPrePass()&&e&&(this._scatteringDiffusionProfileIndex=this._scene.subSurfaceConfiguration.addDiffusionProfile(e))}get volumeIndexOfRefraction(){return this._volumeIndexOfRefraction>=1?this._volumeIndexOfRefraction:this._indexOfRefraction}set volumeIndexOfRefraction(e){e>=1?this._volumeIndexOfRefraction=e:this._volumeIndexOfRefraction=-1}_markAllSubMeshesAsTexturesDirty(){this._enable(this._isRefractionEnabled||this._isTranslucencyEnabled||this._isScatteringEnabled),this._internalMarkAllSubMeshesAsTexturesDirty()}_markScenePrePassDirty(){this._internalMarkAllSubMeshesAsTexturesDirty(),this._internalMarkScenePrePassDirty()}isReadyForSubMesh(e,t){if(!this._isRefractionEnabled&&!this._isTranslucencyEnabled&&!this._isScatteringEnabled)return!0;if(e._areTexturesDirty&&t.texturesEnabled){if(this._thicknessTexture&&S.ThicknessTextureEnabled&&!this._thicknessTexture.isReadyOrNotBlocking())return!1;const i=this._getRefractionTexture(t);if(i&&S.RefractionTextureEnabled&&!i.isReadyOrNotBlocking())return!1}return!0}prepareDefinesBeforeAttributes(e,t){if(!this._isRefractionEnabled&&!this._isTranslucencyEnabled&&!this._isScatteringEnabled){e.SUBSURFACE=!1,e.SS_TRANSLUCENCY=!1,e.SS_SCATTERING=!1,e.SS_REFRACTION=!1,e.SS_REFRACTION_USE_INTENSITY_FROM_TEXTURE=!1,e.SS_TRANSLUCENCY_USE_INTENSITY_FROM_TEXTURE=!1,e.SS_THICKNESSANDMASK_TEXTURE=!1,e.SS_THICKNESSANDMASK_TEXTUREDIRECTUV=0,e.SS_HAS_THICKNESS=!1,e.SS_REFRACTIONINTENSITY_TEXTURE=!1,e.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV=0,e.SS_TRANSLUCENCYINTENSITY_TEXTURE=!1,e.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV=0,e.SS_REFRACTIONMAP_3D=!1,e.SS_REFRACTIONMAP_OPPOSITEZ=!1,e.SS_LODINREFRACTIONALPHA=!1,e.SS_GAMMAREFRACTION=!1,e.SS_RGBDREFRACTION=!1,e.SS_LINEARSPECULARREFRACTION=!1,e.SS_LINKREFRACTIONTOTRANSPARENCY=!1,e.SS_ALBEDOFORREFRACTIONTINT=!1,e.SS_ALBEDOFORTRANSLUCENCYTINT=!1,e.SS_USE_LOCAL_REFRACTIONMAP_CUBIC=!1,e.SS_USE_THICKNESS_AS_DEPTH=!1,e.SS_MASK_FROM_THICKNESS_TEXTURE=!1,e.SS_USE_GLTF_TEXTURES=!1;return}if(e._areTexturesDirty){e.SUBSURFACE=!0,e.SS_TRANSLUCENCY=this._isTranslucencyEnabled,e.SS_TRANSLUCENCY_USE_INTENSITY_FROM_TEXTURE=!1,e.SS_SCATTERING=this._isScatteringEnabled,e.SS_THICKNESSANDMASK_TEXTURE=!1,e.SS_REFRACTIONINTENSITY_TEXTURE=!1,e.SS_TRANSLUCENCYINTENSITY_TEXTURE=!1,e.SS_HAS_THICKNESS=!1,e.SS_MASK_FROM_THICKNESS_TEXTURE=!1,e.SS_USE_GLTF_TEXTURES=!1,e.SS_REFRACTION=!1,e.SS_REFRACTION_USE_INTENSITY_FROM_TEXTURE=!1,e.SS_REFRACTIONMAP_3D=!1,e.SS_GAMMAREFRACTION=!1,e.SS_RGBDREFRACTION=!1,e.SS_LINEARSPECULARREFRACTION=!1,e.SS_REFRACTIONMAP_OPPOSITEZ=!1,e.SS_LODINREFRACTIONALPHA=!1,e.SS_LINKREFRACTIONTOTRANSPARENCY=!1,e.SS_ALBEDOFORREFRACTIONTINT=!1,e.SS_ALBEDOFORTRANSLUCENCYTINT=!1,e.SS_USE_LOCAL_REFRACTIONMAP_CUBIC=!1,e.SS_USE_THICKNESS_AS_DEPTH=!1;const i=!!this._thicknessTexture&&!!this._refractionIntensityTexture&&this._refractionIntensityTexture.checkTransformsAreIdentical(this._thicknessTexture)&&this._refractionIntensityTexture._texture===this._thicknessTexture._texture,r=!!this._thicknessTexture&&!!this._translucencyIntensityTexture&&this._translucencyIntensityTexture.checkTransformsAreIdentical(this._thicknessTexture)&&this._translucencyIntensityTexture._texture===this._thicknessTexture._texture,n=(i||!this._refractionIntensityTexture)&&(r||!this._translucencyIntensityTexture);if(e._areTexturesDirty&&t.texturesEnabled&&(this._thicknessTexture&&S.ThicknessTextureEnabled&&N.PrepareDefinesForMergedUV(this._thicknessTexture,e,"SS_THICKNESSANDMASK_TEXTURE"),this._refractionIntensityTexture&&S.RefractionIntensityTextureEnabled&&!n&&N.PrepareDefinesForMergedUV(this._refractionIntensityTexture,e,"SS_REFRACTIONINTENSITY_TEXTURE"),this._translucencyIntensityTexture&&S.TranslucencyIntensityTextureEnabled&&!n&&N.PrepareDefinesForMergedUV(this._translucencyIntensityTexture,e,"SS_TRANSLUCENCYINTENSITY_TEXTURE")),e.SS_HAS_THICKNESS=this.maximumThickness-this.minimumThickness!==0,e.SS_MASK_FROM_THICKNESS_TEXTURE=(this._useMaskFromThicknessTexture||!!this._refractionIntensityTexture||!!this._translucencyIntensityTexture)&&n,e.SS_USE_GLTF_TEXTURES=this._useGltfStyleTextures,e.SS_REFRACTION_USE_INTENSITY_FROM_TEXTURE=(this._useMaskFromThicknessTexture||!!this._refractionIntensityTexture)&&n,e.SS_TRANSLUCENCY_USE_INTENSITY_FROM_TEXTURE=(this._useMaskFromThicknessTexture||!!this._translucencyIntensityTexture)&&n,this._isRefractionEnabled&&t.texturesEnabled){const s=this._getRefractionTexture(t);s&&S.RefractionTextureEnabled&&(e.SS_REFRACTION=!0,e.SS_REFRACTIONMAP_3D=s.isCube,e.SS_GAMMAREFRACTION=s.gammaSpace,e.SS_RGBDREFRACTION=s.isRGBD,e.SS_LINEARSPECULARREFRACTION=s.linearSpecularLOD,e.SS_REFRACTIONMAP_OPPOSITEZ=s.invertZ,e.SS_LODINREFRACTIONALPHA=s.lodLevelInAlpha,e.SS_LINKREFRACTIONTOTRANSPARENCY=this._linkRefractionWithTransparency,e.SS_ALBEDOFORREFRACTIONTINT=this.useAlbedoToTintRefraction,e.SS_USE_LOCAL_REFRACTIONMAP_CUBIC=s.isCube&&s.boundingBoxSize,e.SS_USE_THICKNESS_AS_DEPTH=this.useThicknessAsDepth)}this._isTranslucencyEnabled&&(e.SS_ALBEDOFORTRANSLUCENCYTINT=this.useAlbedoToTintTranslucency)}}hardBindForSubMesh(e,t,i,r){if(!this._isRefractionEnabled&&!this._isTranslucencyEnabled&&!this._isScatteringEnabled)return;r.getRenderingMesh().getWorldMatrix().decompose(P.Vector3[0]);const n=Math.max(Math.abs(P.Vector3[0].x),Math.abs(P.Vector3[0].y),Math.abs(P.Vector3[0].z));e.updateFloat2("vThicknessParam",this.minimumThickness*n,(this.maximumThickness-this.minimumThickness)*n)}bindForSubMesh(e,t,i,r){if(!this._isRefractionEnabled&&!this._isTranslucencyEnabled&&!this._isScatteringEnabled)return;const n=r.materialDefines,s=this._material.isFrozen,a=this._material.realTimeFiltering,o=n.LODBASEDMICROSFURACE,l=this._getRefractionTexture(t);if(!e.useUbo||!s||!e.isSync){if(this._thicknessTexture&&S.ThicknessTextureEnabled&&(e.updateFloat2("vThicknessInfos",this._thicknessTexture.coordinatesIndex,this._thicknessTexture.level),N.BindTextureMatrix(this._thicknessTexture,e,"thickness")),this._refractionIntensityTexture&&S.RefractionIntensityTextureEnabled&&n.SS_REFRACTIONINTENSITY_TEXTURE&&(e.updateFloat2("vRefractionIntensityInfos",this._refractionIntensityTexture.coordinatesIndex,this._refractionIntensityTexture.level),N.BindTextureMatrix(this._refractionIntensityTexture,e,"refractionIntensity")),this._translucencyIntensityTexture&&S.TranslucencyIntensityTextureEnabled&&n.SS_TRANSLUCENCYINTENSITY_TEXTURE&&(e.updateFloat2("vTranslucencyIntensityInfos",this._translucencyIntensityTexture.coordinatesIndex,this._translucencyIntensityTexture.level),N.BindTextureMatrix(this._translucencyIntensityTexture,e,"translucencyIntensity")),l&&S.RefractionTextureEnabled){e.updateMatrix("refractionMatrix",l.getReflectionTextureMatrix());let c=1;l.isCube||l.depth&&(c=l.depth);const f=l.getSize().width,d=this.volumeIndexOfRefraction;if(e.updateFloat4("vRefractionInfos",l.level,1/d,c,this._invertRefractionY?-1:1),e.updateFloat4("vRefractionMicrosurfaceInfos",f,l.lodGenerationScale,l.lodGenerationOffset,1/this.indexOfRefraction),a&&e.updateFloat2("vRefractionFilteringInfo",f,Ne.Log2(f)),l.boundingBoxSize){const _=l;e.updateVector3("vRefractionPosition",_.boundingBoxPosition),e.updateVector3("vRefractionSize",_.boundingBoxSize)}}this._isScatteringEnabled&&e.updateFloat("scatteringDiffusionProfile",this._scatteringDiffusionProfileIndex),e.updateColor3("vDiffusionDistance",this.diffusionDistance),e.updateFloat4("vTintColor",this.tintColor.r,this.tintColor.g,this.tintColor.b,Math.max(1e-5,this.tintColorAtDistance)),e.updateFloat3("vSubSurfaceIntensity",this.refractionIntensity,this.translucencyIntensity,0)}t.texturesEnabled&&(this._thicknessTexture&&S.ThicknessTextureEnabled&&e.setTexture("thicknessSampler",this._thicknessTexture),this._refractionIntensityTexture&&S.RefractionIntensityTextureEnabled&&n.SS_REFRACTIONINTENSITY_TEXTURE&&e.setTexture("refractionIntensitySampler",this._refractionIntensityTexture),this._translucencyIntensityTexture&&S.TranslucencyIntensityTextureEnabled&&n.SS_TRANSLUCENCYINTENSITY_TEXTURE&&e.setTexture("translucencyIntensitySampler",this._translucencyIntensityTexture),l&&S.RefractionTextureEnabled&&(o?e.setTexture("refractionSampler",l):(e.setTexture("refractionSampler",l._lodTextureMid||l),e.setTexture("refractionSamplerLow",l._lodTextureLow||l),e.setTexture("refractionSamplerHigh",l._lodTextureHigh||l))))}_getRefractionTexture(e){return this._refractionTexture?this._refractionTexture:this._isRefractionEnabled?e.environmentTexture:null}get disableAlphaBlending(){return this._isRefractionEnabled&&this._linkRefractionWithTransparency}fillRenderTargetTextures(e){S.RefractionTextureEnabled&&this._refractionTexture&&this._refractionTexture.isRenderTarget&&e.push(this._refractionTexture)}hasTexture(e){return this._thicknessTexture===e||this._refractionTexture===e}hasRenderTargetTextures(){return!!(S.RefractionTextureEnabled&&this._refractionTexture&&this._refractionTexture.isRenderTarget)}getActiveTextures(e){this._thicknessTexture&&e.push(this._thicknessTexture),this._refractionTexture&&e.push(this._refractionTexture)}getAnimatables(e){this._thicknessTexture&&this._thicknessTexture.animations&&this._thicknessTexture.animations.length>0&&e.push(this._thicknessTexture),this._refractionTexture&&this._refractionTexture.animations&&this._refractionTexture.animations.length>0&&e.push(this._refractionTexture)}dispose(e){e&&(this._thicknessTexture&&this._thicknessTexture.dispose(),this._refractionTexture&&this._refractionTexture.dispose())}getClassName(){return"PBRSubSurfaceConfiguration"}addFallbacks(e,t,i){return e.SS_SCATTERING&&t.addFallback(i++,"SS_SCATTERING"),e.SS_TRANSLUCENCY&&t.addFallback(i++,"SS_TRANSLUCENCY"),i}getSamplers(e){e.push("thicknessSampler","refractionIntensitySampler","translucencyIntensitySampler","refractionSampler","refractionSamplerLow","refractionSamplerHigh")}getUniforms(){return{ubo:[{name:"vRefractionMicrosurfaceInfos",size:4,type:"vec4"},{name:"vRefractionFilteringInfo",size:2,type:"vec2"},{name:"vTranslucencyIntensityInfos",size:2,type:"vec2"},{name:"vRefractionInfos",size:4,type:"vec4"},{name:"refractionMatrix",size:16,type:"mat4"},{name:"vThicknessInfos",size:2,type:"vec2"},{name:"vRefractionIntensityInfos",size:2,type:"vec2"},{name:"thicknessMatrix",size:16,type:"mat4"},{name:"refractionIntensityMatrix",size:16,type:"mat4"},{name:"translucencyIntensityMatrix",size:16,type:"mat4"},{name:"vThicknessParam",size:2,type:"vec2"},{name:"vDiffusionDistance",size:3,type:"vec3"},{name:"vTintColor",size:4,type:"vec4"},{name:"vSubSurfaceIntensity",size:3,type:"vec3"},{name:"vRefractionPosition",size:3,type:"vec3"},{name:"vRefractionSize",size:3,type:"vec3"},{name:"scatteringDiffusionProfile",size:1,type:"float"}]}}}m([E(),I("_markAllSubMeshesAsTexturesDirty")],ee.prototype,"isRefractionEnabled",void 0);m([E(),I("_markAllSubMeshesAsTexturesDirty")],ee.prototype,"isTranslucencyEnabled",void 0);m([E(),I("_markScenePrePassDirty")],ee.prototype,"isScatteringEnabled",void 0);m([E()],ee.prototype,"_scatteringDiffusionProfileIndex",void 0);m([E()],ee.prototype,"refractionIntensity",void 0);m([E()],ee.prototype,"translucencyIntensity",void 0);m([E()],ee.prototype,"useAlbedoToTintRefraction",void 0);m([E()],ee.prototype,"useAlbedoToTintTranslucency",void 0);m([$(),I("_markAllSubMeshesAsTexturesDirty")],ee.prototype,"thicknessTexture",void 0);m([$(),I("_markAllSubMeshesAsTexturesDirty")],ee.prototype,"refractionTexture",void 0);m([E(),I("_markAllSubMeshesAsTexturesDirty")],ee.prototype,"indexOfRefraction",void 0);m([E()],ee.prototype,"_volumeIndexOfRefraction",void 0);m([I("_markAllSubMeshesAsTexturesDirty")],ee.prototype,"volumeIndexOfRefraction",null);m([E(),I("_markAllSubMeshesAsTexturesDirty")],ee.prototype,"invertRefractionY",void 0);m([E(),I("_markAllSubMeshesAsTexturesDirty")],ee.prototype,"linkRefractionWithTransparency",void 0);m([E()],ee.prototype,"minimumThickness",void 0);m([E()],ee.prototype,"maximumThickness",void 0);m([E()],ee.prototype,"useThicknessAsDepth",void 0);m([ve()],ee.prototype,"tintColor",void 0);m([E()],ee.prototype,"tintColorAtDistance",void 0);m([ve()],ee.prototype,"diffusionDistance",void 0);m([E(),I("_markAllSubMeshesAsTexturesDirty")],ee.prototype,"useMaskFromThicknessTexture",void 0);m([$(),I("_markAllSubMeshesAsTexturesDirty")],ee.prototype,"refractionIntensityTexture",void 0);m([$(),I("_markAllSubMeshesAsTexturesDirty")],ee.prototype,"translucencyIntensityTexture",void 0);m([E(),I("_markAllSubMeshesAsTexturesDirty")],ee.prototype,"useGltfStyleTextures",void 0);class Ja extends Pe{constructor(){super(...arguments),this.DETAIL=!1,this.DETAILDIRECTUV=0,this.DETAIL_NORMALBLENDMETHOD=0}}class Ue extends Se{constructor(e,t=!0){super(e,"DetailMap",140,new Ja,t),this._texture=null,this.diffuseBlendLevel=1,this.roughnessBlendLevel=1,this.bumpLevel=1,this._normalBlendMethod=ne.MATERIAL_NORMALBLENDMETHOD_WHITEOUT,this._isEnabled=!1,this.isEnabled=!1,this._internalMarkAllSubMeshesAsTexturesDirty=e._dirtyCallbacks[1]}_markAllSubMeshesAsTexturesDirty(){this._enable(this._isEnabled),this._internalMarkAllSubMeshesAsTexturesDirty()}isReadyForSubMesh(e,t,i){return this._isEnabled?!(e._areTexturesDirty&&t.texturesEnabled&&i.getCaps().standardDerivatives&&this._texture&&S.DetailTextureEnabled&&!this._texture.isReady()):!0}prepareDefines(e,t){if(this._isEnabled){e.DETAIL_NORMALBLENDMETHOD=this._normalBlendMethod;const i=t.getEngine();e._areTexturesDirty&&(i.getCaps().standardDerivatives&&this._texture&&S.DetailTextureEnabled&&this._isEnabled?(N.PrepareDefinesForMergedUV(this._texture,e,"DETAIL"),e.DETAIL_NORMALBLENDMETHOD=this._normalBlendMethod):e.DETAIL=!1)}else e.DETAIL=!1}bindForSubMesh(e,t){if(!this._isEnabled)return;const i=this._material.isFrozen;(!e.useUbo||!i||!e.isSync)&&this._texture&&S.DetailTextureEnabled&&(e.updateFloat4("vDetailInfos",this._texture.coordinatesIndex,this.diffuseBlendLevel,this.bumpLevel,this.roughnessBlendLevel),N.BindTextureMatrix(this._texture,e,"detail")),t.texturesEnabled&&this._texture&&S.DetailTextureEnabled&&e.setTexture("detailSampler",this._texture)}hasTexture(e){return this._texture===e}getActiveTextures(e){this._texture&&e.push(this._texture)}getAnimatables(e){this._texture&&this._texture.animations&&this._texture.animations.length>0&&e.push(this._texture)}dispose(e){var t;e&&((t=this._texture)===null||t===void 0||t.dispose())}getClassName(){return"DetailMapConfiguration"}getSamplers(e){e.push("detailSampler")}getUniforms(){return{ubo:[{name:"vDetailInfos",size:4,type:"vec4"},{name:"detailMatrix",size:16,type:"mat4"}]}}}m([$("detailTexture"),I("_markAllSubMeshesAsTexturesDirty")],Ue.prototype,"texture",void 0);m([E()],Ue.prototype,"diffuseBlendLevel",void 0);m([E()],Ue.prototype,"roughnessBlendLevel",void 0);m([E()],Ue.prototype,"bumpLevel",void 0);m([E(),I("_markAllSubMeshesAsTexturesDirty")],Ue.prototype,"normalBlendMethod",void 0);m([E(),I("_markAllSubMeshesAsTexturesDirty")],Ue.prototype,"isEnabled",void 0);const Ve={effect:null,subMesh:null};class Ht extends Pe{constructor(e){super(e),this.PBR=!0,this.NUM_SAMPLES="0",this.REALTIME_FILTERING=!1,this.MAINUV1=!1,this.MAINUV2=!1,this.MAINUV3=!1,this.MAINUV4=!1,this.MAINUV5=!1,this.MAINUV6=!1,this.UV1=!1,this.UV2=!1,this.UV3=!1,this.UV4=!1,this.UV5=!1,this.UV6=!1,this.ALBEDO=!1,this.GAMMAALBEDO=!1,this.ALBEDODIRECTUV=0,this.VERTEXCOLOR=!1,this.BAKED_VERTEX_ANIMATION_TEXTURE=!1,this.AMBIENT=!1,this.AMBIENTDIRECTUV=0,this.AMBIENTINGRAYSCALE=!1,this.OPACITY=!1,this.VERTEXALPHA=!1,this.OPACITYDIRECTUV=0,this.OPACITYRGB=!1,this.ALPHATEST=!1,this.DEPTHPREPASS=!1,this.ALPHABLEND=!1,this.ALPHAFROMALBEDO=!1,this.ALPHATESTVALUE="0.5",this.SPECULAROVERALPHA=!1,this.RADIANCEOVERALPHA=!1,this.ALPHAFRESNEL=!1,this.LINEARALPHAFRESNEL=!1,this.PREMULTIPLYALPHA=!1,this.EMISSIVE=!1,this.EMISSIVEDIRECTUV=0,this.GAMMAEMISSIVE=!1,this.REFLECTIVITY=!1,this.REFLECTIVITY_GAMMA=!1,this.REFLECTIVITYDIRECTUV=0,this.SPECULARTERM=!1,this.MICROSURFACEFROMREFLECTIVITYMAP=!1,this.MICROSURFACEAUTOMATIC=!1,this.LODBASEDMICROSFURACE=!1,this.MICROSURFACEMAP=!1,this.MICROSURFACEMAPDIRECTUV=0,this.METALLICWORKFLOW=!1,this.ROUGHNESSSTOREINMETALMAPALPHA=!1,this.ROUGHNESSSTOREINMETALMAPGREEN=!1,this.METALLNESSSTOREINMETALMAPBLUE=!1,this.AOSTOREINMETALMAPRED=!1,this.METALLIC_REFLECTANCE=!1,this.METALLIC_REFLECTANCE_GAMMA=!1,this.METALLIC_REFLECTANCEDIRECTUV=0,this.METALLIC_REFLECTANCE_USE_ALPHA_ONLY=!1,this.REFLECTANCE=!1,this.REFLECTANCE_GAMMA=!1,this.REFLECTANCEDIRECTUV=0,this.ENVIRONMENTBRDF=!1,this.ENVIRONMENTBRDF_RGBD=!1,this.NORMAL=!1,this.TANGENT=!1,this.BUMP=!1,this.BUMPDIRECTUV=0,this.OBJECTSPACE_NORMALMAP=!1,this.PARALLAX=!1,this.PARALLAXOCCLUSION=!1,this.NORMALXYSCALE=!0,this.LIGHTMAP=!1,this.LIGHTMAPDIRECTUV=0,this.USELIGHTMAPASSHADOWMAP=!1,this.GAMMALIGHTMAP=!1,this.RGBDLIGHTMAP=!1,this.REFLECTION=!1,this.REFLECTIONMAP_3D=!1,this.REFLECTIONMAP_SPHERICAL=!1,this.REFLECTIONMAP_PLANAR=!1,this.REFLECTIONMAP_CUBIC=!1,this.USE_LOCAL_REFLECTIONMAP_CUBIC=!1,this.REFLECTIONMAP_PROJECTION=!1,this.REFLECTIONMAP_SKYBOX=!1,this.REFLECTIONMAP_EXPLICIT=!1,this.REFLECTIONMAP_EQUIRECTANGULAR=!1,this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED=!1,this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED=!1,this.INVERTCUBICMAP=!1,this.USESPHERICALFROMREFLECTIONMAP=!1,this.USEIRRADIANCEMAP=!1,this.USESPHERICALINVERTEX=!1,this.REFLECTIONMAP_OPPOSITEZ=!1,this.LODINREFLECTIONALPHA=!1,this.GAMMAREFLECTION=!1,this.RGBDREFLECTION=!1,this.LINEARSPECULARREFLECTION=!1,this.RADIANCEOCCLUSION=!1,this.HORIZONOCCLUSION=!1,this.INSTANCES=!1,this.THIN_INSTANCES=!1,this.INSTANCESCOLOR=!1,this.PREPASS=!1,this.PREPASS_IRRADIANCE=!1,this.PREPASS_IRRADIANCE_INDEX=-1,this.PREPASS_ALBEDO_SQRT=!1,this.PREPASS_ALBEDO_SQRT_INDEX=-1,this.PREPASS_DEPTH=!1,this.PREPASS_DEPTH_INDEX=-1,this.PREPASS_NORMAL=!1,this.PREPASS_NORMAL_INDEX=-1,this.PREPASS_POSITION=!1,this.PREPASS_POSITION_INDEX=-1,this.PREPASS_VELOCITY=!1,this.PREPASS_VELOCITY_INDEX=-1,this.PREPASS_REFLECTIVITY=!1,this.PREPASS_REFLECTIVITY_INDEX=-1,this.SCENE_MRT_COUNT=0,this.NUM_BONE_INFLUENCERS=0,this.BonesPerMesh=0,this.BONETEXTURE=!1,this.BONES_VELOCITY_ENABLED=!1,this.NONUNIFORMSCALING=!1,this.MORPHTARGETS=!1,this.MORPHTARGETS_NORMAL=!1,this.MORPHTARGETS_TANGENT=!1,this.MORPHTARGETS_UV=!1,this.NUM_MORPH_INFLUENCERS=0,this.MORPHTARGETS_TEXTURE=!1,this.IMAGEPROCESSING=!1,this.VIGNETTE=!1,this.VIGNETTEBLENDMODEMULTIPLY=!1,this.VIGNETTEBLENDMODEOPAQUE=!1,this.TONEMAPPING=!1,this.TONEMAPPING_ACES=!1,this.CONTRAST=!1,this.COLORCURVES=!1,this.COLORGRADING=!1,this.COLORGRADING3D=!1,this.SAMPLER3DGREENDEPTH=!1,this.SAMPLER3DBGRMAP=!1,this.DITHER=!1,this.IMAGEPROCESSINGPOSTPROCESS=!1,this.SKIPFINALCOLORCLAMP=!1,this.EXPOSURE=!1,this.MULTIVIEW=!1,this.ORDER_INDEPENDENT_TRANSPARENCY=!1,this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS=!1,this.USEPHYSICALLIGHTFALLOFF=!1,this.USEGLTFLIGHTFALLOFF=!1,this.TWOSIDEDLIGHTING=!1,this.SHADOWFLOAT=!1,this.CLIPPLANE=!1,this.CLIPPLANE2=!1,this.CLIPPLANE3=!1,this.CLIPPLANE4=!1,this.CLIPPLANE5=!1,this.CLIPPLANE6=!1,this.POINTSIZE=!1,this.FOG=!1,this.LOGARITHMICDEPTH=!1,this.CAMERA_ORTHOGRAPHIC=!1,this.CAMERA_PERSPECTIVE=!1,this.FORCENORMALFORWARD=!1,this.SPECULARAA=!1,this.UNLIT=!1,this.DEBUGMODE=0,this.rebuild()}reset(){super.reset(),this.ALPHATESTVALUE="0.5",this.PBR=!0,this.NORMALXYSCALE=!0}}class z extends ni{constructor(e,t){super(e,t),this._directIntensity=1,this._emissiveIntensity=1,this._environmentIntensity=1,this._specularIntensity=1,this._lightingInfos=new yt(this._directIntensity,this._emissiveIntensity,this._environmentIntensity,this._specularIntensity),this._disableBumpMap=!1,this._albedoTexture=null,this._ambientTexture=null,this._ambientTextureStrength=1,this._ambientTextureImpactOnAnalyticalLights=z.DEFAULT_AO_ON_ANALYTICAL_LIGHTS,this._opacityTexture=null,this._reflectionTexture=null,this._emissiveTexture=null,this._reflectivityTexture=null,this._metallicTexture=null,this._metallic=null,this._roughness=null,this._metallicF0Factor=1,this._metallicReflectanceColor=Z.White(),this._useOnlyMetallicFromMetallicReflectanceTexture=!1,this._metallicReflectanceTexture=null,this._reflectanceTexture=null,this._microSurfaceTexture=null,this._bumpTexture=null,this._lightmapTexture=null,this._ambientColor=new Z(0,0,0),this._albedoColor=new Z(1,1,1),this._reflectivityColor=new Z(1,1,1),this._reflectionColor=new Z(1,1,1),this._emissiveColor=new Z(0,0,0),this._microSurface=.9,this._useLightmapAsShadowmap=!1,this._useHorizonOcclusion=!0,this._useRadianceOcclusion=!0,this._useAlphaFromAlbedoTexture=!1,this._useSpecularOverAlpha=!0,this._useMicroSurfaceFromReflectivityMapAlpha=!1,this._useRoughnessFromMetallicTextureAlpha=!0,this._useRoughnessFromMetallicTextureGreen=!1,this._useMetallnessFromMetallicTextureBlue=!1,this._useAmbientOcclusionFromMetallicTextureRed=!1,this._useAmbientInGrayScale=!1,this._useAutoMicroSurfaceFromReflectivityMap=!1,this._lightFalloff=z.LIGHTFALLOFF_PHYSICAL,this._useRadianceOverAlpha=!0,this._useObjectSpaceNormalMap=!1,this._useParallax=!1,this._useParallaxOcclusion=!1,this._parallaxScaleBias=.05,this._disableLighting=!1,this._maxSimultaneousLights=4,this._invertNormalMapX=!1,this._invertNormalMapY=!1,this._twoSidedLighting=!1,this._alphaCutOff=.4,this._forceAlphaTest=!1,this._useAlphaFresnel=!1,this._useLinearAlphaFresnel=!1,this._environmentBRDFTexture=null,this._forceIrradianceInFragment=!1,this._realTimeFiltering=!1,this._realTimeFilteringQuality=8,this._forceNormalForward=!1,this._enableSpecularAntiAliasing=!1,this._imageProcessingObserver=null,this._renderTargets=new Je(16),this._globalAmbientColor=new Z(0,0,0),this._useLogarithmicDepth=!1,this._unlit=!1,this._debugMode=0,this.debugMode=0,this._debugLimit=-1,this._debugFactor=1,this._cacheHasRenderTargetTextures=!1,this.brdf=new se(this),this.clearCoat=new ie(this),this.iridescence=new he(this),this.anisotropy=new nt(this),this.sheen=new Re(this),this.subSurface=new ee(this),this.detailMap=new Ue(this),this._attachImageProcessingConfiguration(null),this.getRenderTargetTextures=()=>(this._renderTargets.reset(),S.ReflectionTextureEnabled&&this._reflectionTexture&&this._reflectionTexture.isRenderTarget&&this._renderTargets.push(this._reflectionTexture),this._eventInfo.renderTargets=this._renderTargets,this._callbackPluginEventFillRenderTargetTextures(this._eventInfo),this._renderTargets),this._environmentBRDFTexture=ci(this.getScene()),this.prePassConfiguration=new kt}get realTimeFiltering(){return this._realTimeFiltering}set realTimeFiltering(e){this._realTimeFiltering=e,this.markAsDirty(1)}get realTimeFilteringQuality(){return this._realTimeFilteringQuality}set realTimeFilteringQuality(e){this._realTimeFilteringQuality=e,this.markAsDirty(1)}get canRenderToMRT(){return!0}_attachImageProcessingConfiguration(e){e!==this._imageProcessingConfiguration&&(this._imageProcessingConfiguration&&this._imageProcessingObserver&&this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver),e?this._imageProcessingConfiguration=e:this._imageProcessingConfiguration=this.getScene().imageProcessingConfiguration,this._imageProcessingConfiguration&&(this._imageProcessingObserver=this._imageProcessingConfiguration.onUpdateParameters.add(()=>{this._markAllSubMeshesAsImageProcessingDirty()})))}get hasRenderTargetTextures(){return S.ReflectionTextureEnabled&&this._reflectionTexture&&this._reflectionTexture.isRenderTarget?!0:this._cacheHasRenderTargetTextures}get isPrePassCapable(){return!this.disableDepthWrite}getClassName(){return"PBRBaseMaterial"}get useLogarithmicDepth(){return this._useLogarithmicDepth}set useLogarithmicDepth(e){this._useLogarithmicDepth=e&&this.getScene().getEngine().getCaps().fragmentDepthSupported}get _disableAlphaBlending(){var e;return this._transparencyMode===z.PBRMATERIAL_OPAQUE||this._transparencyMode===z.PBRMATERIAL_ALPHATEST||((e=this.subSurface)===null||e===void 0?void 0:e.disableAlphaBlending)}needAlphaBlending(){return this._disableAlphaBlending?!1:this.alpha<1||this._opacityTexture!=null||this._shouldUseAlphaFromAlbedoTexture()}needAlphaTesting(){var e;return this._forceAlphaTest?!0:!((e=this.subSurface)===null||e===void 0)&&e.disableAlphaBlending?!1:this._hasAlphaChannel()&&(this._transparencyMode==null||this._transparencyMode===z.PBRMATERIAL_ALPHATEST)}_shouldUseAlphaFromAlbedoTexture(){return this._albedoTexture!=null&&this._albedoTexture.hasAlpha&&this._useAlphaFromAlbedoTexture&&this._transparencyMode!==z.PBRMATERIAL_OPAQUE}_hasAlphaChannel(){return this._albedoTexture!=null&&this._albedoTexture.hasAlpha||this._opacityTexture!=null}getAlphaTestTexture(){return this._albedoTexture}isReadyForSubMesh(e,t,i){if(this._uniformBufferLayoutBuilt||this.buildUniformLayout(),t.effect&&this.isFrozen&&t.effect._wasPreviouslyReady&&t.effect._wasPreviouslyUsingInstances===i)return!0;t.materialDefines||(this._callbackPluginEventGeneric(Ae.GetDefineNames,this._eventInfo),t.materialDefines=new Ht(this._eventInfo.defineNames));const r=t.materialDefines;if(this._isReadyForSubMesh(t))return!0;const n=this.getScene(),s=n.getEngine();if(r._areTexturesDirty&&(this._eventInfo.hasRenderTargetTextures=!1,this._callbackPluginEventHasRenderTargetTextures(this._eventInfo),this._cacheHasRenderTargetTextures=this._eventInfo.hasRenderTargetTextures,n.texturesEnabled)){if(this._albedoTexture&&S.DiffuseTextureEnabled&&!this._albedoTexture.isReadyOrNotBlocking()||this._ambientTexture&&S.AmbientTextureEnabled&&!this._ambientTexture.isReadyOrNotBlocking()||this._opacityTexture&&S.OpacityTextureEnabled&&!this._opacityTexture.isReadyOrNotBlocking())return!1;const c=this._getReflectionTexture();if(c&&S.ReflectionTextureEnabled&&(!c.isReadyOrNotBlocking()||c.irradianceTexture&&!c.irradianceTexture.isReadyOrNotBlocking())||this._lightmapTexture&&S.LightmapTextureEnabled&&!this._lightmapTexture.isReadyOrNotBlocking()||this._emissiveTexture&&S.EmissiveTextureEnabled&&!this._emissiveTexture.isReadyOrNotBlocking())return!1;if(S.SpecularTextureEnabled){if(this._metallicTexture){if(!this._metallicTexture.isReadyOrNotBlocking())return!1}else if(this._reflectivityTexture&&!this._reflectivityTexture.isReadyOrNotBlocking())return!1;if(this._metallicReflectanceTexture&&!this._metallicReflectanceTexture.isReadyOrNotBlocking()||this._reflectanceTexture&&!this._reflectanceTexture.isReadyOrNotBlocking()||this._microSurfaceTexture&&!this._microSurfaceTexture.isReadyOrNotBlocking())return!1}if(s.getCaps().standardDerivatives&&this._bumpTexture&&S.BumpTextureEnabled&&!this._disableBumpMap&&!this._bumpTexture.isReady()||this._environmentBRDFTexture&&S.ReflectionTextureEnabled&&!this._environmentBRDFTexture.isReady())return!1}if(this._eventInfo.isReadyForSubMesh=!0,this._eventInfo.defines=r,this._callbackPluginEventIsReadyForSubMesh(this._eventInfo),!this._eventInfo.isReadyForSubMesh||r._areImageProcessingDirty&&this._imageProcessingConfiguration&&!this._imageProcessingConfiguration.isReady())return!1;!s.getCaps().standardDerivatives&&!e.isVerticesDataPresent(y.NormalKind)&&(e.createNormals(!0),V.Warn("PBRMaterial: Normals have been created for the mesh: "+e.name));const a=t.effect,o=r._areLightsDisposed;let l=this._prepareEffect(e,r,this.onCompiled,this.onError,i,null,t.getRenderingMesh().hasThinInstances);if(l)if(this._onEffectCreatedObservable&&(Ve.effect=l,Ve.subMesh=t,this._onEffectCreatedObservable.notifyObservers(Ve)),this.allowShaderHotSwapping&&a&&!l.isReady()){if(l=a,r.markAsUnprocessed(),o)return r._areLightsDisposed=!0,!1}else n.resetCachedMaterial(),t.setEffect(l,r,this._materialContext);return!t.effect||!t.effect.isReady()?!1:(r._renderId=n.getRenderId(),t.effect._wasPreviouslyReady=!0,t.effect._wasPreviouslyUsingInstances=!!i,n.performancePriority!==Fi.BackwardCompatible&&(this.checkReadyOnlyOnce=!0),!0)}isMetallicWorkflow(){return!!(this._metallic!=null||this._roughness!=null||this._metallicTexture)}_prepareEffect(e,t,i=null,r=null,n=null,s=null,a){if(this._prepareDefines(e,t,n,s,a),!t.isDirty)return null;t.markAsProcessed();const l=this.getScene().getEngine(),c=new ri;let f=0;t.USESPHERICALINVERTEX&&c.addFallback(f++,"USESPHERICALINVERTEX"),t.FOG&&c.addFallback(f,"FOG"),t.SPECULARAA&&c.addFallback(f,"SPECULARAA"),t.POINTSIZE&&c.addFallback(f,"POINTSIZE"),t.LOGARITHMICDEPTH&&c.addFallback(f,"LOGARITHMICDEPTH"),t.PARALLAX&&c.addFallback(f,"PARALLAX"),t.PARALLAXOCCLUSION&&c.addFallback(f++,"PARALLAXOCCLUSION"),t.ENVIRONMENTBRDF&&c.addFallback(f++,"ENVIRONMENTBRDF"),t.TANGENT&&c.addFallback(f++,"TANGENT"),t.BUMP&&c.addFallback(f++,"BUMP"),f=N.HandleFallbacksForShadows(t,c,this._maxSimultaneousLights,f++),t.SPECULARTERM&&c.addFallback(f++,"SPECULARTERM"),t.USESPHERICALFROMREFLECTIONMAP&&c.addFallback(f++,"USESPHERICALFROMREFLECTIONMAP"),t.USEIRRADIANCEMAP&&c.addFallback(f++,"USEIRRADIANCEMAP"),t.LIGHTMAP&&c.addFallback(f++,"LIGHTMAP"),t.NORMAL&&c.addFallback(f++,"NORMAL"),t.AMBIENT&&c.addFallback(f++,"AMBIENT"),t.EMISSIVE&&c.addFallback(f++,"EMISSIVE"),t.VERTEXCOLOR&&c.addFallback(f++,"VERTEXCOLOR"),t.MORPHTARGETS&&c.addFallback(f++,"MORPHTARGETS"),t.MULTIVIEW&&c.addFallback(0,"MULTIVIEW");const d=[y.PositionKind];t.NORMAL&&d.push(y.NormalKind),t.TANGENT&&d.push(y.TangentKind);for(let R=1;R<=6;++R)t["UV"+R]&&d.push(`uv${R===1?"":R}`);t.VERTEXCOLOR&&d.push(y.ColorKind),t.INSTANCESCOLOR&&d.push(y.ColorInstanceKind),N.PrepareAttributesForBones(d,e,t,c),N.PrepareAttributesForInstances(d,t),N.PrepareAttributesForMorphTargets(d,e,t),N.PrepareAttributesForBakedVertexAnimation(d,e,t);let _="pbr";const u=["world","view","viewProjection","vEyePosition","vLightsType","vAmbientColor","vAlbedoColor","vReflectivityColor","vMetallicReflectanceFactors","vEmissiveColor","visibility","vReflectionColor","vFogInfos","vFogColor","pointSize","vAlbedoInfos","vAmbientInfos","vOpacityInfos","vReflectionInfos","vReflectionPosition","vReflectionSize","vEmissiveInfos","vReflectivityInfos","vReflectionFilteringInfo","vMetallicReflectanceInfos","vReflectanceInfos","vMicroSurfaceSamplerInfos","vBumpInfos","vLightmapInfos","mBones","albedoMatrix","ambientMatrix","opacityMatrix","reflectionMatrix","emissiveMatrix","reflectivityMatrix","normalMatrix","microSurfaceSamplerMatrix","bumpMatrix","lightmapMatrix","metallicReflectanceMatrix","reflectanceMatrix","vLightingIntensity","logarithmicDepthConstant","vSphericalX","vSphericalY","vSphericalZ","vSphericalXX_ZZ","vSphericalYY_ZZ","vSphericalZZ","vSphericalXY","vSphericalYZ","vSphericalZX","vSphericalL00","vSphericalL1_1","vSphericalL10","vSphericalL11","vSphericalL2_2","vSphericalL2_1","vSphericalL20","vSphericalL21","vSphericalL22","vReflectionMicrosurfaceInfos","vTangentSpaceParams","boneTextureWidth","vDebugMode","morphTargetTextureInfo","morphTargetTextureIndices"],p=["albedoSampler","reflectivitySampler","ambientSampler","emissiveSampler","bumpSampler","lightmapSampler","opacitySampler","reflectionSampler","reflectionSamplerLow","reflectionSamplerHigh","irradianceSampler","microSurfaceSampler","environmentBrdfSampler","boneSampler","metallicReflectanceSampler","reflectanceSampler","morphTargets","oitDepthSampler","oitFrontColorSampler"],g=["Material","Scene","Mesh"];this._eventInfo.fallbacks=c,this._eventInfo.fallbackRank=f,this._eventInfo.defines=t,this._eventInfo.uniforms=u,this._eventInfo.attributes=d,this._eventInfo.samplers=p,this._eventInfo.uniformBuffersNames=g,this._eventInfo.customCode=void 0,this._eventInfo.mesh=e,this._callbackPluginEventGeneric(Ae.PrepareEffect,this._eventInfo),kt.AddUniforms(u),Kt(u),vt&&(vt.PrepareUniforms(u,t),vt.PrepareSamplers(p,t)),N.PrepareUniformsAndSamplersList({uniformsNames:u,uniformBuffersNames:g,samplers:p,defines:t,maxSimultaneousLights:this._maxSimultaneousLights});const T={};this.customShaderNameResolve&&(_=this.customShaderNameResolve(_,u,g,p,t,d,T));const C=t.toString();return l.createEffect(_,{attributes:d,uniformsNames:u,uniformBuffersNames:g,samplers:p,defines:C,fallbacks:c,onCompiled:i,onError:r,indexParameters:{maxSimultaneousLights:this._maxSimultaneousLights,maxSimultaneousMorphTargets:t.NUM_MORPH_INFLUENCERS},processFinalCode:T.processFinalCode,processCodeAfterIncludes:this._eventInfo.customCode,multiTarget:t.PREPASS},l)}_prepareDefines(e,t,i=null,r=null,n=!1){var s;const a=this.getScene(),o=a.getEngine();N.PrepareDefinesForLights(a,e,t,!0,this._maxSimultaneousLights,this._disableLighting),t._needNormals=!0,N.PrepareDefinesForMultiview(a,t);const l=this.needAlphaBlendingForMesh(e)&&this.getScene().useOrderIndependentTransparency;if(N.PrepareDefinesForPrePass(a,t,this.canRenderToMRT&&!l),N.PrepareDefinesForOIT(a,t,l),t.METALLICWORKFLOW=this.isMetallicWorkflow(),t._areTexturesDirty){if(t._needUVs=!1,a.texturesEnabled){t.ALBEDODIRECTUV=0,t.AMBIENTDIRECTUV=0,t.OPACITYDIRECTUV=0,t.EMISSIVEDIRECTUV=0,t.REFLECTIVITYDIRECTUV=0,t.MICROSURFACEMAPDIRECTUV=0,t.METALLIC_REFLECTANCEDIRECTUV=0,t.REFLECTANCEDIRECTUV=0,t.BUMPDIRECTUV=0,t.LIGHTMAPDIRECTUV=0,o.getCaps().textureLOD&&(t.LODBASEDMICROSFURACE=!0),this._albedoTexture&&S.DiffuseTextureEnabled?(N.PrepareDefinesForMergedUV(this._albedoTexture,t,"ALBEDO"),t.GAMMAALBEDO=this._albedoTexture.gammaSpace):t.ALBEDO=!1,this._ambientTexture&&S.AmbientTextureEnabled?(N.PrepareDefinesForMergedUV(this._ambientTexture,t,"AMBIENT"),t.AMBIENTINGRAYSCALE=this._useAmbientInGrayScale):t.AMBIENT=!1,this._opacityTexture&&S.OpacityTextureEnabled?(N.PrepareDefinesForMergedUV(this._opacityTexture,t,"OPACITY"),t.OPACITYRGB=this._opacityTexture.getAlphaFromRGB):t.OPACITY=!1;const c=this._getReflectionTexture();if(c&&S.ReflectionTextureEnabled){switch(t.REFLECTION=!0,t.GAMMAREFLECTION=c.gammaSpace,t.RGBDREFLECTION=c.isRGBD,t.LODINREFLECTIONALPHA=c.lodLevelInAlpha,t.LINEARSPECULARREFLECTION=c.linearSpecularLOD,this.realTimeFiltering&&this.realTimeFilteringQuality>0?(t.NUM_SAMPLES=""+this.realTimeFilteringQuality,o._features.needTypeSuffixInShaderConstants&&(t.NUM_SAMPLES=t.NUM_SAMPLES+"u"),t.REALTIME_FILTERING=!0):t.REALTIME_FILTERING=!1,c.coordinatesMode===A.INVCUBIC_MODE&&(t.INVERTCUBICMAP=!0),t.REFLECTIONMAP_3D=c.isCube,t.REFLECTIONMAP_OPPOSITEZ=t.REFLECTIONMAP_3D&&this.getScene().useRightHandedSystem?!c.invertZ:c.invertZ,t.REFLECTIONMAP_CUBIC=!1,t.REFLECTIONMAP_EXPLICIT=!1,t.REFLECTIONMAP_PLANAR=!1,t.REFLECTIONMAP_PROJECTION=!1,t.REFLECTIONMAP_SKYBOX=!1,t.REFLECTIONMAP_SPHERICAL=!1,t.REFLECTIONMAP_EQUIRECTANGULAR=!1,t.REFLECTIONMAP_EQUIRECTANGULAR_FIXED=!1,t.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED=!1,c.coordinatesMode){case A.EXPLICIT_MODE:t.REFLECTIONMAP_EXPLICIT=!0;break;case A.PLANAR_MODE:t.REFLECTIONMAP_PLANAR=!0;break;case A.PROJECTION_MODE:t.REFLECTIONMAP_PROJECTION=!0;break;case A.SKYBOX_MODE:t.REFLECTIONMAP_SKYBOX=!0;break;case A.SPHERICAL_MODE:t.REFLECTIONMAP_SPHERICAL=!0;break;case A.EQUIRECTANGULAR_MODE:t.REFLECTIONMAP_EQUIRECTANGULAR=!0;break;case A.FIXED_EQUIRECTANGULAR_MODE:t.REFLECTIONMAP_EQUIRECTANGULAR_FIXED=!0;break;case A.FIXED_EQUIRECTANGULAR_MIRRORED_MODE:t.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED=!0;break;case A.CUBIC_MODE:case A.INVCUBIC_MODE:default:t.REFLECTIONMAP_CUBIC=!0,t.USE_LOCAL_REFLECTIONMAP_CUBIC=!!c.boundingBoxSize;break}c.coordinatesMode!==A.SKYBOX_MODE&&(c.irradianceTexture?(t.USEIRRADIANCEMAP=!0,t.USESPHERICALFROMREFLECTIONMAP=!1):c.isCube&&(t.USESPHERICALFROMREFLECTIONMAP=!0,t.USEIRRADIANCEMAP=!1,this._forceIrradianceInFragment||this.realTimeFiltering||o.getCaps().maxVaryingVectors<=8?t.USESPHERICALINVERTEX=!1:t.USESPHERICALINVERTEX=!0))}else t.REFLECTION=!1,t.REFLECTIONMAP_3D=!1,t.REFLECTIONMAP_SPHERICAL=!1,t.REFLECTIONMAP_PLANAR=!1,t.REFLECTIONMAP_CUBIC=!1,t.USE_LOCAL_REFLECTIONMAP_CUBIC=!1,t.REFLECTIONMAP_PROJECTION=!1,t.REFLECTIONMAP_SKYBOX=!1,t.REFLECTIONMAP_EXPLICIT=!1,t.REFLECTIONMAP_EQUIRECTANGULAR=!1,t.REFLECTIONMAP_EQUIRECTANGULAR_FIXED=!1,t.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED=!1,t.INVERTCUBICMAP=!1,t.USESPHERICALFROMREFLECTIONMAP=!1,t.USEIRRADIANCEMAP=!1,t.USESPHERICALINVERTEX=!1,t.REFLECTIONMAP_OPPOSITEZ=!1,t.LODINREFLECTIONALPHA=!1,t.GAMMAREFLECTION=!1,t.RGBDREFLECTION=!1,t.LINEARSPECULARREFLECTION=!1;if(this._lightmapTexture&&S.LightmapTextureEnabled?(N.PrepareDefinesForMergedUV(this._lightmapTexture,t,"LIGHTMAP"),t.USELIGHTMAPASSHADOWMAP=this._useLightmapAsShadowmap,t.GAMMALIGHTMAP=this._lightmapTexture.gammaSpace,t.RGBDLIGHTMAP=this._lightmapTexture.isRGBD):t.LIGHTMAP=!1,this._emissiveTexture&&S.EmissiveTextureEnabled?(N.PrepareDefinesForMergedUV(this._emissiveTexture,t,"EMISSIVE"),t.GAMMAEMISSIVE=this._emissiveTexture.gammaSpace):t.EMISSIVE=!1,S.SpecularTextureEnabled){if(this._metallicTexture?(N.PrepareDefinesForMergedUV(this._metallicTexture,t,"REFLECTIVITY"),t.ROUGHNESSSTOREINMETALMAPALPHA=this._useRoughnessFromMetallicTextureAlpha,t.ROUGHNESSSTOREINMETALMAPGREEN=!this._useRoughnessFromMetallicTextureAlpha&&this._useRoughnessFromMetallicTextureGreen,t.METALLNESSSTOREINMETALMAPBLUE=this._useMetallnessFromMetallicTextureBlue,t.AOSTOREINMETALMAPRED=this._useAmbientOcclusionFromMetallicTextureRed,t.REFLECTIVITY_GAMMA=!1):this._reflectivityTexture?(N.PrepareDefinesForMergedUV(this._reflectivityTexture,t,"REFLECTIVITY"),t.MICROSURFACEFROMREFLECTIVITYMAP=this._useMicroSurfaceFromReflectivityMapAlpha,t.MICROSURFACEAUTOMATIC=this._useAutoMicroSurfaceFromReflectivityMap,t.REFLECTIVITY_GAMMA=this._reflectivityTexture.gammaSpace):t.REFLECTIVITY=!1,this._metallicReflectanceTexture||this._reflectanceTexture){const f=this._metallicReflectanceTexture!==null&&this._metallicReflectanceTexture._texture===((s=this._reflectanceTexture)===null||s===void 0?void 0:s._texture)&&this._metallicReflectanceTexture.checkTransformsAreIdentical(this._reflectanceTexture);t.METALLIC_REFLECTANCE_USE_ALPHA_ONLY=this._useOnlyMetallicFromMetallicReflectanceTexture&&!f,this._metallicReflectanceTexture?(N.PrepareDefinesForMergedUV(this._metallicReflectanceTexture,t,"METALLIC_REFLECTANCE"),t.METALLIC_REFLECTANCE_GAMMA=this._metallicReflectanceTexture.gammaSpace):t.METALLIC_REFLECTANCE=!1,this._reflectanceTexture&&!f&&(!this._metallicReflectanceTexture||this._metallicReflectanceTexture&&this._useOnlyMetallicFromMetallicReflectanceTexture)?(N.PrepareDefinesForMergedUV(this._reflectanceTexture,t,"REFLECTANCE"),t.REFLECTANCE_GAMMA=this._reflectanceTexture.gammaSpace):t.REFLECTANCE=!1}else t.METALLIC_REFLECTANCE=!1,t.REFLECTANCE=!1;this._microSurfaceTexture?N.PrepareDefinesForMergedUV(this._microSurfaceTexture,t,"MICROSURFACEMAP"):t.MICROSURFACEMAP=!1}else t.REFLECTIVITY=!1,t.MICROSURFACEMAP=!1;o.getCaps().standardDerivatives&&this._bumpTexture&&S.BumpTextureEnabled&&!this._disableBumpMap?(N.PrepareDefinesForMergedUV(this._bumpTexture,t,"BUMP"),this._useParallax&&this._albedoTexture&&S.DiffuseTextureEnabled?(t.PARALLAX=!0,t.PARALLAXOCCLUSION=!!this._useParallaxOcclusion):t.PARALLAX=!1,t.OBJECTSPACE_NORMALMAP=this._useObjectSpaceNormalMap):(t.BUMP=!1,t.PARALLAX=!1,t.PARALLAXOCCLUSION=!1,t.PARALLAOBJECTSPACE_NORMALMAP=!1),this._environmentBRDFTexture&&S.ReflectionTextureEnabled?(t.ENVIRONMENTBRDF=!0,t.ENVIRONMENTBRDF_RGBD=this._environmentBRDFTexture.isRGBD):(t.ENVIRONMENTBRDF=!1,t.ENVIRONMENTBRDF_RGBD=!1),this._shouldUseAlphaFromAlbedoTexture()?t.ALPHAFROMALBEDO=!0:t.ALPHAFROMALBEDO=!1}t.SPECULAROVERALPHA=this._useSpecularOverAlpha,this._lightFalloff===z.LIGHTFALLOFF_STANDARD?(t.USEPHYSICALLIGHTFALLOFF=!1,t.USEGLTFLIGHTFALLOFF=!1):this._lightFalloff===z.LIGHTFALLOFF_GLTF?(t.USEPHYSICALLIGHTFALLOFF=!1,t.USEGLTFLIGHTFALLOFF=!0):(t.USEPHYSICALLIGHTFALLOFF=!0,t.USEGLTFLIGHTFALLOFF=!1),t.RADIANCEOVERALPHA=this._useRadianceOverAlpha,!this.backFaceCulling&&this._twoSidedLighting?t.TWOSIDEDLIGHTING=!0:t.TWOSIDEDLIGHTING=!1,t.SPECULARAA=o.getCaps().standardDerivatives&&this._enableSpecularAntiAliasing}(t._areTexturesDirty||t._areMiscDirty)&&(t.ALPHATESTVALUE=`${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`,t.PREMULTIPLYALPHA=this.alphaMode===7||this.alphaMode===8,t.ALPHABLEND=this.needAlphaBlendingForMesh(e),t.ALPHAFRESNEL=this._useAlphaFresnel||this._useLinearAlphaFresnel,t.LINEARALPHAFRESNEL=this._useLinearAlphaFresnel),t._areImageProcessingDirty&&this._imageProcessingConfiguration&&this._imageProcessingConfiguration.prepareDefines(t),t.FORCENORMALFORWARD=this._forceNormalForward,t.RADIANCEOCCLUSION=this._useRadianceOcclusion,t.HORIZONOCCLUSION=this._useHorizonOcclusion,t._areMiscDirty&&(N.PrepareDefinesForMisc(e,a,this._useLogarithmicDepth,this.pointsCloud,this.fogEnabled,this._shouldTurnAlphaTestOn(e)||this._forceAlphaTest,t),t.UNLIT=this._unlit||(this.pointsCloud||this.wireframe)&&!e.isVerticesDataPresent(y.NormalKind),t.DEBUGMODE=this._debugMode),N.PrepareDefinesForFrameBoundValues(a,o,this,t,!!i,r,n),this._eventInfo.defines=t,this._eventInfo.mesh=e,this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo),N.PrepareDefinesForAttributes(e,t,!0,!0,!0,this._transparencyMode!==z.PBRMATERIAL_OPAQUE),this._callbackPluginEventPrepareDefines(this._eventInfo)}forceCompilation(e,t,i){const r={clipPlane:!1,useInstances:!1,...i};this._uniformBufferLayoutBuilt||this.buildUniformLayout(),this._callbackPluginEventGeneric(Ae.GetDefineNames,this._eventInfo);const n=new Ht(this._eventInfo.defineNames),s=this._prepareEffect(e,n,void 0,void 0,r.useInstances,r.clipPlane,e.hasThinInstances);this._onEffectCreatedObservable&&(Ve.effect=s,Ve.subMesh=null,this._onEffectCreatedObservable.notifyObservers(Ve)),s.isReady()?t&&t(this):s.onCompileObservable.add(()=>{t&&t(this)})}buildUniformLayout(){const e=this._uniformBuffer;e.addUniform("vAlbedoInfos",2),e.addUniform("vAmbientInfos",4),e.addUniform("vOpacityInfos",2),e.addUniform("vEmissiveInfos",2),e.addUniform("vLightmapInfos",2),e.addUniform("vReflectivityInfos",3),e.addUniform("vMicroSurfaceSamplerInfos",2),e.addUniform("vReflectionInfos",2),e.addUniform("vReflectionFilteringInfo",2),e.addUniform("vReflectionPosition",3),e.addUniform("vReflectionSize",3),e.addUniform("vBumpInfos",3),e.addUniform("albedoMatrix",16),e.addUniform("ambientMatrix",16),e.addUniform("opacityMatrix",16),e.addUniform("emissiveMatrix",16),e.addUniform("lightmapMatrix",16),e.addUniform("reflectivityMatrix",16),e.addUniform("microSurfaceSamplerMatrix",16),e.addUniform("bumpMatrix",16),e.addUniform("vTangentSpaceParams",2),e.addUniform("reflectionMatrix",16),e.addUniform("vReflectionColor",3),e.addUniform("vAlbedoColor",4),e.addUniform("vLightingIntensity",4),e.addUniform("vReflectionMicrosurfaceInfos",3),e.addUniform("pointSize",1),e.addUniform("vReflectivityColor",4),e.addUniform("vEmissiveColor",3),e.addUniform("vAmbientColor",3),e.addUniform("vDebugMode",2),e.addUniform("vMetallicReflectanceFactors",4),e.addUniform("vMetallicReflectanceInfos",2),e.addUniform("metallicReflectanceMatrix",16),e.addUniform("vReflectanceInfos",2),e.addUniform("reflectanceMatrix",16),e.addUniform("vSphericalL00",3),e.addUniform("vSphericalL1_1",3),e.addUniform("vSphericalL10",3),e.addUniform("vSphericalL11",3),e.addUniform("vSphericalL2_2",3),e.addUniform("vSphericalL2_1",3),e.addUniform("vSphericalL20",3),e.addUniform("vSphericalL21",3),e.addUniform("vSphericalL22",3),e.addUniform("vSphericalX",3),e.addUniform("vSphericalY",3),e.addUniform("vSphericalZ",3),e.addUniform("vSphericalXX_ZZ",3),e.addUniform("vSphericalYY_ZZ",3),e.addUniform("vSphericalZZ",3),e.addUniform("vSphericalXY",3),e.addUniform("vSphericalYZ",3),e.addUniform("vSphericalZX",3),super.buildUniformLayout()}bindForSubMesh(e,t,i){var r,n,s,a;const o=this.getScene(),l=i.materialDefines;if(!l)return;const c=i.effect;if(!c)return;this._activeEffect=c,t.getMeshUniformBuffer().bindToEffect(c,"Mesh"),t.transferToEffect(e);const f=o.getEngine();this._uniformBuffer.bindToEffect(c,"Material"),this.prePassConfiguration.bindForSubMesh(this._activeEffect,o,t,e,this.isFrozen),this._eventInfo.subMesh=i,this._callbackPluginEventHardBindForSubMesh(this._eventInfo),l.OBJECTSPACE_NORMALMAP&&(e.toNormalMatrix(this._normalMatrix),this.bindOnlyNormalMatrix(this._normalMatrix));const d=this._mustRebind(o,c,t.visibility);N.BindBonesParameters(t,this._activeEffect,this.prePassConfiguration);let _=null;const u=this._uniformBuffer;if(d){if(this.bindViewProjection(c),_=this._getReflectionTexture(),!u.useUbo||!this.isFrozen||!u.isSync){if(o.texturesEnabled){if(this._albedoTexture&&S.DiffuseTextureEnabled&&(u.updateFloat2("vAlbedoInfos",this._albedoTexture.coordinatesIndex,this._albedoTexture.level),N.BindTextureMatrix(this._albedoTexture,u,"albedo")),this._ambientTexture&&S.AmbientTextureEnabled&&(u.updateFloat4("vAmbientInfos",this._ambientTexture.coordinatesIndex,this._ambientTexture.level,this._ambientTextureStrength,this._ambientTextureImpactOnAnalyticalLights),N.BindTextureMatrix(this._ambientTexture,u,"ambient")),this._opacityTexture&&S.OpacityTextureEnabled&&(u.updateFloat2("vOpacityInfos",this._opacityTexture.coordinatesIndex,this._opacityTexture.level),N.BindTextureMatrix(this._opacityTexture,u,"opacity")),_&&S.ReflectionTextureEnabled){if(u.updateMatrix("reflectionMatrix",_.getReflectionTextureMatrix()),u.updateFloat2("vReflectionInfos",_.level,0),_.boundingBoxSize){const p=_;u.updateVector3("vReflectionPosition",p.boundingBoxPosition),u.updateVector3("vReflectionSize",p.boundingBoxSize)}if(this.realTimeFiltering){const p=_.getSize().width;u.updateFloat2("vReflectionFilteringInfo",p,Ne.Log2(p))}if(!l.USEIRRADIANCEMAP){const p=_.sphericalPolynomial;if(l.USESPHERICALFROMREFLECTIONMAP&&p)if(l.SPHERICAL_HARMONICS){const g=p.preScaledHarmonics;u.updateVector3("vSphericalL00",g.l00),u.updateVector3("vSphericalL1_1",g.l1_1),u.updateVector3("vSphericalL10",g.l10),u.updateVector3("vSphericalL11",g.l11),u.updateVector3("vSphericalL2_2",g.l2_2),u.updateVector3("vSphericalL2_1",g.l2_1),u.updateVector3("vSphericalL20",g.l20),u.updateVector3("vSphericalL21",g.l21),u.updateVector3("vSphericalL22",g.l22)}else u.updateFloat3("vSphericalX",p.x.x,p.x.y,p.x.z),u.updateFloat3("vSphericalY",p.y.x,p.y.y,p.y.z),u.updateFloat3("vSphericalZ",p.z.x,p.z.y,p.z.z),u.updateFloat3("vSphericalXX_ZZ",p.xx.x-p.zz.x,p.xx.y-p.zz.y,p.xx.z-p.zz.z),u.updateFloat3("vSphericalYY_ZZ",p.yy.x-p.zz.x,p.yy.y-p.zz.y,p.yy.z-p.zz.z),u.updateFloat3("vSphericalZZ",p.zz.x,p.zz.y,p.zz.z),u.updateFloat3("vSphericalXY",p.xy.x,p.xy.y,p.xy.z),u.updateFloat3("vSphericalYZ",p.yz.x,p.yz.y,p.yz.z),u.updateFloat3("vSphericalZX",p.zx.x,p.zx.y,p.zx.z)}u.updateFloat3("vReflectionMicrosurfaceInfos",_.getSize().width,_.lodGenerationScale,_.lodGenerationOffset)}this._emissiveTexture&&S.EmissiveTextureEnabled&&(u.updateFloat2("vEmissiveInfos",this._emissiveTexture.coordinatesIndex,this._emissiveTexture.level),N.BindTextureMatrix(this._emissiveTexture,u,"emissive")),this._lightmapTexture&&S.LightmapTextureEnabled&&(u.updateFloat2("vLightmapInfos",this._lightmapTexture.coordinatesIndex,this._lightmapTexture.level),N.BindTextureMatrix(this._lightmapTexture,u,"lightmap")),S.SpecularTextureEnabled&&(this._metallicTexture?(u.updateFloat3("vReflectivityInfos",this._metallicTexture.coordinatesIndex,this._metallicTexture.level,this._ambientTextureStrength),N.BindTextureMatrix(this._metallicTexture,u,"reflectivity")):this._reflectivityTexture&&(u.updateFloat3("vReflectivityInfos",this._reflectivityTexture.coordinatesIndex,this._reflectivityTexture.level,1),N.BindTextureMatrix(this._reflectivityTexture,u,"reflectivity")),this._metallicReflectanceTexture&&(u.updateFloat2("vMetallicReflectanceInfos",this._metallicReflectanceTexture.coordinatesIndex,this._metallicReflectanceTexture.level),N.BindTextureMatrix(this._metallicReflectanceTexture,u,"metallicReflectance")),this._reflectanceTexture&&l.REFLECTANCE&&(u.updateFloat2("vReflectanceInfos",this._reflectanceTexture.coordinatesIndex,this._reflectanceTexture.level),N.BindTextureMatrix(this._reflectanceTexture,u,"reflectance")),this._microSurfaceTexture&&(u.updateFloat2("vMicroSurfaceSamplerInfos",this._microSurfaceTexture.coordinatesIndex,this._microSurfaceTexture.level),N.BindTextureMatrix(this._microSurfaceTexture,u,"microSurfaceSampler"))),this._bumpTexture&&f.getCaps().standardDerivatives&&S.BumpTextureEnabled&&!this._disableBumpMap&&(u.updateFloat3("vBumpInfos",this._bumpTexture.coordinatesIndex,this._bumpTexture.level,this._parallaxScaleBias),N.BindTextureMatrix(this._bumpTexture,u,"bump"),o._mirroredCameraPosition?u.updateFloat2("vTangentSpaceParams",this._invertNormalMapX?1:-1,this._invertNormalMapY?1:-1):u.updateFloat2("vTangentSpaceParams",this._invertNormalMapX?-1:1,this._invertNormalMapY?-1:1))}if(this.pointsCloud&&u.updateFloat("pointSize",this.pointSize),l.METALLICWORKFLOW){qe.Color3[0].r=this._metallic===void 0||this._metallic===null?1:this._metallic,qe.Color3[0].g=this._roughness===void 0||this._roughness===null?1:this._roughness,u.updateColor4("vReflectivityColor",qe.Color3[0],1);const p=(n=(r=this.subSurface)===null||r===void 0?void 0:r._indexOfRefraction)!==null&&n!==void 0?n:1.5,g=1,T=Math.pow((p-g)/(p+g),2);this._metallicReflectanceColor.scaleToRef(T*this._metallicF0Factor,qe.Color3[0]);const C=this._metallicF0Factor;u.updateColor4("vMetallicReflectanceFactors",qe.Color3[0],C)}else u.updateColor4("vReflectivityColor",this._reflectivityColor,this._microSurface);u.updateColor3("vEmissiveColor",S.EmissiveTextureEnabled?this._emissiveColor:Z.BlackReadOnly),u.updateColor3("vReflectionColor",this._reflectionColor),!l.SS_REFRACTION&&(!((s=this.subSurface)===null||s===void 0)&&s._linkRefractionWithTransparency)?u.updateColor4("vAlbedoColor",this._albedoColor,1):u.updateColor4("vAlbedoColor",this._albedoColor,this.alpha),this._lightingInfos.x=this._directIntensity,this._lightingInfos.y=this._emissiveIntensity,this._lightingInfos.z=this._environmentIntensity*o.environmentIntensity,this._lightingInfos.w=this._specularIntensity,u.updateVector4("vLightingIntensity",this._lightingInfos),o.ambientColor.multiplyToRef(this._ambientColor,this._globalAmbientColor),u.updateColor3("vAmbientColor",this._globalAmbientColor),u.updateFloat2("vDebugMode",this._debugLimit,this._debugFactor)}o.texturesEnabled&&(this._albedoTexture&&S.DiffuseTextureEnabled&&u.setTexture("albedoSampler",this._albedoTexture),this._ambientTexture&&S.AmbientTextureEnabled&&u.setTexture("ambientSampler",this._ambientTexture),this._opacityTexture&&S.OpacityTextureEnabled&&u.setTexture("opacitySampler",this._opacityTexture),_&&S.ReflectionTextureEnabled&&(l.LODBASEDMICROSFURACE?u.setTexture("reflectionSampler",_):(u.setTexture("reflectionSampler",_._lodTextureMid||_),u.setTexture("reflectionSamplerLow",_._lodTextureLow||_),u.setTexture("reflectionSamplerHigh",_._lodTextureHigh||_)),l.USEIRRADIANCEMAP&&u.setTexture("irradianceSampler",_.irradianceTexture)),l.ENVIRONMENTBRDF&&u.setTexture("environmentBrdfSampler",this._environmentBRDFTexture),this._emissiveTexture&&S.EmissiveTextureEnabled&&u.setTexture("emissiveSampler",this._emissiveTexture),this._lightmapTexture&&S.LightmapTextureEnabled&&u.setTexture("lightmapSampler",this._lightmapTexture),S.SpecularTextureEnabled&&(this._metallicTexture?u.setTexture("reflectivitySampler",this._metallicTexture):this._reflectivityTexture&&u.setTexture("reflectivitySampler",this._reflectivityTexture),this._metallicReflectanceTexture&&u.setTexture("metallicReflectanceSampler",this._metallicReflectanceTexture),this._reflectanceTexture&&l.REFLECTANCE&&u.setTexture("reflectanceSampler",this._reflectanceTexture),this._microSurfaceTexture&&u.setTexture("microSurfaceSampler",this._microSurfaceTexture)),this._bumpTexture&&f.getCaps().standardDerivatives&&S.BumpTextureEnabled&&!this._disableBumpMap&&u.setTexture("bumpSampler",this._bumpTexture)),this.getScene().useOrderIndependentTransparency&&this.needAlphaBlendingForMesh(t)&&this.getScene().depthPeelingRenderer.bind(c),this._eventInfo.subMesh=i,this._callbackPluginEventBindForSubMesh(this._eventInfo),qt(this._activeEffect,this,o),this.bindEyePosition(c)}else o.getEngine()._features.needToAlwaysBindUniformBuffers&&(this._needToBindSceneUbo=!0);(d||!this.isFrozen)&&(o.lightsEnabled&&!this._disableLighting&&N.BindLights(o,t,this._activeEffect,l,this._maxSimultaneousLights),(o.fogEnabled&&t.applyFog&&o.fogMode!==ut.FOGMODE_NONE||_||t.receiveShadows||l.PREPASS)&&this.bindView(c),N.BindFogParameters(o,t,this._activeEffect,!0),l.NUM_MORPH_INFLUENCERS&&N.BindMorphTargetParameters(t,this._activeEffect),l.BAKED_VERTEX_ANIMATION_TEXTURE&&((a=t.bakedVertexAnimationManager)===null||a===void 0||a.bind(c,l.INSTANCES)),this._imageProcessingConfiguration.bind(this._activeEffect),N.BindLogDepth(l,this._activeEffect,o)),this._afterBind(t,this._activeEffect),u.update()}getAnimatables(){const e=super.getAnimatables();return this._albedoTexture&&this._albedoTexture.animations&&this._albedoTexture.animations.length>0&&e.push(this._albedoTexture),this._ambientTexture&&this._ambientTexture.animations&&this._ambientTexture.animations.length>0&&e.push(this._ambientTexture),this._opacityTexture&&this._opacityTexture.animations&&this._opacityTexture.animations.length>0&&e.push(this._opacityTexture),this._reflectionTexture&&this._reflectionTexture.animations&&this._reflectionTexture.animations.length>0&&e.push(this._reflectionTexture),this._emissiveTexture&&this._emissiveTexture.animations&&this._emissiveTexture.animations.length>0&&e.push(this._emissiveTexture),this._metallicTexture&&this._metallicTexture.animations&&this._metallicTexture.animations.length>0?e.push(this._metallicTexture):this._reflectivityTexture&&this._reflectivityTexture.animations&&this._reflectivityTexture.animations.length>0&&e.push(this._reflectivityTexture),this._bumpTexture&&this._bumpTexture.animations&&this._bumpTexture.animations.length>0&&e.push(this._bumpTexture),this._lightmapTexture&&this._lightmapTexture.animations&&this._lightmapTexture.animations.length>0&&e.push(this._lightmapTexture),this._metallicReflectanceTexture&&this._metallicReflectanceTexture.animations&&this._metallicReflectanceTexture.animations.length>0&&e.push(this._metallicReflectanceTexture),this._reflectanceTexture&&this._reflectanceTexture.animations&&this._reflectanceTexture.animations.length>0&&e.push(this._reflectanceTexture),this._microSurfaceTexture&&this._microSurfaceTexture.animations&&this._microSurfaceTexture.animations.length>0&&e.push(this._microSurfaceTexture),e}_getReflectionTexture(){return this._reflectionTexture?this._reflectionTexture:this.getScene().environmentTexture}getActiveTextures(){const e=super.getActiveTextures();return this._albedoTexture&&e.push(this._albedoTexture),this._ambientTexture&&e.push(this._ambientTexture),this._opacityTexture&&e.push(this._opacityTexture),this._reflectionTexture&&e.push(this._reflectionTexture),this._emissiveTexture&&e.push(this._emissiveTexture),this._reflectivityTexture&&e.push(this._reflectivityTexture),this._metallicTexture&&e.push(this._metallicTexture),this._metallicReflectanceTexture&&e.push(this._metallicReflectanceTexture),this._reflectanceTexture&&e.push(this._reflectanceTexture),this._microSurfaceTexture&&e.push(this._microSurfaceTexture),this._bumpTexture&&e.push(this._bumpTexture),this._lightmapTexture&&e.push(this._lightmapTexture),e}hasTexture(e){return!!(super.hasTexture(e)||this._albedoTexture===e||this._ambientTexture===e||this._opacityTexture===e||this._reflectionTexture===e||this._emissiveTexture===e||this._reflectivityTexture===e||this._metallicTexture===e||this._metallicReflectanceTexture===e||this._reflectanceTexture===e||this._microSurfaceTexture===e||this._bumpTexture===e||this._lightmapTexture===e)}setPrePassRenderer(){var e;if(!(!((e=this.subSurface)===null||e===void 0)&&e.isScatteringEnabled))return!1;const t=this.getScene().enableSubSurfaceForPrePass();return t&&(t.enabled=!0),!0}dispose(e,t){var i,r,n,s,a,o,l,c,f,d,_,u;t&&(this._environmentBRDFTexture&&this.getScene().environmentBRDFTexture!==this._environmentBRDFTexture&&this._environmentBRDFTexture.dispose(),(i=this._albedoTexture)===null||i===void 0||i.dispose(),(r=this._ambientTexture)===null||r===void 0||r.dispose(),(n=this._opacityTexture)===null||n===void 0||n.dispose(),(s=this._reflectionTexture)===null||s===void 0||s.dispose(),(a=this._emissiveTexture)===null||a===void 0||a.dispose(),(o=this._metallicTexture)===null||o===void 0||o.dispose(),(l=this._reflectivityTexture)===null||l===void 0||l.dispose(),(c=this._bumpTexture)===null||c===void 0||c.dispose(),(f=this._lightmapTexture)===null||f===void 0||f.dispose(),(d=this._metallicReflectanceTexture)===null||d===void 0||d.dispose(),(_=this._reflectanceTexture)===null||_===void 0||_.dispose(),(u=this._microSurfaceTexture)===null||u===void 0||u.dispose()),this._renderTargets.dispose(),this._imageProcessingConfiguration&&this._imageProcessingObserver&&this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver),super.dispose(e,t)}}z.PBRMATERIAL_OPAQUE=ne.MATERIAL_OPAQUE;z.PBRMATERIAL_ALPHATEST=ne.MATERIAL_ALPHATEST;z.PBRMATERIAL_ALPHABLEND=ne.MATERIAL_ALPHABLEND;z.PBRMATERIAL_ALPHATESTANDBLEND=ne.MATERIAL_ALPHATESTANDBLEND;z.DEFAULT_AO_ON_ANALYTICAL_LIGHTS=0;z.LIGHTFALLOFF_PHYSICAL=0;z.LIGHTFALLOFF_GLTF=1;z.LIGHTFALLOFF_STANDARD=2;m([wi()],z.prototype,"_imageProcessingConfiguration",void 0);m([I("_markAllSubMeshesAsMiscDirty")],z.prototype,"debugMode",void 0);m([E()],z.prototype,"useLogarithmicDepth",null);class M extends z{constructor(e,t){super(e,t),this.directIntensity=1,this.emissiveIntensity=1,this.environmentIntensity=1,this.specularIntensity=1,this.disableBumpMap=!1,this.ambientTextureStrength=1,this.ambientTextureImpactOnAnalyticalLights=M.DEFAULT_AO_ON_ANALYTICAL_LIGHTS,this.metallicF0Factor=1,this.metallicReflectanceColor=Z.White(),this.useOnlyMetallicFromMetallicReflectanceTexture=!1,this.ambientColor=new Z(0,0,0),this.albedoColor=new Z(1,1,1),this.reflectivityColor=new Z(1,1,1),this.reflectionColor=new Z(1,1,1),this.emissiveColor=new Z(0,0,0),this.microSurface=1,this.useLightmapAsShadowmap=!1,this.useAlphaFromAlbedoTexture=!1,this.forceAlphaTest=!1,this.alphaCutOff=.4,this.useSpecularOverAlpha=!0,this.useMicroSurfaceFromReflectivityMapAlpha=!1,this.useRoughnessFromMetallicTextureAlpha=!0,this.useRoughnessFromMetallicTextureGreen=!1,this.useMetallnessFromMetallicTextureBlue=!1,this.useAmbientOcclusionFromMetallicTextureRed=!1,this.useAmbientInGrayScale=!1,this.useAutoMicroSurfaceFromReflectivityMap=!1,this.useRadianceOverAlpha=!0,this.useObjectSpaceNormalMap=!1,this.useParallax=!1,this.useParallaxOcclusion=!1,this.parallaxScaleBias=.05,this.disableLighting=!1,this.forceIrradianceInFragment=!1,this.maxSimultaneousLights=4,this.invertNormalMapX=!1,this.invertNormalMapY=!1,this.twoSidedLighting=!1,this.useAlphaFresnel=!1,this.useLinearAlphaFresnel=!1,this.environmentBRDFTexture=null,this.forceNormalForward=!1,this.enableSpecularAntiAliasing=!1,this.useHorizonOcclusion=!0,this.useRadianceOcclusion=!0,this.unlit=!1,this._environmentBRDFTexture=ci(this.getScene())}get refractionTexture(){return this.subSurface.refractionTexture}set refractionTexture(e){this.subSurface.refractionTexture=e,e?this.subSurface.isRefractionEnabled=!0:this.subSurface.linkRefractionWithTransparency||(this.subSurface.isRefractionEnabled=!1)}get indexOfRefraction(){return this.subSurface.indexOfRefraction}set indexOfRefraction(e){this.subSurface.indexOfRefraction=e}get invertRefractionY(){return this.subSurface.invertRefractionY}set invertRefractionY(e){this.subSurface.invertRefractionY=e}get linkRefractionWithTransparency(){return this.subSurface.linkRefractionWithTransparency}set linkRefractionWithTransparency(e){this.subSurface.linkRefractionWithTransparency=e,e&&(this.subSurface.isRefractionEnabled=!0)}get usePhysicalLightFalloff(){return this._lightFalloff===z.LIGHTFALLOFF_PHYSICAL}set usePhysicalLightFalloff(e){e!==this.usePhysicalLightFalloff&&(this._markAllSubMeshesAsTexturesDirty(),e?this._lightFalloff=z.LIGHTFALLOFF_PHYSICAL:this._lightFalloff=z.LIGHTFALLOFF_STANDARD)}get useGLTFLightFalloff(){return this._lightFalloff===z.LIGHTFALLOFF_GLTF}set useGLTFLightFalloff(e){e!==this.useGLTFLightFalloff&&(this._markAllSubMeshesAsTexturesDirty(),e?this._lightFalloff=z.LIGHTFALLOFF_GLTF:this._lightFalloff=z.LIGHTFALLOFF_STANDARD)}get imageProcessingConfiguration(){return this._imageProcessingConfiguration}set imageProcessingConfiguration(e){this._attachImageProcessingConfiguration(e),this._markAllSubMeshesAsTexturesDirty()}get cameraColorCurvesEnabled(){return this.imageProcessingConfiguration.colorCurvesEnabled}set cameraColorCurvesEnabled(e){this.imageProcessingConfiguration.colorCurvesEnabled=e}get cameraColorGradingEnabled(){return this.imageProcessingConfiguration.colorGradingEnabled}set cameraColorGradingEnabled(e){this.imageProcessingConfiguration.colorGradingEnabled=e}get cameraToneMappingEnabled(){return this._imageProcessingConfiguration.toneMappingEnabled}set cameraToneMappingEnabled(e){this._imageProcessingConfiguration.toneMappingEnabled=e}get cameraExposure(){return this._imageProcessingConfiguration.exposure}set cameraExposure(e){this._imageProcessingConfiguration.exposure=e}get cameraContrast(){return this._imageProcessingConfiguration.contrast}set cameraContrast(e){this._imageProcessingConfiguration.contrast=e}get cameraColorGradingTexture(){return this._imageProcessingConfiguration.colorGradingTexture}set cameraColorGradingTexture(e){this._imageProcessingConfiguration.colorGradingTexture=e}get cameraColorCurves(){return this._imageProcessingConfiguration.colorCurves}set cameraColorCurves(e){this._imageProcessingConfiguration.colorCurves=e}getClassName(){return"PBRMaterial"}clone(e){const t=ae.Clone(()=>new M(e,this.getScene()),this);return t.id=e,t.name=e,this.stencil.copyTo(t.stencil),this.clearCoat.copyTo(t.clearCoat),this.anisotropy.copyTo(t.anisotropy),this.brdf.copyTo(t.brdf),this.sheen.copyTo(t.sheen),this.subSurface.copyTo(t.subSurface),t}serialize(){const e=super.serialize();return e.customType="BABYLON.PBRMaterial",e.clearCoat=this.clearCoat.serialize(),e.anisotropy=this.anisotropy.serialize(),e.brdf=this.brdf.serialize(),e.sheen=this.sheen.serialize(),e.subSurface=this.subSurface.serialize(),e.iridescence=this.iridescence.serialize(),e}static Parse(e,t,i){const r=ae.Parse(()=>new M(e.name,t),e,t,i);return e.stencil&&r.stencil.parse(e.stencil,t,i),e.clearCoat&&r.clearCoat.parse(e.clearCoat,t,i),e.anisotropy&&r.anisotropy.parse(e.anisotropy,t,i),e.brdf&&r.brdf.parse(e.brdf,t,i),e.sheen&&r.sheen.parse(e.sheen,t,i),e.subSurface&&r.subSurface.parse(e.subSurface,t,i),e.iridescence&&r.iridescence.parse(e.iridescence,t,i),r}}M.PBRMATERIAL_OPAQUE=z.PBRMATERIAL_OPAQUE;M.PBRMATERIAL_ALPHATEST=z.PBRMATERIAL_ALPHATEST;M.PBRMATERIAL_ALPHABLEND=z.PBRMATERIAL_ALPHABLEND;M.PBRMATERIAL_ALPHATESTANDBLEND=z.PBRMATERIAL_ALPHATESTANDBLEND;M.DEFAULT_AO_ON_ANALYTICAL_LIGHTS=z.DEFAULT_AO_ON_ANALYTICAL_LIGHTS;m([E(),I("_markAllSubMeshesAsTexturesDirty")],M.prototype,"directIntensity",void 0);m([E(),I("_markAllSubMeshesAsTexturesDirty")],M.prototype,"emissiveIntensity",void 0);m([E(),I("_markAllSubMeshesAsTexturesDirty")],M.prototype,"environmentIntensity",void 0);m([E(),I("_markAllSubMeshesAsTexturesDirty")],M.prototype,"specularIntensity",void 0);m([E(),I("_markAllSubMeshesAsTexturesDirty")],M.prototype,"disableBumpMap",void 0);m([$(),I("_markAllSubMeshesAsTexturesDirty")],M.prototype,"albedoTexture",void 0);m([$(),I("_markAllSubMeshesAsTexturesDirty")],M.prototype,"ambientTexture",void 0);m([E(),I("_markAllSubMeshesAsTexturesDirty")],M.prototype,"ambientTextureStrength",void 0);m([E(),I("_markAllSubMeshesAsTexturesDirty")],M.prototype,"ambientTextureImpactOnAnalyticalLights",void 0);m([$(),I("_markAllSubMeshesAsTexturesAndMiscDirty")],M.prototype,"opacityTexture",void 0);m([$(),I("_markAllSubMeshesAsTexturesDirty")],M.prototype,"reflectionTexture",void 0);m([$(),I("_markAllSubMeshesAsTexturesDirty")],M.prototype,"emissiveTexture",void 0);m([$(),I("_markAllSubMeshesAsTexturesDirty")],M.prototype,"reflectivityTexture",void 0);m([$(),I("_markAllSubMeshesAsTexturesDirty")],M.prototype,"metallicTexture",void 0);m([E(),I("_markAllSubMeshesAsTexturesDirty")],M.prototype,"metallic",void 0);m([E(),I("_markAllSubMeshesAsTexturesDirty")],M.prototype,"roughness",void 0);m([E(),I("_markAllSubMeshesAsTexturesDirty")],M.prototype,"metallicF0Factor",void 0);m([ve(),I("_markAllSubMeshesAsTexturesDirty")],M.prototype,"metallicReflectanceColor",void 0);m([E(),I("_markAllSubMeshesAsTexturesDirty")],M.prototype,"useOnlyMetallicFromMetallicReflectanceTexture",void 0);m([$(),I("_markAllSubMeshesAsTexturesDirty")],M.prototype,"metallicReflectanceTexture",void 0);m([$(),I("_markAllSubMeshesAsTexturesDirty")],M.prototype,"reflectanceTexture",void 0);m([$(),I("_markAllSubMeshesAsTexturesDirty")],M.prototype,"microSurfaceTexture",void 0);m([$(),I("_markAllSubMeshesAsTexturesDirty")],M.prototype,"bumpTexture",void 0);m([$(),I("_markAllSubMeshesAsTexturesDirty",null)],M.prototype,"lightmapTexture",void 0);m([ve("ambient"),I("_markAllSubMeshesAsTexturesDirty")],M.prototype,"ambientColor",void 0);m([ve("albedo"),I("_markAllSubMeshesAsTexturesDirty")],M.prototype,"albedoColor",void 0);m([ve("reflectivity"),I("_markAllSubMeshesAsTexturesDirty")],M.prototype,"reflectivityColor",void 0);m([ve("reflection"),I("_markAllSubMeshesAsTexturesDirty")],M.prototype,"reflectionColor",void 0);m([ve("emissive"),I("_markAllSubMeshesAsTexturesDirty")],M.prototype,"emissiveColor",void 0);m([E(),I("_markAllSubMeshesAsTexturesDirty")],M.prototype,"microSurface",void 0);m([E(),I("_markAllSubMeshesAsTexturesDirty")],M.prototype,"useLightmapAsShadowmap",void 0);m([E(),I("_markAllSubMeshesAsTexturesAndMiscDirty")],M.prototype,"useAlphaFromAlbedoTexture",void 0);m([E(),I("_markAllSubMeshesAsTexturesAndMiscDirty")],M.prototype,"forceAlphaTest",void 0);m([E(),I("_markAllSubMeshesAsTexturesAndMiscDirty")],M.prototype,"alphaCutOff",void 0);m([E(),I("_markAllSubMeshesAsTexturesDirty")],M.prototype,"useSpecularOverAlpha",void 0);m([E(),I("_markAllSubMeshesAsTexturesDirty")],M.prototype,"useMicroSurfaceFromReflectivityMapAlpha",void 0);m([E(),I("_markAllSubMeshesAsTexturesDirty")],M.prototype,"useRoughnessFromMetallicTextureAlpha",void 0);m([E(),I("_markAllSubMeshesAsTexturesDirty")],M.prototype,"useRoughnessFromMetallicTextureGreen",void 0);m([E(),I("_markAllSubMeshesAsTexturesDirty")],M.prototype,"useMetallnessFromMetallicTextureBlue",void 0);m([E(),I("_markAllSubMeshesAsTexturesDirty")],M.prototype,"useAmbientOcclusionFromMetallicTextureRed",void 0);m([E(),I("_markAllSubMeshesAsTexturesDirty")],M.prototype,"useAmbientInGrayScale",void 0);m([E(),I("_markAllSubMeshesAsTexturesDirty")],M.prototype,"useAutoMicroSurfaceFromReflectivityMap",void 0);m([E()],M.prototype,"usePhysicalLightFalloff",null);m([E()],M.prototype,"useGLTFLightFalloff",null);m([E(),I("_markAllSubMeshesAsTexturesDirty")],M.prototype,"useRadianceOverAlpha",void 0);m([E(),I("_markAllSubMeshesAsTexturesDirty")],M.prototype,"useObjectSpaceNormalMap",void 0);m([E(),I("_markAllSubMeshesAsTexturesDirty")],M.prototype,"useParallax",void 0);m([E(),I("_markAllSubMeshesAsTexturesDirty")],M.prototype,"useParallaxOcclusion",void 0);m([E(),I("_markAllSubMeshesAsTexturesDirty")],M.prototype,"parallaxScaleBias",void 0);m([E(),I("_markAllSubMeshesAsLightsDirty")],M.prototype,"disableLighting",void 0);m([E(),I("_markAllSubMeshesAsTexturesDirty")],M.prototype,"forceIrradianceInFragment",void 0);m([E(),I("_markAllSubMeshesAsLightsDirty")],M.prototype,"maxSimultaneousLights",void 0);m([E(),I("_markAllSubMeshesAsTexturesDirty")],M.prototype,"invertNormalMapX",void 0);m([E(),I("_markAllSubMeshesAsTexturesDirty")],M.prototype,"invertNormalMapY",void 0);m([E(),I("_markAllSubMeshesAsTexturesDirty")],M.prototype,"twoSidedLighting",void 0);m([E(),I("_markAllSubMeshesAsTexturesDirty")],M.prototype,"useAlphaFresnel",void 0);m([E(),I("_markAllSubMeshesAsTexturesDirty")],M.prototype,"useLinearAlphaFresnel",void 0);m([I("_markAllSubMeshesAsTexturesDirty")],M.prototype,"environmentBRDFTexture",void 0);m([E(),I("_markAllSubMeshesAsTexturesDirty")],M.prototype,"forceNormalForward",void 0);m([E(),I("_markAllSubMeshesAsTexturesDirty")],M.prototype,"enableSpecularAntiAliasing",void 0);m([E(),I("_markAllSubMeshesAsTexturesDirty")],M.prototype,"useHorizonOcclusion",void 0);m([E(),I("_markAllSubMeshesAsTexturesDirty")],M.prototype,"useRadianceOcclusion",void 0);m([E(),I("_markAllSubMeshesAsMiscDirty")],M.prototype,"unlit",void 0);tt("BABYLON.PBRMaterial",M);class we{constructor(e,t=0,i=null){this.name=e,this.animations=new Array,this._positions=null,this._normals=null,this._tangents=null,this._uvs=null,this._uniqueId=0,this.onInfluenceChanged=new B,this._onDataLayoutChanged=new B,this._animationPropertiesOverride=null,this._scene=i||re.LastCreatedScene,this.influence=t,this._scene&&(this._uniqueId=this._scene.getUniqueId())}get influence(){return this._influence}set influence(e){if(this._influence===e)return;const t=this._influence;this._influence=e,this.onInfluenceChanged.hasObservers()&&this.onInfluenceChanged.notifyObservers(t===0||e===0)}get animationPropertiesOverride(){return!this._animationPropertiesOverride&&this._scene?this._scene.animationPropertiesOverride:this._animationPropertiesOverride}set animationPropertiesOverride(e){this._animationPropertiesOverride=e}get uniqueId(){return this._uniqueId}get hasPositions(){return!!this._positions}get hasNormals(){return!!this._normals}get hasTangents(){return!!this._tangents}get hasUVs(){return!!this._uvs}setPositions(e){const t=this.hasPositions;this._positions=e,t!==this.hasPositions&&this._onDataLayoutChanged.notifyObservers(void 0)}getPositions(){return this._positions}setNormals(e){const t=this.hasNormals;this._normals=e,t!==this.hasNormals&&this._onDataLayoutChanged.notifyObservers(void 0)}getNormals(){return this._normals}setTangents(e){const t=this.hasTangents;this._tangents=e,t!==this.hasTangents&&this._onDataLayoutChanged.notifyObservers(void 0)}getTangents(){return this._tangents}setUVs(e){const t=this.hasUVs;this._uvs=e,t!==this.hasUVs&&this._onDataLayoutChanged.notifyObservers(void 0)}getUVs(){return this._uvs}clone(){const e=ae.Clone(()=>new we(this.name,this.influence,this._scene),this);return e._positions=this._positions,e._normals=this._normals,e._tangents=this._tangents,e._uvs=this._uvs,e}serialize(){const e={};return e.name=this.name,e.influence=this.influence,e.positions=Array.prototype.slice.call(this.getPositions()),this.id!=null&&(e.id=this.id),this.hasNormals&&(e.normals=Array.prototype.slice.call(this.getNormals())),this.hasTangents&&(e.tangents=Array.prototype.slice.call(this.getTangents())),this.hasUVs&&(e.uvs=Array.prototype.slice.call(this.getUVs())),ae.AppendSerializedAnimations(this,e),e}getClassName(){return"MorphTarget"}static Parse(e,t){const i=new we(e.name,e.influence);if(i.setPositions(e.positions),e.id!=null&&(i.id=e.id),e.normals&&i.setNormals(e.normals),e.tangents&&i.setTangents(e.tangents),e.uvs&&i.setUVs(e.uvs),e.animations){for(let r=0;r<e.animations.length;r++){const n=e.animations[r],s=Nt("BABYLON.Animation");s&&i.animations.push(s.Parse(n))}e.autoAnimate&&t&&t.beginAnimation(i,e.autoAnimateFrom,e.autoAnimateTo,e.autoAnimateLoop,e.autoAnimateSpeed||1)}return i}static FromMesh(e,t,i){t||(t=e.name);const r=new we(t,i,e.getScene());return r.setPositions(e.getVerticesData(y.PositionKind)),e.isVerticesDataPresent(y.NormalKind)&&r.setNormals(e.getVerticesData(y.NormalKind)),e.isVerticesDataPresent(y.TangentKind)&&r.setTangents(e.getVerticesData(y.TangentKind)),e.isVerticesDataPresent(y.UVKind)&&r.setUVs(e.getVerticesData(y.UVKind)),r}}m([E()],we.prototype,"id",void 0);class Dt extends A{constructor(e,t,i,r,n,s,a=!0,o=!1,l=A.TRILINEAR_SAMPLINGMODE,c=0){super(null,s,!a,o),this.format=n,this._texture=s.getEngine().createRawTexture2DArray(e,t,i,r,n,a,o,l,null,c),this._depth=r,this.is2DArray=!0}get depth(){return this._depth}update(e){this._texture&&this._getEngine().updateRawTexture2DArray(this._texture,e,this._texture.format,this._texture.invertY,null,this._texture.type)}static CreateRGBATexture(e,t,i,r,n,s=!0,a=!1,o=3,l=0){return new Dt(e,t,i,r,5,n,s,a,o,l)}}class Xe{constructor(e=null){if(this._targets=new Array,this._targetInfluenceChangedObservers=new Array,this._targetDataLayoutChangedObservers=new Array,this._activeTargets=new Je(16),this._supportsNormals=!1,this._supportsTangents=!1,this._supportsUVs=!1,this._vertexCount=0,this._textureVertexStride=0,this._textureWidth=0,this._textureHeight=1,this._uniqueId=0,this._tempInfluences=new Array,this._canUseTextureForTargets=!1,this._blockCounter=0,this._parentContainer=null,this.optimizeInfluencers=!0,this.enableNormalMorphing=!0,this.enableTangentMorphing=!0,this.enableUVMorphing=!0,this._useTextureToStoreTargets=!0,e||(e=re.LastCreatedScene),this._scene=e,this._scene){this._scene.morphTargetManagers.push(this),this._uniqueId=this._scene.getUniqueId();const t=this._scene.getEngine().getCaps();this._canUseTextureForTargets=t.canUseGLVertexID&&t.textureFloat&&t.maxVertexTextureImageUnits>0&&t.texture2DArrayMaxLayerCount>1}}set areUpdatesFrozen(e){e?this._blockCounter++:(this._blockCounter--,this._blockCounter<=0&&(this._blockCounter=0,this._syncActiveTargets(!0)))}get areUpdatesFrozen(){return this._blockCounter>0}get uniqueId(){return this._uniqueId}get vertexCount(){return this._vertexCount}get supportsNormals(){return this._supportsNormals&&this.enableNormalMorphing}get supportsTangents(){return this._supportsTangents&&this.enableTangentMorphing}get supportsUVs(){return this._supportsUVs&&this.enableUVMorphing}get numTargets(){return this._targets.length}get numInfluencers(){return this._activeTargets.length}get influences(){return this._influences}get useTextureToStoreTargets(){return this._useTextureToStoreTargets}set useTextureToStoreTargets(e){this._useTextureToStoreTargets=e}get isUsingTextureForTargets(){return Xe.EnableTextureStorage&&this.useTextureToStoreTargets&&this._canUseTextureForTargets}getActiveTarget(e){return this._activeTargets.data[e]}getTarget(e){return this._targets[e]}addTarget(e){this._targets.push(e),this._targetInfluenceChangedObservers.push(e.onInfluenceChanged.add(t=>{this._syncActiveTargets(t)})),this._targetDataLayoutChangedObservers.push(e._onDataLayoutChanged.add(()=>{this._syncActiveTargets(!0)})),this._syncActiveTargets(!0)}removeTarget(e){const t=this._targets.indexOf(e);t>=0&&(this._targets.splice(t,1),e.onInfluenceChanged.remove(this._targetInfluenceChangedObservers.splice(t,1)[0]),e._onDataLayoutChanged.remove(this._targetDataLayoutChangedObservers.splice(t,1)[0]),this._syncActiveTargets(!0))}_bind(e){e.setFloat3("morphTargetTextureInfo",this._textureVertexStride,this._textureWidth,this._textureHeight),e.setFloatArray("morphTargetTextureIndices",this._morphTargetTextureIndices),e.setTexture("morphTargets",this._targetStoreTexture)}clone(){const e=new Xe(this._scene);for(const t of this._targets)e.addTarget(t.clone());return e.enableNormalMorphing=this.enableNormalMorphing,e.enableTangentMorphing=this.enableTangentMorphing,e.enableUVMorphing=this.enableUVMorphing,e}serialize(){const e={};e.id=this.uniqueId,e.targets=[];for(const t of this._targets)e.targets.push(t.serialize());return e}_syncActiveTargets(e){if(this.areUpdatesFrozen)return;let t=0;this._activeTargets.reset(),this._supportsNormals=!0,this._supportsTangents=!0,this._supportsUVs=!0,this._vertexCount=0,(!this._morphTargetTextureIndices||this._morphTargetTextureIndices.length!==this._targets.length)&&(this._morphTargetTextureIndices=new Float32Array(this._targets.length));let i=-1;for(const r of this._targets){if(i++,r.influence===0&&this.optimizeInfluencers)continue;this._activeTargets.push(r),this._morphTargetTextureIndices[t]=i,this._tempInfluences[t++]=r.influence,this._supportsNormals=this._supportsNormals&&r.hasNormals,this._supportsTangents=this._supportsTangents&&r.hasTangents,this._supportsUVs=this._supportsUVs&&r.hasUVs;const n=r.getPositions();if(n){const s=n.length/3;if(this._vertexCount===0)this._vertexCount=s;else if(this._vertexCount!==s){V.Error("Incompatible target. Targets must all have the same vertices count.");return}}}(!this._influences||this._influences.length!==t)&&(this._influences=new Float32Array(t));for(let r=0;r<t;r++)this._influences[r]=this._tempInfluences[r];e&&this.synchronize()}synchronize(){if(!(!this._scene||this.areUpdatesFrozen)){if(this.isUsingTextureForTargets&&this._vertexCount){this._textureVertexStride=1,this._supportsNormals&&this._textureVertexStride++,this._supportsTangents&&this._textureVertexStride++,this._supportsUVs&&this._textureVertexStride++,this._textureWidth=this._vertexCount*this._textureVertexStride,this._textureHeight=1;const e=this._scene.getEngine().getCaps().maxTextureSize;this._textureWidth>e&&(this._textureHeight=Math.ceil(this._textureWidth/e),this._textureWidth=e);let t=!0;if(this._targetStoreTexture){const i=this._targetStoreTexture.getSize();i.width===this._textureWidth&&i.height===this._textureHeight&&this._targetStoreTexture.depth===this._targets.length&&(t=!1)}if(t){this._targetStoreTexture&&this._targetStoreTexture.dispose();const i=this._targets.length,r=new Float32Array(i*this._textureWidth*this._textureHeight*4);let n=0;for(let s=0;s<i;s++){const a=this._targets[s],o=a.getPositions(),l=a.getNormals(),c=a.getUVs(),f=a.getTangents();if(!o){s===0&&V.Error("Invalid morph target. Target must have positions.");return}n=s*this._textureWidth*this._textureHeight*4;for(let d=0;d<this._vertexCount;d++)r[n]=o[d*3],r[n+1]=o[d*3+1],r[n+2]=o[d*3+2],n+=4,l&&(r[n]=l[d*3],r[n+1]=l[d*3+1],r[n+2]=l[d*3+2],n+=4),c&&(r[n]=c[d*2],r[n+1]=c[d*2+1],n+=4),f&&(r[n]=f[d*3],r[n+1]=f[d*3+1],r[n+2]=f[d*3+2],n+=4)}this._targetStoreTexture=Dt.CreateRGBATexture(r,this._textureWidth,this._textureHeight,i,this._scene,!1,!1,1,1)}}for(const e of this._scene.meshes)e.morphTargetManager===this&&e._syncGeometryWithMorphTargetManager()}}dispose(){if(this._targetStoreTexture&&this._targetStoreTexture.dispose(),this._targetStoreTexture=null,this._scene&&(this._scene.removeMorphTargetManager(this),this._parentContainer)){const e=this._parentContainer.morphTargetManagers.indexOf(this);e>-1&&this._parentContainer.morphTargetManagers.splice(e,1),this._parentContainer=null}}static Parse(e,t){const i=new Xe(t);i._uniqueId=e.id;for(const r of e.targets)i.addTarget(we.Parse(r,t));return i}}Xe.EnableTextureStorage=!0;var ye;(function(h){h[h.Clean=0]="Clean",h[h.Stop=1]="Stop",h[h.Sync=2]="Sync",h[h.NoSync=3]="NoSync"})(ye||(ye={}));class U{static get ForceFullSceneLoadingForIncremental(){return be.ForceFullSceneLoadingForIncremental}static set ForceFullSceneLoadingForIncremental(e){be.ForceFullSceneLoadingForIncremental=e}static get ShowLoadingScreen(){return be.ShowLoadingScreen}static set ShowLoadingScreen(e){be.ShowLoadingScreen=e}static get loggingLevel(){return be.loggingLevel}static set loggingLevel(e){be.loggingLevel=e}static get CleanBoneMatrixWeights(){return be.CleanBoneMatrixWeights}static set CleanBoneMatrixWeights(e){be.CleanBoneMatrixWeights=e}static GetDefaultPlugin(){return U._RegisteredPlugins[".babylon"]}static _GetPluginForExtension(e){const t=U._RegisteredPlugins[e];return t||(V.Warn("Unable to find a plugin to load "+e+" files. Trying to use .babylon default plugin. To load from a specific filetype (eg. gltf) see: https://doc.babylonjs.com/features/featuresDeepDive/importers/loadingFileTypes"),U.GetDefaultPlugin())}static _GetPluginForDirectLoad(e){for(const t in U._RegisteredPlugins){const i=U._RegisteredPlugins[t].plugin;if(i.canDirectLoad&&i.canDirectLoad(e))return U._RegisteredPlugins[t]}return U.GetDefaultPlugin()}static _GetPluginForFilename(e){const t=e.indexOf("?");t!==-1&&(e=e.substring(0,t));const i=e.lastIndexOf("."),r=e.substring(i,e.length).toLowerCase();return U._GetPluginForExtension(r)}static _GetDirectLoad(e){return e.substr(0,5)==="data:"?e.substr(5):null}static _FormatErrorMessage(e,t,i){let r="Unable to load from "+e.url;return t?r+=`: ${t}`:i&&(r+=`: ${i}`),r}static _LoadData(e,t,i,r,n,s,a){const o=U._GetDirectLoad(e.url),l=a?U._GetPluginForExtension(a):o?U._GetPluginForDirectLoad(e.url):U._GetPluginForFilename(e.url);let c;if(l.plugin.createPlugin!==void 0?c=l.plugin.createPlugin():c=l.plugin,!c)throw"The loader plugin corresponding to the file type you are trying to load has not been found. If using es6, please import the plugin you wish to use before.";if(U.OnPluginActivatedObservable.notifyObservers(c),o&&(c.canDirectLoad&&c.canDirectLoad(e.url)||!Jt(e.url))){if(c.directLoad){const R=c.directLoad(t,o);R.then?R.then(b=>{i(c,b)}).catch(b=>{n("Error in directLoad of _loadData: "+b,b)}):i(c,R)}else i(c,o);return c}const f=l.isBinary,d=(R,b)=>{if(t.isDisposed){n("Scene has been disposed");return}i(c,R,b)};let _=null,u=!1;const p=c.onDisposeObservable;p&&p.add(()=>{u=!0,_&&(_.abort(),_=null),s()});const g=()=>{if(u)return;const R=(G,X)=>{n(G==null?void 0:G.statusText,X)},b=e.file||e.url;_=c.loadFile?c.loadFile(t,b,d,r,f,R):t._loadFile(b,d,r,!0,f,R)},T=t.getEngine();let C=T.enableOfflineSupport;if(C){let R=!1;for(const b of t.disableOfflineSupportExceptionRules)if(b.test(e.url)){R=!0;break}C=!R}return C&&q.OfflineProviderFactory?t.offlineProvider=q.OfflineProviderFactory(e.url,g,T.disableManifestCheck):g(),c}static _GetFileInfo(e,t){let i,r,n=null;if(!t)i=e,r=J.GetFilename(e),e=J.GetFolderPath(e);else if(t.name){const s=t;i=`file:${s.name}`,r=s.name,n=s}else if(typeof t=="string"&&t.startsWith("data:"))i=t,r="";else{const s=t;if(s.substr(0,1)==="/")return J.Error("Wrong sceneFilename parameter"),null;i=e+s,r=s}return{url:i,rootUrl:e,name:r,file:n}}static GetPluginForExtension(e){return U._GetPluginForExtension(e).plugin}static IsPluginForExtensionAvailable(e){return!!U._RegisteredPlugins[e]}static RegisterPlugin(e){if(typeof e.extensions=="string"){const t=e.extensions;U._RegisteredPlugins[t.toLowerCase()]={plugin:e,isBinary:!1}}else{const t=e.extensions;Object.keys(t).forEach(i=>{U._RegisteredPlugins[i.toLowerCase()]={plugin:e,isBinary:t[i].isBinary}})}}static ImportMesh(e,t,i="",r=re.LastCreatedScene,n=null,s=null,a=null,o=null){if(!r)return V.Error("No scene available to import mesh to"),null;const l=U._GetFileInfo(t,i);if(!l)return null;const c={};r.addPendingData(c);const f=()=>{r.removePendingData(c)},d=(p,g)=>{const T=U._FormatErrorMessage(l,p,g);a?a(r,T,new at(T,ot.SceneLoaderError,g)):V.Error(T),f()},_=s?p=>{try{s(p)}catch(g){d("Error in onProgress callback: "+g,g)}}:void 0,u=(p,g,T,C,R,b,G)=>{if(r.importedMeshesFiles.push(l.url),n)try{n(p,g,T,C,R,b,G)}catch(X){d("Error in onSuccess callback: "+X,X)}r.removePendingData(c)};return U._LoadData(l,r,(p,g,T)=>{if(p.rewriteRootURL&&(l.rootUrl=p.rewriteRootURL(l.rootUrl,T)),p.importMesh){const C=p,R=new Array,b=new Array,G=new Array;if(!C.importMesh(e,r,g,l.rootUrl,R,b,G,d))return;r.loadingPluginName=p.name,u(R,b,G,[],[],[],[])}else p.importMeshAsync(e,r,g,l.rootUrl,_,l.name).then(R=>{r.loadingPluginName=p.name,u(R.meshes,R.particleSystems,R.skeletons,R.animationGroups,R.transformNodes,R.geometries,R.lights)}).catch(R=>{d(R.message,R)})},_,d,f,o)}static ImportMeshAsync(e,t,i="",r=re.LastCreatedScene,n=null,s=null){return new Promise((a,o)=>{U.ImportMesh(e,t,i,r,(l,c,f,d,_,u,p)=>{a({meshes:l,particleSystems:c,skeletons:f,animationGroups:d,transformNodes:_,geometries:u,lights:p})},n,(l,c,f)=>{o(f||new Error(c))},s)})}static Load(e,t="",i=re.LastCreatedEngine,r=null,n=null,s=null,a=null){return i?U.Append(e,t,new ut(i),r,n,s,a):(J.Error("No engine available"),null)}static LoadAsync(e,t="",i=re.LastCreatedEngine,r=null,n=null){return new Promise((s,a)=>{U.Load(e,t,i,o=>{s(o)},r,(o,l,c)=>{a(c||new Error(l))},n)})}static Append(e,t="",i=re.LastCreatedScene,r=null,n=null,s=null,a=null){if(!i)return V.Error("No scene available to append to"),null;const o=U._GetFileInfo(e,t);if(!o)return null;const l={};i.addPendingData(l);const c=()=>{i.removePendingData(l)};U.ShowLoadingScreen&&!this._ShowingLoadingScreen&&(this._ShowingLoadingScreen=!0,i.getEngine().displayLoadingUI(),i.executeWhenReady(()=>{i.getEngine().hideLoadingUI(),this._ShowingLoadingScreen=!1}));const f=(u,p)=>{const g=U._FormatErrorMessage(o,u,p);s?s(i,g,new at(g,ot.SceneLoaderError,p)):V.Error(g),c()},d=n?u=>{try{n(u)}catch(p){f("Error in onProgress callback",p)}}:void 0,_=()=>{if(r)try{r(i)}catch(u){f("Error in onSuccess callback",u)}i.removePendingData(l)};return U._LoadData(o,i,(u,p)=>{if(u.load){if(!u.load(i,p,o.rootUrl,f))return;i.loadingPluginName=u.name,_()}else u.loadAsync(i,p,o.rootUrl,d,o.name).then(()=>{i.loadingPluginName=u.name,_()}).catch(T=>{f(T.message,T)})},d,f,c,a)}static AppendAsync(e,t="",i=re.LastCreatedScene,r=null,n=null){return new Promise((s,a)=>{U.Append(e,t,i,o=>{s(o)},r,(o,l,c)=>{a(c||new Error(l))},n)})}static LoadAssetContainer(e,t="",i=re.LastCreatedScene,r=null,n=null,s=null,a=null){if(!i)return V.Error("No scene available to load asset container to"),null;const o=U._GetFileInfo(e,t);if(!o)return null;const l={};i.addPendingData(l);const c=()=>{i.removePendingData(l)},f=(u,p)=>{const g=U._FormatErrorMessage(o,u,p);s?s(i,g,new at(g,ot.SceneLoaderError,p)):V.Error(g),c()},d=n?u=>{try{n(u)}catch(p){f("Error in onProgress callback",p)}}:void 0,_=u=>{if(r)try{r(u)}catch(p){f("Error in onSuccess callback",p)}i.removePendingData(l)};return U._LoadData(o,i,(u,p)=>{if(u.loadAssetContainer){const T=u.loadAssetContainer(i,p,o.rootUrl,f);if(!T)return;i.loadingPluginName=u.name,_(T)}else u.loadAssetContainerAsync?u.loadAssetContainerAsync(i,p,o.rootUrl,d,o.name).then(T=>{i.loadingPluginName=u.name,_(T)}).catch(T=>{f(T.message,T)}):f("LoadAssetContainer is not supported by this plugin. Plugin did not provide a loadAssetContainer or loadAssetContainerAsync method.")},d,f,c,a)}static LoadAssetContainerAsync(e,t="",i=re.LastCreatedScene,r=null,n=null){return new Promise((s,a)=>{U.LoadAssetContainer(e,t,i,o=>{s(o)},r,(o,l,c)=>{a(c||new Error(l))},n)})}static ImportAnimations(e,t="",i=re.LastCreatedScene,r=!0,n=ye.Clean,s=null,a=null,o=null,l=null,c=null){if(!i){V.Error("No scene available to load animations to");return}if(r){for(const u of i.animatables)u.reset();i.stopAllAnimations(),i.animationGroups.slice().forEach(u=>{u.dispose()}),i.getNodes().forEach(u=>{u.animations&&(u.animations=[])})}else switch(n){case ye.Clean:i.animationGroups.slice().forEach(_=>{_.dispose()});break;case ye.Stop:i.animationGroups.forEach(_=>{_.stop()});break;case ye.Sync:i.animationGroups.forEach(_=>{_.reset(),_.restart()});break;case ye.NoSync:break;default:V.Error("Unknown animation group loading mode value '"+n+"'");return}const f=i.animatables.length,d=_=>{_.mergeAnimationsTo(i,i.animatables.slice(f),s),_.dispose(),i.onAnimationFileImportedObservable.notifyObservers(i),a&&a(i)};this.LoadAssetContainer(e,t,i,d,o,l,c)}static ImportAnimationsAsync(e,t="",i=re.LastCreatedScene,r=!0,n=ye.Clean,s=null,a=null,o=null,l=null,c=null){return new Promise((f,d)=>{U.ImportAnimations(e,t,i,r,n,s,_=>{f(_)},o,(_,u,p)=>{d(p||new Error(u))},c)})}}U.NO_LOGGING=0;U.MINIMAL_LOGGING=1;U.SUMMARY_LOGGING=2;U.DETAILED_LOGGING=3;U.OnPluginActivatedObservable=new B;U._RegisteredPlugins={};U._ShowingLoadingScreen=!1;class $a extends $t{}class eo{constructor(){this.rootNodes=[],this.skeletons=[],this.animationGroups=[]}}class to extends $t{constructor(e){super(),this._wasAddedToScene=!1,e=e||re.LastCreatedScene,e&&(this.scene=e,this.sounds=[],this.effectLayers=[],this.layers=[],this.lensFlareSystems=[],this.proceduralTextures=[],this.reflectionProbes=[],e.onDisposeObservable.add(()=>{this._wasAddedToScene||this.dispose()}),this._onContextRestoredObserver=e.getEngine().onContextRestoredObservable.add(()=>{for(const t of this.geometries)t._rebuild();for(const t of this.meshes)t._rebuild();for(const t of this.particleSystems)t.rebuild();for(const t of this.textures)t._rebuild()}))}instantiateModelsToScene(e,t=!1,i){const r={},n={},s=new eo,a=[],o=[],l={doNotInstantiate:!0,...i};l.doNotInstantiate||(l.doNotInstantiate=u=>!!u.skeleton);const c=(u,p)=>{if(r[u.uniqueId]=p.uniqueId,n[p.uniqueId]=p,e&&(p.name=e(u.name)),p instanceof De){const g=p;if(g.morphTargetManager){const T=u.morphTargetManager;g.morphTargetManager=T.clone();for(let C=0;C<T.numTargets;C++){const R=T.getTarget(C),b=g.morphTargetManager.getTarget(C);r[R.uniqueId]=b.uniqueId,n[b.uniqueId]=b}}}};this.transformNodes.forEach(u=>{if(!(l.predicate&&!l.predicate(u))&&!u.parent){const p=u.instantiateHierarchy(null,l,(g,T)=>{c(g,T)});p&&s.rootNodes.push(p)}});const f=this.meshes.some(u=>u.getClassName()==="InstancedMesh"),d=[],_=(u,p)=>{if(c(u,p),p.material){const g=p;if(g.material)if(t){const T=u.material;if(o.indexOf(T)===-1){let C=T.clone(e?e(T.name):"Clone of "+T.name);if(o.push(T),r[T.uniqueId]=C.uniqueId,n[C.uniqueId]=C,T.getClassName()==="MultiMaterial"){const R=T;for(const b of R.subMaterials)b&&(C=b.clone(e?e(b.name):"Clone of "+b.name),o.push(b),r[b.uniqueId]=C.uniqueId,n[C.uniqueId]=C);R.subMaterials=R.subMaterials.map(b=>b&&n[r[b.uniqueId]])}}g.getClassName()!=="InstancedMesh"&&(g.material=n[r[T.uniqueId]])}else g.material.getClassName()==="MultiMaterial"?this.scene.multiMaterials.indexOf(g.material)===-1&&this.scene.addMultiMaterial(g.material):this.scene.materials.indexOf(g.material)===-1&&this.scene.addMaterial(g.material)}};return this.meshes.forEach((u,p)=>{if(!(l.predicate&&!l.predicate(u))&&!u.parent){const g=u.getClassName()==="InstancedMesh";let T;if(g){const b=u.sourceMesh,G=this.meshes.indexOf(b);G!==-1&&d[G]&&(T=d[G])}const C=g?u.instantiateHierarchy(null,{...l,newSourcedMesh:T},_):u.instantiateHierarchy(null,l,_);C&&(f&&C.getClassName()!=="InstancedMesh"&&(d[p]=C),s.rootNodes.push(C))}}),this.skeletons.forEach(u=>{if(l.predicate&&!l.predicate(u))return;const p=u.clone(e?e(u.name):"Clone of "+u.name);for(const g of this.meshes)if(g.skeleton===u&&!g.isAnInstance){const T=n[r[g.uniqueId]];if(T.isAnInstance||(T.skeleton=p,a.indexOf(p)!==-1))continue;a.push(p);for(const C of p.bones)C._linkedTransformNode&&(C._linkedTransformNode=n[r[C._linkedTransformNode.uniqueId]])}s.skeletons.push(p)}),this.animationGroups.forEach(u=>{if(l.predicate&&!l.predicate(u))return;const p=u.clone(e?e(u.name):"Clone of "+u.name,g=>n[r[g.uniqueId]]||g);s.animationGroups.push(p)}),s}addAllToScene(){if(!this._wasAddedToScene){this._wasAddedToScene=!0,this.addToScene(null),this.environmentTexture&&(this.scene.environmentTexture=this.environmentTexture);for(const e of this.scene._serializableComponents)e.addFromContainer(this);this.scene.getEngine().onContextRestoredObservable.remove(this._onContextRestoredObserver),this._onContextRestoredObserver=null}}addToScene(e=null){this.cameras.forEach(t=>{e&&!e(t)||this.scene.addCamera(t)}),this.lights.forEach(t=>{e&&!e(t)||this.scene.addLight(t)}),this.meshes.forEach(t=>{e&&!e(t)||this.scene.addMesh(t)}),this.skeletons.forEach(t=>{e&&!e(t)||this.scene.addSkeleton(t)}),this.animations.forEach(t=>{e&&!e(t)||this.scene.addAnimation(t)}),this.animationGroups.forEach(t=>{e&&!e(t)||this.scene.addAnimationGroup(t)}),this.multiMaterials.forEach(t=>{e&&!e(t)||this.scene.addMultiMaterial(t)}),this.materials.forEach(t=>{e&&!e(t)||this.scene.addMaterial(t)}),this.morphTargetManagers.forEach(t=>{e&&!e(t)||this.scene.addMorphTargetManager(t)}),this.geometries.forEach(t=>{e&&!e(t)||this.scene.addGeometry(t)}),this.transformNodes.forEach(t=>{e&&!e(t)||this.scene.addTransformNode(t)}),this.actionManagers.forEach(t=>{e&&!e(t)||this.scene.addActionManager(t)}),this.textures.forEach(t=>{e&&!e(t)||this.scene.addTexture(t)}),this.reflectionProbes.forEach(t=>{e&&!e(t)||this.scene.addReflectionProbe(t)})}removeAllFromScene(){this._wasAddedToScene=!1,this.removeFromScene(null),this.environmentTexture===this.scene.environmentTexture&&(this.scene.environmentTexture=null);for(const e of this.scene._serializableComponents)e.removeFromContainer(this)}removeFromScene(e=null){this.cameras.forEach(t=>{e&&!e(t)||this.scene.removeCamera(t)}),this.lights.forEach(t=>{e&&!e(t)||this.scene.removeLight(t)}),this.meshes.forEach(t=>{e&&!e(t)||this.scene.removeMesh(t)}),this.skeletons.forEach(t=>{e&&!e(t)||this.scene.removeSkeleton(t)}),this.animations.forEach(t=>{e&&!e(t)||this.scene.removeAnimation(t)}),this.animationGroups.forEach(t=>{e&&!e(t)||this.scene.removeAnimationGroup(t)}),this.multiMaterials.forEach(t=>{e&&!e(t)||this.scene.removeMultiMaterial(t)}),this.materials.forEach(t=>{e&&!e(t)||this.scene.removeMaterial(t)}),this.morphTargetManagers.forEach(t=>{e&&!e(t)||this.scene.removeMorphTargetManager(t)}),this.geometries.forEach(t=>{e&&!e(t)||this.scene.removeGeometry(t)}),this.transformNodes.forEach(t=>{e&&!e(t)||this.scene.removeTransformNode(t)}),this.actionManagers.forEach(t=>{e&&!e(t)||this.scene.removeActionManager(t)}),this.textures.forEach(t=>{e&&!e(t)||this.scene.removeTexture(t)}),this.reflectionProbes.forEach(t=>{e&&!e(t)||this.scene.removeReflectionProbe(t)})}dispose(){this.cameras.slice(0).forEach(e=>{e.dispose()}),this.cameras.length=0,this.lights.slice(0).forEach(e=>{e.dispose()}),this.lights.length=0,this.meshes.slice(0).forEach(e=>{e.dispose()}),this.meshes.length=0,this.skeletons.slice(0).forEach(e=>{e.dispose()}),this.skeletons.length=0,this.animationGroups.slice(0).forEach(e=>{e.dispose()}),this.animationGroups.length=0,this.multiMaterials.slice(0).forEach(e=>{e.dispose()}),this.multiMaterials.length=0,this.materials.slice(0).forEach(e=>{e.dispose()}),this.materials.length=0,this.geometries.slice(0).forEach(e=>{e.dispose()}),this.geometries.length=0,this.transformNodes.slice(0).forEach(e=>{e.dispose()}),this.transformNodes.length=0,this.actionManagers.slice(0).forEach(e=>{e.dispose()}),this.actionManagers.length=0,this.textures.slice(0).forEach(e=>{e.dispose()}),this.textures.length=0,this.reflectionProbes.slice(0).forEach(e=>{e.dispose()}),this.reflectionProbes.length=0,this.environmentTexture&&(this.environmentTexture.dispose(),this.environmentTexture=null);for(const e of this.scene._serializableComponents)e.removeFromContainer(this,!0);this._onContextRestoredObserver&&(this.scene.getEngine().onContextRestoredObservable.remove(this._onContextRestoredObserver),this._onContextRestoredObserver=null)}_moveAssets(e,t,i){if(!(!e||!t))for(const r of e){let n=!0;if(i){for(const s of i)if(r===s){n=!1;break}}n&&(t.push(r),r._parentContainer=this)}}moveAllFromScene(e){this._wasAddedToScene=!1,e===void 0&&(e=new $a);for(const t in this)Object.prototype.hasOwnProperty.call(this,t)&&(this[t]=this[t]||(t==="_environmentTexture"?null:[]),this._moveAssets(this.scene[t],this[t],e[t]));this.environmentTexture=this.scene.environmentTexture,this.removeAllFromScene()}createRootMesh(){const e=new De("assetContainerRootMesh",this.scene);return this.meshes.forEach(t=>{t.parent||e.addChild(t)}),this.meshes.unshift(e),e}mergeAnimationsTo(e=re.LastCreatedScene,t,i=null){if(!e)return V.Error("No scene available to merge animations to"),[];const r=i||(a=>{let o=null;const l=a.animations.length?a.animations[0].targetProperty:"",c=a.name.split(".").join("").split("_primitive")[0];switch(l){case"position":case"rotationQuaternion":o=e.getTransformNodeByName(a.name)||e.getTransformNodeByName(c);break;case"influence":o=e.getMorphTargetByName(a.name)||e.getMorphTargetByName(c);break;default:o=e.getNodeByName(a.name)||e.getNodeByName(c)}return o});this.getNodes().forEach(a=>{const o=r(a);if(o!==null){for(const l of a.animations){const c=o.animations.filter(f=>f.targetProperty===l.targetProperty);for(const f of c){const d=o.animations.indexOf(f,0);d>-1&&o.animations.splice(d,1)}}o.animations=o.animations.concat(a.animations)}});const s=new Array;return this.animationGroups.slice().forEach(a=>{s.push(a.clone(a.name,r)),a.animatables.forEach(o=>{o.stop()})}),t.forEach(a=>{const o=r(a.target);o&&(e.beginAnimation(o,a.fromFrame,a.toFrame,a.loopAnimation,a.speedRatio,a.onAnimationEnd?a.onAnimationEnd:void 0,void 0,!0,void 0,a.onAnimationLoop?a.onAnimationLoop:void 0),e.stopAnimation(a.target))}),s}}class Ct{constructor(e){this.byteOffset=0,this.buffer=e}loadAsync(e){return this.buffer.readAsync(this.byteOffset,e).then(t=>{this._dataView=new DataView(t.buffer,t.byteOffset,t.byteLength),this._dataByteOffset=0})}readUint32(){const e=this._dataView.getUint32(this._dataByteOffset,!0);return this._dataByteOffset+=4,this.byteOffset+=4,e}readUint8Array(e){const t=new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+this._dataByteOffset,e);return this._dataByteOffset+=e,this.byteOffset+=e,t}readString(e){return Ui(this.readUint8Array(e))}skipBytes(e){this._dataByteOffset+=e,this.byteOffset+=e}}function Mt(h,e,t,i){const r={externalResourceFunction:n=>i(n).then(s=>new Uint8Array(s))};return t&&(r.uri=e==="file:"?t:e+t),h instanceof ArrayBuffer?GLTFValidator.validateBytes(new Uint8Array(h),r):GLTFValidator.validateString(h,r)}function io(){const h=[];onmessage=e=>{const t=e.data;switch(t.id){case"init":{importScripts(t.url);break}case"validate":{Mt(t.data,t.rootUrl,t.fileName,i=>new Promise((r,n)=>{const s=h.length;h.push({resolve:r,reject:n}),postMessage({id:"getExternalResource",index:s,uri:i})})).then(i=>{postMessage({id:"validate.resolve",value:i})},i=>{postMessage({id:"validate.reject",reason:i})});break}case"getExternalResource.resolve":{h[t.index].resolve(t.value);break}case"getExternalResource.reject":{h[t.index].reject(t.reason);break}}}}class di{static ValidateAsync(e,t,i,r){return typeof Worker=="function"?new Promise((n,s)=>{const a=`${Mt}(${io})()`,o=URL.createObjectURL(new Blob([a],{type:"application/javascript"})),l=new Worker(o),c=d=>{l.removeEventListener("error",c),l.removeEventListener("message",f),s(d)},f=d=>{const _=d.data;switch(_.id){case"getExternalResource":{r(_.uri).then(u=>{l.postMessage({id:"getExternalResource.resolve",index:_.index,value:u},[u])},u=>{l.postMessage({id:"getExternalResource.reject",index:_.index,reason:u})});break}case"validate.resolve":{l.removeEventListener("error",c),l.removeEventListener("message",f),n(_.value),l.terminate();break}case"validate.reject":l.removeEventListener("error",c),l.removeEventListener("message",f),s(_.reason),l.terminate()}};l.addEventListener("error",c),l.addEventListener("message",f),l.postMessage({id:"init",url:this.Configuration.url}),l.postMessage({id:"validate",data:e,rootUrl:t,fileName:i})}):(this._LoadScriptPromise||(this._LoadScriptPromise=J.LoadScriptAsync(this.Configuration.url)),this._LoadScriptPromise.then(()=>Mt(e,t,i,r)))}}di.Configuration={url:"https://preview.babylonjs.com/gltf_validator.js"};function zt(h,e,t){try{return Promise.resolve(new Uint8Array(h,e,t))}catch(i){return Promise.reject(i)}}var et;(function(h){h[h.AUTO=0]="AUTO",h[h.FORCE_RIGHT_HANDED=1]="FORCE_RIGHT_HANDED"})(et||(et={}));var ke;(function(h){h[h.NONE=0]="NONE",h[h.FIRST=1]="FIRST",h[h.ALL=2]="ALL"})(ke||(ke={}));var de;(function(h){h[h.LOADING=0]="LOADING",h[h.READY=1]="READY",h[h.COMPLETE=2]="COMPLETE"})(de||(de={}));class te{constructor(){this.onParsedObservable=new B,this.coordinateSystemMode=et.AUTO,this.animationStartMode=ke.FIRST,this.compileMaterials=!1,this.useClipPlane=!1,this.compileShadowGenerators=!1,this.transparencyAsCoverage=!1,this.useRangeRequests=!1,this.createInstances=!0,this.alwaysComputeBoundingBox=!1,this.loadAllMaterials=!1,this.loadOnlyMaterials=!1,this.skipMaterials=!1,this.useSRGBBuffers=!0,this.targetFps=60,this.alwaysComputeSkeletonRootNode=!1,this.preprocessUrlAsync=e=>Promise.resolve(e),this.onMeshLoadedObservable=new B,this.onSkinLoadedObservable=new B,this.onTextureLoadedObservable=new B,this.onMaterialLoadedObservable=new B,this.onCameraLoadedObservable=new B,this.onCompleteObservable=new B,this.onErrorObservable=new B,this.onDisposeObservable=new B,this.onExtensionLoadedObservable=new B,this.validate=!1,this.onValidatedObservable=new B,this._loader=null,this._state=null,this._requests=new Array,this.name="gltf",this.extensions={".gltf":{isBinary:!1},".glb":{isBinary:!0}},this.onLoaderStateChangedObservable=new B,this._logIndentLevel=0,this._loggingEnabled=!1,this._log=this._logDisabled,this._capturePerformanceCounters=!1,this._startPerformanceCounter=this._startPerformanceCounterDisabled,this._endPerformanceCounter=this._endPerformanceCounterDisabled}set onParsed(e){this._onParsedObserver&&this.onParsedObservable.remove(this._onParsedObserver),this._onParsedObserver=this.onParsedObservable.add(e)}set onMeshLoaded(e){this._onMeshLoadedObserver&&this.onMeshLoadedObservable.remove(this._onMeshLoadedObserver),this._onMeshLoadedObserver=this.onMeshLoadedObservable.add(e)}set onTextureLoaded(e){this._onTextureLoadedObserver&&this.onTextureLoadedObservable.remove(this._onTextureLoadedObserver),this._onTextureLoadedObserver=this.onTextureLoadedObservable.add(e)}set onMaterialLoaded(e){this._onMaterialLoadedObserver&&this.onMaterialLoadedObservable.remove(this._onMaterialLoadedObserver),this._onMaterialLoadedObserver=this.onMaterialLoadedObservable.add(e)}set onCameraLoaded(e){this._onCameraLoadedObserver&&this.onCameraLoadedObservable.remove(this._onCameraLoadedObserver),this._onCameraLoadedObserver=this.onCameraLoadedObservable.add(e)}set onComplete(e){this._onCompleteObserver&&this.onCompleteObservable.remove(this._onCompleteObserver),this._onCompleteObserver=this.onCompleteObservable.add(e)}set onError(e){this._onErrorObserver&&this.onErrorObservable.remove(this._onErrorObserver),this._onErrorObserver=this.onErrorObservable.add(e)}set onDispose(e){this._onDisposeObserver&&this.onDisposeObservable.remove(this._onDisposeObserver),this._onDisposeObserver=this.onDisposeObservable.add(e)}set onExtensionLoaded(e){this._onExtensionLoadedObserver&&this.onExtensionLoadedObservable.remove(this._onExtensionLoadedObserver),this._onExtensionLoadedObserver=this.onExtensionLoadedObservable.add(e)}get loggingEnabled(){return this._loggingEnabled}set loggingEnabled(e){this._loggingEnabled!==e&&(this._loggingEnabled=e,this._loggingEnabled?this._log=this._logEnabled:this._log=this._logDisabled)}get capturePerformanceCounters(){return this._capturePerformanceCounters}set capturePerformanceCounters(e){this._capturePerformanceCounters!==e&&(this._capturePerformanceCounters=e,this._capturePerformanceCounters?(this._startPerformanceCounter=this._startPerformanceCounterEnabled,this._endPerformanceCounter=this._endPerformanceCounterEnabled):(this._startPerformanceCounter=this._startPerformanceCounterDisabled,this._endPerformanceCounter=this._endPerformanceCounterDisabled))}set onValidated(e){this._onValidatedObserver&&this.onValidatedObservable.remove(this._onValidatedObserver),this._onValidatedObserver=this.onValidatedObservable.add(e)}dispose(){this._loader&&(this._loader.dispose(),this._loader=null);for(const e of this._requests)e.abort();this._requests.length=0,delete this._progressCallback,this.preprocessUrlAsync=e=>Promise.resolve(e),this.onMeshLoadedObservable.clear(),this.onSkinLoadedObservable.clear(),this.onTextureLoadedObservable.clear(),this.onMaterialLoadedObservable.clear(),this.onCameraLoadedObservable.clear(),this.onCompleteObservable.clear(),this.onExtensionLoadedObservable.clear(),this.onDisposeObservable.notifyObservers(void 0),this.onDisposeObservable.clear()}loadFile(e,t,i,r,n,s){this._progressCallback=r;const a=t.name?"file:":J.GetFolderPath(t),o=t.name||J.GetFilename(t);if(n){if(this.useRangeRequests){this.validate&&V.Warn("glTF validation is not supported when range requests are enabled");const l={abort:()=>{},onCompleteObservable:new B},c={readAsync:(f,d)=>new Promise((_,u)=>{this._loadFile(e,t,p=>{_(new Uint8Array(p))},!0,p=>{u(p)},p=>{p.setRequestHeader("Range",`bytes=${f}-${f+d-1}`)})}),byteLength:0};return this._unpackBinaryAsync(new Ct(c)).then(f=>{l.onCompleteObservable.notifyObservers(l),i(f)},s?f=>s(void 0,f):void 0),l}return this._loadFile(e,t,l=>{this._validate(e,l,a,o),this._unpackBinaryAsync(new Ct({readAsync:(c,f)=>zt(l,c,f),byteLength:l.byteLength})).then(c=>{i(c)},s?c=>s(void 0,c):void 0)},!0,s)}return this._loadFile(e,t,l=>{this._validate(e,l,a,o),i({json:this._parseJson(l)})},n,s)}importMeshAsync(e,t,i,r,n,s){return Promise.resolve().then(()=>(this.onParsedObservable.notifyObservers(i),this.onParsedObservable.clear(),this._log(`Loading ${s||""}`),this._loader=this._getLoader(i),this._loader.importMeshAsync(e,t,null,i,r,n,s)))}loadAsync(e,t,i,r,n){return Promise.resolve().then(()=>(this.onParsedObservable.notifyObservers(t),this.onParsedObservable.clear(),this._log(`Loading ${n||""}`),this._loader=this._getLoader(t),this._loader.loadAsync(e,t,i,r,n)))}loadAssetContainerAsync(e,t,i,r,n){return Promise.resolve().then(()=>{this.onParsedObservable.notifyObservers(t),this.onParsedObservable.clear(),this._log(`Loading ${n||""}`),this._loader=this._getLoader(t);const s=new to(e),a=[];this.onMaterialLoadedObservable.add(c=>{a.push(c)});const o=[];this.onTextureLoadedObservable.add(c=>{o.push(c)});const l=[];return this.onCameraLoadedObservable.add(c=>{l.push(c)}),this._loader.importMeshAsync(null,e,s,t,i,r,n).then(c=>(Array.prototype.push.apply(s.geometries,c.geometries),Array.prototype.push.apply(s.meshes,c.meshes),Array.prototype.push.apply(s.particleSystems,c.particleSystems),Array.prototype.push.apply(s.skeletons,c.skeletons),Array.prototype.push.apply(s.animationGroups,c.animationGroups),Array.prototype.push.apply(s.materials,a),Array.prototype.push.apply(s.textures,o),Array.prototype.push.apply(s.lights,c.lights),Array.prototype.push.apply(s.transformNodes,c.transformNodes),Array.prototype.push.apply(s.cameras,l),s))})}canDirectLoad(e){return e.indexOf("asset")!==-1&&e.indexOf("version")!==-1||e.startsWith("data:base64,"+te._MagicBase64Encoded)||e.startsWith("data:;base64,"+te._MagicBase64Encoded)||e.startsWith("data:application/octet-stream;base64,"+te._MagicBase64Encoded)||e.startsWith("data:model/gltf-binary;base64,"+te._MagicBase64Encoded)}directLoad(e,t){if(t.startsWith("base64,"+te._MagicBase64Encoded)||t.startsWith(";base64,"+te._MagicBase64Encoded)||t.startsWith("application/octet-stream;base64,"+te._MagicBase64Encoded)||t.startsWith("model/gltf-binary;base64,"+te._MagicBase64Encoded)){const i=ei(t);return this._validate(e,i),this._unpackBinaryAsync(new Ct({readAsync:(r,n)=>zt(i,r,n),byteLength:i.byteLength}))}return this._validate(e,t),Promise.resolve({json:this._parseJson(t)})}createPlugin(){return new te}get loaderState(){return this._state}whenCompleteAsync(){return new Promise((e,t)=>{this.onCompleteObservable.addOnce(()=>{e()}),this.onErrorObservable.addOnce(i=>{t(i)})})}_setState(e){this._state!==e&&(this._state=e,this.onLoaderStateChangedObservable.notifyObservers(this._state),this._log(de[this._state]))}_loadFile(e,t,i,r,n,s){const a=e._loadFile(t,i,o=>{this._onProgress(o,a)},!0,r,n,s);return a.onCompleteObservable.add(o=>{this._requests.splice(this._requests.indexOf(o),1)}),this._requests.push(a),a}_onProgress(e,t){if(!this._progressCallback)return;t._lengthComputable=e.lengthComputable,t._loaded=e.loaded,t._total=e.total;let i=!0,r=0,n=0;for(const s of this._requests){if(s._lengthComputable===void 0||s._loaded===void 0||s._total===void 0)return;i=i&&s._lengthComputable,r+=s._loaded,n+=s._total}this._progressCallback({lengthComputable:i,loaded:r,total:i?n:0})}_validate(e,t,i="",r=""){this.validate&&(this._startPerformanceCounter("Validate JSON"),di.ValidateAsync(t,i,r,n=>this.preprocessUrlAsync(i+n).then(s=>e._loadFileAsync(s,void 0,!0,!0))).then(n=>{this._endPerformanceCounter("Validate JSON"),this.onValidatedObservable.notifyObservers(n),this.onValidatedObservable.clear()},n=>{this._endPerformanceCounter("Validate JSON"),J.Warn(`Failed to validate: ${n.message}`),this.onValidatedObservable.clear()}))}_getLoader(e){const t=e.json.asset||{};this._log(`Asset version: ${t.version}`),t.minVersion&&this._log(`Asset minimum version: ${t.minVersion}`),t.generator&&this._log(`Asset generator: ${t.generator}`);const i=te._parseVersion(t.version);if(!i)throw new Error("Invalid version: "+t.version);if(t.minVersion!==void 0){const s=te._parseVersion(t.minVersion);if(!s)throw new Error("Invalid minimum version: "+t.minVersion);if(te._compareVersion(s,{major:2,minor:0})>0)throw new Error("Incompatible minimum version: "+t.minVersion)}const n={1:te._CreateGLTF1Loader,2:te._CreateGLTF2Loader}[i.major];if(!n)throw new Error("Unsupported version: "+t.version);return n(this)}_parseJson(e){this._startPerformanceCounter("Parse JSON"),this._log(`JSON length: ${e.length}`);const t=JSON.parse(e);return this._endPerformanceCounter("Parse JSON"),t}_unpackBinaryAsync(e){return this._startPerformanceCounter("Unpack Binary"),e.loadAsync(20).then(()=>{const t={Magic:1179937895},i=e.readUint32();if(i!==t.Magic)throw new at("Unexpected magic: "+i,ot.GLTFLoaderUnexpectedMagicError);const r=e.readUint32();this.loggingEnabled&&this._log(`Binary version: ${r}`);const n=e.readUint32();!this.useRangeRequests&&n!==e.buffer.byteLength&&V.Warn(`Length in header does not match actual data length: ${n} != ${e.buffer.byteLength}`);let s;switch(r){case 1:{s=this._unpackBinaryV1Async(e,n);break}case 2:{s=this._unpackBinaryV2Async(e,n);break}default:throw new Error("Unsupported version: "+r)}return this._endPerformanceCounter("Unpack Binary"),s})}_unpackBinaryV1Async(e,t){const i={JSON:0},r=e.readUint32(),n=e.readUint32();if(n!==i.JSON)throw new Error(`Unexpected content format: ${n}`);const s=t-e.byteOffset,a={json:this._parseJson(e.readString(r)),bin:null};if(s!==0){const o=e.byteOffset;a.bin={readAsync:(l,c)=>e.buffer.readAsync(o+l,c),byteLength:s}}return Promise.resolve(a)}_unpackBinaryV2Async(e,t){const i={JSON:1313821514,BIN:5130562},r=e.readUint32();if(e.readUint32()!==i.JSON)throw new Error("First chunk format is not JSON");return e.byteOffset+r===t?e.loadAsync(r).then(()=>({json:this._parseJson(e.readString(r)),bin:null})):e.loadAsync(r+8).then(()=>{const s={json:this._parseJson(e.readString(r)),bin:null},a=()=>{const o=e.readUint32();switch(e.readUint32()){case i.JSON:throw new Error("Unexpected JSON chunk");case i.BIN:{const c=e.byteOffset;s.bin={readAsync:(f,d)=>e.buffer.readAsync(c+f,d),byteLength:o},e.skipBytes(o);break}default:{e.skipBytes(o);break}}return e.byteOffset!==t?e.loadAsync(8).then(a):Promise.resolve(s)};return a()})}static _parseVersion(e){if(e==="1.0"||e==="1.0.1")return{major:1,minor:0};const t=(e+"").match(/^(\d+)\.(\d+)/);return t?{major:parseInt(t[1]),minor:parseInt(t[2])}:null}static _compareVersion(e,t){return e.major>t.major?1:e.major<t.major?-1:e.minor>t.minor?1:e.minor<t.minor?-1:0}_logOpen(e){this._log(e),this._logIndentLevel++}_logClose(){--this._logIndentLevel}_logEnabled(e){const t=te._logSpaces.substr(0,this._logIndentLevel*2);V.Log(`${t}${e}`)}_logDisabled(e){}_startPerformanceCounterEnabled(e){J.StartPerformanceCounter(e)}_startPerformanceCounterDisabled(e){}_endPerformanceCounterEnabled(e){J.EndPerformanceCounter(e)}_endPerformanceCounterDisabled(e){}}te.IncrementalLoading=!0;te.HomogeneousCoordinates=!1;te._MagicBase64Encoded="Z2xURg";te._logSpaces="                                ";U&&U.RegisterPlugin(new te);function Wt(h,e,t,i){return v.FromArray(e,t).scaleInPlace(i)}function ro(h,e,t,i){return ue.FromArray(e,t).scaleInPlace(i)}function no(h,e,t,i){const r=new Array(h._numMorphTargets);for(let n=0;n<r.length;n++)r[n]=e[t++]*i;return r}class ui{constructor(e,t,i,r){this.type=e,this.name=t,this.getValue=i,this.getStride=r}_buildAnimation(e,t,i){const r=new Te(e,this.name,t,this.type);return r.setKeys(i),r}}class It extends ui{buildAnimations(e,t,i,r,n){n(e._babylonTransformNode,this._buildAnimation(t,i,r))}}class so extends ui{buildAnimations(e,t,i,r,n){if(e._numMorphTargets)for(let s=0;s<e._numMorphTargets;s++){const a=new Te(`${t}_${s}`,this.name,i,this.type);if(a.setKeys(r.map(o=>({frame:o.frame,inTangent:o.inTangent?o.inTangent[s]:void 0,value:o.value[s],outTangent:o.outTangent?o.outTangent[s]:void 0,interpolation:o.interpolation}))),e._primitiveBabylonMeshes){for(const o of e._primitiveBabylonMeshes)if(o.morphTargetManager){const l=o.morphTargetManager.getTarget(s),c=a.clone();l.animations.push(c),n(l,c)}}}}}const st={translation:[new It(Te.ANIMATIONTYPE_VECTOR3,"position",Wt,()=>3)],rotation:[new It(Te.ANIMATIONTYPE_QUATERNION,"rotationQuaternion",ro,()=>4)],scale:[new It(Te.ANIMATIONTYPE_VECTOR3,"scaling",Wt,()=>3)],weights:[new so(Te.ANIMATIONTYPE_FLOAT,"influence",no,h=>h._numMorphTargets)]};function _i(...h){const e=t=>t&&typeof t=="object";return h.reduce((t,i)=>(Object.keys(i).forEach(r=>{const n=t[r],s=i[r];Array.isArray(n)&&Array.isArray(s)?t[r]=n.concat(...s):e(n)&&e(s)?t[r]=_i(n,s):t[r]=s}),t),{})}class w{static Get(e,t,i){if(!t||i==null||!t[i])throw new Error(`${e}: Failed to find index (${i})`);return t[i]}static Assign(e){if(e)for(let t=0;t<e.length;t++)e[t].index=t}}class W{constructor(e){this._completePromises=new Array,this._assetContainer=null,this._babylonLights=[],this._disableInstancedMesh=0,this._extensions=new Array,this._disposed=!1,this._rootUrl=null,this._fileName=null,this._uniqueRootUrl=null,this._bin=null,this._rootBabylonMesh=null,this._defaultBabylonMaterialData={},this._postSceneLoadActions=new Array,this._parent=e}static RegisterExtension(e,t){W.UnregisterExtension(e)&&V.Warn(`Extension with the name '${e}' already exists`),W._RegisteredExtensions[e]={factory:t}}static UnregisterExtension(e){return W._RegisteredExtensions[e]?(delete W._RegisteredExtensions[e],!0):!1}get gltf(){if(!this._gltf)throw new Error("glTF JSON is not available");return this._gltf}get bin(){return this._bin}get parent(){return this._parent}get babylonScene(){if(!this._babylonScene)throw new Error("Scene is not available");return this._babylonScene}get rootBabylonMesh(){return this._rootBabylonMesh}dispose(){this._disposed||(this._disposed=!0,this._completePromises.length=0,this._extensions.forEach(e=>e.dispose&&e.dispose()),this._extensions.length=0,this._gltf=null,this._bin=null,this._babylonScene=null,this._rootBabylonMesh=null,this._defaultBabylonMaterialData={},this._postSceneLoadActions.length=0,this._parent.dispose())}importMeshAsync(e,t,i,r,n,s,a=""){return Promise.resolve().then(()=>{this._babylonScene=t,this._assetContainer=i,this._loadData(r);let o=null;if(e){const l={};if(this._gltf.nodes)for(const f of this._gltf.nodes)f.name&&(l[f.name]=f.index);o=(e instanceof Array?e:[e]).map(f=>{const d=l[f];if(d===void 0)throw new Error(`Failed to find node '${f}'`);return d})}return this._loadAsync(n,a,o,()=>({meshes:this._getMeshes(),particleSystems:[],skeletons:this._getSkeletons(),animationGroups:this._getAnimationGroups(),lights:this._babylonLights,transformNodes:this._getTransformNodes(),geometries:this._getGeometries()}))})}loadAsync(e,t,i,r,n=""){return Promise.resolve().then(()=>(this._babylonScene=e,this._loadData(t),this._loadAsync(i,n,null,()=>{})))}_loadAsync(e,t,i,r){return Promise.resolve().then(()=>{this._rootUrl=e,this._uniqueRootUrl=!e.startsWith("file:")&&t?e:`${e}${Date.now()}/`,this._fileName=t,this._loadExtensions(),this._checkExtensions();const n=`${de[de.LOADING]} => ${de[de.READY]}`,s=`${de[de.LOADING]} => ${de[de.COMPLETE]}`;this._parent._startPerformanceCounter(n),this._parent._startPerformanceCounter(s),this._parent._setState(de.LOADING),this._extensionsOnLoading();const a=new Array,o=this._babylonScene.blockMaterialDirtyMechanism;if(this._babylonScene.blockMaterialDirtyMechanism=!0,!this.parent.loadOnlyMaterials){if(i)a.push(this.loadSceneAsync("/nodes",{nodes:i,index:-1}));else if(this._gltf.scene!=null||this._gltf.scenes&&this._gltf.scenes[0]){const c=w.Get("/scene",this._gltf.scenes,this._gltf.scene||0);a.push(this.loadSceneAsync(`/scenes/${c.index}`,c))}}if(!this.parent.skipMaterials&&this.parent.loadAllMaterials&&this._gltf.materials)for(let c=0;c<this._gltf.materials.length;++c){const f=this._gltf.materials[c],d="/materials/"+c,_=ne.TriangleFillMode;a.push(this._loadMaterialAsync(d,f,null,_,()=>{}))}return this._babylonScene.blockMaterialDirtyMechanism=o,this._parent.compileMaterials&&a.push(this._compileMaterialsAsync()),this._parent.compileShadowGenerators&&a.push(this._compileShadowGeneratorsAsync()),Promise.all(a).then(()=>(this._rootBabylonMesh&&this._rootBabylonMesh.setEnabled(!0),this._extensionsOnReady(),this._parent._setState(de.READY),this._startAnimations(),r())).then(c=>(this._parent._endPerformanceCounter(n),J.SetImmediate(()=>{this._disposed||Promise.all(this._completePromises).then(()=>{this._parent._endPerformanceCounter(s),this._parent._setState(de.COMPLETE),this._parent.onCompleteObservable.notifyObservers(void 0),this._parent.onCompleteObservable.clear(),this.dispose()},f=>{this._parent.onErrorObservable.notifyObservers(f),this._parent.onErrorObservable.clear(),this.dispose()})}),c))}).catch(n=>{throw this._disposed||(this._parent.onErrorObservable.notifyObservers(n),this._parent.onErrorObservable.clear(),this.dispose()),n})}_loadData(e){if(this._gltf=e.json,this._setupData(),e.bin){const t=this._gltf.buffers;if(t&&t[0]&&!t[0].uri){const i=t[0];(i.byteLength<e.bin.byteLength-3||i.byteLength>e.bin.byteLength)&&V.Warn(`Binary buffer length (${i.byteLength}) from JSON does not match chunk length (${e.bin.byteLength})`),this._bin=e.bin}else V.Warn("Unexpected BIN chunk")}}_setupData(){if(w.Assign(this._gltf.accessors),w.Assign(this._gltf.animations),w.Assign(this._gltf.buffers),w.Assign(this._gltf.bufferViews),w.Assign(this._gltf.cameras),w.Assign(this._gltf.images),w.Assign(this._gltf.materials),w.Assign(this._gltf.meshes),w.Assign(this._gltf.nodes),w.Assign(this._gltf.samplers),w.Assign(this._gltf.scenes),w.Assign(this._gltf.skins),w.Assign(this._gltf.textures),this._gltf.nodes){const e={};for(const i of this._gltf.nodes)if(i.children)for(const r of i.children)e[r]=i.index;const t=this._createRootNode();for(const i of this._gltf.nodes){const r=e[i.index];i.parent=r===void 0?t:this._gltf.nodes[r]}}}_loadExtensions(){for(const e in W._RegisteredExtensions){const t=W._RegisteredExtensions[e].factory(this);t.name!==e&&V.Warn(`The name of the glTF loader extension instance does not match the registered name: ${t.name} !== ${e}`),this._extensions.push(t),this._parent.onExtensionLoadedObservable.notifyObservers(t)}this._extensions.sort((e,t)=>(e.order||Number.MAX_VALUE)-(t.order||Number.MAX_VALUE)),this._parent.onExtensionLoadedObservable.clear()}_checkExtensions(){if(this._gltf.extensionsRequired){for(const e of this._gltf.extensionsRequired)if(!this._extensions.some(i=>i.name===e&&i.enabled))throw new Error(`Require extension ${e} is not available`)}}_createRootNode(){this._babylonScene._blockEntityCollection=!!this._assetContainer,this._rootBabylonMesh=new De("__root__",this._babylonScene),this._rootBabylonMesh._parentContainer=this._assetContainer,this._babylonScene._blockEntityCollection=!1,this._rootBabylonMesh.setEnabled(!1);const e={_babylonTransformNode:this._rootBabylonMesh,index:-1};switch(this._parent.coordinateSystemMode){case et.AUTO:{this._babylonScene.useRightHandedSystem||(e.rotation=[0,1,0,0],e.scale=[1,1,-1],W._LoadTransform(e,this._rootBabylonMesh));break}case et.FORCE_RIGHT_HANDED:{this._babylonScene.useRightHandedSystem=!0;break}default:throw new Error(`Invalid coordinate system mode (${this._parent.coordinateSystemMode})`)}return this._parent.onMeshLoadedObservable.notifyObservers(this._rootBabylonMesh),e}loadSceneAsync(e,t){const i=this._extensionsLoadSceneAsync(e,t);if(i)return i;const r=new Array;if(this.logOpen(`${e} ${t.name||""}`),t.nodes)for(const n of t.nodes){const s=w.Get(`${e}/nodes/${n}`,this._gltf.nodes,n);r.push(this.loadNodeAsync(`/nodes/${s.index}`,s,a=>{a.parent=this._rootBabylonMesh}))}for(const n of this._postSceneLoadActions)n();return r.push(this._loadAnimationsAsync()),this.logClose(),Promise.all(r).then(()=>{})}_forEachPrimitive(e,t){if(e._primitiveBabylonMeshes)for(const i of e._primitiveBabylonMeshes)t(i)}_getGeometries(){const e=new Array,t=this._gltf.nodes;if(t)for(const i of t)this._forEachPrimitive(i,r=>{const n=r.geometry;n&&e.indexOf(n)===-1&&e.push(n)});return e}_getMeshes(){const e=new Array;this._rootBabylonMesh&&e.push(this._rootBabylonMesh);const t=this._gltf.nodes;if(t)for(const i of t)this._forEachPrimitive(i,r=>{e.push(r)});return e}_getTransformNodes(){const e=new Array,t=this._gltf.nodes;if(t)for(const i of t)i._babylonTransformNode&&i._babylonTransformNode.getClassName()==="TransformNode"&&e.push(i._babylonTransformNode),i._babylonTransformNodeForSkin&&e.push(i._babylonTransformNodeForSkin);return e}_getSkeletons(){const e=new Array,t=this._gltf.skins;if(t)for(const i of t)i._data&&e.push(i._data.babylonSkeleton);return e}_getAnimationGroups(){const e=new Array,t=this._gltf.animations;if(t)for(const i of t)i._babylonAnimationGroup&&e.push(i._babylonAnimationGroup);return e}_startAnimations(){switch(this._parent.animationStartMode){case ke.NONE:break;case ke.FIRST:{const e=this._getAnimationGroups();e.length!==0&&e[0].start(!0);break}case ke.ALL:{const e=this._getAnimationGroups();for(const t of e)t.start(!0);break}default:{V.Error(`Invalid animation start mode (${this._parent.animationStartMode})`);return}}}loadNodeAsync(e,t,i=()=>{}){const r=this._extensionsLoadNodeAsync(e,t,i);if(r)return r;if(t._babylonTransformNode)throw new Error(`${e}: Invalid recursive node hierarchy`);const n=new Array;this.logOpen(`${e} ${t.name||""}`);const s=a=>{if(W.AddPointerMetadata(a,e),W._LoadTransform(t,a),t.camera!=null){const o=w.Get(`${e}/camera`,this._gltf.cameras,t.camera);n.push(this.loadCameraAsync(`/cameras/${o.index}`,o,l=>{l.parent=a}))}if(t.children)for(const o of t.children){const l=w.Get(`${e}/children/${o}`,this._gltf.nodes,o);n.push(this.loadNodeAsync(`/nodes/${l.index}`,l,c=>{c.parent=a}))}i(a)};if(t.mesh==null||t.skin!=null){const a=t.name||`node${t.index}`;this._babylonScene._blockEntityCollection=!!this._assetContainer;const o=new Vt(a,this._babylonScene);o._parentContainer=this._assetContainer,this._babylonScene._blockEntityCollection=!1,t.mesh==null?t._babylonTransformNode=o:t._babylonTransformNodeForSkin=o,s(o)}if(t.mesh!=null)if(t.skin==null){const a=w.Get(`${e}/mesh`,this._gltf.meshes,t.mesh);n.push(this._loadMeshAsync(`/meshes/${a.index}`,t,a,s))}else{const a=w.Get(`${e}/mesh`,this._gltf.meshes,t.mesh);n.push(this._loadMeshAsync(`/meshes/${a.index}`,t,a,o=>{const l=t._babylonTransformNodeForSkin;o.metadata=_i(l.metadata,o.metadata||{});const c=w.Get(`${e}/skin`,this._gltf.skins,t.skin);n.push(this._loadSkinAsync(`/skins/${c.index}`,t,c,f=>{this._forEachPrimitive(t,d=>{d.skeleton=f}),this._postSceneLoadActions.push(()=>{if(c.skeleton!=null){const d=w.Get(`/skins/${c.index}/skeleton`,this._gltf.nodes,c.skeleton).parent;t.index===d.index?o.parent=l.parent:o.parent=d._babylonTransformNode}else o.parent=this._rootBabylonMesh;this._parent.onSkinLoadedObservable.notifyObservers({node:l,skinnedNode:o})})}))}))}return this.logClose(),Promise.all(n).then(()=>(this._forEachPrimitive(t,a=>{a.geometry&&a.geometry.useBoundingInfoFromGeometry?a._updateBoundingInfo():a.refreshBoundingInfo(!0)}),t._babylonTransformNode))}_loadMeshAsync(e,t,i,r){const n=i.primitives;if(!n||!n.length)throw new Error(`${e}: Primitives are missing`);n[0].index==null&&w.Assign(n);const s=new Array;this.logOpen(`${e} ${i.name||""}`);const a=t.name||`node${t.index}`;if(n.length===1){const o=i.primitives[0];s.push(this._loadMeshPrimitiveAsync(`${e}/primitives/${o.index}`,a,t,i,o,l=>{t._babylonTransformNode=l,t._primitiveBabylonMeshes=[l]}))}else{this._babylonScene._blockEntityCollection=!!this._assetContainer,t._babylonTransformNode=new Vt(a,this._babylonScene),t._babylonTransformNode._parentContainer=this._assetContainer,this._babylonScene._blockEntityCollection=!1,t._primitiveBabylonMeshes=[];for(const o of n)s.push(this._loadMeshPrimitiveAsync(`${e}/primitives/${o.index}`,`${a}_primitive${o.index}`,t,i,o,l=>{l.parent=t._babylonTransformNode,t._primitiveBabylonMeshes.push(l)}))}return r(t._babylonTransformNode),this.logClose(),Promise.all(s).then(()=>t._babylonTransformNode)}_loadMeshPrimitiveAsync(e,t,i,r,n,s){const a=this._extensionsLoadMeshPrimitiveAsync(e,t,i,r,n,s);if(a)return a;this.logOpen(`${e}`);const o=this._disableInstancedMesh===0&&this._parent.createInstances&&i.skin==null&&!r.primitives[0].targets;let l,c;if(o&&n._instanceData)this._babylonScene._blockEntityCollection=!!this._assetContainer,l=n._instanceData.babylonSourceMesh.createInstance(t),l._parentContainer=this._assetContainer,this._babylonScene._blockEntityCollection=!1,c=n._instanceData.promise;else{const f=new Array;this._babylonScene._blockEntityCollection=!!this._assetContainer;const d=new De(t,this._babylonScene);d._parentContainer=this._assetContainer,this._babylonScene._blockEntityCollection=!1,d.overrideMaterialSideOrientation=this._babylonScene.useRightHandedSystem?ne.CounterClockWiseSideOrientation:ne.ClockWiseSideOrientation,this._createMorphTargets(e,i,r,n,d),f.push(this._loadVertexDataAsync(e,n,d).then(u=>this._loadMorphTargetsAsync(e,n,d,u).then(()=>{this._disposed||(this._babylonScene._blockEntityCollection=!!this._assetContainer,u.applyToMesh(d),u._parentContainer=this._assetContainer,this._babylonScene._blockEntityCollection=!1)})));const _=W._GetDrawMode(e,n.mode);if(n.material==null){let u=this._defaultBabylonMaterialData[_];u||(u=this._createDefaultMaterial("__GLTFLoader._default",_),this._parent.onMaterialLoadedObservable.notifyObservers(u),this._defaultBabylonMaterialData[_]=u),d.material=u}else if(!this.parent.skipMaterials){const u=w.Get(`${e}/material`,this._gltf.materials,n.material);f.push(this._loadMaterialAsync(`/materials/${u.index}`,u,d,_,p=>{d.material=p}))}c=Promise.all(f),o&&(n._instanceData={babylonSourceMesh:d,promise:c}),l=d}return W.AddPointerMetadata(l,e),this._parent.onMeshLoadedObservable.notifyObservers(l),s(l),this.logClose(),c.then(()=>l)}_loadVertexDataAsync(e,t,i){const r=this._extensionsLoadVertexDataAsync(e,t,i);if(r)return r;const n=t.attributes;if(!n)throw new Error(`${e}: Attributes are missing`);const s=new Array,a=new Bi(i.name,this._babylonScene);if(t.indices==null)i.isUnIndexed=!0;else{const l=w.Get(`${e}/indices`,this._gltf.accessors,t.indices);s.push(this._loadIndicesAccessorAsync(`/accessors/${l.index}`,l).then(c=>{a.setIndices(c)}))}const o=(l,c,f)=>{if(n[l]==null)return;i._delayInfo=i._delayInfo||[],i._delayInfo.indexOf(c)===-1&&i._delayInfo.push(c);const d=w.Get(`${e}/attributes/${l}`,this._gltf.accessors,n[l]);s.push(this._loadVertexAccessorAsync(`/accessors/${d.index}`,d,c).then(_=>{if(_.getKind()===y.PositionKind&&!this.parent.alwaysComputeBoundingBox&&!i.skeleton){const u=d.min,p=d.max;if(u!==void 0&&p!==void 0){if(d.normalized&&d.componentType!==5126){let C=1;switch(d.componentType){case 5120:C=127;break;case 5121:C=255;break;case 5122:C=32767;break;case 5123:C=65535;break}for(let R=0;R<3;++R)u[R]=Math.max(u[R]/C,-1),p[R]=Math.max(p[R]/C,-1)}const g=P.Vector3[0],T=P.Vector3[1];g.copyFromFloats(...u),T.copyFromFloats(...p),a._boundingInfo=new Ot(g,T),a.useBoundingInfoFromGeometry=!0}}a.setVerticesBuffer(_,d.count)})),c==y.MatricesIndicesExtraKind&&(i.numBoneInfluencers=8),f&&f(d)};return o("POSITION",y.PositionKind),o("NORMAL",y.NormalKind),o("TANGENT",y.TangentKind),o("TEXCOORD_0",y.UVKind),o("TEXCOORD_1",y.UV2Kind),o("TEXCOORD_2",y.UV3Kind),o("TEXCOORD_3",y.UV4Kind),o("TEXCOORD_4",y.UV5Kind),o("TEXCOORD_5",y.UV6Kind),o("JOINTS_0",y.MatricesIndicesKind),o("WEIGHTS_0",y.MatricesWeightsKind),o("JOINTS_1",y.MatricesIndicesExtraKind),o("WEIGHTS_1",y.MatricesWeightsExtraKind),o("COLOR_0",y.ColorKind,l=>{l.type==="VEC4"&&(i.hasVertexAlpha=!0)}),Promise.all(s).then(()=>a)}_createMorphTargets(e,t,i,r,n){if(!r.targets)return;if(t._numMorphTargets==null)t._numMorphTargets=r.targets.length;else if(r.targets.length!==t._numMorphTargets)throw new Error(`${e}: Primitives do not have the same number of targets`);const s=i.extras?i.extras.targetNames:null;n.morphTargetManager=new Xe(n.getScene()),n.morphTargetManager.areUpdatesFrozen=!0;for(let a=0;a<r.targets.length;a++){const o=t.weights?t.weights[a]:i.weights?i.weights[a]:0,l=s?s[a]:`morphTarget${a}`;n.morphTargetManager.addTarget(new we(l,o,n.getScene()))}}_loadMorphTargetsAsync(e,t,i,r){if(!t.targets)return Promise.resolve();const n=new Array,s=i.morphTargetManager;for(let a=0;a<s.numTargets;a++){const o=s.getTarget(a);n.push(this._loadMorphTargetVertexDataAsync(`${e}/targets/${a}`,r,t.targets[a],o))}return Promise.all(n).then(()=>{s.areUpdatesFrozen=!1})}_loadMorphTargetVertexDataAsync(e,t,i,r){const n=new Array,s=(a,o,l)=>{if(i[a]==null)return;const c=t.getVertexBuffer(o);if(!c)return;const f=w.Get(`${e}/${a}`,this._gltf.accessors,i[a]);n.push(this._loadFloatAccessorAsync(`/accessors/${f.index}`,f).then(d=>{l(c,d)}))};return s("POSITION",y.PositionKind,(a,o)=>{const l=new Float32Array(o.length);a.forEach(o.length,(c,f)=>{l[f]=o[f]+c}),r.setPositions(l)}),s("NORMAL",y.NormalKind,(a,o)=>{const l=new Float32Array(o.length);a.forEach(l.length,(c,f)=>{l[f]=o[f]+c}),r.setNormals(l)}),s("TANGENT",y.TangentKind,(a,o)=>{const l=new Float32Array(o.length/3*4);let c=0;a.forEach(o.length/3*4,(f,d)=>{(d+1)%4!==0&&(l[c]=o[c]+f,c++)}),r.setTangents(l)}),Promise.all(n).then(()=>{})}static _LoadTransform(e,t){if(e.skin!=null)return;let i=v.Zero(),r=ue.Identity(),n=v.One();e.matrix?F.FromArray(e.matrix).decompose(n,r,i):(e.translation&&(i=v.FromArray(e.translation)),e.rotation&&(r=ue.FromArray(e.rotation)),e.scale&&(n=v.FromArray(e.scale))),t.position=i,t.rotationQuaternion=r,t.scaling=n}_loadSkinAsync(e,t,i,r){const n=this._extensionsLoadSkinAsync(e,t,i);if(n)return n;if(i._data)return r(i._data.babylonSkeleton),i._data.promise;const s=`skeleton${i.index}`;this._babylonScene._blockEntityCollection=!!this._assetContainer;const a=new ct(i.name||s,s,this._babylonScene);a._parentContainer=this._assetContainer,this._babylonScene._blockEntityCollection=!1,this._loadBones(e,i,a);const o=this._loadSkinInverseBindMatricesDataAsync(e,i).then(l=>{this._updateBoneMatrices(a,l)});return i._data={babylonSkeleton:a,promise:o},r(a),o}_loadBones(e,t,i){if(t.skeleton==null||this._parent.alwaysComputeSkeletonRootNode){const n=this._findSkeletonRootNode(`${e}/joints`,t.joints);if(n)if(t.skeleton===void 0)t.skeleton=n.index;else{const s=(o,l)=>{for(;l.parent;l=l.parent)if(l.parent===o)return!0;return!1},a=w.Get(`${e}/skeleton`,this._gltf.nodes,t.skeleton);a!==n&&!s(a,n)&&(V.Warn(`${e}/skeleton: Overriding with nearest common ancestor as skeleton node is not a common root`),t.skeleton=n.index)}else V.Warn(`${e}: Failed to find common root`)}const r={};for(const n of t.joints){const s=w.Get(`${e}/joints/${n}`,this._gltf.nodes,n);this._loadBone(s,t,i,r)}}_findSkeletonRootNode(e,t){if(t.length===0)return null;const i={};for(const n of t){const s=new Array;let a=w.Get(`${e}/${n}`,this._gltf.nodes,n);for(;a.index!==-1;)s.unshift(a),a=a.parent;i[n]=s}let r=null;for(let n=0;;++n){let s=i[t[0]];if(n>=s.length)return r;const a=s[n];for(let o=1;o<t.length;++o)if(s=i[t[o]],n>=s.length||a!==s[n])return r;r=a}}_loadBone(e,t,i,r){let n=r[e.index];if(n)return n;let s=null;e.index!==t.skeleton&&(e.parent&&e.parent.index!==-1?s=this._loadBone(e.parent,t,i,r):t.skeleton!==void 0&&V.Warn(`/skins/${t.index}/skeleton: Skeleton node is not a common root`));const a=t.joints.indexOf(e.index);return n=new H(e.name||`joint${e.index}`,i,s,this._getNodeMatrix(e),null,null,a),r[e.index]=n,this._postSceneLoadActions.push(()=>{n.linkTransformNode(e._babylonTransformNode)}),n}_loadSkinInverseBindMatricesDataAsync(e,t){if(t.inverseBindMatrices==null)return Promise.resolve(null);const i=w.Get(`${e}/inverseBindMatrices`,this._gltf.accessors,t.inverseBindMatrices);return this._loadFloatAccessorAsync(`/accessors/${i.index}`,i)}_updateBoneMatrices(e,t){for(const i of e.bones){const r=F.Identity(),n=i._index;t&&n!==-1&&(F.FromArrayToRef(t,n*16,r),r.invertToRef(r));const s=i.getParent();s&&r.multiplyToRef(s.getInvertedAbsoluteTransform(),r),i.updateMatrix(r,!1,!1),i._updateDifferenceMatrix(void 0,!1)}}_getNodeMatrix(e){return e.matrix?F.FromArray(e.matrix):F.Compose(e.scale?v.FromArray(e.scale):v.One(),e.rotation?ue.FromArray(e.rotation):ue.Identity(),e.translation?v.FromArray(e.translation):v.Zero())}loadCameraAsync(e,t,i=()=>{}){const r=this._extensionsLoadCameraAsync(e,t,i);if(r)return r;const n=new Array;this.logOpen(`${e} ${t.name||""}`),this._babylonScene._blockEntityCollection=!!this._assetContainer;const s=new rt(t.name||`camera${t.index}`,v.Zero(),this._babylonScene,!1);switch(s._parentContainer=this._assetContainer,this._babylonScene._blockEntityCollection=!1,s.ignoreParentScaling=!0,t._babylonCamera=s,s.rotation=new v(0,Math.PI,0),t.type){case"perspective":{const a=t.perspective;if(!a)throw new Error(`${e}: Camera perspective properties are missing`);s.fov=a.yfov,s.minZ=a.znear,s.maxZ=a.zfar||0;break}case"orthographic":{if(!t.orthographic)throw new Error(`${e}: Camera orthographic properties are missing`);s.mode=Vi.ORTHOGRAPHIC_CAMERA,s.orthoLeft=-t.orthographic.xmag,s.orthoRight=t.orthographic.xmag,s.orthoBottom=-t.orthographic.ymag,s.orthoTop=t.orthographic.ymag,s.minZ=t.orthographic.znear,s.maxZ=t.orthographic.zfar;break}default:throw new Error(`${e}: Invalid camera type (${t.type})`)}return W.AddPointerMetadata(s,e),this._parent.onCameraLoadedObservable.notifyObservers(s),i(s),this.logClose(),Promise.all(n).then(()=>s)}_loadAnimationsAsync(){const e=this._gltf.animations;if(!e)return Promise.resolve();const t=new Array;for(let i=0;i<e.length;i++){const r=e[i];t.push(this.loadAnimationAsync(`/animations/${r.index}`,r).then(n=>{n.targetedAnimations.length===0&&n.dispose()}))}return Promise.all(t).then(()=>{})}loadAnimationAsync(e,t){const i=this._extensionsLoadAnimationAsync(e,t);if(i)return i;this._babylonScene._blockEntityCollection=!!this._assetContainer;const r=new ft(t.name||`animation${t.index}`,this._babylonScene);r._parentContainer=this._assetContainer,this._babylonScene._blockEntityCollection=!1,t._babylonAnimationGroup=r;const n=new Array;w.Assign(t.channels),w.Assign(t.samplers);for(const s of t.channels)n.push(this._loadAnimationChannelAsync(`${e}/channels/${s.index}`,e,t,s,(a,o)=>{a.animations=a.animations||[],a.animations.push(o),r.addTargetedAnimation(o,a)}));return Promise.all(n).then(()=>(r.normalize(0),r))}_loadAnimationChannelAsync(e,t,i,r,n){const s=this._extensionsLoadAnimationChannelAsync(e,t,i,r,n);if(s)return s;if(r.target.node==null)return Promise.resolve();const a=w.Get(`${e}/target/node`,this._gltf.nodes,r.target.node);if(r.target.path==="weights"&&!a._numMorphTargets||r.target.path!=="weights"&&!a._babylonTransformNode)return Promise.resolve();let o;switch(r.target.path){case"translation":{o=st.translation;break}case"rotation":{o=st.rotation;break}case"scale":{o=st.scale;break}case"weights":{o=st.weights;break}default:throw new Error(`${e}/target/path: Invalid value (${r.target.path})`)}const l={target:a,properties:o};return this._loadAnimationChannelFromTargetInfoAsync(e,t,i,r,l,n)}_loadAnimationChannelFromTargetInfoAsync(e,t,i,r,n,s){const a=this.parent.targetFps,o=1/a,l=w.Get(`${e}/sampler`,i.samplers,r.sampler);return this._loadAnimationSamplerAsync(`${t}/samplers/${r.sampler}`,l).then(c=>{let f=0;for(const d of n.properties){const _=d.getStride(n.target),u=c.input,p=c.output,g=new Array(u.length);let T=0;switch(c.interpolation){case"STEP":{for(let C=0;C<u.length;C++){const R=d.getValue(n.target,p,T,1);T+=_,g[C]={frame:u[C]*a,value:R,interpolation:Gi.STEP}}break}case"CUBICSPLINE":{for(let C=0;C<u.length;C++){const R=d.getValue(n.target,p,T,o);T+=_;const b=d.getValue(n.target,p,T,1);T+=_;const G=d.getValue(n.target,p,T,o);T+=_,g[C]={frame:u[C]*a,inTangent:R,value:b,outTangent:G}}break}case"LINEAR":{for(let C=0;C<u.length;C++){const R=d.getValue(n.target,p,T,1);T+=_,g[C]={frame:u[C]*a,value:R}}break}}if(T>0){const C=`${i.name||`animation${i.index}`}_channel${r.index}_${f}`;d.buildAnimations(n.target,C,a,g,(R,b)=>{++f,s(R,b)})}}})}_loadAnimationSamplerAsync(e,t){if(t._data)return t._data;const i=t.interpolation||"LINEAR";switch(i){case"STEP":case"LINEAR":case"CUBICSPLINE":break;default:throw new Error(`${e}/interpolation: Invalid value (${t.interpolation})`)}const r=w.Get(`${e}/input`,this._gltf.accessors,t.input),n=w.Get(`${e}/output`,this._gltf.accessors,t.output);return t._data=Promise.all([this._loadFloatAccessorAsync(`/accessors/${r.index}`,r),this._loadFloatAccessorAsync(`/accessors/${n.index}`,n)]).then(([s,a])=>({input:s,interpolation:i,output:a})),t._data}loadBufferAsync(e,t,i,r){const n=this._extensionsLoadBufferAsync(e,t,i,r);if(n)return n;if(!t._data)if(t.uri)t._data=this.loadUriAsync(`${e}/uri`,t,t.uri);else{if(!this._bin)throw new Error(`${e}: Uri is missing or the binary glTF is missing its binary chunk`);t._data=this._bin.readAsync(0,t.byteLength)}return t._data.then(s=>{try{return new Uint8Array(s.buffer,s.byteOffset+i,r)}catch(a){throw new Error(`${e}: ${a.message}`)}})}loadBufferViewAsync(e,t){const i=this._extensionsLoadBufferViewAsync(e,t);if(i)return i;if(t._data)return t._data;const r=w.Get(`${e}/buffer`,this._gltf.buffers,t.buffer);return t._data=this.loadBufferAsync(`/buffers/${r.index}`,r,t.byteOffset||0,t.byteLength),t._data}_loadAccessorAsync(e,t,i){if(t._data)return t._data;const r=W._GetNumComponents(e,t.type),n=r*y.GetTypeByteLength(t.componentType),s=r*t.count;if(t.bufferView==null)t._data=Promise.resolve(new i(s));else{const a=w.Get(`${e}/bufferView`,this._gltf.bufferViews,t.bufferView);t._data=this.loadBufferViewAsync(`/bufferViews/${a.index}`,a).then(o=>{if(t.componentType===5126&&!t.normalized&&(!a.byteStride||a.byteStride===n))return W._GetTypedArray(e,t.componentType,o,t.byteOffset,s);{const l=new i(s);return y.ForEach(o,t.byteOffset||0,a.byteStride||n,r,t.componentType,l.length,t.normalized||!1,(c,f)=>{l[f]=c}),l}})}if(t.sparse){const a=t.sparse;t._data=t._data.then(o=>{const l=o,c=w.Get(`${e}/sparse/indices/bufferView`,this._gltf.bufferViews,a.indices.bufferView),f=w.Get(`${e}/sparse/values/bufferView`,this._gltf.bufferViews,a.values.bufferView);return Promise.all([this.loadBufferViewAsync(`/bufferViews/${c.index}`,c),this.loadBufferViewAsync(`/bufferViews/${f.index}`,f)]).then(([d,_])=>{const u=W._GetTypedArray(`${e}/sparse/indices`,a.indices.componentType,d,a.indices.byteOffset,a.count),p=r*a.count;let g;if(t.componentType===5126&&!t.normalized)g=W._GetTypedArray(`${e}/sparse/values`,t.componentType,_,a.values.byteOffset,p);else{const C=W._GetTypedArray(`${e}/sparse/values`,t.componentType,_,a.values.byteOffset,p);g=new i(p),y.ForEach(C,0,n,r,t.componentType,g.length,t.normalized||!1,(R,b)=>{g[b]=R})}let T=0;for(let C=0;C<u.length;C++){let R=u[C]*r;for(let b=0;b<r;b++)l[R++]=g[T++]}return l})})}return t._data}_loadFloatAccessorAsync(e,t){return this._loadAccessorAsync(e,t,Float32Array)}_loadIndicesAccessorAsync(e,t){if(t.type!=="SCALAR")throw new Error(`${e}/type: Invalid value ${t.type}`);if(t.componentType!==5121&&t.componentType!==5123&&t.componentType!==5125)throw new Error(`${e}/componentType: Invalid value ${t.componentType}`);if(t._data)return t._data;if(t.sparse){const i=W._GetTypedArrayConstructor(`${e}/componentType`,t.componentType);t._data=this._loadAccessorAsync(e,t,i)}else{const i=w.Get(`${e}/bufferView`,this._gltf.bufferViews,t.bufferView);t._data=this.loadBufferViewAsync(`/bufferViews/${i.index}`,i).then(r=>W._GetTypedArray(e,t.componentType,r,t.byteOffset,t.count))}return t._data}_loadVertexBufferViewAsync(e){if(e._babylonBuffer)return e._babylonBuffer;const t=this._babylonScene.getEngine();return e._babylonBuffer=this.loadBufferViewAsync(`/bufferViews/${e.index}`,e).then(i=>new Xi(t,i,!1)),e._babylonBuffer}_loadVertexAccessorAsync(e,t,i){var r;if(!((r=t._babylonVertexBuffer)===null||r===void 0)&&r[i])return t._babylonVertexBuffer[i];t._babylonVertexBuffer||(t._babylonVertexBuffer={});const n=this._babylonScene.getEngine();if(t.sparse)t._babylonVertexBuffer[i]=this._loadFloatAccessorAsync(e,t).then(s=>new y(n,s,i,!1));else if(i===y.MatricesIndicesKind||i===y.MatricesIndicesExtraKind)t._babylonVertexBuffer[i]=this._loadFloatAccessorAsync(e,t).then(s=>new y(n,s,i,!1));else{const s=w.Get(`${e}/bufferView`,this._gltf.bufferViews,t.bufferView);t._babylonVertexBuffer[i]=this._loadVertexBufferViewAsync(s).then(a=>{const o=W._GetNumComponents(e,t.type);return new y(n,a,i,!1,!1,s.byteStride,!1,t.byteOffset,o,t.componentType,t.normalized,!0,1,!0)})}return t._babylonVertexBuffer[i]}_loadMaterialMetallicRoughnessPropertiesAsync(e,t,i){if(!(i instanceof M))throw new Error(`${e}: Material type not supported`);const r=new Array;return t&&(t.baseColorFactor?(i.albedoColor=Z.FromArray(t.baseColorFactor),i.alpha=t.baseColorFactor[3]):i.albedoColor=Z.White(),i.metallic=t.metallicFactor==null?1:t.metallicFactor,i.roughness=t.roughnessFactor==null?1:t.roughnessFactor,t.baseColorTexture&&r.push(this.loadTextureInfoAsync(`${e}/baseColorTexture`,t.baseColorTexture,n=>{n.name=`${i.name} (Base Color)`,i.albedoTexture=n})),t.metallicRoughnessTexture&&(t.metallicRoughnessTexture.nonColorData=!0,r.push(this.loadTextureInfoAsync(`${e}/metallicRoughnessTexture`,t.metallicRoughnessTexture,n=>{n.name=`${i.name} (Metallic Roughness)`,i.metallicTexture=n})),i.useMetallnessFromMetallicTextureBlue=!0,i.useRoughnessFromMetallicTextureGreen=!0,i.useRoughnessFromMetallicTextureAlpha=!1)),Promise.all(r).then(()=>{})}_loadMaterialAsync(e,t,i,r,n=()=>{}){const s=this._extensionsLoadMaterialAsync(e,t,i,r,n);if(s)return s;t._data=t._data||{};let a=t._data[r];if(!a){this.logOpen(`${e} ${t.name||""}`);const o=this.createMaterial(e,t,r);a={babylonMaterial:o,babylonMeshes:[],promise:this.loadMaterialPropertiesAsync(e,t,o)},t._data[r]=a,W.AddPointerMetadata(o,e),this._parent.onMaterialLoadedObservable.notifyObservers(o),this.logClose()}return i&&(a.babylonMeshes.push(i),i.onDisposeObservable.addOnce(()=>{const o=a.babylonMeshes.indexOf(i);o!==-1&&a.babylonMeshes.splice(o,1)})),n(a.babylonMaterial),a.promise.then(()=>a.babylonMaterial)}_createDefaultMaterial(e,t){this._babylonScene._blockEntityCollection=!!this._assetContainer;const i=new M(e,this._babylonScene);return i._parentContainer=this._assetContainer,this._babylonScene._blockEntityCollection=!1,i.fillMode=t,i.enableSpecularAntiAliasing=!0,i.useRadianceOverAlpha=!this._parent.transparencyAsCoverage,i.useSpecularOverAlpha=!this._parent.transparencyAsCoverage,i.transparencyMode=M.PBRMATERIAL_OPAQUE,i.metallic=1,i.roughness=1,i}createMaterial(e,t,i){const r=this._extensionsCreateMaterial(e,t,i);if(r)return r;const n=t.name||`material${t.index}`;return this._createDefaultMaterial(n,i)}loadMaterialPropertiesAsync(e,t,i){const r=this._extensionsLoadMaterialPropertiesAsync(e,t,i);if(r)return r;const n=new Array;return n.push(this.loadMaterialBasePropertiesAsync(e,t,i)),t.pbrMetallicRoughness&&n.push(this._loadMaterialMetallicRoughnessPropertiesAsync(`${e}/pbrMetallicRoughness`,t.pbrMetallicRoughness,i)),this.loadMaterialAlphaProperties(e,t,i),Promise.all(n).then(()=>{})}loadMaterialBasePropertiesAsync(e,t,i){if(!(i instanceof M))throw new Error(`${e}: Material type not supported`);const r=new Array;return i.emissiveColor=t.emissiveFactor?Z.FromArray(t.emissiveFactor):new Z(0,0,0),t.doubleSided&&(i.backFaceCulling=!1,i.twoSidedLighting=!0),t.normalTexture&&(t.normalTexture.nonColorData=!0,r.push(this.loadTextureInfoAsync(`${e}/normalTexture`,t.normalTexture,n=>{n.name=`${i.name} (Normal)`,i.bumpTexture=n})),i.invertNormalMapX=!this._babylonScene.useRightHandedSystem,i.invertNormalMapY=this._babylonScene.useRightHandedSystem,t.normalTexture.scale!=null&&i.bumpTexture&&(i.bumpTexture.level=t.normalTexture.scale),i.forceIrradianceInFragment=!0),t.occlusionTexture&&(t.occlusionTexture.nonColorData=!0,r.push(this.loadTextureInfoAsync(`${e}/occlusionTexture`,t.occlusionTexture,n=>{n.name=`${i.name} (Occlusion)`,i.ambientTexture=n})),i.useAmbientInGrayScale=!0,t.occlusionTexture.strength!=null&&(i.ambientTextureStrength=t.occlusionTexture.strength)),t.emissiveTexture&&r.push(this.loadTextureInfoAsync(`${e}/emissiveTexture`,t.emissiveTexture,n=>{n.name=`${i.name} (Emissive)`,i.emissiveTexture=n})),Promise.all(r).then(()=>{})}loadMaterialAlphaProperties(e,t,i){if(!(i instanceof M))throw new Error(`${e}: Material type not supported`);switch(t.alphaMode||"OPAQUE"){case"OPAQUE":{i.transparencyMode=M.PBRMATERIAL_OPAQUE;break}case"MASK":{i.transparencyMode=M.PBRMATERIAL_ALPHATEST,i.alphaCutOff=t.alphaCutoff==null?.5:t.alphaCutoff,i.albedoTexture&&(i.albedoTexture.hasAlpha=!0);break}case"BLEND":{i.transparencyMode=M.PBRMATERIAL_ALPHABLEND,i.albedoTexture&&(i.albedoTexture.hasAlpha=!0,i.useAlphaFromAlbedoTexture=!0);break}default:throw new Error(`${e}/alphaMode: Invalid value (${t.alphaMode})`)}}loadTextureInfoAsync(e,t,i=()=>{}){const r=this._extensionsLoadTextureInfoAsync(e,t,i);if(r)return r;if(this.logOpen(`${e}`),t.texCoord>=6)throw new Error(`${e}/texCoord: Invalid value (${t.texCoord})`);const n=w.Get(`${e}/index`,this._gltf.textures,t.index);n._textureInfo=t;const s=this._loadTextureAsync(`/textures/${t.index}`,n,a=>{a.coordinatesIndex=t.texCoord||0,W.AddPointerMetadata(a,e),this._parent.onTextureLoadedObservable.notifyObservers(a),i(a)});return this.logClose(),s}_loadTextureAsync(e,t,i=()=>{}){const r=this._extensionsLoadTextureAsync(e,t,i);if(r)return r;this.logOpen(`${e} ${t.name||""}`);const n=t.sampler==null?W.DefaultSampler:w.Get(`${e}/sampler`,this._gltf.samplers,t.sampler),s=w.Get(`${e}/source`,this._gltf.images,t.source),a=this._createTextureAsync(e,n,s,i,void 0,!t._textureInfo.nonColorData);return this.logClose(),a}_createTextureAsync(e,t,i,r=()=>{},n,s){const a=this._loadSampler(`/samplers/${t.index}`,t),o=new Array,l=new sr;this._babylonScene._blockEntityCollection=!!this._assetContainer;const c={noMipmap:a.noMipMaps,invertY:!1,samplingMode:a.samplingMode,onLoad:()=>{this._disposed||l.resolve()},onError:(d,_)=>{this._disposed||l.reject(new Error(`${e}: ${_&&_.message?_.message:d||"Failed to load texture"}`))},mimeType:i.mimeType,loaderOptions:n,useSRGBBuffer:!!s&&this._parent.useSRGBBuffers},f=new A(null,this._babylonScene,c);return f._parentContainer=this._assetContainer,this._babylonScene._blockEntityCollection=!1,o.push(l.promise),o.push(this.loadImageAsync(`/images/${i.index}`,i).then(d=>{const _=i.uri||`${this._fileName}#image${i.index}`,u=`data:${this._uniqueRootUrl}${_}`;f.updateURL(u,d)})),f.wrapU=a.wrapU,f.wrapV=a.wrapV,r(f),Promise.all(o).then(()=>f)}_loadSampler(e,t){return t._data||(t._data={noMipMaps:t.minFilter===9728||t.minFilter===9729,samplingMode:W._GetTextureSamplingMode(e,t),wrapU:W._GetTextureWrapMode(`${e}/wrapS`,t.wrapS),wrapV:W._GetTextureWrapMode(`${e}/wrapT`,t.wrapT)}),t._data}loadImageAsync(e,t){if(!t._data){if(this.logOpen(`${e} ${t.name||""}`),t.uri)t._data=this.loadUriAsync(`${e}/uri`,t,t.uri);else{const i=w.Get(`${e}/bufferView`,this._gltf.bufferViews,t.bufferView);t._data=this.loadBufferViewAsync(`/bufferViews/${i.index}`,i)}this.logClose()}return t._data}loadUriAsync(e,t,i){const r=this._extensionsLoadUriAsync(e,t,i);if(r)return r;if(!W._ValidateUri(i))throw new Error(`${e}: '${i}' is invalid`);if(Jt(i)){const n=new Uint8Array(ei(i));return this.log(`${e}: Decoded ${i.substr(0,64)}... (${n.length} bytes)`),Promise.resolve(n)}return this.log(`${e}: Loading ${i}`),this._parent.preprocessUrlAsync(this._rootUrl+i).then(n=>new Promise((s,a)=>{this._parent._loadFile(this._babylonScene,n,o=>{this._disposed||(this.log(`${e}: Loaded ${i} (${o.byteLength} bytes)`),s(new Uint8Array(o)))},!0,o=>{a(new ki(`${e}: Failed to load '${i}'${o?": "+o.status+" "+o.statusText:""}`,o))})}))}static AddPointerMetadata(e,t){const i=e.metadata=e.metadata||{},r=i.gltf=i.gltf||{};(r.pointers=r.pointers||[]).push(t)}static _GetTextureWrapMode(e,t){switch(t=t??10497,t){case 33071:return A.CLAMP_ADDRESSMODE;case 33648:return A.MIRROR_ADDRESSMODE;case 10497:return A.WRAP_ADDRESSMODE;default:return V.Warn(`${e}: Invalid value (${t})`),A.WRAP_ADDRESSMODE}}static _GetTextureSamplingMode(e,t){const i=t.magFilter==null?9729:t.magFilter,r=t.minFilter==null?9987:t.minFilter;if(i===9729)switch(r){case 9728:return A.LINEAR_NEAREST;case 9729:return A.LINEAR_LINEAR;case 9984:return A.LINEAR_NEAREST_MIPNEAREST;case 9985:return A.LINEAR_LINEAR_MIPNEAREST;case 9986:return A.LINEAR_NEAREST_MIPLINEAR;case 9987:return A.LINEAR_LINEAR_MIPLINEAR;default:return V.Warn(`${e}/minFilter: Invalid value (${r})`),A.LINEAR_LINEAR_MIPLINEAR}else switch(i!==9728&&V.Warn(`${e}/magFilter: Invalid value (${i})`),r){case 9728:return A.NEAREST_NEAREST;case 9729:return A.NEAREST_LINEAR;case 9984:return A.NEAREST_NEAREST_MIPNEAREST;case 9985:return A.NEAREST_LINEAR_MIPNEAREST;case 9986:return A.NEAREST_NEAREST_MIPLINEAR;case 9987:return A.NEAREST_LINEAR_MIPLINEAR;default:return V.Warn(`${e}/minFilter: Invalid value (${r})`),A.NEAREST_NEAREST_MIPNEAREST}}static _GetTypedArrayConstructor(e,t){switch(t){case 5120:return Int8Array;case 5121:return Uint8Array;case 5122:return Int16Array;case 5123:return Uint16Array;case 5125:return Uint32Array;case 5126:return Float32Array;default:throw new Error(`${e}: Invalid component type ${t}`)}}static _GetTypedArray(e,t,i,r,n){const s=i.buffer;r=i.byteOffset+(r||0);const a=W._GetTypedArrayConstructor(`${e}/componentType`,t),o=y.GetTypeByteLength(t);return r%o!==0?(V.Warn(`${e}: Copying buffer as byte offset (${r}) is not a multiple of component type byte length (${o})`),new a(s.slice(r,r+n*o),0)):new a(s,r,n)}static _GetNumComponents(e,t){switch(t){case"SCALAR":return 1;case"VEC2":return 2;case"VEC3":return 3;case"VEC4":return 4;case"MAT2":return 4;case"MAT3":return 9;case"MAT4":return 16}throw new Error(`${e}: Invalid type (${t})`)}static _ValidateUri(e){return J.IsBase64(e)||e.indexOf("..")===-1}static _GetDrawMode(e,t){switch(t==null&&(t=4),t){case 0:return ne.PointListDrawMode;case 1:return ne.LineListDrawMode;case 2:return ne.LineLoopDrawMode;case 3:return ne.LineStripDrawMode;case 4:return ne.TriangleFillMode;case 5:return ne.TriangleStripDrawMode;case 6:return ne.TriangleFanDrawMode}throw new Error(`${e}: Invalid mesh primitive mode (${t})`)}_compileMaterialsAsync(){this._parent._startPerformanceCounter("Compile materials");const e=new Array;if(this._gltf.materials){for(const t of this._gltf.materials)if(t._data)for(const i in t._data){const r=t._data[i];for(const n of r.babylonMeshes){n.computeWorldMatrix(!0);const s=r.babylonMaterial;e.push(s.forceCompilationAsync(n)),e.push(s.forceCompilationAsync(n,{useInstances:!0})),this._parent.useClipPlane&&(e.push(s.forceCompilationAsync(n,{clipPlane:!0})),e.push(s.forceCompilationAsync(n,{clipPlane:!0,useInstances:!0})))}}}return Promise.all(e).then(()=>{this._parent._endPerformanceCounter("Compile materials")})}_compileShadowGeneratorsAsync(){this._parent._startPerformanceCounter("Compile shadow generators");const e=new Array,t=this._babylonScene.lights;for(const i of t){const r=i.getShadowGenerator();r&&e.push(r.forceCompilationAsync())}return Promise.all(e).then(()=>{this._parent._endPerformanceCounter("Compile shadow generators")})}_forEachExtensions(e){for(const t of this._extensions)t.enabled&&e(t)}_applyExtensions(e,t,i){for(const r of this._extensions)if(r.enabled){const n=`${r.name}.${t}`,s=e;s._activeLoaderExtensionFunctions=s._activeLoaderExtensionFunctions||{};const a=s._activeLoaderExtensionFunctions;if(!a[n]){a[n]=!0;try{const o=i(r);if(o)return o}finally{delete a[n]}}}return null}_extensionsOnLoading(){this._forEachExtensions(e=>e.onLoading&&e.onLoading())}_extensionsOnReady(){this._forEachExtensions(e=>e.onReady&&e.onReady())}_extensionsLoadSceneAsync(e,t){return this._applyExtensions(t,"loadScene",i=>i.loadSceneAsync&&i.loadSceneAsync(e,t))}_extensionsLoadNodeAsync(e,t,i){return this._applyExtensions(t,"loadNode",r=>r.loadNodeAsync&&r.loadNodeAsync(e,t,i))}_extensionsLoadCameraAsync(e,t,i){return this._applyExtensions(t,"loadCamera",r=>r.loadCameraAsync&&r.loadCameraAsync(e,t,i))}_extensionsLoadVertexDataAsync(e,t,i){return this._applyExtensions(t,"loadVertexData",r=>r._loadVertexDataAsync&&r._loadVertexDataAsync(e,t,i))}_extensionsLoadMeshPrimitiveAsync(e,t,i,r,n,s){return this._applyExtensions(n,"loadMeshPrimitive",a=>a._loadMeshPrimitiveAsync&&a._loadMeshPrimitiveAsync(e,t,i,r,n,s))}_extensionsLoadMaterialAsync(e,t,i,r,n){return this._applyExtensions(t,"loadMaterial",s=>s._loadMaterialAsync&&s._loadMaterialAsync(e,t,i,r,n))}_extensionsCreateMaterial(e,t,i){return this._applyExtensions(t,"createMaterial",r=>r.createMaterial&&r.createMaterial(e,t,i))}_extensionsLoadMaterialPropertiesAsync(e,t,i){return this._applyExtensions(t,"loadMaterialProperties",r=>r.loadMaterialPropertiesAsync&&r.loadMaterialPropertiesAsync(e,t,i))}_extensionsLoadTextureInfoAsync(e,t,i){return this._applyExtensions(t,"loadTextureInfo",r=>r.loadTextureInfoAsync&&r.loadTextureInfoAsync(e,t,i))}_extensionsLoadTextureAsync(e,t,i){return this._applyExtensions(t,"loadTexture",r=>r._loadTextureAsync&&r._loadTextureAsync(e,t,i))}_extensionsLoadAnimationAsync(e,t){return this._applyExtensions(t,"loadAnimation",i=>i.loadAnimationAsync&&i.loadAnimationAsync(e,t))}_extensionsLoadAnimationChannelAsync(e,t,i,r,n){return this._applyExtensions(i,"loadAnimationChannel",s=>s._loadAnimationChannelAsync&&s._loadAnimationChannelAsync(e,t,i,r,n))}_extensionsLoadSkinAsync(e,t,i){return this._applyExtensions(i,"loadSkin",r=>r._loadSkinAsync&&r._loadSkinAsync(e,t,i))}_extensionsLoadUriAsync(e,t,i){return this._applyExtensions(t,"loadUri",r=>r._loadUriAsync&&r._loadUriAsync(e,t,i))}_extensionsLoadBufferViewAsync(e,t){return this._applyExtensions(t,"loadBufferView",i=>i.loadBufferViewAsync&&i.loadBufferViewAsync(e,t))}_extensionsLoadBufferAsync(e,t,i,r){return this._applyExtensions(t,"loadBuffer",n=>n.loadBufferAsync&&n.loadBufferAsync(e,t,i,r))}static LoadExtensionAsync(e,t,i,r){if(!t.extensions)return null;const s=t.extensions[i];return s?r(`${e}/extensions/${i}`,s):null}static LoadExtraAsync(e,t,i,r){if(!t.extras)return null;const s=t.extras[i];return s?r(`${e}/extras/${i}`,s):null}isExtensionUsed(e){return!!this._gltf.extensionsUsed&&this._gltf.extensionsUsed.indexOf(e)!==-1}logOpen(e){this._parent._logOpen(e)}logClose(){this._parent._logClose()}log(e){this._parent._log(e)}startPerformanceCounter(e){this._parent._startPerformanceCounter(e)}endPerformanceCounter(e){this._parent._endPerformanceCounter(e)}}W._RegisteredExtensions={};W.DefaultSampler={index:-1};te._CreateGLTF2Loader=h=>new W(h);const ao=[..."xyz"],Yt=()=>Math.random()-.5,dt=new De("bounds",ti);dt.setBoundingInfo(new Ot(new v(-3,-2,-2),new v(3,2,2)));window.addEventListener("click",()=>{dt.showBoundingBox=!dt.showBoundingBox});const Qt=h=>{const{minimumWorld:e,maximumWorld:t}=h.boundingBox;return[e,t]};U.ImportMeshAsync("","/dvd/","dvd.gltf").then(async({meshes:h})=>{const e=h[1].material.emissiveColor,[t,i]=h.reduce((l,c)=>{const[f,d]=Qt(c.getBoundingInfo());return[v.Minimize(l[0],f),v.Maximize(l[1],d)]},[v.Zero(),v.Zero()]),r=h[0];r.setBoundingInfo(new Ot(t,i));const n=dt.getBoundingInfo(),s=n.boundingBox.maximumWorld.scale(.975),a=n.boundingBox.minimumWorld.scale(.975),o=new v(-.02+Yt()*.005,.01+Yt()*.001,.01);Hi.runRenderLoop(()=>{r.position.addInPlace(o);const[l,c]=Qt(r.getBoundingInfo());if(!n.intersectsPoint(l)||!n.intersectsPoint(c)){Z.HSVtoRGBToRef(Math.random()*360,1,.5,e);const f=a.subtract(l).maximizeInPlaceFromFloats(0,0,0),d=c.subtract(s).maximizeInPlaceFromFloats(0,0,0);r.position.addInPlace(f).subtractInPlace(d);for(const _ of ao)d[_]<1e-15&&f[_]<1e-15||(o[_]=-o[_])}ti.render()})});
