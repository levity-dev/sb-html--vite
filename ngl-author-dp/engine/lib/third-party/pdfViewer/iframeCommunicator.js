window.addEventListener('message', function(event) {
  var data = event.data;

  if (data.actionCode === 'pdf/iframe/loaded') {
    window.PDFViewerApplication.initializedPromise.then(function() {
      var eventBus = window.PDFViewerApplication.eventBus;

      Object.entries(eventBus._listeners).forEach(function(entry) {
        eventBus.on(entry[0], function(event) {
          var payload = Object.assign({}, event, { source: null, currentOutlineItemPromise: null });
          sendMessage(`pdf/eventBus/${entry[0]}`, payload);
        });
      });

      eventBus.on('sidebarviewchanged', function() {
        var payload = {
          pagesCount: window.PDFViewerApplication.pagesCount
        };
        sendMessage('pdf/eventBus/sidebarviewchanged/once', payload);
      }, {
        once: true
      });
    }.bind(this));

    return;
  }

  if (data.actionCode === 'pdf/options/set') {
    data.payload.forEach(function(option) {
      window.PDFViewerApplicationOptions.set(option.name, option.value);
    });

    return;
  }

  if (data.actionCode === 'pdf/pdfViewer/set') {
    Object.assign(window.PDFViewerApplication.pdfViewer, data.payload.pdfViewer);
    return;
  }

  if (data.actionCode === 'pdf/pdfCursorTools/switchTool') {
    window.PDFViewerApplication.pdfCursorTools.switchTool(data.payload.pdfCursorTools.cursorTool);
    return;
  }

  if (data.actionCode === 'pdf/getVisiblePages') {
    var views = window.PDFViewerApplication.pdfViewer._getVisiblePages().views.map(function(view) {
      return Object.assign(view, { view: null });
    });

    sendMessage('pdf/getVisiblePages/views', views);
    return;
  }
});

function sendMessage(actionCode, payload) {
  window.parent.postMessage({
    actionCode: actionCode,
    payload: payload
  }, '*');
}
