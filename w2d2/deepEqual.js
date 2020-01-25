(function() {
    "use strict"
    
      /**
       *
       * @param left
       * @param right
       * @returns {boolean|undefined}
       */
      function deepEqual(left, right) {
        if (Object.keys(left).length !== Object.keys(right).length) {
          return false;
        }
        if (typeof (left) !== typeof (right)) {
          return false;
        }
    
        if (typeof (left) === "object") {
          for(let key in left) {
            return deepEqual(left[key], right[key]);
          }
        } else {
          if (left === right) {
            return true;
          }
          else
          {
            return false;
        }
    
      }
    
      let obj = {
        here : {
          is : "lam"
        },
        object : 2
      };
      describe("deepEqual", function () {
        it("deepEqual(obj, obj) -> true", function () {
          assert.equal(deepEqual(obj, obj), true)
        });
    
        it("deepEqual(obj, notequal) -> false", function () {
          assert.equal(deepEqual(obj, {
            here : {
              is : "hot"
            },
            object : 2
          }), false);
        });
    
      });
    }
    }());