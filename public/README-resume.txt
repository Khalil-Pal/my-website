Drop your resume PDF here as resume.pdf before deploying —
the site already links to it.

  public/resume.pdf

The "Resume" buttons in the header and the Contact section point at it via
import.meta.env.BASE_URL, so the link resolves correctly under the GitHub
Pages sub-path (/my-website/resume.pdf) as well as at a domain root.

Until that file exists, those links will 404. No placeholder PDF was
created on purpose — a fake resume is worse than a missing one.
