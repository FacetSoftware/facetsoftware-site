/*
 * DeltaLab invite page. A referrer shares https://facetsoftware.co.za/deltalab/invite/?code=K7P2QX.
 * On Android with DeltaLab installed the link opens the app directly (an App Link verified by
 * /.well-known/assetlinks.json), so this page is what people WITHOUT the app see.
 *
 * - The Google Play button carries the code in the install referrer, so DeltaLab fills it in on
 *   first launch. The string must match buildPlayLink() in the DeltaLab repo
 *   (src/utils/referral/inviteLink.ts, pinned by inviteLink.test.ts): change both together.
 * - The page never contacts the referral server.
 * - The code is removed from the address bar before anything else could load, so a visit is never
 *   tied to the person who shared it.
 */
(function () {
  'use strict';

  var ALPHABET = 'ABCDEFGHJKMNPQRSTVWXYZ23456789';
  var PACKAGE = 'com.labloupe.app';
  var UTM = 'utm_source=deltalab&utm_medium=referral&utm_campaign=invite';
  // Cloudflare Web Analytics site token. Empty: no analytics script is loaded (see README).
  var ANALYTICS_TOKEN = '';

  function normaliseCode(input) {
    if (typeof input !== 'string' || input.length > 32) return null;
    var code = input.toUpperCase().replace(/[\s-]/g, '');
    if (code.length !== 6) return null;
    for (var i = 0; i < code.length; i++) if (ALPHABET.indexOf(code[i]) === -1) return null;
    return code;
  }

  function codeFromSearch(search) {
    var query = (search || '').replace(/^\?/, '');
    var pairs = query ? query.split('&') : [];
    for (var i = 0; i < pairs.length; i++) {
      var eq = pairs[i].indexOf('=');
      if (eq === -1 || pairs[i].slice(0, eq) !== 'code') continue;
      try {
        return normaliseCode(decodeURIComponent(pairs[i].slice(eq + 1).replace(/\+/g, ' ')));
      } catch (e) {
        return null;
      }
    }
    return null;
  }

  function playLink(code) {
    var referrer = code ? UTM + '&deltalab_invite=' + code : UTM;
    return 'https://play.google.com/store/apps/details?id=' + PACKAGE + '&referrer=' + encodeURIComponent(referrer);
  }

  function platform(userAgent) {
    if (/iPhone|iPad|iPod/.test(userAgent)) return 'ios';
    if (/Android/.test(userAgent)) return 'android';
    return 'desktop';
  }

  if (typeof module !== 'undefined') {
    module.exports = { normaliseCode: normaliseCode, codeFromSearch: codeFromSearch, playLink: playLink, platform: platform };
  }
  if (typeof document === 'undefined') return;

  var code = codeFromSearch(window.location.search);
  if (window.location.search && window.history && window.history.replaceState) {
    window.history.replaceState(null, '', window.location.pathname);
  }

  var os = platform(navigator.userAgent || '');
  var $ = function (id) { return document.getElementById(id); };

  $('play').href = playLink(code);
  document.documentElement.setAttribute('data-os', os);

  if (code) {
    $('code').textContent = code;
    $('with-code').hidden = false;
    $('without-code').hidden = true;
    var copy = $('copy');
    if (navigator.clipboard && navigator.clipboard.writeText) {
      copy.hidden = false;
      copy.addEventListener('click', function () {
        navigator.clipboard.writeText(code).then(function () {
          copy.textContent = 'Copied';
        });
      });
    }
  }

  if (ANALYTICS_TOKEN) {
    var s = document.createElement('script');
    s.defer = true;
    s.src = 'https://static.cloudflareinsights.com/beacon.min.js';
    s.setAttribute('data-cf-beacon', JSON.stringify({ token: ANALYTICS_TOKEN }));
    document.body.appendChild(s);
  }
})();
