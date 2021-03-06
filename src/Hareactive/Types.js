const H = require("@funkia/hareactive");

function apply(f, a) {
  return a.ap(f);
}

function bind(mf, f) {
  return mf.chain(f);
}

exports._memptyStream = H.empty;

function _map(f, s) {
  return s.map(f);
}

// Future

exports._appendFuture = function(fa, fb) {
  return fa.combine(fb);
};

exports.memptyFuture = H.sinkFuture();

exports._mapFuture =_map;

exports._applyFuture = function(f, a) {
  return a.ap(f);
}

exports._pureFuture = H.Future.of;

exports._bindFuture = function(mf, f) {
  return mf.chain(f);
}

// Stream

exports._mapStream = _map;

exports._mapBehavior = _map;

exports._applyBehavior = apply;

exports._bindBehavior = bind;

exports._pureBehavior = H.Behavior.of;

exports._combine = H.combine;

// Now

exports._mapNow = exports._mapStream;

exports._applyNow = apply;

exports._pureNow = H.Now.of;

exports._bindNow = bind;

exports.liftEffectNow = H.perform;

exports._runNow = H.runNow;
