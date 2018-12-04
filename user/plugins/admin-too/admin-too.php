<?php
namespace Grav\Plugin;

use Grav\Common\Plugin;
use RocketTheme\Toolbox\Event\Event;

/**
 * Class AdminTooPlugin
 * @package Grav\Plugin
 */
class AdminTooPlugin extends Plugin
{
    /**
     * @return array
     *
     * The getSubscribedEvents() gives the core a list of events
     *     that the plugin wants to listen to. The key of each
     *     array section is the event that the plugin listens to
     *     and the value (in the form of an array) contains the
     *     callable (or function) as well as the priority. The
     *     higher the number the higher the priority.
     */
    public static function getSubscribedEvents()
    {
      return [
       'onAdminTwigTemplatePaths' => ['onAdminTwigTemplatePaths', 0]
      ];
    }

    /**
     * Initialize the plugin
     */
    public function onAdminTwigTemplatePaths($event)
    {
       $event['paths'] = [__DIR__ . '/admin/themes/grav/templates'];
    }

    /**
     * Do some work for this event, full details of events can be found
     * on the learn site: http://learn.getgrav.org/plugins/event-hooks
     *
     * @param Event $e
     */
    public function onPageContentRaw(Event $e)
    {
        // Get a variable from the plugin configuration
        $text = $this->grav['config']->get('plugins.admin-too.text_var');

        // Get the current raw content
        $content = $e['page']->getRawContent();

        // Prepend the output with the custom text and set back on the page
        $e['page']->setRawContent($text . "\n\n" . $content);
    }
}
