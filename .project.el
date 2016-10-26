(require 'f)



(defconst fbf/project-dir (projectile-project-root)
  "Project dir.")


(defconst fbf/snippet-dir (expand-file-name "snippets/" fbf/project-dir)
  "Snippet dir.")

(defconst fbf/component-dir (expand-file-name "components/" fbf/project-dir)
  "Components dir.")


(defun fbf/find-snippet ()
  "Find snippet."
  (interactive)
  (let ((snippet-file (read-file-name "Find snippet: " fbf/snippet-dir)))
    (when current-prefix-arg
      (insert (format "snippet(\"%s\")" (f-base snippet-file)))
      (save-buffer))

    (find-file snippet-file)
    (save-buffer)))


(defun fbf/file-name-to-component-name (file-base-name)
  "Convert FILE-BASE-NAME."
  (s-replace " " "" (capitalize (s-replace "-" " " file-base-name))))

(defun fbf/find-component ()
  "Find component."
  (interactive)
  (let ((component-file (read-file-name "Find components: " fbf/component-dir)))
    (when current-prefix-arg
      (insert (format "h(<%s />, null)"
                      (fbf/file-name-to-component-name (f-base component-file))))
      (save-buffer))

    (find-file component-file)
    (save-buffer)))


(define-minor-mode fn-spectacle-editing-mode
  "Some editing enhancement when working with this spectacle presentation."
  :lighter " FnSpectacle"
  :init-value nil
  :global nil
  :keymap
  (let* ((base-map (make-keymap))
      (map (fn/make-prefixed-keymap (kbd "C-c b") base-map)))
    (define-key map (kbd "f s") #'fbf/find-snippet)
    (define-key map (kbd "f c") #'fbf/find-component)
    base-map))




(use-feature spectacle-prodigy
  (prodigy)

  (prodigy-define-tag
    :name 'frontend-functions)

  (defconst fbf/presentation-service-name "Spectacle: Frontend Functions"
    "Presentation service name")

  (defconst fbf/presentation-port 33000
    "Presentation port number")


  (defvar fbf/spectacle-alert #'ignore
    "An alert function for spectacle output.
It must be a function that takes an argument called
STATE which is 'built, 'error and whatnot.")

  (use-feature spectacle-prodigy-alert
    (alert)



    (defconst fbf/spectacle-alert-category 'spectacle-alert
      "Just a symbol for spectacle alert.")

    (defconst fn/spectacle-notify-built-severity 'spectacle-built
      "My spectacle built notify severity.")

    (defconst fn/spectacle-notify-error-severity 'spectacle-error
      "My spectacle error notify severity.")

    (add-to-list 'alert-log-severity-functions
                 (cons fn/spectacle-notify-built-severity #'alert--log-info))
    (add-to-list 'alert-severity-colors
                 (cons fn/spectacle-notify-built-severity "#1e698d"))

    (add-to-list 'alert-log-severity-functions
                 (cons fn/spectacle-notify-error-severity #'alert--log-error))
    (add-to-list 'alert-severity-colors
                 (cons fn/spectacle-notify-error-severity "#8abca7"))

    (setq fbf/spectacle-alert
       (lambda (state)
         (pcase state
           ('error
            (alert "[spectacle] Presentation failed to build"
                   :category fbf/spectacle-alert-category
                   :style 'fringe
                   :severity fn/spectacle-notify-error-severity))
           ('built
            (alert "[spectacle] Presentation built"
                   :category fbf/spectacle-alert-category
                   :style 'fringe
                   :severity fn/spectacle-notify-built-severity))
           (_
            ;; NOOP
            )))))

  (defun fbf/spectacle-output-listener (&rest args)
    (let ((output (plist-get args :output))
        (service (plist-get args :service)))
      (cond
       ((s-contains? "webpack built" output)
        (funcall fbf/spectacle-alert 'built))
       ((s-contains? "Module build failed" output)
        (funcall fbf/spectacle-alert 'error)))))

  (fn/prodigy-define-service
   :name fbf/presentation-service-name
   :tags '(frontend-functions spectacle)
   :command "npm"
   :cwd fbf/project-dir
   :args (list
          "start"
          "--port" (number-to-string fbf/presentation-port))
   :on-output #'fbf/spectacle-output-listener

   ;; Custom Binding
   :bind-command-name "frontend-functions-spectacle"
   :bind-map fn/prodigy-map
   :bind (kbd "s s"))


  (prodigy-start-service (prodigy-find-service fbf/presentation-service-name))

  (use-feature spectacle-tern-prodigy
    (tern)
    (defconst fbf/tern-service-name "Tern: Frontend"
      "Tern service name")

    (defconst fbf/tern-port 41091
      "Tern port number")

    (fn/prodigy-define-service
     :name fbf/tern-service-name
     :tags '(frontend-functions tern)
     :command "tern"
     :cwd fbf/project-dir
     :args (list
            "--persistent"
            "--verbose"
            "--port" (number-to-string fbf/tern-port))

     ;; Custom Binding
     :bind-command-name "frontend-functions-tern"
     :bind-map fn/prodigy-map
     :bind (kbd "s t"))

    (prodigy-start-service (prodigy-find-service fbf/tern-service-name))))
